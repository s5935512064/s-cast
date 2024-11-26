"use client";

import { useState } from "react";

const slides = [
  { id: "intro", label: "Intro" },

  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "demo", label: "Demo" },
  { id: "roadmap", label: "Roadmap" },
];

const PitchNavigation = () => {
  const [activeSlide, setActiveSlide] = useState("intro");

  return (
    <div className="flex flex-col items-center gap-4">
      {slides.map((slide) => (
        <button
          key={slide.id}
          onClick={() => setActiveSlide(slide.id)}
          className={`w-3 h-3 rounded-full transition-all ${
            activeSlide === slide.id
              ? "bg-white scale-125"
              : "bg-white/50 hover:bg-white/80"
          }`}
          aria-label={slide.label}
        />
      ))}
    </div>
  );
};

export default PitchNavigation;
