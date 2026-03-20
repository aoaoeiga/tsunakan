"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#FDFAF4] px-6 py-[120px] md:px-12">
      <motion.div
        className="mx-auto w-full max-w-[640px] text-center"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
          },
        }}
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
          className="mb-10 font-sans text-[12px] font-extralight tracking-[0.25em] text-[#FF6B35]"
        >
          京都発 · 留学生×日本人 · 6名限定ディナー
        </motion.p>

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
          className="mb-8 font-serif text-[36px] font-light leading-[1.2] tracking-[0.02em] text-[#1a1a1a] md:text-[52px]"
        >
          あなたの隣に座るのは、まだ会ったことのない親友かもしれない。
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
          className="mx-auto font-sans text-[16px] font-extralight leading-relaxed text-[#999]"
        >
          繋がって、感動して、乾杯。
        </motion.p>
      </motion.div>
    </section>
  );
}
