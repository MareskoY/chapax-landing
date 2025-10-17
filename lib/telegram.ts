export async function sendTelegramMessage(text: string): Promise<boolean> {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID || process.env.TELEGRAM_NOTIFICATIONS_CHAT_ID;
    if (!token || !chatId) {
      if (process.env.NODE_ENV !== "production") {
        console.error("[telegram] Missing TELEGRAM_BOT_TOKEN or CHAT_ID");
      }
      return false;
    }
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const payload = {
      chat_id: chatId,
      // Telegram hard limit is 4096 chars
      text: text.length > 4000 ? `${text.slice(0, 4000)}…` : text,
      parse_mode: "HTML",
    } as any;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      if (process.env.NODE_ENV !== "production") {
        console.error("[telegram] sendMessage failed", response.status, body);
      }
      return false;
    }
    return true;
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[telegram] sendMessage error", error);
    }
    return false;
  }
}

/**
 * Sends a photo to Telegram using a data URL (base64) or raw buffer.
 */
export async function sendTelegramPhoto(params: {
  dataUrlOrBuffer: string | Buffer;
  caption?: string;
  fileName?: string;
}): Promise<boolean> {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID || process.env.TELEGRAM_NOTIFICATIONS_CHAT_ID;
    if (!token || !chatId) {
      if (process.env.NODE_ENV !== "production") {
        console.error("[telegram] Missing TELEGRAM_BOT_TOKEN or CHAT_ID");
      }
      return false;
    }

    let mime = "image/jpeg";
    let dataBuffer: Buffer;
    if (typeof params.dataUrlOrBuffer === "string") {
      const m = params.dataUrlOrBuffer.match(/^data:(.+?);base64,(.+)$/);
      if (!m) return false;
      mime = m[1] || mime;
      dataBuffer = Buffer.from(m[2], "base64");
    } else {
      dataBuffer = params.dataUrlOrBuffer;
    }

    const form = new FormData();
    form.set("chat_id", chatId);
    if (params.caption) form.set("caption", params.caption);
    // Ensure we pass a proper ArrayBuffer to Blob for TS compatibility across runtimes
    const arrayBuffer: ArrayBuffer = dataBuffer.buffer.slice(
      dataBuffer.byteOffset,
      dataBuffer.byteOffset + dataBuffer.byteLength
    ) as ArrayBuffer;
    const blob = new Blob([arrayBuffer], { type: mime });
    const name = params.fileName || `photo.${mime.split("/")[1] || "jpg"}`;
    form.set("photo", blob, name);

    const url = `https://api.telegram.org/bot${token}/sendPhoto`;
    const response = await fetch(url, {
      method: "POST",
      body: form as any,
    });

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      if (process.env.NODE_ENV !== "production") {
        console.error("[telegram] sendPhoto failed", response.status, body);
      }
      return false;
    }
    return true;
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("[telegram] sendPhoto error", error);
    }
    return false;
  }
}


