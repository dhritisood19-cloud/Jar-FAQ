"use client";

import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export function YouTubeEmbed({ url }: { url: string }) {
  const [expanded, setExpanded] = useState(false);

  const videoId = url.match(/(?:v=|\/embed\/|youtu\.be\/)([^&?#]+)/)?.[1] || "";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;

  return (
    <>
      <div className="rounded-2xl overflow-hidden border border-gray-100 bg-black">
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src={embedUrl}
            title="FAQ Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
      <button
        onClick={() => setExpanded(true)}
        className="mt-2 text-xs font-medium cursor-pointer hover:opacity-80 transition-opacity"
        style={{ color: "#5B21B6" }}
      >
        Expand video
      </button>

      {expanded && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setExpanded(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 cursor-pointer"
            >
              <CloseIcon />
            </button>
            <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={embedUrl}
                title="FAQ Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function GifEmbed() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100">
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDd6Y2Q4MXBhOHRhbHJ6OWd0eHF6YzVlMGt2OHZrNnB0NWswYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/qgQUggAC3Pfv687qPC/giphy.gif"
        alt="Step-by-step guide"
        className="w-full"
        loading="lazy"
      />
    </div>
  );
}
