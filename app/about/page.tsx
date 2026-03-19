"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutPage() {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const inView1 = useInView(ref1, { once: true, amount: 0.2 });
  const inView2 = useInView(ref2, { once: true, amount: 0.2 });

  return (
    <div className="min-h-screen bg-[#FDFAF4] px-6 pt-28 pb-24 md:px-12 md:pt-36 md:pb-32">
      <div className="mx-auto max-w-[640px]">
        <motion.h1
          ref={ref1}
          initial={{ opacity: 0, y: 24 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 font-serif text-[32px] font-light tracking-[0.02em] text-[#1a1a1a] md:text-[40px]"
        >
          なぜ、ツナカンなのか。
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="space-y-6 font-sans text-[16px] font-extralight leading-[1.9] tracking-[0.02em] text-[#1a1a1a]"
        >
          <p>
            京都産業大学には、世界中から留学生が集まる。
            でも、彼らは留学生同士でかたまり、日本人は日本人同士でかたまる。
            同じキャンパスにいるのに、交わることがない。
          </p>
          <p>
            ツナカンは、その壁を取り払う6人のディナー。
            AIが設計した会話カードが、初対面でも自然と深い対話を引き出す。
            肩書きも国籍も関係ない。ただ、人間同士として話す夜。
          </p>
        </motion.div>

        <motion.blockquote
          ref={ref2}
          initial={{ opacity: 0, y: 24 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-20 text-center font-serif text-[24px] font-light leading-[1.4] tracking-[0.02em] text-[#1a1a1a] md:mt-28 md:text-[32px]"
        >
          「魂と魂が出会う場所を、京都に。」
        </motion.blockquote>
      </div>
    </div>
  );
}
