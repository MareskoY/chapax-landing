import type { NextApiRequest, NextApiResponse } from "next";
import { sendTelegramMessage } from "../../lib/telegram";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

type DeleteAccountRequestBody = {
  email: string;
  reason: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  try {
    const { email, reason } = (req.body || {}) as DeleteAccountRequestBody;

    const emailOk = typeof email === "string" && /.+@.+\..+/.test(email.trim());
    const reasonOk = typeof reason === "string" && reason.trim().length > 0;
    if (!emailOk || !reasonOk) {
      return res.status(400).json({ ok: false, error: "Invalid input" });
    }

    const safe = (s: string) => (s || "").replace(/[<>]/g, "");
    const header = "🗑️ <b>[delete-account]</b>";
    const text = `${header}\nemail=${safe(email)}\n\nreason=${safe(reason)}`;

    const sent = await sendTelegramMessage(text);
    if (!sent) {
      return res.status(500).json({ ok: false, error: "Failed to send" });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[delete-account] handler error", e);
    }
    return res.status(500).json({ ok: false });
  }
}


