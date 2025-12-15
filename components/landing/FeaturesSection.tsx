import { Trans } from "@lingui/react";
import { motion } from "framer-motion";
import { MessageSquare, Image, Video, Puzzle, Sparkles, Globe, Mic, Wand2, Crop, Clapperboard, Heart, Film, User, Edit3, Languages, ArrowRight } from "lucide-react";

const features = [
  {
    id: 'chat',
    title: 'Intelligent Conversations',
    subtitle: 'AI Chat That Understands You',
    description: 'Experience next-generation AI chat powered by the world\'s most advanced language models. From deep analysis to real-time web search, our AI adapts to your needs.',
    icon: MessageSquare,
    color: '#F7E8C8',
    textColor: '#1A40FF',
    gradient: 'from-amber-50 to-orange-50',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    items: [
      { icon: Sparkles, title: 'Deep Thinking', text: 'Advanced reasoning and multi-step analysis for complex problems' },
      { icon: Globe, title: 'Real-Time Search', text: 'Access the latest information from across the web instantly' },
      { icon: Mic, title: 'Voice Mode', text: 'Natural voice conversations that feel completely human' },
    ],
  },
  {
    id: 'images',
    title: 'Visual Creation Studio',
    subtitle: 'AI-Powered Image Magic',
    description: 'Transform your ideas into stunning visuals. Generate, edit, and enhance images with professional-grade AI tools that understand your creative vision.',
    icon: Image,
    color: '#FF6F61',
    textColor: '#1434FF',
    gradient: 'from-rose-50 to-pink-50',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
    items: [
      { icon: Wand2, title: 'Image Generation', text: 'Create stunning artwork from text descriptions in seconds' },
      { icon: Edit3, title: 'Smart Editing', text: 'Professional photo editing powered by AI intelligence' },
      { icon: Crop, title: 'Inpainting', text: 'Edit specific regions with precision and natural results' },
    ],
  },
  {
    id: 'video',
    title: 'Motion & Animation',
    subtitle: 'Bring Your Ideas to Life',
    description: 'Create captivating videos and animations effortlessly. From text-to-video generation to photo animation, unlock cinematic possibilities.',
    icon: Video,
    color: '#0F2D1F',
    textColor: '#FF6FE0',
    gradient: 'from-emerald-950 to-teal-900',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
    items: [
      { icon: Clapperboard, title: 'Text-to-Video', text: 'Generate professional videos from your descriptions' },
      { icon: Heart, title: 'Photo Animation', text: 'Transform static photos into living, breathing moments' },
      { icon: Film, title: 'Video Editing', text: 'Edit and enhance videos with AI-powered tools' },
    ],
  },
  {
    id: 'extension',
    title: 'Browser Superpowers',
    subtitle: 'Your AI Assistant Everywhere',
    description: 'Seamlessly integrate AI into your browsing experience. Get instant help, translations, and text improvements on any webpage.',
    icon: Puzzle,
    color: '#F7E8C8',
    textColor: '#1A40FF',
    gradient: 'from-amber-50 to-yellow-50',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    items: [
      { icon: User, title: 'On-Page Assistant', text: 'Smart AI companion available on every website you visit' },
      { icon: Edit3, title: 'Magic Edit', text: 'Instantly fix, improve, or rewrite any text with one click' },
      { icon: Languages, title: 'Live Translation', text: 'Real-time translation and enhancement as you type' },
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
            <Trans id="Everything You Need,">Everything You Need,</Trans>
            <br />
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              <Trans id="All in One Place">All in One Place</Trans>
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <Trans id="From intelligent conversations to stunning visuals, video creation to browser automation — unlock limitless possibilities with AI">
              From intelligent conversations to stunning visuals, video creation to browser automation — unlock limitless possibilities with AI
            </Trans>
          </p>
        </motion.div>

        {/* Alternating Feature Blocks */}
        <div className="space-y-24 lg:space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              {/* Image side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div className="relative rounded-3xl overflow-hidden group">
                  {/* Image with gradient overlay */}
                  <div className="aspect-[4/3] relative">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 group-hover:opacity-10 transition-opacity`}
                    />
                  </div>
                  
                  {/* Floating icon badge */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shadow-2xl flex items-center justify-center"
                    style={{ backgroundColor: feature.color }}
                  >
                    <feature.icon
                      className="w-8 h-8 sm:w-10 sm:h-10"
                      style={{ color: feature.textColor }}
                      strokeWidth={2}
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Content side */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div className="space-y-6">
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: `${feature.color}30`,
                      color: feature.textColor,
                    }}
                  >
                    {feature.subtitle}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-4 pt-2">
                    {feature.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + itemIndex * 0.1 }}
                        className="group/item flex items-start gap-4"
                      >
                        <div
                          className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover/item:scale-110 group-hover/item:shadow-lg"
                          style={{ backgroundColor: `${feature.color}40` }}
                        >
                          <item.icon
                            className="w-5 h-5"
                            style={{ color: feature.textColor }}
                            strokeWidth={2.5}
                          />
                        </div>
                        <div className="flex-1 pt-0.5">
                          <h4 className="font-semibold text-base sm:text-lg mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm sm:text-base text-muted-foreground">
                            {item.text}
                          </p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Link */}
                  <motion.a
                    href="https://app.chapax.ai"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-medium group/link pt-4"
                    style={{ color: feature.textColor }}
                  >
                    <Trans id="Try it now">Try it now</Trans>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 sm:mt-24 lg:mt-32 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://app.chapax.ai"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl bg-foreground text-background hover:opacity-90 transition-all hover:scale-105"
            >
              <Trans id="Start Creating Now">Start Creating Now</Trans>
              <Sparkles className="w-5 h-5" />
            </a>
            <a
              href="#platforms"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl border-2 border-foreground/20 hover:border-foreground/40 transition-all"
            >
              <Trans id="View All Platforms">View All Platforms</Trans>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

