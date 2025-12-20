import { Trans } from "@lingui/react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Image,
  Video,
  Puzzle,
  Sparkles,
  Globe,
  Mic,
  Wand2,
  Crop,
  Clapperboard,
  Heart,
  Film,
  User,
  Edit3,
  Languages,
  ArrowRight,
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      id: 'chat',
      alt: "Intelligent Conversations",
      title: (
        <Trans id="Intelligent Conversations">Intelligent Conversations</Trans>
      ),
      subtitle: (
        <Trans id="AI Chat That Understands You">AI Chat That Understands You</Trans>
      ),
      description: (
        <Trans id="Experience next-generation AI chat powered by the world's most advanced language models. From deep analysis to real-time web search, our AI adapts to your needs.">
          Experience next-generation AI chat powered by the world's most advanced language models. From deep analysis to real-time web search, our AI adapts to your needs.
        </Trans>
      ),
      icon: MessageSquare,
      color: '#F7E8C8',
      textColor: '#1A40FF',
      gradient: 'from-amber-50 to-orange-50',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      items: [
        {
          icon: Sparkles,
          title: <Trans id="Deep Thinking">Deep Thinking</Trans>,
          text: (
            <Trans id="Advanced reasoning and multi-step analysis for complex problems">
              Advanced reasoning and multi-step analysis for complex problems
            </Trans>
          ),
        },
        {
          icon: Globe,
          title: <Trans id="Real-Time Search">Real-Time Search</Trans>,
          text: (
            <Trans id="Access the latest information from across the web instantly">
              Access the latest information from across the web instantly
            </Trans>
          ),
        },
        {
          icon: Mic,
          title: <Trans id="Voice Mode">Voice Mode</Trans>,
          text: (
            <Trans id="Natural voice conversations that feel completely human">
              Natural voice conversations that feel completely human
            </Trans>
          ),
        },
      ],
    },
    {
      id: 'images',
      alt: "Visual Creation Studio",
      title: <Trans id="Visual Creation Studio">Visual Creation Studio</Trans>,
      subtitle: <Trans id="AI-Powered Image Magic">AI-Powered Image Magic</Trans>,
      description: (
        <Trans id="Transform your ideas into stunning visuals. Generate, edit, and enhance images with professional-grade AI tools that understand your creative vision.">
          Transform your ideas into stunning visuals. Generate, edit, and enhance images with professional-grade AI tools that understand your creative vision.
        </Trans>
      ),
      icon: Image,
      color: '#FF6F61',
      textColor: '#1434FF',
      gradient: 'from-rose-50 to-pink-50',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
      items: [
        {
          icon: Wand2,
          title: <Trans id="Image Generation">Image Generation</Trans>,
          text: (
            <Trans id="Create stunning artwork from text descriptions in seconds">
              Create stunning artwork from text descriptions in seconds
            </Trans>
          ),
        },
        {
          icon: Edit3,
          title: <Trans id="Smart Editing">Smart Editing</Trans>,
          text: (
            <Trans id="Professional photo editing powered by AI intelligence">
              Professional photo editing powered by AI intelligence
            </Trans>
          ),
        },
        {
          icon: Crop,
          title: <Trans id="Inpainting">Inpainting</Trans>,
          text: (
            <Trans id="Edit specific regions with precision and natural results">
              Edit specific regions with precision and natural results
            </Trans>
          ),
        },
      ],
    },
    {
      id: 'video',
      alt: "Motion & Animation",
      title: <Trans id="Motion & Animation">Motion & Animation</Trans>,
      subtitle: <Trans id="Bring Your Ideas to Life">Bring Your Ideas to Life</Trans>,
      description: (
        <Trans id="Create captivating videos and animations effortlessly. From text-to-video generation to photo animation, unlock cinematic possibilities.">
          Create captivating videos and animations effortlessly. From text-to-video generation to photo animation, unlock cinematic possibilities.
        </Trans>
      ),
      icon: Video,
      color: '#0F2D1F',
      textColor: '#FF6FE0',
      gradient: 'from-emerald-950 to-teal-900',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
      items: [
        {
          icon: Clapperboard,
          title: <Trans id="Text-to-Video">Text-to-Video</Trans>,
          text: (
            <Trans id="Generate professional videos from your descriptions">
              Generate professional videos from your descriptions
            </Trans>
          ),
        },
        {
          icon: Heart,
          title: <Trans id="Photo Animation">Photo Animation</Trans>,
          text: (
            <Trans id="Transform static photos into living, breathing moments">
              Transform static photos into living, breathing moments
            </Trans>
          ),
        },
        {
          icon: Film,
          title: <Trans id="Video Editing">Video Editing</Trans>,
          text: (
            <Trans id="Edit and enhance videos with AI-powered tools">
              Edit and enhance videos with AI-powered tools
            </Trans>
          ),
        },
      ],
    },
    {
      id: 'extension',
      alt: "Browser Superpowers",
      title: <Trans id="Browser Superpowers">Browser Superpowers</Trans>,
      subtitle: <Trans id="Your AI Assistant Everywhere">Your AI Assistant Everywhere</Trans>,
      description: (
        <Trans id="Seamlessly integrate AI into your browsing experience. Get instant help, translations, and text improvements on any webpage.">
          Seamlessly integrate AI into your browsing experience. Get instant help, translations, and text improvements on any webpage.
        </Trans>
      ),
      icon: Puzzle,
      color: '#F7E8C8',
      textColor: '#1A40FF',
      gradient: 'from-amber-50 to-yellow-50',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      items: [
        {
          icon: User,
          title: <Trans id="On-Page Assistant">On-Page Assistant</Trans>,
          text: (
            <Trans id="Smart AI companion available on every website you visit">
              Smart AI companion available on every website you visit
            </Trans>
          ),
        },
        {
          icon: Edit3,
          title: <Trans id="Magic Edit">Magic Edit</Trans>,
          text: (
            <Trans id="Instantly fix, improve, or rewrite any text with one click">
              Instantly fix, improve, or rewrite any text with one click
            </Trans>
          ),
        },
        {
          icon: Languages,
          title: <Trans id="Live Translation">Live Translation</Trans>,
          text: (
            <Trans id="Real-time translation and enhancement as you type">
              Real-time translation and enhancement as you type
            </Trans>
          ),
        },
      ],
    },
  ];

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
                      alt={feature.alt}
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
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-2xl border-2 border-foreground/20 hover:border-foreground/40 transition-all"
            >
              <Trans id="View Pricing">View Pricing</Trans>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

