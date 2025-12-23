import Head from "next/head";
import { useState } from "react";
import { useLingui } from "@lingui/react";
import { activateLocale, SUPPORTED_LOCALES } from "../lib/i18n";
import Footer from "../components/landing/Footer";

type Platform = "web" | "extension" | "ios" | "android";

export default function SupportPage() {
  const { i18n } = useLingui();
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState<Platform>("web");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isEmailValid = /.+@.+\..+/.test(email.trim());
  const canSubmit = isEmailValid && message.trim().length > 0 && !submitting;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    try {
      const readAsDataUrl = (file: File) =>
        new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(String(reader.result || ""));
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });

      const imageFiles = files.filter((f) => f.type.startsWith("image/"));
      const images = await Promise.all(imageFiles.slice(0, 4).map(readAsDataUrl));

      const resp = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, platform, message, images }),
      });
      const data = await resp.json().catch(() => ({ ok: false }));
      if (resp.ok && data?.ok) {
        setSubmitted(true);
        setEmail("");
        setPlatform("web");
        setMessage("");
        setFiles([]);
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch {
      alert("Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function resetForm() {
    setSubmitted(false);
    setEmail("");
    setPlatform("web");
    setMessage("");
    setFiles([]);
  }

  return (
    <div className="relative flex min-h-dvh flex-col bg-background text-foreground">
      <Head>
        <title>{`Chapax — Support`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <header className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between py-4 sm:py-6">
            <a href="/" className="flex items-center gap-2 sm:gap-3">
              <img src="/chapa.svg" alt="" className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden />
              <span className="text-xs sm:text-sm font-medium tracking-wider">CHAPAX</span>
            </a>
            <div className="flex items-center gap-3">
              <a href="/pricing" className="text-xs underline opacity-80 hover:opacity-100">Pricing</a>
              <select
                value={i18n.locale}
                onChange={async (e) => {
                  const next = e.target.value;
                  await activateLocale(next);
                }}
                className="rounded-md border border-foreground/30 bg-background px-2 py-1 text-xs"
              >
                {SUPPORTED_LOCALES.map((l) => (
                  <option key={l} value={l}>
                    {l.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 grow">
        <div className="mx-auto max-w-2xl px-6">
          <div className="grid min-h-[70vh] place-items-center py-10 sm:py-14">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="w-full rounded-2xl border border-foreground/12 bg-background/80 p-6 sm:p-8 shadow-sm backdrop-blur">
                <h1 className="text-center text-4xl sm:text-5xl font-semibold tracking-tight">Support</h1>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs opacity-80">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`rounded-xl border bg-background px-4 py-3.5 text-base outline-none transition-colors focus:ring-2 ${
                        isEmailValid ? "border-foreground/20 focus:ring-foreground/20" : "border-red-500/60 focus:ring-red-500/30"
                      }`}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="platform" className="text-xs opacity-80">Platform</label>
                    <select
                      id="platform"
                      value={platform}
                      onChange={(e) => setPlatform(e.target.value as Platform)}
                      className="rounded-xl border border-foreground/20 bg-background px-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-foreground/20"
                    >
                      <option value="web">Web</option>
                      <option value="extension">Extension</option>
                      <option value="ios">iOS</option>
                      <option value="android">Android</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs opacity-80">Describe your issue</label>
                  <textarea
                    id="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={9}
                    className="rounded-2xl border border-foreground/20 bg-background px-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-foreground/20"
                    placeholder="Please describe the problem you're experiencing..."
                  />
                </div>

                <div className="mt-4">
                  <label className="text-xs opacity-80">Attach image(s)</label>
                  <div className="mt-2 rounded-2xl border border-dashed border-foreground/20 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-xs text-muted-foreground">
                        {files.length > 0 ? `${files.length} image(s) selected` : "PNG, JPG up to ~10MB"}
                      </div>
                      <label className="inline-flex cursor-pointer items-center justify-center rounded-full border border-foreground/30 px-4 py-2 text-xs font-medium hover:border-foreground/50">
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={(e) => setFiles(Array.from(e.target.files || []))}
                          className="hidden"
                        />
                        Add images
                      </label>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className={`inline-flex h-12 w-full items-center justify-center rounded-full px-6 text-base font-medium transition-colors ${
                      canSubmit ? "bg-foreground text-background hover:bg-foreground/90" : "bg-foreground/30 text-background/70"
                    }`}
                  >
                    {submitting ? "Submitting…" : "Submit"}
                  </button>
                </div>
              </form>
            ) : (
              <div className="w-full rounded-2xl border border-foreground/12 bg-background/80 p-8 text-center shadow-sm backdrop-blur">
                <div className="text-3xl sm:text-4xl font-semibold">Thank you for your feedback</div>
                <div className="mt-2 text-sm text-muted-foreground">We’ll contact you via email if needed</div>
                <div className="mt-8">
                  <button
                    onClick={resetForm}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-foreground/30 px-6 text-sm font-medium hover:border-foreground/50"
                  >
                    Create new ticket
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


