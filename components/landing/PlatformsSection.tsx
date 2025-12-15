import { Trans } from "@lingui/react";
import { motion } from "framer-motion";
import { AppleIcon, GooglePlayIcon } from "./Icons";
import { Globe, Puzzle } from "lucide-react";

const platforms = [
  {
    id: 'webapp',
    name: 'Web App',
    description: 'Access from any browser',
    icon: Globe,
    href: 'https://app.chapax.ai',
  },
  {
    id: 'extension',
    name: 'Chrome Extension',
    description: 'AI assistant on every page',
    icon: Puzzle,
    href: 'https://chromewebstore.google.com/detail/chapa-your-ai-assistant-p/lhdjjndpipjcmlbkglbaphamfpjiiipo',
  },
  {
    id: 'ios',
    name: 'iOS App',
    description: 'Available on App Store',
    icon: AppleIcon,
    href: 'https://apps.apple.com/pt/app/chapax/id6754095566',
  },
  {
    id: 'android',
    name: 'Android App',
    description: 'Available on Google Play',
    icon: GooglePlayIcon,
    href: 'https://play.google.com/store/apps/details?id=ai.chapax.app&hl=en',
  },
];

export default function PlatformsSection() {
  return (
    <section id="platforms" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <Trans id="Available Everywhere">Available Everywhere</Trans>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            <Trans id="Choose your preferred platform and get started with Chapax today">
              Choose your preferred platform and get started with Chapax today
            </Trans>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.id}
              href={platform.href}
              target={platform.href.startsWith("http") ? "_blank" : undefined}
              rel={platform.href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-background/60 p-6 sm:p-8 backdrop-blur-sm transition-all hover:border-foreground/20 hover:shadow-xl"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              
              <div className="relative flex flex-col items-center text-center">
                <div className="mb-4 rounded-xl bg-foreground/5 p-4 transition-colors group-hover:bg-foreground/10">
                  <platform.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {platform.name}
                </h3>
                
                <p className="text-sm text-muted-foreground">
                  {platform.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-4 flex items-center gap-2 text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100">
                  <span>
                    <Trans id="Get Started">Get Started</Trans>
                  </span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

