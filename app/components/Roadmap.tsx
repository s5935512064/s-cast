"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  PlayCircle,
  BarChart,
  Target,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function RoadmapSlide() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      icon: Calendar,
      phase: "Phase 1: Planning & Preparation",
      timeline: "Q2 2024",
      color: "emerald",
      items: [
        "จัดตั้งทีม Content Creator",
        "วางแผนและออกแบบ Content Format",
        "เตรียมอุปกรณ์การผลิตสื่อ",
        "ทำ Content Calendar",
      ],
    },
    {
      icon: PlayCircle,
      phase: "Phase 2: Pilot Launch",
      timeline: "Q3 2024",
      color: "blue",
      items: [
        "เริ่มผลิต Pilot Episode ทั้ง 5 Series",
        "ทดสอบกับกลุ่มตัวอย่าง",
        "รวบรวม Feedback",
        "ปรับปรุง Format",
      ],
    },
    {
      icon: BarChart,
      phase: "Phase 3: Full Implementation",
      timeline: "Q4 2024",
      color: "purple",
      items: [
        "เริ่มผลิต Content ทุก Series อย่างเต็มรูปแบบ",
        "เผยแพร่ผ่านช่องทางภายในองค์กร",
        "สร้าง Engagement กับพนักงาน",
        "เก็บ Metrics เพื่อวัดผล",
      ],
    },
    {
      icon: Target,
      phase: "Phase 4: Optimization",
      timeline: "Q1 2025",
      color: "rose",
      items: [
        "วิเคราะห์ผลตอบรับ",
        "ปรับปรุง Content ตาม Feedback",
        "ขยายช่องทางการเผยแพร่",
        "พัฒนา Format ใหม่ๆ",
      ],
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col justify-center p-4 md:p-8 bg-gradient-to-br from-white to-gray-50"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-medium text-gray-800 mb-4">
          Roadmap
        </h2>
        <p className="text-xl text-gray-600">
          แผนการดำเนินงานสู่การสื่อสารภายในที่มีประสิทธิภาพ
        </p>
      </motion.div>

      {/* Timeline Navigation */}
      <div className="max-w-6xl mx-auto w-full mb-8">
        <div className="flex justify-between items-center">
          {phases.map((phase, index) => (
            <motion.button
              key={index}
              onClick={() => setActivePhase(index)}
              className={`flex flex-col items-center p-4 rounded-lg transition-all
                ${
                  activePhase === index
                    ? "scale-110"
                    : "opacity-70 hover:opacity-100"
                }
              `}
              whileHover={{ scale: activePhase === index ? 1.1 : 1.05 }}
            >
              <div className={`bg-${phase.color}-100 p-3 rounded-full mb-2`}>
                <phase.icon className={`w-6 h-6 text-${phase.color}-600`} />
              </div>
              <span className="text-sm font-medium text-gray-600">
                {phase.timeline}
              </span>
            </motion.button>
          ))}
        </div>
        <div className="relative h-2 bg-gray-200 rounded-full mt-4">
          <motion.div
            className="absolute h-full bg-[#a18b59] rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${(activePhase + 1) * 25}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Active Phase Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePhase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="max-w-4xl mx-auto w-full bg-white rounded-xl p-8 shadow-lg"
        >
          <div className="flex items-center gap-4 mb-6">
            <div
              className={`bg-${phases[activePhase].color}-100 p-4 rounded-lg`}
            >
              {/* <phases[activePhase].icon className={`w-8 h-8 text-${phases[activePhase].color}-600`} /> */}
            </div>
            <div>
              <h3 className="text-2xl font-medium text-gray-800">
                {phases[activePhase].phase}
              </h3>
              <p className="text-[#a18b59]">{phases[activePhase].timeline}</p>
            </div>
          </div>
          <ul className="space-y-4">
            {phases[activePhase].items.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-3"
              >
                <ChevronRight className="w-5 h-5 text-[#a18b59] mt-1" />
                <span className="text-gray-600">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}
