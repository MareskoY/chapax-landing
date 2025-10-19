import Head from "next/head";
import { useState } from "react";
import { useLingui } from "@lingui/react";
import { activateLocale, SUPPORTED_LOCALES } from "../lib/i18n";

export default function DeleteAccountPage() {
  const { i18n } = useLingui();
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);

  const isEmailValid = /.+@.+\..+/.test(email.trim());
  const canSubmit = isEmailValid && reason.trim().length > 0 && !submitting;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    try {
      const resp = await fetch("/api/delete-account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, reason }),
      });
      const data = await resp.json().catch(() => ({ ok: false }));
      if (resp.ok && data?.ok) {
        setSubmittedEmail(email);
        setEmail("");
        setReason("");
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
    setSubmittedEmail(null);
    setEmail("");
    setReason("");
  }

  return (
    <div className="relative flex min-h-dvh flex-col bg-background text-foreground">
      <Head>
        <title>{`Chapax — Delete account`}</title>
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
            {!submittedEmail ? (
              <form onSubmit={handleSubmit} className="w-full rounded-2xl border border-foreground/12 bg-background/80 p-6 sm:p-8 shadow-sm backdrop-blur">
                <h1 className="text-center text-3xl sm:text-4xl font-semibold tracking-tight">Do you want to delete your account?</h1>
                <p className="mt-2 text-center text-sm text-muted-foreground">
                  Please fill out the form and we will contact you within 24 hours to confirm deletion of your account and all associated data.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-4">
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
                    <label htmlFor="reason" className="text-xs opacity-80">Reason</label>
                    <textarea
                      id="reason"
                      required
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      rows={9}
                      className="rounded-2xl border border-foreground/20 bg-background px-4 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-foreground/20"
                      placeholder="Please briefly describe why you want to delete your account..."
                    />
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
                <div className="text-3xl sm:text-4xl font-semibold">Thank you!</div>
                <div className="mt-2 text-sm text-muted-foreground">
                  We will contact you within 24 hours via email {submittedEmail}
                </div>
                <div className="mt-8">
                  <button
                    onClick={resetForm}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-foreground/30 px-6 text-sm font-medium hover:border-foreground/50"
                  >
                    Create new request
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-foreground/10 py-6 text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="font-medium">Contact</div>
            <div className="mt-2 sm:mt-0 space-y-1 text-muted-foreground">
              <div>
                Email: <a className="underline hover:opacity-100 opacity-80" href="mailto:support@chapax.ai">support@chapax.ai</a>
              </div>
              <div>
                Telegram: <a className="underline hover:opacity-100 opacity-80" href="https://t.me/+jlcVGEVi7XViMmMy" target="_blank" rel="noreferrer">https://t.me/+jlcVGEVi7XViMmMy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


