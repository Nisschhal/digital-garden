"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";
import { SproutFace } from "@/components/ui/sprout";
import { IconAdmin, IconTeacher, IconStudent, IconParent } from "@/components/ui/icons";
import useReducedMotion from "@/hooks/useReducedMotion";
import useTabIndicator from "@/hooks/useTabIndicator";
import AIConversation from "@/components/smoothui/ai-conversation";
import { useLang } from "@/context/LangContext";

type Chunk = { t: string; n: boolean };
type Phase = "typing" | "thinking" | "answering" | "done";
type Persona = "admin" | "teacher" | "student" | "parent";

const personaKeys: Persona[] = ["admin", "teacher", "student", "parent"];
const personaIcons: Record<Persona, typeof IconAdmin> = {
  admin: IconAdmin,
  teacher: IconTeacher,
  student: IconStudent,
  parent: IconParent,
};

function toWords(chunks: readonly Chunk[]) {
  const words: { text: string; num: boolean }[] = [];
  chunks.forEach((chunk) => {
    chunk.t.split(/(\s+)/).forEach((w) => {
      if (w.length) words.push({ text: w, num: chunk.n });
    });
  });
  return words;
}

function AnswerWords({ words, reduced }: { words: { text: string; num: boolean }[]; reduced: boolean }) {
  return (
    <p className="text-[14.5px] leading-[1.6] text-on-dark/90">
      {words.map((w, idx) => {
        // A whitespace-only chunk collapses to zero width if it's given its
        // own `inline-block` — inline-block establishes its own trimming
        // context, so a lone space inside one is both leading and trailing
        // whitespace and gets trimmed away entirely. Render those as plain
        // text instead; only real words get the animated inline-block span.
        if (w.text.trim() === "") return w.text;
        return (
          <motion.span
            key={idx}
            initial={reduced ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: reduced ? 0 : idx * 0.045 }}
            className={`inline-block ${w.num ? "text-marigold font-bold" : ""}`}
          >
            {w.text}
          </motion.span>
        );
      })}
    </p>
  );
}

