import type { NextApiRequest, NextApiResponse } from "next";

type Result = {
	locale: string;
	country?: string;
};

const supported = ["ar", "en", "de", "fr", "es", "ru"] as const;
type Supported = typeof supported[number];

function getIpFromHeaders(req: NextApiRequest): string | null {
	const xForwardedFor = (req.headers["x-forwarded-for"] as string | undefined) || "";
	const candidate =
		xForwardedFor.split(",")[0]?.trim() ||
		(req.headers["x-real-ip"] as string | undefined) ||
		((req.socket as any)?.remoteAddress as string | undefined) ||
		null;
	if (!candidate) return null;
	if (candidate.startsWith("::ffff:")) return candidate.replace("::ffff:", "");
	return candidate;
}

function countryToLocale(countryCode: string): Supported | null {
	switch (countryCode.toUpperCase()) {
		case "RU":
			return "ru";
		case "DE":
			return "de";
		case "FR":
			return "fr";
		case "ES":
		case "AR":
		case "MX":
		case "CL":
		case "CO":
			return "es";
		case "AE":
		case "SA":
		case "EG":
		case "QA":
		case "KW":
		case "BH":
		case "JO":
		case "MA":
		case "DZ":
		case "TN":
			return "ar";
		case "US":
		case "GB":
		case "CA":
		case "AU":
		case "IE":
		case "IN":
			return "en";
		default:
			return null;
	}
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Result>) {
	try {
		const cfCountry = (req.headers["cf-ipcountry"] as string | undefined)?.toUpperCase();
		const vercelCountry = (req.headers["x-vercel-ip-country"] as string | undefined)?.toUpperCase();
		const country = cfCountry || vercelCountry;
		if (country) {
			const loc = countryToLocale(country);
			return res.status(200).json({ locale: loc || "en", country });
		}

		const ip = getIpFromHeaders(req);
		let locale: Supported | null = null;
		let detectedCountry: string | undefined = undefined;
		if (ip) {
			// ip2c.org
			try {
				const r1 = await fetch(`https://ip2c.org/${encodeURIComponent(ip)}`, { cache: "no-store" });
				const t1 = r1.ok ? await r1.text() : "";
				const c1 = t1 && t1[0] === "1" ? t1.split(";")[1] : "";
				if (c1) {
					detectedCountry = c1.toUpperCase();
					locale = countryToLocale(detectedCountry);
				}
			} catch {}

			// ipapi.co fallback
			if (!locale) {
				try {
					const r2 = await fetch(`https://ipapi.co/${encodeURIComponent(ip)}/country/`, { cache: "no-store" });
					const t2 = r2.ok ? (await r2.text()).trim() : "";
					if (t2) {
						detectedCountry = t2.toUpperCase();
						locale = countryToLocale(detectedCountry);
					}
				} catch {}
			}

			// ipwho.is fallback
			if (!locale) {
				try {
					const r3 = await fetch(`https://ipwho.is/${encodeURIComponent(ip)}?fields=country_code`, { cache: "no-store" });
					const j3 = r3.ok ? await r3.json() : null;
					const c3 = (j3?.country_code || "").toUpperCase();
					if (c3) {
						detectedCountry = c3;
						locale = countryToLocale(detectedCountry);
					}
				} catch {}
			}
		}

		return res.status(200).json({ locale: locale || "en", country: detectedCountry });
	} catch {
		return res.status(200).json({ locale: "en" });
	}
}


