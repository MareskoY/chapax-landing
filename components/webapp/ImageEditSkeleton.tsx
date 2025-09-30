import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";

export default function ImageEditSkeleton() {
  return (
    <div className="mt-3 sm:mt-4 rounded-lg border border-foreground/12 bg-background/70 p-2 sm:p-3">
      <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden rounded-md bg-foreground/10">
        {/* Faint photo watermark to make it obvious it's an image */}
        <div className="absolute inset-0 grid place-items-center opacity-35">
          <ImageIcon className="h-10 w-10 sm:h-12 sm:w-12" />
        </div>

        {/* Top tint that gets erased by the brush via SVG mask */}
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 320 224" preserveAspectRatio="none">
          <defs>
            <mask id="revealMask">
              {/* Start fully covered (black) */}
              <rect x="0" y="0" width="100%" height="100%" fill="black" />
              {/* 1) Optional quick lasso outline before fill */}
              <motion.path
                d="M 60 60 L 260 68 L 242 160 L 110 150 L 60 110 Z"
                stroke="white"
                strokeWidth="6"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 1, 1, 0] }}
                transition={{ duration: 6, times: [0, 0.2, 0.25, 0.5, 1], repeat: Infinity, repeatDelay: 0 }}
              />
              {/* 2) Fill appears and stays during loading; 4) resets */}
              <motion.path
                d="M 60 60 L 260 68 L 242 160 L 110 150 L 60 110 Z"
                fill="white"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0, 1, 1, 0] }}
                transition={{ duration: 6, times: [0, 0.25, 0.5, 0.8, 1], repeat: Infinity, repeatDelay: 0 }}
              />
            </mask>
          </defs>
          {/* Tinted overlay that is revealed inside the selection mask */}
          <rect x="0" y="0" width="100%" height="100%" fill="currentColor" className="text-foreground/25" mask="url(#revealMask)" />
        </svg>

        {/* 3) Loading overlay between fill and reset */}
        <div className="pointer-events-none absolute inset-0 grid place-items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1, 0, 0] }}
            transition={{ duration: 6, times: [0, 0.5, 0.8, 0.8, 1], repeat: Infinity, repeatDelay: 0 }}
            className="rounded-md bg-background/70 px-2 py-1"
          >
            <div className="flex items-center gap-2">
              <div className="relative h-3 w-3">
                <div className="absolute inset-0 rounded-full border-2 border-foreground/40 border-t-transparent animate-spin" />
              </div>
              <div className="flex gap-1">
                <motion.span initial={{ opacity: 0.3 }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity }} className="block h-1.5 w-1.5 rounded-full bg-foreground/85" />
                <motion.span initial={{ opacity: 0.3 }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, delay: 0.15, repeat: Infinity }} className="block h-1.5 w-1.5 rounded-full bg-foreground/85" />
                <motion.span initial={{ opacity: 0.3 }} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, delay: 0.3, repeat: Infinity }} className="block h-1.5 w-1.5 rounded-full bg-foreground/85" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* No cursor dot */}
      </div>
    </div>
  );
}


