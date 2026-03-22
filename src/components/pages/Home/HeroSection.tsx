import logo from "@/images/logo.png";
import { motion } from "motion/react";
import Image from "next/image";

export default function HeroSection() {
  const infoClassNames =
    "max-w-54.5 shrink-0 text-center text-2xl uppercase md:text-4xl";
  return (
    <section className="py-20 lg:py-0">
      <div className="container flex h-175 flex-col items-center justify-between lg:flex-row">
        <motion.div
          className={infoClassNames}
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}>
          434 6th ST GREENWICH VILLAGE
        </motion.div>
        <Image
          src={logo}
          className="w-4/5 lg:max-w-211"
          alt="Locavore variety store logo"
          sizes="(min-width: 1200px) 60vw, 100vw"
        />
        <motion.div
          className={infoClassNames}
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}>
          <p>Open daily</p>
          <p>10am-7pm</p>
        </motion.div>
      </div>
    </section>
  );
}
