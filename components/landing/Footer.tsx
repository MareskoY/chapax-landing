import { Trans, useLingui } from "@lingui/react";

export default function Footer() {
  const { i18n } = useLingui();
  const isRu = (i18n.locale || "").split("-")[0].toLowerCase() === "ru";
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-foreground/10 py-8 sm:py-12 text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">
              <Trans id="footer.company">Company</Trans>
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/support" className="hover:text-foreground transition-colors">
                  <Trans id="footer.support">Support</Trans>
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-foreground transition-colors">
                  <Trans id="footer.pricing">Pricing</Trans>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3">
              <Trans id="footer.legal">Legal</Trans>
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/terms" className="hover:text-foreground transition-colors">
                  <Trans id="footer.terms">Terms of Service</Trans>
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-foreground transition-colors">
                  <Trans id="footer.privacy">Privacy Policy</Trans>
                </a>
              </li>
              {isRu && (
                <>
                  <li>
                    <a href="/oferta" className="hover:text-foreground transition-colors">
                      <Trans id="footer.oferta">Oferta</Trans>
                    </a>
                  </li>
                  <li>
                    <a href="/rekvizity" className="hover:text-foreground transition-colors">
                      <Trans id="footer.rekvizity">Rekvizity</Trans>
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Mobile Apps */}
          <div>
            <h3 className="font-semibold mb-3">
              <Trans id="footer.mobile">Mobile</Trans>
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/terms-ios" className="hover:text-foreground transition-colors">
                  <Trans id="footer.terms_ios">Terms (iOS)</Trans>
                </a>
              </li>
              <li>
                <a href="/privacy-ios" className="hover:text-foreground transition-colors">
                  <Trans id="footer.privacy_ios">Privacy (iOS)</Trans>
                </a>
              </li>
              <li>
                <a href="/terms-android" className="hover:text-foreground transition-colors">
                  <Trans id="footer.terms_android">Terms (Android)</Trans>
                </a>
              </li>
              <li>
                <a href="/privacy-android" className="hover:text-foreground transition-colors">
                  <Trans id="footer.privacy_android">Privacy (Android)</Trans>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3">
              <Trans id="footer.contact">Contact</Trans>
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a 
                  href="mailto:support@chapax.ai" 
                  className="hover:text-foreground transition-colors"
                >
                  <Trans id="support@chapax.ai">support@chapax.ai</Trans>
                </a>
              </li>
              <li>
                <a 
                  href="/delete-account" 
                  className="hover:text-foreground transition-colors"
                >
                  <Trans id="footer.delete_account">Delete Account</Trans>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 border-t border-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>
            <Trans id="© {year} Chapax. All rights reserved." values={{ year }}>
              © {year} Chapax. All rights reserved.
            </Trans>
          </span>
          <span>
            <Trans id="footer.tagline">Fast. Minimal. Helpful.</Trans>
          </span>
        </div>
      </div>
    </footer>
  );
}

