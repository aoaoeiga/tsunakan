"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    id: "vol01",
    title: "ツナカン vol.01",
    date: "2026年3月13日 19:00〜21:30",
    place: "京都市内",
    fee: "¥2,000",
    status: "終了" as const,
    cta: null,
  },
  {
    id: "vol02",
    title: "ツナカン vol.02",
    date: "2026年4月（調整中）",
    place: "京都市内",
    capacity: "6名限定",
    fee: "¥2,000",
    status: "受付中" as const,
    cta: true,
  },
];

export default function EventsPage() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const inViewHeading = useInView(headingRef, { once: true, amount: 0.2 });
  const inView1 = useInView(card1Ref, { once: true, amount: 0.1 });
  const inView2 = useInView(card2Ref, { once: true, amount: 0.1 });
  const inViews = [inView1, inView2];

  return (
    <div className="min-h-screen bg-[#FDFAF4] px-6 pt-28 pb-24 md:px-12 md:pt-36 md:pb-32">
      <div className="mx-auto max-w-[640px]">
        <motion.h1
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={inViewHeading ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 font-serif text-[32px] font-light tracking-[0.02em] text-[#1a1a1a] md:text-[40px]"
        >
          次の夜、空いてますか？
        </motion.h1>

        <div className="space-y-8">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              ref={i === 0 ? card1Ref : card2Ref}
              initial={{ opacity: 0, y: 40 }}
              animate={inViews[i] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="rounded-[20px] border border-[#eee] bg-white p-8"
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <h2 className="font-serif text-[22px] font-light text-[#1a1a1a]">
                  {event.title}
                </h2>
                <span
                  className={`rounded-[100px] px-4 py-1.5 font-sans text-[12px] font-light ${
                    event.status === "受付中"
                      ? "bg-[#FF6B35] text-white"
                      : "bg-[#eee] text-[#999]"
                  }`}
                >
                  {event.status}
                </span>
              </div>
              <dl className="space-y-2 font-sans text-[15px] font-extralight text-[#1a1a1a]">
                <div className="flex gap-3">
                  <dt className="text-[#999]">日時</dt>
                  <dd>{event.date}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="text-[#999]">場所</dt>
                  <dd>{event.place}</dd>
                </div>
                {"capacity" in event && (
                  <div className="flex gap-3">
                    <dt className="text-[#999]">定員</dt>
                    <dd>{event.capacity}</dd>
                  </div>
                )}
                <div className="flex gap-3">
                  <dt className="text-[#999]">参加費</dt>
                  <dd>{event.fee}</dd>
                </div>
              </dl>
              {event.cta && (
                <div className="mt-6">
                  <Link
                    href="/apply"
                    className="inline-flex items-center justify-center rounded-[100px] border-none bg-[#FF6B35] px-[52px] py-[18px] font-sans text-[16px] font-light tracking-[0.1em] text-white transition-all duration-300 hover:bg-[#e85a25] hover:scale-[1.02]"
                  >
                    参加を申し込む <span aria-hidden>→</span>
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
