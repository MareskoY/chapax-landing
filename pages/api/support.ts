import type { NextApiRequest, NextApiResponse } from "next";
import { sendTelegramMessage, sendTelegramPhoto } from "../../lib/telegram";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

type SupportRequestBody = {
  email: string;
  platform: "web" | "extension" | "ios" | "android";
  message: string;
  images?: string[]; // data URLs (image/*)
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  try {
    const { email, platform, message, images } = (req.body || {}) as SupportRequestBody;

    const emailOk = typeof email === "string" && /.+@.+\..+/.test(email.trim());
    const platformOk = ["web", "extension", "ios", "android"].includes(platform as any);
    const messageOk = typeof message === "string" && message.trim().length > 0;
    if (!emailOk || !platformOk || !messageOk) {
      return res.status(400).json({ ok: false, error: "Invalid input" });
    }

    const safe = (s: string) => (s || "").replace(/[<>]/g, "");
    const header = "🆘 <b>[support]</b>";
    const text = `${header}\nplatform=${safe(platform)}\nemail=${safe(email)}\n\n${safe(message)}`;

    const sent = await sendTelegramMessage(text);
    if (!sent) {
      return res.status(500).json({ ok: false, error: "Failed to send" });
    }

    const imgs = Array.isArray(images) ? images.slice(0, 4) : [];
    for (const dataUrl of imgs) {
      // best-effort; ignore errors on images so base message still arrives
      try {
        await sendTelegramPhoto({ dataUrlOrBuffer: dataUrl, caption: "support image" });
      } catch {}
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[support] handler error", e);
    }
    return res.status(500).json({ ok: false });
  }
}









