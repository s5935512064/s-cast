import { motion } from "framer-motion";
import Image from "next/image";

const IntroSlide = () => {
  return (
    <motion.section
      className="h-screen flex flex-col justify-center items-center p-4 md:p-8 relative "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Image
          src="/assets/logo.webp"
          alt="Siam Sindhorn Logo"
          sizes="100vw"
          width={0}
          height={0}
          className="h-full w-[120px] object-contain object-center "
        />
      </motion.div>

      <motion.div
        className="text-center  max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-4">
          S-CAST
          <span className="block text-2xl md:text-3xl font-light ">
            เรื่องเล่าชาวสินธร
          </span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mb-8 flex flex-col items-center "
      >
        <p className="text-xl opacity-80 font-light leading-relaxed mb-8">
          พื้นที่สำหรับแบ่งปันเรื่องราวดีๆ ประสบการณ์ดีๆ จากพี่ๆ น้องๆ
          ชาวสยามสินธร
        </p>
      </motion.div>
    </motion.section>
  );
};

export default IntroSlide;
