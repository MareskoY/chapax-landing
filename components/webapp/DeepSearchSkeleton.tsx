import { motion } from "framer-motion";

export default function DeepSearchSkeleton() {
  return (
    <div className="mt-3 sm:mt-4 rounded-lg border border-foreground/12 bg-background/70 p-2 sm:p-3">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-foreground/10 pb-2 text-[10px] sm:text-xs text-muted-foreground">
        <span>DeepSearch</span>
        <span>Live sources</span>
      </div>

      <div className="mt-2 sm:mt-3 grid gap-2 sm:gap-3">
        {/* Query bar */}
        <div className="h-8 sm:h-9 rounded-md border border-foreground/15 bg-background" />

        {/* Staged timeline: Search -> Reason -> Answer */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 text-[10px] sm:text-xs text-muted-foreground">
          {[
            { label: "Searching web", delay: 0 },
            { label: "Reasoning", delay: 0.5 },
            { label: "Answering", delay: 1.0 },
          ].map((step, idx) => (
            <div key={idx} className="card-surface p-2 sm:p-3">
              <div className="mb-1 font-medium">{step.label}</div>
              <motion.div
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: [0, 1, 1, 0], x: [-6, 0, 0, -6] }}
                transition={{ duration: 6, times: [0, 0.2, 0.8, 1], delay: step.delay, repeat: Infinity, repeatDelay: 0.6 }}
                className="h-2 rounded bg-foreground/15"
              />
              <motion.div
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: [0, 1, 1, 0], x: [-6, 0, 0, -6] }}
                transition={{ duration: 6, times: [0, 0.2, 0.8, 1], delay: step.delay + 0.15, repeat: Infinity, repeatDelay: 0.6 }}
                className="mt-1 h-2 rounded bg-foreground/12"
              />
            </div>
          ))}
        </div>

        {/* Result bubbles */}
        <div className="space-y-1.5 sm:space-y-2">
          {[0, 0.6, 1.2].map((delay, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: [0, 1, 1, 0], y: [6, 0, 0, 6] }}
              transition={{ duration: 7, times: [0, 0.15, 0.85, 1], delay, repeat: Infinity, repeatDelay: 0.9 }}
              className={(idx % 2 === 1 ? "ml-auto max-w-[90%] bg-foreground/15" : "max-w-[85%] bg-foreground/10") + " rounded-2xl p-2"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


