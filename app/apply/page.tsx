"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    nationality: "",
    language: "both" as string,
    trigger: "" as string,
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FDFAF4] px-6 pt-28 pb-24 md:px-12 md:pt-36 md:pb-32">
        <motion.div
          className="mx-auto max-w-[640px] text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-sans text-[18px] font-extralight leading-relaxed text-[#1a1a1a]">
            ありがとうございます。当日お会いしましょう。
          </p>
          <p className="mt-6 font-serif text-[22px] font-light tracking-[0.02em] text-[#1a1a1a]">
            繋がって、感動して、乾杯。
          </p>
          <p className="mt-4 font-sans text-[15px] font-extralight text-[#999]">
            — ツナカン
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFAF4] px-6 pt-28 pb-24 md:px-12 md:pt-36 md:pb-32">
      <div className="mx-auto max-w-[640px]">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 font-serif text-[32px] font-light tracking-[0.02em] text-[#1a1a1a] md:text-[40px]"
        >
          参加を申し込む
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mb-12 font-sans text-[16px] font-extralight text-[#999]"
        >
          6名限定のディナー。あなたの席、まだあります。
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          <div>
            <label htmlFor="name" className="mb-2 block font-sans text-[14px] font-extralight text-[#1a1a1a]">
              お名前 <span className="text-[#FF6B35]">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#ddd] bg-white px-4 py-3 font-sans text-[15px] font-extralight text-[#1a1a1a] outline-none focus:border-[#FF6B35]"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block font-sans text-[14px] font-extralight text-[#1a1a1a]">
              メールアドレス <span className="text-[#FF6B35]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#ddd] bg-white px-4 py-3 font-sans text-[15px] font-extralight text-[#1a1a1a] outline-none focus:border-[#FF6B35]"
            />
          </div>

          <div>
            <label htmlFor="nationality" className="mb-2 block font-sans text-[14px] font-extralight text-[#1a1a1a]">
              国籍 <span className="text-[#FF6B35]">*</span>
            </label>
            <input
              id="nationality"
              name="nationality"
              type="text"
              required
              value={form.nationality}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#ddd] bg-white px-4 py-3 font-sans text-[15px] font-extralight text-[#1a1a1a] outline-none focus:border-[#FF6B35]"
            />
          </div>

          <div>
            <label htmlFor="language" className="mb-2 block font-sans text-[14px] font-extralight text-[#1a1a1a]">
              言語 <span className="text-[#FF6B35]">*</span>
            </label>
            <select
              id="language"
              name="language"
              required
              value={form.language}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#ddd] bg-white px-4 py-3 font-sans text-[15px] font-extralight text-[#1a1a1a] outline-none focus:border-[#FF6B35]"
            >
              <option value="ja">日本語</option>
              <option value="en">English</option>
              <option value="both">Both OK</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-sans text-[14px] font-extralight text-[#1a1a1a]">
              きっかけ <span className="text-[#FF6B35]">*</span>
            </label>
            <div className="flex flex-wrap gap-4">
              {["チラシ", "Instagram", "友達の紹介", "その他"].map((opt) => (
                <label key={opt} className="flex items-center gap-2 font-sans text-[15px] font-extralight text-[#1a1a1a]">
                  <input
                    type="radio"
                    name="trigger"
                    value={opt}
                    checked={form.trigger === opt}
                    onChange={handleChange}
                    className="border-[#ddd] text-[#FF6B35] focus:ring-[#FF6B35]"
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block font-sans text-[14px] font-extralight text-[#1a1a1a]">
              メッセージ（任意）
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-lg border border-[#ddd] bg-white px-4 py-3 font-sans text-[15px] font-extralight text-[#1a1a1a] outline-none focus:border-[#FF6B35]"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-[100px] border-none bg-[#FF6B35] px-[52px] py-[18px] font-sans text-[16px] font-light tracking-[0.1em] text-white transition-all duration-300 hover:bg-[#e85a25] hover:scale-[1.02]"
          >
            申し込む <span aria-hidden>→</span>
          </button>
        </motion.form>
      </div>
    </div>
  );
}
