import { Trans, useLingui } from "@lingui/react";
import { activateLocale, SUPPORTED_LOCALES } from "../../lib/i18n";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import ChapaxMark from "./ChapaxMark";

export default function Header() {
  const { i18n } = useLingui();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    
    let shouldBeDark = false;
    
    if (savedTheme) {
      // Use saved preference
      shouldBeDark = savedTheme === 'dark';
    } else {
      // Use system preference
      shouldBeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    // Apply theme
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    setIsDark(shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    
    // Update DOM
    if (newIsDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save to localStorage
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    
    setIsDark(newIsDark);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-5 bg-background/80 backdrop-blur-md border-b border-foreground/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 sm:gap-2.5 group">
            <span className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-xl ring-1 ring-foreground/10 shadow-sm transition-transform group-hover:scale-110">
              <ChapaxMark className="h-6 w-6 sm:h-7 sm:w-7 text-foreground" />
            </span>
            <span className="text-lg sm:text-xl font-extrabold tracking-tight">ChapaX</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#features" className="text-sm font-medium hover:opacity-70 transition-opacity">
              <Trans id="Features">Features</Trans>
            </a>
            <a href="#models" className="text-sm font-medium hover:opacity-70 transition-opacity">
              <Trans id="Models">Models</Trans>
            </a>
            <a href="#platforms" className="text-sm font-medium hover:opacity-70 transition-opacity">
              <Trans id="Platforms">Platforms</Trans>
            </a>
            <a href="/pricing" className="text-sm font-medium hover:opacity-70 transition-opacity">
              <Trans id="Pricing">Pricing</Trans>
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-foreground/5 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Language Selector */}
            <div className="relative hidden sm:block">
              <select
                value={i18n.locale}
                onChange={async (e) => {
                  const next = e.target.value;
                  await activateLocale(next);
                }}
                className="appearance-none rounded-lg border border-foreground/20 bg-background/80 backdrop-blur-sm px-4 py-2 pr-8 text-sm font-medium hover:border-foreground/40 hover:bg-background transition-all outline-none cursor-pointer focus:ring-2 focus:ring-foreground/20"
                aria-label="Language"
              >
                {SUPPORTED_LOCALES.map((l) => (
                  <option key={l} value={l}>
                    {l.toUpperCase()}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <svg className="w-4 h-4 text-foreground/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* CTA Buttons */}
            <a
              href="https://app.chapax.ai"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg border border-foreground/20 hover:border-foreground/40 transition-all"
            >
              <Trans id="Sign up">Sign up</Trans>
            </a>
            <a
              href="#platforms"
              className="inline-flex items-center justify-center px-4 sm:px-5 py-2 text-sm font-medium rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity"
            >
              <Trans id="Download App">Download App</Trans>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}


