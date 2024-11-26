import { motion } from "framer-motion";
import { Building2, Users, Puzzle } from "lucide-react";

export default function ProblemSlide() {
  const challenges = [
    {
      icon: Puzzle,
      color: "blue",
      title: "ความเข้าใจที่แยกส่วน",
      description:
        "พนักงานเข้าใจเฉพาะงานของตัวเอง ทำให้มองไม่เห็นโอกาสในการสร้างคุณค่าร่วมกัน",
      impact: "ลดประสิทธิภาพการทำงานข้าม BU",
    },
    {
      icon: Users,
      color: "indigo",
      title: "การสูญเสียความรู้ที่มีค่า",
      description:
        "ประสบการณ์และ Best Practices ไม่ถูกถ่ายทอด เมื่อพนักงานลาออกหรือเกษียณ",
      impact: "สูญเสียความรู้ที่สั่งสมมานาน",
    },
    {
      icon: Building2,
      color: "teal",
      title: "ความผูกพันกับองค์กร",
      description: "พนักงานขาดความเข้าใจในคุณค่าและวิสัยทัศน์ขององค์กร",
      impact: "ลดความรู้สึกเป็นเจ้าของและความภักดีต่อองค์กร",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center p-4 md:p-8 bg-white"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-medium text-gray-800 mb-4">
          การสื่อสารที่ดี คือรากฐานขององค์กรที่ยั่งยืน
        </h2>
        <p className="text-xl text-gray-600">
          เมื่อพนักงานเข้าใจและรู้สึกเป็นส่วนหนึ่ง
          พวกเขาจะพร้อมฝ่าฟันทุกความท้าทายไปด้วยกัน
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {challenges.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.8 + index * 0.2,
              }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100"
            >
              <div className={`text-${item.color}-600 mb-4`}>
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* 
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="max-w-4xl mx-auto mt-12 p-8 bg-[#c2b17a]/60 rounded-xl  text-white"
      >
        <h3 className="text-2xl font-medium mb-4 text-center">
          ทำไมการสื่อสารภายในจึงสำคัญต่อความยั่งยืน?
        </h3>
        <div className="space-y-4">
          <p>✓ เพิ่มประสิทธิภาพการทำงานผ่านการแบ่งปันความรู้และประสบการณ์</p>
          <p>✓ สร้างวัฒนธรรมองค์กรที่แข็งแกร่งผ่านความเข้าใจร่วมกัน</p>
          <p>✓ รักษาบุคลากรที่มีคุณภาพด้วยความรู้สึกเป็นเจ้าของและความภูมิใจ</p>
          <p>✓ เพิ่มความพร้อมรับมือกับการเปลี่ยนแปลงและวิกฤตต่างๆ</p>
        </div>
      </motion.div> */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.0 }}
        className="text-center mt-12"
      >
        <p className="text-2xl text-gray-800">
          การลงทุนในการสื่อสารภายในวันนี้ คือการสร้าง
          <span className="text-[#a18b59] font-medium">
            {" "}
            ภูมิคุ้มกันให้องค์กรในวันหน้า
          </span>
        </p>
      </motion.div>
    </motion.section>
  );
}
