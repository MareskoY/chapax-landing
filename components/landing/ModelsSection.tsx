import { Trans, useLingui } from "@lingui/react";
import { motion } from "framer-motion";

const models = [
  { id: 'chatgpt', name: 'ChatGPT', logo: '/models/openai.svg', isNew: false },
  { id: 'claude', name: 'Claude', logo: '/models/antropic.png', isNew: false },
  { id: 'deepseek', name: 'DeepSeek', logo: '/models/deepseek.svg', isNew: false },
  { id: 'banana', name: 'Nano Banana Pro', logo: '/models/banana.svg', isNew: true },
  { id: 'sora', name: 'Sora', logo: '/models/sora.png', isNew: false },
  { id: 'grok', name: 'Grok', logo: '/models/xai.svg', isNew: false },
  { id: 'veo', name: 'VEO', logo: '/models/veo.png', isNew: false },
  { id: 'llama', name: 'Llama', logo: '/models/llama.svg', isNew: false },
  { id: 'gemini', name: 'Gemini', logo: '/models/gemini.png', isNew: false },
  { id: 'dalle', name: 'GPT Image & DALL-E', logo: '/models/openai.svg', isNew: false },
  { id: 'qwen', name: 'Qwen', logo: '/models/qwen.png', isNew: false },
  { id: 'whisper', name: 'Whisper', logo: '/models/openai.svg', isNew: false },
];

export default function ModelsSection() {
  const { i18n } = useLingui();
  return (
    <section id="models" className="relative py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <Trans id="Powered by Leading AI Models">Powered by Leading AI Models</Trans>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            <Trans id="Access the most advanced AI models from top providers, all in one place">
              Access the most advanced AI models from top providers, all in one place
            </Trans>
          </p>
        </motion.div>

        {/* Models as horizontal chips/badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {models.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <div className="flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-foreground/15 bg-background/40 backdrop-blur-sm transition-all hover:border-foreground/30 hover:bg-background/60">
                {/* Icon */}
                <div className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0">
                  <img
                    src={model.logo}
                    alt={model.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                
                {/* Name */}
                <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                  {model.name}
                </span>

                {/* NEW badge */}
                {model.isNew && (
                  <span className="ml-1 px-1.5 py-0.5 text-[9px] sm:text-[10px] font-bold tracking-wider uppercase rounded bg-blue-500 text-white">
                    {i18n._("NEW")}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            <Trans id="And many more models coming soon">And many more models coming soon</Trans>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

