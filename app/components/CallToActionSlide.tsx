import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Calendar, Flag } from "lucide-react";

const nextSteps = [
  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: "อนุมัติโครงการ",
    description: "เพื่อเริ่มดำเนินการจัดซื้ออุปกรณ์และจัดตั้งทีม",
    timing: "ภายในสัปดาห์นี้",
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "ประชุมทีมงาน",
    description: "วางแผนการผลิตคอนเทนต์ 3 ตอนแรก",
    timing: "สัปดาห์หน้า",
  },
  {
    icon: <Flag className="w-5 h-5" />,
    title: "เริ่ม Pilot Phase",
    description: "ทดลองผลิตและทดสอบกับกลุ่มเป้าหมาย",
    timing: "ภายใน 1 เดือน",
  },
];

export default function CallToActionSlide() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen flex items-center justify-center p-4 md:p-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Next Steps
          </h2>
          <p className="text-white/80 text-sm md:text-base">
            ขั้นตอนต่อไปในการเริ่มโครงการ S-CAST
          </p>
        </motion.div>

        {/* Next Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {nextSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 rounded-lg p-6 text-left"
            >
              <div className="flex items-center gap-3 text-blue-400 mb-4">
                {step.icon}
                <span className="text-sm font-medium">{step.timing}</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-white/70 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="space-y-6"
        >
          {/* Timeline Indicator */}
          <div className="flex items-center justify-center gap-3">
            <Clock className="w-5 h-5 text-emerald-400" />
            <span className="text-white/90">
              ระยะเวลาเตรียมการ: 2-3 สัปดาห์
            </span>
          </div>

          {/* Main CTA */}
          <div className="inline-block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 
                rounded-lg px-8 py-4 cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <span className="text-white font-medium">
                  เริ่มโครงการ S-CAST
                </span>
                <ArrowRight
                  className="w-5 h-5 text-white 
                  transition-transform group-hover:translate-x-1"
                />
              </div>
            </motion.div>
          </div>

          {/* Contact */}
          <p className="text-white/60 text-sm">
            สอบถามข้อมูลเพิ่มเติม: digital@siamsindhorn.com
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
