"use client";

import { useState } from "react";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SearchBar from "./SearchBar";

export default function FeedbackWidget() {
  const [feedback, setFeedback] = useState<"yes" | "no" | "contact" | null>(null);

  if (feedback === "contact") {
    return (
      <div className="rounded-2xl p-6 text-center bg-gray-50 border border-gray-100">
        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 bg-violet-100">
          <ChatBubbleOutlineIcon sx={{ fontSize: 24, color: "#7C3AED" }} />
        </div>
        <h4 className="font-semibold text-gray-800 mb-2">Contact Support</h4>
        <p className="text-sm text-gray-500 mb-4">We&apos;re sorry we couldn&apos;t help. Our support team is here for you.</p>
        <div className="flex gap-3 justify-center">
          <a href="https://www.myjar.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl bg-violet-600 text-white hover:bg-violet-700 transition-colors">
            <ChatBubbleOutlineIcon sx={{ fontSize: 18 }} /> Chat with Support
          </a>
          <a href="https://www.myjar.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-xl bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors">
            <PhoneInTalkIcon sx={{ fontSize: 18 }} /> Talk to Support
          </a>
        </div>
      </div>
    );
  }

  if (feedback === "no") {
    return (
      <div className="rounded-2xl p-6 bg-gray-50 border border-gray-100">
        <p className="text-sm font-medium text-gray-700 mb-3">Sorry about that! Search for your question below:</p>
        <SearchBar compact placeholder="Type your question here..." autoFocus />
        <button onClick={() => setFeedback("contact")} className="mt-3 text-sm font-medium text-violet-600 hover:text-violet-700">
          Still need help? Contact Support
        </button>
      </div>
    );
  }

  if (feedback === "yes") {
    return (
      <div className="rounded-2xl p-6 text-center bg-green-50 border border-green-100">
        <CheckCircleOutlineIcon sx={{ fontSize: 32, color: "#22C55E" }} />
        <p className="text-sm font-medium text-green-700 mt-2">Glad we could help!</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl p-6 text-center bg-gray-50 border border-gray-100">
      <p className="text-sm font-medium text-gray-700 mb-4">Was this helpful?</p>
      <div className="flex gap-3 justify-center">
        <button onClick={() => setFeedback("yes")} className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium bg-white border border-gray-200 text-gray-700 hover:bg-green-50 hover:border-green-200 hover:text-green-700 transition-all">
          <ThumbUpAltOutlinedIcon sx={{ fontSize: 20 }} /> Yes
        </button>
        <button onClick={() => setFeedback("no")} className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium bg-white border border-gray-200 text-gray-700 hover:bg-red-50 hover:border-red-200 hover:text-red-700 transition-all">
          <ThumbDownAltOutlinedIcon sx={{ fontSize: 20 }} /> No
        </button>
      </div>
    </div>
  );
}
