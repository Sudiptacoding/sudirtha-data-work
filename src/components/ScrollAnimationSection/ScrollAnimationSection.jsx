"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CountUp from "react-countup";

export default function AnimatedParallaxSection() {
  const sectionRef = useRef(null);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leftImageX = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const rightImageX = useTransform(scrollYProgress, [0, 1], [0, 350]);

  const opacity1 = useTransform(scrollYProgress, [0, 0.3], [0.2, 1]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.4], [0.2, 1]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.5], [0.2, 1]);

  return (
    <div className="bg-black">
      <section ref={sectionRef} className="relative w-full flex items-center justify-center py-8 overflow-hidden ">
        <motion.div ref={ref} className="absolute left-[23%] !top-[25%] -translate-y-1/2 flex flex-col gap-4 z-10" style={{ x: leftImageX }}>
          <motion.img
            src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/679f511ce23fb32e2b64a2a8_Group%201618874152.avif"
            alt=""
            className="w-48 object-cover !rotate-[8.7052deg]"
          />
          <motion.img
            src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/679f511c0910ed0099e93ae5_Group%201618874147.avif"
            alt=""
            className="w-48 object-cover !-rotate-[8.67804deg] top-[50px] left-[34px] absolute"
          />
        </motion.div>

        <motion.div ref={ref} className="absolute right-[23%] !top-[25%] -translate-y-1/2 flex flex-col gap-4 z-10" style={{ x: rightImageX }}>
          <motion.img
            src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/679f511cc86e2a1d5d76f4cc_Group%201618874151.avif"
            alt=""
            className="w-48 object-cover !-rotate-[8.7052deg]"
          />
          <motion.img
            src="https://cdn.prod.website-files.com/6796419e2d5f03877896246e/679f690527d250b730d285eb_yt.avif"
            alt=""
            className="w-48 object-cover !rotate-[8.67804deg] top-[50px] left-[34px] absolute"
          />
        </motion.div>

        <div ref={ref} className="z-20 text-center space-y-5 px-4 py-32 bg-black ">
          <motion.h2
            style={{ opacity: opacity1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl md:text-4xl font-bold font-syne text-white"
          >
            Tired of boring video content that
          </motion.h2>

          <motion.h2
            style={{ opacity: opacity2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold font-syne text-white"
          >
            don’t stand out? It’s time to upgrade
          </motion.h2>

          <motion.h2
            style={{ opacity: opacity3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold font-syne text-white"
          >
            the game with us!
          </motion.h2>
        </div>
      </section>

      <section className="flex items-start justify-around container mx-auto bg-black flex-wrap">
        <div className="bg-black py-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-white text-3xl md:text-5xl font-bold font-geist">
              <CountUp end={200} duration={3} separator="," enableScrollSpy={true} scrollSpyOnce={true} />
              <span className="text-3xl ml-1">%</span>
            </div>
            <p className="text-white text-lg mt-3 font-syne -mr-48">More Engagement</p>
            <p className="text-[#999999] text-left font-medium text-lg mt-3 font-syne ">Viral Edits</p>
          </div>
        </div>

        <div className="bg-black py-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-white text-3xl md:text-5xl font-bold font-geist">
              <CountUp end={5} duration={3} separator="," enableScrollSpy={true} scrollSpyOnce={true} />
              <span className="text-3xl ml-1">X</span>
            </div>
            <p className="text-white text-lg mt-3 font-syne -mr-48">More Reach</p>
            <p className="text-[#999999] text-left font-medium text-lg mt-3 font-syne ">Strategic Distribution</p>
          </div>
        </div>

        <div className="bg-black py-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-white text-3xl md:text-5xl font-bold font-geist">
              <CountUp end={50} duration={3} separator="," enableScrollSpy={true} scrollSpyOnce={true} />
              <span className="text-3xl ml-1">%</span>
            </div>
            <p className="text-white text-lg mt-3 font-syne -mr-48">More Leads</p>
            <p className="text-[#999999] text-left font-medium text-lg mt-3 font-syne ">Automated Systems</p>
          </div>
        </div>
      </section>
    </div>
  );
}
