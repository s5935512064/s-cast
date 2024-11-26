import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { id: "intro", title: "Intro" },
  { id: "survey", title: "ผลสำรวจความคิดเห็น" },
  { id: "problem", title: "ปัญหาที่พบ/ โอกาสที่เห็น" },
  { id: "solution", title: "S-CAST Solution" },
  { id: "roadmap", title: "Roadmap" },
  { id: "expected-benefit", title: "Expected Benefit" },
  { id: "resource", title: "Resource" },
];

interface PresentationNavProps {
  currentSlide: number;
  onNext: () => void;
  onPrev: () => void;
  onSlideClick: (index: number) => void;
}

export const PresentationNav = ({
  currentSlide,
  onNext,
  onPrev,
  onSlideClick,
}: PresentationNavProps) => {
  return (
    <>
      {/* Side Dots Navigation */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 space-y-4 z-50">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSlideClick(index)}
            className="group relative flex items-center"
          >
            <div
              className={`w-3 h-3 rounded-full transition-all cursor-pointer
                ${
                  currentSlide === index
                    ? "bg-black scale-125"
                    : "bg-black/50 hover:bg-black/80"
                }`}
            />
            {/* Tooltip */}
            <span className="absolute right-8 opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 backdrop-blur-sm text-black text-sm py-1 px-2 rounded whitespace-nowrap">
              {slide.title}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Arrow Navigation */}
      <div className="fixed bottom-6 left-8 flex items-center gap-8 z-50">
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className={`p-2 rounded-full transition-all
            ${
              currentSlide === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-black/10"
            }`}
        >
          <ChevronLeft className="w-8 h-8 text-black" />
        </button>

        {/* Progress Indicator */}
        <div className="text-black/80 text-sm">
          {currentSlide + 1} / {slides.length}
        </div>

        <button
          onClick={onNext}
          disabled={currentSlide === slides.length - 1}
          className={`p-2 rounded-full transition-all
            ${
              currentSlide === slides.length - 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-black/10"
            }`}
        >
          <ChevronRight className="w-8 h-8 text-black" />
        </button>
      </div>
    </>
  );
};

export default PresentationNav;
