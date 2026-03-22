"use client";
import Button from "@/components/common/Button";
import imgBrochure from "@/images/brochure.png";
import imgDuck from "@/images/duck.png";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export default function BrochureSection() {
  const [isEngaged, setIsEngaged] = useState(false);

  return (
    <section id="this-month" className="border-b border-dashed">
      <div className="container-wide flex flex-col-reverse items-center gap-15 pt-14 pb-19 lg:flex-row lg:gap-30">
        <div className="max-w-2xl text-center lg:text-start">
          <h2 className="mb-10 text-[45px] leading-[1.1] tracking-[-0.04em] md:text-[75px]">
            This Month: Local Grill Gear, Our Favorite Sunscreen
          </h2>
          <Button text="Download the Circular" link href="/" />
        </div>
        <div className="relative shrink-0 pl-11.25">
          <div className="absolute top-1/2 left-0 z-10 flex">
            <motion.p
              className="font-fake-receipt max-w-14"
              animate={{
                x: isEngaged ? -40 : 0,
                opacity: isEngaged ? 0 : 1,
              }}
              transition={{ duration: 0.5 }}>
              Flip over for more!
            </motion.p>
            <motion.div
              animate={{
                x: isEngaged ? -120 : 0,
                opacity: isEngaged ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}>
              <Image src={imgDuck} width={78} alt="duck decoration" />
            </motion.div>
          </div>
          <div
            className="perspective-[1000px]"
            onMouseEnter={() => setIsEngaged(true)}
            onMouseLeave={() => setIsEngaged(false)}
            onClick={() => setIsEngaged((v) => !v)}>
            <Image
              src={imgBrochure}
              width={498}
              sizes="(max-width: 580px) calc(100vw - 85px), 498px"
              alt="Locavore this month circular"
              className={`transition-transform duration-500 transform-3d ${isEngaged ? "transform-[rotateY(180deg)]" : ""}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
