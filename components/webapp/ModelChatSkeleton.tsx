import { motion } from "framer-motion";

export default function ModelChatSkeleton() {
  return (
    <div className="mt-3 sm:mt-4 rounded-lg border border-foreground/12 bg-background/70 p-2 sm:p-3">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-foreground/10 pb-2">
        <div className="h-2.5 w-2.5 rounded-full bg-foreground/25" />
        <div className="h-3 w-20 sm:w-24 rounded bg-foreground/10" />
        <div className="ml-auto text-[10px] sm:text-xs text-muted-foreground">Auto‑selects best model</div>
      </div>

      {/* Messages */}
      <div className="mt-2 sm:mt-3 space-y-2 sm:space-y-3 pr-0.5">
        {[0, 0.9, 1.8, 2.7].map((delay, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: [0, 1, 1, 0], y: [8, 0, 0, 8] }}
            transition={{ duration: 8, times: [0, 0.15, 0.85, 1], delay, repeat: Infinity, repeatDelay: 1.5 }}
            className={(idx % 2 === 1 ? "ml-auto max-w-[88%] bg-foreground/15" : "max-w-[92%] bg-foreground/10") + " rounded-2xl p-2 sm:p-3"}
          />
        ))}
      </div>

      {/* Input */}
      <div className="mt-2 sm:mt-3 flex items-center gap-2">
        <div className="h-8 sm:h-9 w-full rounded-md border border-foreground/15 bg-background" />
        <div className="h-8 sm:h-9 w-12 sm:w-16 rounded-md bg-foreground/85" />
      </div>
    </div>
  );
}


