import { motion } from "framer-motion";
import { Heart, Brain, Users, BarChart, Plus } from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    category: "Employee Engagement",
    icon: <Heart className="w-6 h-6" />,
    impacts: [
      {
        title: "สร้างความผูกพันองค์กร",
        description: "สร้างความรู้สึกเป็นส่วนหนึ่งและความภาคภูมิใจในองค์กร",
        metric: "Employee Engagement",
        details: [
          "เพิ่มความผูกพันองค์กร 40%",
          "ลดอัตราการลาออก 25%",
          "สร้างแรงบันดาลใจในการทำงาน",
        ],
      },
      {
        title: "เชื่อมต่อทุกช่วงวัย",
        description: "สร้างการแลกเปลี่ยนที่มีคุณค่าระหว่างพนักงานทุกรุ่น",
        metric: "Generation Bridge",
        details: [
          "เชื่อมโยง 4 generations",
          "สร้างการแลกเปลี่ยนประสบการณ์",
          "ลดช่องว่างระหว่างวัย",
        ],
      },
    ],
  },
  {
    category: "Knowledge & Culture",
    icon: <Brain className="w-6 h-6" />,
    impacts: [
      {
        title: "รักษาองค์ความรู้",
        description: "บันทึกและถ่ายทอดประสบการณ์อันทรงคุณค่าขององค์กร",
        metric: "Knowledge Retention",
        details: [
          "ลดการสูญหายของความรู้ 60%",
          "เพิ่มประสิทธิภาพการเรียนรู้",
          "สร้างคลังความรู้องค์กร",
        ],
      },
      {
        title: "ส่งต่อวัฒนธรรมองค์กร",
        description: "ตอกย้ำ DNA และวัฒนธรรมผ่านเรื่องราวที่มีความหมาย",
        metric: "Cultural Heritage",
        details: [
          "สร้างความเข้าใจในวัฒนธรรมองค์กร",
          "เสริมสร้างค่านิยมองค์กร",
          "สืบสานวัฒนธรรมที่ดีงาม",
        ],
      },
    ],
  },
  {
    category: "Communication Excellence",
    icon: <Users className="w-6 h-6" />,
    impacts: [
      {
        title: "การสื่อสารที่มีประสิทธิภาพ",
        description: "สร้างความเข้าใจที่ตรงกันทั่วทั้งองค์กร",
        metric: "Clear Communication",
        details: [
          "เพิ่มประสิทธิภาพการสื่อสาร 50%",
          "ลดความผิดพลาดจากการสื่อสาร",
          "สร้างความเข้าใจที่ตรงกัน",
        ],
      },
      {
        title: "ความร่วมมือระหว่างหน่วยงาน",
        description: "เสริมสร้างความเข้าใจและการทำงานร่วมกันระหว่างสายงาน",
        metric: "Unified Operation",
        details: [
          "เชื่อมโยง 7 Business Units",
          "เพิ่มประสิทธิภาพการทำงานข้ามสายงาน",
          "สร้างเครือข่ายการทำงาน",
        ],
      },
    ],
  },
  {
    category: "Sustainable Growth",
    icon: <BarChart className="w-6 h-6" />,
    impacts: [
      {
        title: "ประสิทธิภาพองค์กร",
        description: "ยกระดับการสื่อสารและการเรียนรู้ภายในองค์กร",
        metric: "Enhanced Efficiency",
        details: [
          "ลดระยะเวลาการเรียนรู้ 30%",
          "เพิ่มประสิทธิภาพการทำงาน",
          "ประหยัดต้นทุนการฝึกอบรม",
        ],
      },
      {
        title: "ภาพลักษณ์องค์กร",
        description: "สะท้อนความเป็นองค์กรที่ทันสมัยและใส่ใจบุคลากร",
        metric: "Corporate Excellence",
        details: [
          "เสริมสร้างภาพลักษณ์องค์กร",
          "ดึงดูดคนรุ่นใหม่",
          "สร้างความน่าเชื่อถือ",
        ],
      },
    ],
  },
];

const expandVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: 0.5, // เพิ่ม duration
        ease: [0.04, 0.62, 0.23, 0.98], // custom easing
      },
      opacity: {
        duration: 0.3,
      },
    },
  },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: {
      height: {
        duration: 0.5,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
      opacity: {
        duration: 0.5,
        delay: 0.1,
      },
    },
  },
};

const detailItemVariants = {
  hidden: { opacity: 0, x: -30 }, // เพิ่ม distance
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5, // เพิ่ม duration
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

export default function BenefitSlide() {
  const [activeImpact, setActiveImpact] = useState<string | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }} // ปรับ transition ให้ smooth
      className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium mb-4 text-gray-800">
            Expected Benefit
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            การเปลี่ยนแปลงที่จะเกิดขึ้นจากการสื่อสารที่มีประสิทธิภาพ
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + index * 0.2,
                }}
                className="bg-gray-50 rounded-xl p-6 border  border-gray-100 hover:shadow-md"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#a18b59]/20 p-3 rounded-lg "
                  >
                    <div className="text-[#a18b59]">{benefit.icon}</div>
                  </motion.div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {benefit.category}
                  </h3>
                </div>

                {/* Impacts */}
                <div className="space-y-6">
                  {benefit.impacts.map((impact, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                      className="space-y-2"
                    >
                      <div
                        className="flex justify-between items-start cursor-pointer group"
                        onClick={() =>
                          setActiveImpact(
                            activeImpact === `${index}-${i}`
                              ? null
                              : `${index}-${i}`
                          )
                        }
                      >
                        <div className="flex gap-2">
                          <motion.div
                            animate={{
                              rotate: activeImpact === `${index}-${i}` ? 45 : 0,
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <Plus className="w-4 h-4 text-[#a18b59]" />
                          </motion.div>
                          <div>
                            <h4 className="text-gray-700 font-medium group-hover:text-[#a18b59] transition-colors duration-200">
                              {impact.title}
                            </h4>
                            <span className="text-[#a18b59] text-sm font-medium">
                              {impact.metric}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm pl-6 transition-all duration-200">
                        {impact.description}
                      </p>

                      {/* Expandable Details */}
                      <motion.div
                        variants={expandVariants}
                        initial="collapsed"
                        animate={
                          activeImpact === `${index}-${i}`
                            ? "expanded"
                            : "collapsed"
                        }
                        className="overflow-hidden pl-6"
                      >
                        <ul className="space-y-2 pt-2">
                          {impact.details.map((detail, idx) => (
                            <motion.li
                              key={idx}
                              custom={idx}
                              variants={detailItemVariants}
                              initial="hidden"
                              animate={
                                activeImpact === `${index}-${i}`
                                  ? "visible"
                                  : "hidden"
                              }
                              className="flex items-center gap-2 text-sm text-gray-600"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-[#a18b59]" />
                              {detail}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
