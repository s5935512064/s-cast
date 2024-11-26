import { motion } from "framer-motion";
import { History, Search, Video, Users, Package } from "lucide-react";

export default function SolutionSlide() {
  const series = [
    {
      icon: History,
      title: "เรื่องเล่าชาวสินธร",
      description:
        "เรื่องราวการเดินทางของสยามสินธร จากอดีตถึงปัจจุบัน ผ่านบททดสอบและความสำเร็จมากมาย",
      highlight: "สร้างความภูมิใจและความเข้าใจในรากฐานองค์กร",
    },
    {
      icon: Users,
      title: "เรื่องเล่า 3 ดื่ม",
      description:
        "พื้นที่แห่งการแบ่งปันประสบการณ์และบทเรียนจากพี่ๆ ผ่านเครื่องดื่ม 3 แก้วที่จะพาเราย้อนเวลากลับไปสู่ช่วงเวลาสำคัญของการทำงาน",
      highlight: "ถ่ายทอดความรู้และประสบการณ์อันล้ำค่า",
    },
    {
      icon: Search,
      title: "เนี๊ยบรู้ โลกรู้",
      description:
        "Zoom in ประเด็นสำคัญขององค์กร วิสัยทัศน์ และวัฒนธรรม ในรูปแบบที่เข้าใจง่าย",
      highlight: "ทำเรื่องซับซ้อนให้เข้าใจง่ายสำหรับทุกคน",
    },
    {
      icon: Video,
      title: "ขอสิงหน่อย",
      description: "Vlog ติดตามชีวิตการทำงานของพนักงานแต่ละ BU ใน 1 วัน",
      highlight: "สร้างความเข้าใจในบทบาทของแต่ละหน่วยงาน",
    },

    {
      icon: Package,
      title: "กว่าจะเป็น..",
      description: "เจาะลึกเบื้องหลังผลิตภัณฑ์แต่ละตัวของสยามสินธร",
      highlight: "สร้างความเข้าใจในคุณค่าของผลิตภัณฑ์",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center p-4 md:p-8 bg-white"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-medium text-gray-800 mb-4">
          S-CAST Channel
        </h2>
        <p className="text-xl text-gray-600">
          5 Series ที่จะเปลี่ยนการสื่อสารภายในองค์กรให้มีชีวิตชีวา
        </p>
      </motion.div>

      {/* Series Grid */}
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {series.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.8 + index * 0.2,
              }}
              className="bg-gray-50 rounded-xl flex flex-col justify-between p-6 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#a18b59]/20 p-3 rounded-lg">
                  <item.icon className="w-6 h-6 text-[#a18b59]" />
                </div>
                <h3 className="text-xl font-medium text-gray-800">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-4 flex-1">{item.description}</p>

              <div className="bg-[#a18b59]/10 p-3 rounded-lg">
                <p className="text-[#a18b59] text-sm font-medium">
                  ✨ {item.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
