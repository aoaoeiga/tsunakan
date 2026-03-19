"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";

const minDuration = 0.8;

export default function Page() {
  const statementRef = useRef<HTMLDivElement | null>(null);
  const statementInView = useInView(statementRef, { once: true, amount: 0.2 });
  const eventsCardRef = useRef<HTMLDivElement | null>(null);
  const eventsCardInView = useInView(eventsCardRef, { once: true, amount: 0.2 });

  const heroStagger = 0.2;

  const heroContainerVariants = useMemo(
    () => ({
      hidden: {},
      show: {},
    }),
    [],
  );

  const heroTagVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24 },
      show: { opacity: 1, y: 0 },
    }),
    [],
  );

  const heroTitleLineVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
      show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      },
    }),
    [],
  );

  const heroSubVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24 },
      show: { opacity: 1, y: 0 },
    }),
    [],
  );

  const statementContainerVariants = useMemo(
    () => ({
      hidden: {},
      show: {},
    }),
    [],
  );

  const statementItemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, x: -48 },
      show: { opacity: 1, x: 0 },
    }),
    [],
  );

  return (
    <div className="min-h-screen bg-[#FDFAF4] text-[#1a1a1a]">
      {/* Section 1 - Hero */}
      <motion.section
        className="flex min-h-screen items-center justify-center px-6 py-[120px] md:px-12"
        initial={{ backgroundColor: "rgba(253,250,244,0)" }}
        animate={{ backgroundColor: "#FDFAF4" }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="mx-auto w-full max-w-[640px] text-center"
          variants={heroContainerVariants}
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: heroStagger, delayChildren: 0.1 }}
        >
          <motion.p
            variants={heroTagVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-10 font-sans text-[12px] tracking-[0.25em] text-[#FF6B35]"
          >
            京都発 · 留学生×日本人 · 6名限定ディナー
          </motion.p>

          <h1 className="mb-8 font-serif text-[36px] font-light leading-[1.2] tracking-[0.02em] md:text-[52px]">
            <motion.span
              className="block"
              variants={heroTitleLineVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              あなたの隣に座るのは、まだ会ったことのない
            </motion.span>
            <motion.span
              className="block"
              variants={heroTitleLineVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              親友かもしれない。
            </motion.span>
          </h1>

          <motion.p
            variants={heroSubVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto mb-12 font-sans text-[16px] font-extralight leading-relaxed text-[#999999]"
          >
            繋がって、感動して、乾杯。
          </motion.p>

          <div className="flex flex-col items-center gap-2">
            <motion.a
              variants={heroSubVariants}
              href="#"
              className="inline-flex items-center justify-center rounded-[100px] border-none bg-[#FF6B35] px-[52px] py-[18px] font-sans text-[16px] font-light tracking-[0.1em] text-white transition-all duration-300 hover:bg-[#e85a25] hover:scale-[1.02]"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              参加を申し込む <span aria-hidden>→</span>
            </motion.a>
            <span className="font-sans text-[11px] text-[#999999]">残り3席</span>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 2 - Statement */}
      <section className="bg-[#111111] py-40 text-center">
        <motion.div
          ref={statementRef}
          className="mx-auto w-full max-w-[640px]"
          variants={statementContainerVariants}
          initial="hidden"
          animate={statementInView ? "show" : "hidden"}
          transition={{ staggerChildren: 0.3, delayChildren: 0.05 }}
        >
          <motion.div
            variants={statementItemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 font-serif text-[48px] font-light leading-[1.15] text-white"
          >
            3年間、同じ人間としか話してないかも。
          </motion.div>

          <motion.div
            variants={statementItemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-10 font-sans text-[24px] font-extralight leading-relaxed text-[#999999]"
          >
            それって、もったいなくないか。
          </motion.div>

          <motion.div
            variants={statementItemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-[56px] font-light leading-[1.15] text-[#FF6B35]"
          >
            ツナカンは、その壁を取り払う6人の夜。
          </motion.div>
        </motion.div>
      </section>

      {/* Section 3 - Events */}
      <section className="bg-[#FDFAF4] py-40">
        <div className="mx-auto w-full max-w-[640px] px-6 md:px-12">
          <h2 className="mb-12 font-serif text-[36px] font-light text-[#1a1a1a]">
            次の夜、空いてますか？
          </h2>

          <motion.div
            ref={eventsCardRef}
            className="rounded-[20px] border border-[#eeeeee] p-8 transition-shadow"
            initial={{ opacity: 0, y: 60 }}
            animate={
              eventsCardInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 60 }
            }
            transition={{ duration: minDuration, ease: "easeOut" }}
            whileHover={{
              y: -8,
              boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
              transition: { duration: 0.25, ease: "easeOut" },
            }}
          >
            <div className="mb-6 flex flex-wrap items-start justify-between gap-6">
              <div className="min-w-[200px]">
                <div className="mb-3 font-serif text-[20px] font-light text-[#1a1a1a]">
                  ツナカン vol.02
                </div>
                <div className="font-sans text-[16px] font-extralight leading-relaxed text-[#999999]">
                  2026年4月 · 京都市内 · 6名限定 · ¥2,000
                </div>
              </div>

              <span className="inline-flex items-center justify-center rounded-[100px] bg-[#FF6B35] px-4 py-2 font-sans text-[12px] font-light text-white">
                受付中
              </span>
            </div>

            <div className="flex flex-col items-start gap-2">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-[100px] border-none bg-[#FF6B35] px-[52px] py-[18px] font-sans text-[16px] font-light tracking-[0.1em] text-white transition-all duration-300 hover:bg-[#e85a25] hover:scale-[1.02]"
              >
                参加を申し込む <span aria-hidden>→</span>
              </a>
              <span className="font-sans text-[11px] text-[#999999]">残り3席</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4 - Footer */}
      <footer className="bg-[#111111] py-40 text-center text-white">
        <div className="mx-auto w-full max-w-[640px] px-6 md:px-12">
          <div className="font-serif text-[44px] font-light leading-[1.05]">
            TSUNAKAN.
          </div>
          <div className="mt-8 font-sans text-[16px] font-extralight text-white/90">
            繋がって、感動して、乾杯。
          </div>
          <div className="mt-4 font-sans text-[16px] font-extralight text-white/70">
            Kyoto · 2026
          </div>
        </div>
      </footer>
    </div>
  );
}
