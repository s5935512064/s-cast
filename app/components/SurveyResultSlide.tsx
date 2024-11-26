import { motion } from "framer-motion";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function SurveyResultSlide() {
  const [activeTab, setActiveTab] = useState<
    "overall" | "experience" | "generation"
  >("overall");

  const surveyData = {
    overall: [
      {
        category: "รู้จักธุรกิจทั้งหมดของ สยามสินธร",
        percentage: 10,
        color: "#3B82F6",
      },
      {
        category: "รู้จักเฉพาะ BU ของตัวเอง",
        percentage: 45,
        color: "#6366F1",
      },
      { category: "รู้จักบางส่วน", percentage: 20, color: "#14B8A6" },
      { category: "ไม่ค่อยรู้จัก", percentage: 25, color: "#EF4444" },
    ],
    experience: [
      { category: "มากกว่า 10 ปี", percentage: 90, color: "#3B82F6" },
      { category: "5-10 ปี", percentage: 75, color: "#6366F1" },
      { category: "3-5 ปี", percentage: 60, color: "#14B8A6" },
      { category: "1-3 ปี", percentage: 40, color: "#8B5CF6" },
      { category: "น้อยกว่า 1 ปี", percentage: 25, color: "#EC4899" },
    ],
    generation: [
      { category: "Baby Boomer (59-77)", percentage: 4.71, color: "#3B82F6" },
      {
        category: "Generation X (42-58)",
        percentage: 32.72,
        color: "#6366F1",
      },
      { category: "Generation Y (23-41)", percentage: 54.97, color: "#14B8A6" },
      { category: "Generation Z (<23)", percentage: 7.59, color: "#8B5CF6" },
    ],
  };

  const tabTitles = {
    overall: "ภาพรวมองค์กร",
    experience: "แบ่งตามอายุงาน",
    generation: "แบ่งตาม Generation",
  };

  const insights = {
    overall: "พนักงานส่วนใหญ่รู้จักเฉพาะงานในส่วนที่ตัวเองรับผิดชอบ",
    experience: "พนักงานที่อายุงานมากกว่า 10 ปี มีความเข้าใจองค์กรดีที่สุด",
    generation: "Baby Boomer และ Gen X มีความเข้าใจองค์กรมากกว่า Gen Y และ Z",
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen flex flex-col justify-center p-4 md:p-8 bg-white"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-4"
      >
        <h2 className="text-4xl md:text-5xl font-medium text-gray-800 mb-3">
          วันนี้เรารู้จัก สยามสินธร ดีแค่ไหน?
        </h2>
        {/* <p className="text-gray-500 text-xl">ผลสำรวจจากพนักงาน 100 คน</p> */}
      </motion.div>

      <div className="flex justify-center gap-2 mb-6">
        {Object.entries(tabTitles).map(([key, title]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key as keyof typeof surveyData)}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === key
                ? "bg-[#a18b59] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {title}
          </button>
        ))}
      </div>

      {/* Survey Results Chart */}
      <div className="max-w-5xl mx-auto w-full h-[400px]">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 rounded-xl p-8 h-full border border-gray-100"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={surveyData[activeTab]}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" domain={[0, 100]} unit="%" />
              <YAxis
                type="category"
                dataKey="category"
                width={150}
                tick={{ fontSize: 14 }}
              />
              <Tooltip
                formatter={(value) => [`${value}%`, "ความเข้าใจองค์กร"]}
                cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
              />

              <Bar
                dataKey="percentage"
                radius={[0, 4, 4, 0]}
                barSize={30}
                fill="#a18b59"
              ></Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Key Insight */}
      <motion.div
        key={`insight-${activeTab}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-8"
      >
        <p className="text-xl text-gray-800">
          <span className=" font-medium">{insights[activeTab]}</span>
        </p>
      </motion.div>
    </motion.section>
  );
}
