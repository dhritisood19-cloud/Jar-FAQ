"use client";

import { useState, useRef } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) { audioRef.current.pause(); } else { audioRef.current.play().catch(() => {}); }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center gap-3 rounded-xl px-4 py-3 bg-gray-50 border border-gray-100">
      <audio ref={audioRef} src="/audio/faq-audio.mp3" onTimeUpdate={() => { if (audioRef.current) setProgress((audioRef.current.currentTime / (audioRef.current.duration || 1)) * 100); }} onEnded={() => { setIsPlaying(false); setProgress(0); }} />
      <button onClick={togglePlay} className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-violet-600 hover:bg-violet-700 transition-colors">
        {isPlaying ? <PauseIcon sx={{ fontSize: 22, color: "white" }} /> : <PlayArrowIcon sx={{ fontSize: 22, color: "white" }} />}
      </button>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-gray-600 flex items-center gap-1">
            <VolumeUpIcon sx={{ fontSize: 14 }} /> Listen to answer
          </span>
          <span className="text-xs text-gray-400">{isPlaying ? "Playing..." : "Tap to play"}</span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden bg-gray-200">
          <div className="h-full rounded-full bg-violet-500 transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
