import { Trans, useLingui } from "@lingui/react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

type Example = {
  id: string;
  videoUrl: string; // generated result
  sourceVideoUrl: string; // reference video
  sourceImageUrl: string; // avatar image
};

const EXAMPLES: Example[] = [
  {
    id: "kling-v2.6-motion-1",
    videoUrl:
      "https://d1q70pf5vjeyhc.cloudfront.net/predictions/f232a8157e634c1d834b1a93167e7bb0/1.mp4",
    sourceVideoUrl:
      "https://d1q70pf5vjeyhc.cloudfront.net/media/4337ee19681340a888c8707fb49e026c/videos/1767158505540940966_e8gecaig.mp4",
    sourceImageUrl:
      "https://d1q70pf5vjeyhc.cloudfront.net/media/4337ee19681340a888c8707fb49e026c/images/1767158444621834157_cda9heda.png",
  },
  {
    id: "kling-v2.6-motion-2",
    videoUrl:
      "https://d1q70pf5vjeyhc.cloudfront.net/predictions/20f7f10ac340432b9d12aba4cb8a935a/1.mp4",
    sourceVideoUrl:
      "https://d1q70pf5vjeyhc.cloudfront.net/media/f9753bf06bfa406fbbeacead4edb5069/videos/1767649923021812969_ftrzxvDA.mp4",
    sourceImageUrl:
      "https://d1q70pf5vjeyhc.cloudfront.net/media/f9753bf06bfa406fbbeacead4edb5069/images/1767650163364699574_LVTRZYVU.png",
  },
  {
    id: "kling-v2.6-motion-3",
    videoUrl:
      "https://d1q70pf5vjeyhc.cloudfront.net/predictions/c571ba067c4f46869a3c14f9c7f2e9b6/1.mp4",
    sourceVideoUrl:
      "https://d1q70pf5vjeyhc.cloudfront.net/media/f9753bf06bfa406fbbeacead4edb5069/videos/1767654912810748316_Hcurqxvt.mp4",
    sourceImageUrl:
      "https://d1q70pf5vjeyhc.cloudfront.net/media/f9753bf06bfa406fbbeacead4edb5069/images/1767655332069289035_hvNLSRON.jpg",
  },
  // {
  //   id: "kling-v2.6-motion-4",
  //   videoUrl:
  //     "https://qg1ql3idqf3mch5g.public.blob.vercel-storage.com/video%20examples/82730ef7311b4c11a28dded4558f8057-1768564203534.mp4",
  //   sourceVideoUrl:
  //     "https://qg1ql3idqf3mch5g.public.blob.vercel-storage.com/video%20examples/FILE%202026-01-16%2015%3A48%3A49.mp4",
  //   sourceImageUrl:
  //     "https://qg1ql3idqf3mch5g.public.blob.vercel-storage.com/video%20examples/IMAGE%202026-01-16%2015%3A51%3A50.jpg",
  // },
  // {
  //   id: "kling-v2.6-motion-5",
  //   videoUrl:
  //     "https://qg1ql3idqf3mch5g.public.blob.vercel-storage.com/video%20examples/1%20%281%29.mp4",
  //   sourceVideoUrl:
  //     "https://d1q70pf5vjeyhc.cloudfront.net/media/4337ee19681340a888c8707fb49e026c/videos/1767158505540940966_e8gecaig.mp4",
  //   sourceImageUrl:
  //     "https://qg1ql3idqf3mch5g.public.blob.vercel-storage.com/video%20examples/IMAGE%202026-01-16%2016%3A06%3A03.jpg",
  // },
];

