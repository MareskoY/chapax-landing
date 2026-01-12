import { Trans } from "@lingui/react";
import { motion } from "framer-motion";
import { Megaphone, Video, LayoutGrid, Sparkles } from "lucide-react";

export default function AdsSection() {
  const cards = [
    {
      id: "product-video",
      icon: Video,
      title: <Trans id="ads.card.productVideo.title">Product video ads</Trans>,
      description: (
        <Trans id="ads.card.productVideo.desc">
          Use your product photos to generate clean, brand‑ready videos — perfect for ads, landing pages, and marketplaces.
        </Trans>
      ),
    },
    {
      id: "shorts",
      icon: Sparkles,
      title: <Trans id="ads.card.shorts.title">Shorts, TikToks & Reels</Trans>,
      description: (
        <Trans id="ads.card.shorts.desc">
          Create scroll‑stopping short videos with hooks, scenes, and variations — ready to post or test.
        </Trans>
      ),
    },
    {
      id: "product-cards",
      icon: LayoutGrid,
      title: <Trans id="ads.card.cards.title">Product cards & creatives</Trans>,
      description: (
        <Trans id="ads.card.cards.desc">
          Generate product cards, banners, and carousel creatives with consistent style and fast iteration.
        </Trans>
      ),
    },
    {
      id: "variants",
      icon: Megaphone,
      title: <Trans id="ads.card.variants.title">A/B variants in minutes</Trans>,
      description: (
        <Trans id="ads.card.variants.desc">
          Make multiple ad angles, formats, and languages instantly — find what converts without the busywork.
        </Trans>
      ),
    },
  ] as const;

  return (
    <section id="ads" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <Trans id="ads.title">Create ads with AI</Trans>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            <Trans id="ads.subtitle">
              Turn product images into videos, generate storefront creatives, and ship content for any platform — faster.
            </Trans>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-foreground/10 bg-background/60 p-6 sm:p-7 backdrop-blur-sm transition-all hover:border-foreground/20 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative">
                <div className="mb-4 inline-flex rounded-xl bg-foreground/5 p-3 transition-colors group-hover:bg-foreground/10">
                  <card.icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