export default function AIDemo() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const [persona, setPersona] = useState<Persona>("admin");
  const [turn, setTurn] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const [typed, setTyped] = useState("");
  const [started, setStarted] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const demos = t.aiDemo.demos;
  const turns = demos[persona].turns;
  const { containerRef, registerRef, box } = useTabIndicator(persona);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const runTurn = useCallback(
    (turnIndex: number) => {
      clearTimers();
      const q = turns[turnIndex]?.q ?? "";
      setTyped("");
      if (reduced) {
        setTyped(q);
        setPhase("done");
        return;
      }
      setPhase("typing");
      let i = 0;
      const step = () => {
        i++;
        setTyped(q.slice(0, i));
        if (i < q.length) {
          timers.current.push(setTimeout(step, 16 + Math.random() * 14));
        } else {
          timers.current.push(setTimeout(() => setPhase("thinking"), 350));
          timers.current.push(setTimeout(() => setPhase("answering"), 350 + 650));
          timers.current.push(setTimeout(() => setPhase("done"), 350 + 650 + 300));
        }
      };
      timers.current.push(setTimeout(step, 300));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [persona, reduced]
  );

  useEffect(() => {
    return () => clearTimers();
  }, []);

  // Once a turn finishes, wait a beat then move on to the next question in
  // that persona's thread — a real multi-message exchange, not a one-off.
  useEffect(() => {
    if (phase !== "done" || reduced) return;
    const next = turn + 1;
    if (turns[next]) {
      const id = setTimeout(() => {
        setTurn(next);
        runTurn(next);
      }, 1100);
      timers.current.push(id);
      return () => clearTimeout(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, turn]);

  const handleEnterViewport = () => {
    if (!started) {
      setStarted(true);
      setTurn(0);
      runTurn(0);
    }
  };

  const switchPersona = (p: Persona) => {
    if (p === persona) return;
    setPersona(p);
  };

  useEffect(() => {
    if (started) {
      setTurn(0);
      runTurn(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [persona]);

  return (
    <section id="ai-demo" className="relative bg-terrace-deep dark:bg-[#0E1613] text-on-dark py-24 sm:py-28 md:py-[160px] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none animate-glow" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(600px 400px at 85% 15%, color-mix(in srgb, var(--marigold) 16%, transparent), transparent 65%), radial-gradient(500px 500px at 5% 90%, color-mix(in srgb, var(--terrace-bright) 35%, transparent), transparent 60%)",
          }}
        />
      </div>

      <motion.div className="relative z-10 max-w-[1180px] mx-auto px-5 sm:px-8" onViewportEnter={handleEnterViewport} viewport={{ amount: 0.4 }}>
        <div className="max-w-[620px]">
          <Reveal as="p" className="flex items-center gap-2.5 text-[13px] font-bold tracking-[0.09em] uppercase text-marigold mb-4">
            <span className="w-[22px] h-[1.5px] bg-marigold inline-block" />
            {t.aiDemo.eyebrow}
          </Reveal>
          <Reveal as="h2" delay={0.05} className="font-display font-medium text-on-dark text-[clamp(26px,3vw,38px)] leading-[1.14] tracking-[-0.01em]">
            {t.aiDemo.headline}
          </Reveal>
          <Reveal as="p" delay={0.1} className="text-[clamp(15.5px,1.15vw,17px)] text-on-dark/70 mt-5">
            {t.aiDemo.body}
          </Reveal>
        </div>

        <div ref={containerRef} className="relative flex flex-wrap gap-1 mt-9 bg-on-dark/[0.08] p-1 rounded-full" role="tablist" aria-label="Example question">
          {box.width > 0 && (
            <motion.div
              className="absolute rounded-full bg-on-dark"
              animate={{ width: box.width, height: box.height, x: box.left, y: box.top }}
              transition={{ type: "spring", stiffness: 420, damping: 34 }}
              style={{ top: 0, left: 0 }}
            />
          )}
          {personaKeys.map((key) => {
            const Icon = personaIcons[key];
            const d = demos[key];
            return (
              <button
                key={key}
                ref={registerRef(key)}
                role="tab"
                aria-selected={persona === key}
                onClick={() => switchPersona(key)}
                className={`relative z-10 flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full text-[13.5px] sm:text-[14px] font-semibold transition-colors ${
                  persona === key ? "text-terrace-deep" : "text-on-dark/65 hover:text-on-dark/90"
                }`}
              >
                <Icon className="w-[15px] h-[15px] shrink-0" />
                {d.tabLabel}
              </button>
            );
          })}
        </div>

        {/* A real chat thread — scrolls, and pins to the newest message the way
            an actual assistant would, using the same AIConversation viewport
            we use for the real AI chat elsewhere in the product. Each persona
            gets its own three-question thread, so this genuinely overflows
            and follows along rather than sitting static. */}
        <div
          className="mt-9 max-w-[720px] bg-on-dark/5 border border-on-dark/15 backdrop-blur-md rounded-[28px] p-6 sm:p-8 md:p-10"
          role="tabpanel"
          aria-live="polite"
        >
          <AIConversation
            className="h-[260px] sm:h-[300px]"
            contentKey={`${persona}-${turn}-${phase}-${typed.length}`}
            dark
          >
            <div className="flex flex-col gap-5 pr-1">
              {turns.slice(0, turn + 1).map((tn, i) => {
                const isActive = i === turn;
                const p: Phase = isActive ? phase : "done";
                const qText = isActive ? typed : tn.q;
                const aWords = toWords(tn.a);
                return (
                  <div key={`${persona}-${i}`} className="flex flex-col gap-3">
                    <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-marigold text-terrace-deep font-display font-medium text-[15px] leading-[1.4] px-4 py-2.5">
                      {qText}
                      {isActive && p === "typing" && !reduced && (
                        <span className="inline-block w-[2px] h-[1em] bg-terrace-deep align-middle ml-0.5 animate-caret" />
                      )}
                    </div>

                    {(p === "thinking" || p === "answering" || p === "done") && (
                      <div className="flex items-start gap-2.5 max-w-[90%]">
                        <span className="w-6 h-6 shrink-0 mt-0.5">
                          <SproutFace className="w-full h-full" animated={p === "thinking"} />
                        </span>
                        <div className="rounded-2xl rounded-tl-sm bg-on-dark/10 border border-on-dark/10 px-4 py-2.5 flex-1">
                          {p === "thinking" ? (
                            <div className="flex gap-1.5 items-center h-[1.4em]">
                              <span className="w-1.5 h-1.5 rounded-full bg-on-dark/50 animate-think" />
                              <span className="w-1.5 h-1.5 rounded-full bg-on-dark/50 animate-think [animation-delay:150ms]" />
                              <span className="w-1.5 h-1.5 rounded-full bg-on-dark/50 animate-think [animation-delay:300ms]" />
                            </div>
                          ) : (
                            <AnswerWords words={aWords} reduced={reduced} />
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </AIConversation>
        </div>
      </motion.div>
    </section>
  );
}
