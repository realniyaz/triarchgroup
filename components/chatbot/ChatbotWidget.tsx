"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { predefinedQA } from "./predefinedQA";
import ChatToggle from "./ChatToggle";

export default function ChatBotWidget() {
  const [open, setOpen] = useState(false);
  const [activeAnswer, setActiveAnswer] = useState<string | null>(null);
  const [thinking, setThinking] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    setActiveAnswer(null);
    setThinking(false);
  }, [pathname]);

  function handleQuestion(answer: string) {
    setThinking(true);
    setActiveAnswer(null);

    setTimeout(() => {
      setThinking(false);
      setActiveAnswer(answer);
    }, 700);
  }

  return (
    <>
      <ChatToggle open={open} toggle={() => setOpen(!open)} />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="
              fixed z-50
              bottom-24 right-4
              sm:right-6
              w-[calc(100vw-2rem)]
              max-w-sm
              bg-white
              rounded-3xl
              border border-slate-200
              shadow-[0_30px_80px_rgba(0,0,0,0.18)]
              overflow-hidden
            "
          >
            {/* HEADER */}
            <div className="bg-blue-600 text-white px-5 py-4 font-medium text-sm sm:text-base">
              Triarch Assistant
            </div>

            {/* BODY */}
            <div className="p-4 sm:p-5 space-y-3 max-h-[60vh] overflow-y-auto">
              <p className="text-xs sm:text-sm text-slate-600">
                Select a question below:
              </p>

              {predefinedQA.map((item) => (
                <button
                  key={item.question}
                  onClick={() => handleQuestion(item.answer)}
                  className="
                    w-full text-left
                    px-4 py-3
                    rounded-xl
                    border border-slate-200
                    text-sm
                    hover:bg-blue-50
                    transition
                  "
                >
                  {item.question}
                </button>
              ))}

              {/* THINKING */}
              {thinking && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-3 text-sm text-slate-500"
                >
                  Triarch Assistant is thinking<span className="animate-pulse">…</span>
                </motion.div>
              )}

              {/* ANSWER */}
              {activeAnswer && !thinking && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="
                    mt-3
                    bg-slate-50
                    p-4
                    rounded-xl
                    text-sm text-slate-700
                  "
                >
                  {activeAnswer}
                </motion.div>
              )}
            </div>

            {/* FOOTER */}
            <div className="border-t px-5 py-3 text-xs text-slate-500">
              Need more help?{" "}
              <Link
                href="/contact"
                className="text-blue-600 font-medium hover:underline"
              >
                Contact us →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
