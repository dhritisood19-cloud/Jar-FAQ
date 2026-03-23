"use client";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

export default function ContactSupport() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <a
        href="https://www.myjar.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-violet-300 hover:shadow-md hover:-translate-y-0.5 transition-all"
      >
        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-violet-100">
          <ChatBubbleOutlineIcon sx={{ fontSize: 24, color: "#7C3AED" }} />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800">Chat with Support</p>
          <p className="text-xs mt-0.5 text-gray-500">Get instant help via chat</p>
        </div>
      </a>
      <a
        href="https://www.myjar.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-violet-300 hover:shadow-md hover:-translate-y-0.5 transition-all"
      >
        <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-violet-50">
          <PhoneInTalkIcon sx={{ fontSize: 24, color: "#7C3AED" }} />
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-800">Talk to Support</p>
          <p className="text-xs mt-0.5 text-gray-500">Speak with our voice bot</p>
        </div>
      </a>
    </div>
  );
}
