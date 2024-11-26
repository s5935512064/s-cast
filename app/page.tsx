"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import PresentationNav from "./components/PresentationNav";
import { KeyboardShortcuts } from "./components/KeyboardShortcuts";
import SurveyResultSlide from "./components/SurveyResultSlide";
import ProblemSlide from "./components/ProblemSlide";
import SolutionSlide from "./components/SolutionSlide";
import RoadmapSlide from "./components/Roadmap";
import BenefitSlide from "./components/BenefitSlide";
import ResourceSlide from "./components/ResourceSlide";
import IntroSlide from "./components/IntroSlide";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, 6));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const handleSlideClick = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") handleNext();
    if (event.key === "ArrowLeft") handlePrev();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen  overflow-hidden ">
      <AnimatePresence mode="wait">
        {currentSlide === 0 && <IntroSlide />}
        {currentSlide === 1 && <SurveyResultSlide />}
        {currentSlide === 2 && <ProblemSlide />}
        {currentSlide === 3 && <SolutionSlide />}
        {currentSlide === 4 && <RoadmapSlide />}
        {currentSlide === 5 && <BenefitSlide />}
        {currentSlide === 6 && <ResourceSlide />}
      </AnimatePresence>

      <PresentationNav
        currentSlide={currentSlide}
        onNext={handleNext}
        onPrev={handlePrev}
        onSlideClick={handleSlideClick}
      />
      <KeyboardShortcuts />
    </main>
  );
}
