import { motion } from "framer-motion";
import { Users, Camera, DollarSign } from "lucide-react";

const resources = {
  team: [
    {
      role: "Content Producer",
      count: 2,
      skills: "การเล่าเรื่อง, การสัมภาษณ์",
    },
    {
      role: "Video Editor",
      count: 1,
      skills: "ตัดต่อวิดีโอ, Motion Graphics",
    },
    {
      role: "Digital Asset",
      count: 1,
      skills: "ดูแลระบบ, จัดการคอนเทนต์",
    },
  ],
  equipment: [
    "กล้องวิดีโอคุณภาพสูง",
    "ไมโครโฟนสำหรับสัมภาษณ์",
    "ชุดไฟสตูดิโอ",
    "อุปกรณ์ตัดต่อ",
  ],
  software: [
    "Video Editing Software",
    "Podcast Hosting Platform",
    "Content Management System",
    "Analytics Tools",
  ],
};

const budget = {
  setup: [
    { item: "อุปกรณ์ถ่ายทำ", amount: "xxx" },
    { item: "ซอฟต์แวร์และระบบ", amount: "xxx" },
  ],
  monthly: [
    { item: "ทีมงานผลิต", amount: "xxx" },
    { item: "ค่าระบบรายเดือน", amount: "xxx" },
  ],
};

export default function ResourceSlide() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-white"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-4 text-gray-800">
            Resource & Budget
          </h2>
          <p className="text-gray-600 text-lg">
            ทรัพยากรที่จำเป็นสำหรับการดำเนินโครงการ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-[#a18b59]/10 p-3 rounded-xl">
                <Users className="w-6 h-6 text-[#a18b59]" />
              </div>
              <h3 className="text-2xl font-medium text-gray-800">Team</h3>
            </div>
            <div className="space-y-6">
              {resources.team.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + idx * 0.1 }}
                  className="group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-medium text-gray-700 group-hover:text-[#a18b59] transition-colors">
                      {member.role}
                    </h4>
                    <span className="bg-[#a18b59] text-white px-3 py-1 rounded-full text-sm">
                      {member.count} คน
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">{member.skills}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-[#a18b59]/10 p-3 rounded-xl">
                <Camera className="w-6 h-6 text-[#a18b59]" />
              </div>
              <h3 className="text-2xl font-medium text-gray-800">Equipment</h3>
            </div>
            <ul className="space-y-4">
              {resources.equipment.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#a18b59]" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-[#a18b59]/10 p-3 rounded-xl">
                <DollarSign className="w-6 h-6 text-[#a18b59]" />
              </div>
              <h3 className="text-2xl font-medium text-gray-800">Budget</h3>
            </div>
            <div className="grid grid-cols-1  gap-8">
              <div>
                <h4 className="text-lg font-medium text-gray-700 mb-4">
                  Setup Cost
                </h4>
                {budget.setup.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1 + idx * 0.1 }}
                    className="flex justify-between items-center mb-3"
                  >
                    <span className="text-gray-600">{item.item}</span>
                    <span className="text-[#a18b59] font-medium">
                      {item.amount} บาท
                    </span>
                  </motion.div>
                ))}
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-700 mb-4">
                  Monthly Cost
                </h4>
                {budget.monthly.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 + idx * 0.1 }}
                    className="flex justify-between items-center mb-3"
                  >
                    <span className="text-gray-600">{item.item}</span>
                    <span className="text-[#a18b59] font-medium">
                      {item.amount} บาท
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
