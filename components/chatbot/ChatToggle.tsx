"use client";

import { MessageCircle, X } from "lucide-react";

export default function ChatToggle({
  open,
  toggle,
}: {
  open: boolean;
  toggle: () => void;
}) {
  return (
    <button
      onClick={toggle}
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        bg-gradient-to-b from-[#1F5EFF] to-[#184ED8]
        text-white
        flex items-center justify-center
        shadow-[0_12px_30px_rgba(31,94,255,0.4)]
        hover:shadow-[0_18px_45px_rgba(31,94,255,0.5)]
        transition-all duration-200
      "
      aria-label="Open chat assistant"
    >
      {open ? <X size={22} /> : <MessageCircle size={22} />}
    </button>
  );
}