function MediaCard({
  label,
  kind,
  url,
  emphasis,
  muted,
  onToggleMuted,
  muteLabel,
  unmuteLabel,
  videoRef,
  onVideoReady,
  autoPlay,
  showLoader,
}: {
  label: React.ReactNode;
  kind: "video" | "image";
  url: string;
  emphasis?: "small" | "big";
  muted?: boolean;
  onToggleMuted?: () => void;
  muteLabel?: string;
  unmuteLabel?: string;
  videoRef?: React.RefObject<HTMLVideoElement | null>;
  onVideoReady?: () => void;
  autoPlay?: boolean;
  showLoader?: boolean;
}) {
  const size =
    emphasis === "big"
      ? "h-[280px] sm:h-[320px] lg:h-[360px]"
      : "h-[220px] sm:h-[240px] lg:h-[260px]";

  return (
    <div className="flex flex-col gap-2 items-center">
      <div
        className={[
          "relative overflow-hidden rounded-2xl border border-foreground/10 bg-background/40 backdrop-blur-sm shadow-lg",
          size,
          "aspect-[9/16]",
        ].join(" ")}
      >
        {kind === "video" ? (
          <video
            key={url}
            ref={videoRef}
            src={url}
            className="absolute inset-0 h-full w-full object-cover"
            muted={muted ?? true}
            playsInline
            loop
            autoPlay={autoPlay ?? true}
            preload="metadata"
            onCanPlay={onVideoReady}
          />
        ) : (
          <img
            src={url}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        )}
        {showLoader && (
          <div className="absolute inset-0 grid place-items-center bg-background/40 backdrop-blur-[2px]">
            <div className="h-10 w-10 rounded-full border-2 border-foreground/15 border-t-foreground/70 animate-spin" />
          </div>
        )}
        {kind === "video" && onToggleMuted && (
          <button
            type="button"
            onClick={onToggleMuted}
            className="absolute right-2 top-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 bg-background/70 backdrop-blur hover:bg-background/90 transition-colors"
            aria-label={muted ? muteLabel : unmuteLabel}
          >
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
        )}
      </div>
      <div className="text-xs sm:text-sm text-muted-foreground text-center">{label}</div>
    </div>
  );
}

