"use client";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

export default function ContactSupport() {
  return (
    <div className="grid grid-cols-2 gap-2.5">
      <a
        href="https://www.myjar.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-3 py-3 rounded-2xl bg-gray-50 border border-gray-100 hover:border-violet-300 hover:shadow-md hover:-translate-y-0.5 transition-all"
      >
        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 bg-violet-100">
          <ChatBubbleOutlineIcon sx={{ fontSize: 18, color: "#7C3AED" }} />
        </div>
        <p className="text-xs font-semibold text-gray-800">Chat with Support</p>
      </a>
      <a
        href="https://www.myjar.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-3 py-3 rounded-2xl bg-gray-50 border border-gray-100 hover:border-violet-300 hover:shadow-md hover:-translate-y-0.5 transition-all"
      >
        <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 bg-violet-50">
          <PhoneInTalkIcon sx={{ fontSize: 18, color: "#7C3AED" }} />
        </div>
        <p className="text-xs font-semibold text-gray-800">Talk to Support</p>
      </a>
    </div>
  );
}
