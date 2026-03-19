"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";

const easeOut = [0.33, 1, 0.68, 1];
const minDuration = 0.8;

export default function Page() {
  const statementRef = useRef<HTMLDivElement | null>(null);
  const statementInView = useInView(statementRef, { once: true, amount: 0.2 });
  const eventsCardRef = useRef<HTMLDivElement | null>(null);
  const eventsCardInView = useInView(eventsCardRef, { once: true, amount: 0.2 });

  const heroStagger = 0.2;
  const heroBgTransition = useMemo(
    () => ({ duration: 0.5, ease: "easeOut" }),
    [],
  );
  const heroItemTransition = useMemo(
    () => ({ duration: minDuration, ease: easeOut }),
    [],
  );

  const heroContainerVariants = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: {
          staggerChildren: heroStagger,
          delayChildren: 0.1,
        },
      },
    }),
    [],
  );

  const heroTagVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24 },
      show: { opacity: 1, y: 0, transition: heroItemTransition },
    }),
    [heroItemTransition],
  );

  const heroTitleLineVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
      show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: heroItemTransition,
      },
    }),
    [heroItemTransition],
  );

  const heroSubVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24 },
      show: { opacity: 1, y: 0, transition: heroItemTransition },
    }),
    [heroItemTransition],
  );

  const statementContainerVariants = useMemo(
    () => ({
      hidden: {},
      show: {
        transition: { staggerChildren: 0.3, delayChildren: 0.05 },
      },
    }),
    [],
  );

  const statementItemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, x: -48 },
      show: {
        opacity: 1,
        x: 0,
        transition: { duration: minDuration, ease: easeOut },
      },
    }),
    [],
  );

  return (
    <div className="min-h-screen text-[#1C1C1C]">
      {/* Section 1 - Hero */}
      <motion.section
        className="flex min-h-screen items-center justify-center px-6 md:px-12"
        initial={{ backgroundColor: "rgba(253,250,244,0)" }}
        animate={{ backgroundColor: "#FDFAF4" }}
        transition={heroBgTransition}
      >
        <motion.div
          className="mx-auto w-full max-w-[960px] text-center"
          variants={heroContainerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={heroTagVariants}
            className="mb-10 font-sans text-[12px] tracking-[0.22em] text-[#FF6B35] md:text-[13px]"
          >
            京都発 · 留学生×日本人 · 6名限定ディナー
          </motion.p>

          <h1 className="mb-8 font-serif text-[72px] font-black leading-[1.1]">
            <motion.span
              className="block"
              variants={heroTitleLineVariants}
            >
              あなたの隣に座るのは、まだ会ったことのない
            </motion.span>
            <motion.span
              className="block"
              variants={heroTitleLineVariants}
            >
              親友かもしれない。
            </motion.span>
          </h1>

          <motion.p
            variants={heroSubVariants}
            className="mx-auto mb-14 max-w-[820px] font-sans text-[16px] font-light leading-relaxed text-[#888888]"
          >
            繋がって、感動して、乾杯。
          </motion.p>

          <motion.a
            variants={heroSubVariants}
            href="#"
            className="inline-flex items-center justify-center rounded-[100px] bg-[#FF6B35] px-[40px] py-[16px] font-sans text-[16px] font-medium text-white"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            参加を申し込む <span aria-hidden>→</span>
          </motion.a>
        </motion.div>
      </motion.section>

      {/* Section 2 - Statement */}
      <section className="bg-[#1C1C1C] py-40 text-center">
        <motion.div
          ref={statementRef}
          className="mx-auto w-full max-w-[960px]"
          variants={statementContainerVariants}
          initial="hidden"
          animate={statementInView ? "show" : "hidden"}
        >
          <motion.div
            variants={statementItemVariants}
            className="mb-6 font-serif text-[48px] leading-[1.15] text-white"
          >
            3年間、同じ人間としか話してないかも。
          </motion.div>

          <motion.div
            variants={statementItemVariants}
            className="mb-10 font-sans text-[24px] font-light leading-relaxed text-[#888888]"
          >
            それって、もったいなくないか。
          </motion.div>

          <motion.div
            variants={statementItemVariants}
            className="font-serif text-[56px] leading-[1.15] text-[#FF6B35]"
          >
            ツナカンは、その壁を取り払う6人の夜。
          </motion.div>
        </motion.div>
      </section>

      {/* Section 3 - Events */}
      <section className="bg-white py-40">
        <div className="mx-auto w-full max-w-[960px] px-6 md:px-12">
          <h2 className="mb-12 font-serif text-[36px] text-[#1C1C1C]">
            次の夜、空いてますか？
          </h2>

          <motion.div
            ref={eventsCardRef}
            className="rounded-[20px] border border-[#eeeeee] p-[2rem] transition-shadow"
            initial={{ opacity: 0, y: 60 }}
            animate={
              eventsCardInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 60 }
            }
            transition={{ duration: minDuration, ease: easeOut }}
            whileHover={{
              y: -8,
              boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
              transition: { duration: 0.25, ease: easeOut },
            }}
          >
            <div className="mb-6 flex flex-wrap items-start justify-between gap-6">
              <div className="min-w-[220px]">
                <div className="mb-3 font-serif text-[20px] font-bold text-[#1C1C1C]">
                  ツナカン vol.02
                </div>
                <div className="font-sans text-[16px] font-light leading-relaxed text-[#1C1C1C]">
                  2026年4月 · 京都市内 · 6名限定 · ¥2,000
                </div>
              </div>

              <span className="inline-flex items-center justify-center rounded-[100px] bg-[#FF6B35] px-4 py-2 font-sans text-[12px] font-medium text-white">
                受付中
              </span>
            </div>

            <a
              href="#"
              className="inline-flex items-center justify-center rounded-[100px] bg-[#FF6B35] px-[40px] py-[16px] font-sans text-[16px] font-medium text-white transition-transform hover:scale-[1.03] md:px-[44px]"
            >
              参加を申し込む <span aria-hidden>→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section 4 - Footer */}
      <footer className="bg-[#1C1C1C] py-40 text-center text-white">
        <div className="mx-auto w-full max-w-[960px] px-6 md:px-12">
          <div className="font-serif text-[44px] font-bold leading-[1.05]">
            TSUNAKAN.
          </div>
          <div className="mt-8 font-sans text-[16px] font-light text-white/90">
            繋がって、感動して、乾杯。
          </div>
          <div className="mt-4 font-sans text-[16px] font-light text-white/70">
            Kyoto · 2026
          </div>
        </div>
      </footer>
    </div>
  );
}