export default function AiAvatarSection() {
  const { i18n } = useLingui();
  const [active, setActive] = useState(0);
  const [resultMuted, setResultMuted] = useState(true);
  const example = EXAMPLES[active] || EXAMPLES[0]!;

  const refVideoRef = useRef<HTMLVideoElement | null>(null);
  const resultVideoRef = useRef<HTMLVideoElement | null>(null);
  const [refReady, setRefReady] = useState(false);
  const [resultReady, setResultReady] = useState(false);

  // Reset sync state on example change
  useEffect(() => {
    setRefReady(false);
    setResultReady(false);
    setResultMuted(true);

    try {
      refVideoRef.current?.pause();
      resultVideoRef.current?.pause();
      if (refVideoRef.current) refVideoRef.current.currentTime = 0;
      if (resultVideoRef.current) resultVideoRef.current.currentTime = 0;
    } catch {}

    // Ensure both videos reload for the new urls
    try {
      refVideoRef.current?.load();
      resultVideoRef.current?.load();
    } catch {}
  }, [active]);

  // Start both videos together only when BOTH are ready
  useEffect(() => {
    if (!refReady || !resultReady) return;
    const a = refVideoRef.current;
    const b = resultVideoRef.current;
    if (!a || !b) return;

    const start = () => {
      try {
        a.pause();
        b.pause();
        a.currentTime = 0;
        b.currentTime = 0;
        // reference video always muted
        a.muted = true;
      } catch {}

      void a.play().catch(() => {});
      void b.play().catch(() => {
        // if autoplay is blocked when sound is on, mute and retry
        try {
          b.muted = true;
        } catch {}
        setResultMuted(true);
        void b.play().catch(() => {});
      });
    };

    if (typeof window !== "undefined" && "requestAnimationFrame" in window) {
      requestAnimationFrame(() => start());
    } else {
      start();
    }
  }, [refReady, resultReady]);

  const items = useMemo(
    () =>
      [
        {
          n: 1,
          text: (
            <Trans id="aiAvatar.step1">
              Describe your idea and get a short content plan: scene, style, and what the avatar should do.
            </Trans>
          ),
        },
        {
          n: 2,
          text: (
            <Trans id="aiAvatar.step2">
              Generate an AI avatar and refine the look (hair, face, outfit) in a photo editor to match your brand.
            </Trans>
          ),
        },
        {
          n: 3,
          text: (
            <Trans id="aiAvatar.step3">
              Record a reference clip (or pick one) with the right camera movement, lighting, and tempo.
            </Trans>
          ),
        },
        {
          n: 4,
          text: (
            <Trans id="aiAvatar.step4">
              Combine the avatar image with the reference video to get a clean, natural-looking result.
            </Trans>
          ),
        },
      ] as const,
    []
  );

  return (
    <section id="ai-avatar" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            <Trans id="aiAvatar.title">AI Avatar for videos</Trans>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            <Trans id="aiAvatar.subtitle">
              A simple flow: reference clip + avatar image → ready-to-post video.
            </Trans>
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {items.map((it, idx) => (
            <motion.div
              key={it.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="rounded-2xl border border-foreground/10 bg-card/60 backdrop-blur p-4 sm:p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-8 w-8 rounded-xl flex items-center justify-center text-sm font-bold border border-[#ff3ad4]/30 bg-[#ff3ad4]/10 text-foreground">
                  {it.n}
                </div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  <Trans id="aiAvatar.stepLabel" values={{ n: it.n }}>
                    Step {it.n}
                  </Trans>
                </div>
              </div>
              <div className="text-sm sm:text-[15px] leading-snug">{it.text}</div>
            </motion.div>
          ))}
        </div>

        {/* Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-foreground/10 bg-gradient-to-b from-card/70 to-card/40 backdrop-blur p-5 sm:p-6 lg:p-8"
        >
          <div className="flex flex-col gap-1 text-center mb-6">
            <div className="text-xl sm:text-2xl font-bold">
              <Trans id="aiAvatar.examplesTitle">Examples</Trans>
            </div>
            <div className="text-sm text-muted-foreground">
              <Trans id="aiAvatar.examplesSubtitle">
                Reference video + AI avatar = generated result
              </Trans>
            </div>
          </div>

          {/* Single DOM formula (sync play) */}
          <div className="grid items-center justify-center gap-4 grid-cols-[1fr_auto_1fr] grid-rows-[auto_auto_auto] lg:grid-cols-[1fr_auto_1fr_auto_1.35fr] lg:grid-rows-1">
            <MediaCard
              kind="video"
              url={example.sourceVideoUrl}
              emphasis="small"
              label={<Trans id="aiAvatar.refVideo">Reference video</Trans>}
              muted
              videoRef={refVideoRef}
              onVideoReady={() => setRefReady(true)}
              autoPlay={false}
              showLoader={!refReady || !resultReady}
            />
            <div className="text-3xl lg:text-4xl font-black text-foreground/90 drop-shadow-sm select-none justify-self-center">
              +
            </div>
            <MediaCard
              kind="image"
              url={example.sourceImageUrl}
              emphasis="small"
              label={<Trans id="aiAvatar.avatarImage">AI avatar</Trans>}
            />
            <div className="text-3xl lg:text-4xl font-black text-foreground/90 drop-shadow-sm select-none justify-self-center row-start-2 col-start-2 lg:row-start-auto lg:col-start-4">
              =
            </div>
            <div className="row-start-3 col-start-1 col-span-3 lg:row-start-auto lg:col-start-5 lg:col-span-1">
              <MediaCard
                kind="video"
                url={example.videoUrl}
                emphasis="big"
                muted={resultMuted}
                onToggleMuted={() => setResultMuted((v) => !v)}
                muteLabel={i18n._("aiAvatar.mute")}
                unmuteLabel={i18n._("aiAvatar.unmute")}
                label={<Trans id="aiAvatar.result">Generated result</Trans>}
                videoRef={resultVideoRef}
                onVideoReady={() => setResultReady(true)}
                autoPlay={false}
                showLoader={!refReady || !resultReady}
              />
            </div>
          </div>

          {/* Switcher */}
          <div className="mt-6 sm:mt-7 flex items-center gap-3">
            <button
              type="button"
              className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-xl border border-foreground/10 bg-background/40 hover:bg-background/60 transition-colors"
              onClick={() => setActive((v) => (v - 1 + EXAMPLES.length) % EXAMPLES.length)}
              aria-label={i18n._("Previous example")}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex-1 overflow-x-auto">
              <div className="flex gap-2 min-w-max pr-2">
                {EXAMPLES.map((ex, idx) => {
                  const isActive = idx === active;
                  return (
                    <button
                      key={ex.id}
                      type="button"
                      onClick={() => setActive(idx)}
                      className={[
                        "group flex items-center gap-2 rounded-2xl border px-2.5 py-2 transition-all",
                        isActive
                          ? "border-[#ff3ad4]/40 bg-[#ff3ad4]/10"
                          : "border-foreground/10 bg-background/30 hover:bg-background/50",
                      ].join(" ")}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <div className="relative h-12 w-12 rounded-xl overflow-hidden border border-foreground/10 bg-black/20">
                        <video
                          src={ex.videoUrl}
                          className="absolute inset-0 h-full w-full object-cover"
                          muted
                          playsInline
                          preload="metadata"
                        />
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-semibold leading-tight">
                          <Trans id="aiAvatar.example" values={{ n: idx + 1 }}>
                            Example {idx + 1}
                          </Trans>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-xl border border-foreground/10 bg-background/40 hover:bg-background/60 transition-colors"
              onClick={() => setActive((v) => (v + 1) % EXAMPLES.length)}
              aria-label={i18n._("Next example")}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


