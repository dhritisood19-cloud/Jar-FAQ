"use client";

import { useState, useRef } from "react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const p = (audioRef.current.currentTime / (audioRef.current.duration || 1)) * 100;
    setProgress(p);
  };

  const handleEnded = () => { setIsPlaying(false); setProgress(0); };

  return (
    <div className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "rgba(91, 58, 158, 0.12)", border: "1px solid rgba(91, 58, 158, 0.2)" }}>
      <audio ref={audioRef} src="/audio/faq-audio.mp3" onTimeUpdate={handleTimeUpdate} onEnded={handleEnded} />
      <button
        onClick={togglePlay}
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
        style={{ background: "linear-gradient(135deg, #FFD600, #FFB300)" }}
      >
        {isPlaying ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#0D0618"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#0D0618"><polygon points="5 3 19 12 5 21 5 3" /></svg>
        )}
      </button>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-white/70">Listen to answer</span>
          <span className="text-xs" style={{ color: "rgba(179, 157, 219, 0.5)" }}>{isPlaying ? "Playing..." : "Tap to play"}</span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(91, 58, 158, 0.3)" }}>
          <div className="h-full rounded-full transition-all" style={{ width: `${progress}%`, background: "#FFD600" }} />
        </div>
      </div>
    </div>
  );
}
