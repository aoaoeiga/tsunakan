import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#eee] bg-[#FDFAF4] py-16">
      <div className="mx-auto max-w-[640px] px-6 text-center md:px-12">
        <Link
          href="/"
          className="font-serif text-2xl font-light text-[#1a1a1a] tracking-[0.02em]"
        >
          ツナカン
        </Link>
        <p className="mt-4 font-sans text-[14px] font-extralight text-[#999] tracking-[0.02em]">
          繋がって、感動して、乾杯。
        </p>
        <p className="mt-2 font-sans text-[13px] font-extralight text-[#999]">
          Kyoto
        </p>
      </div>
    </footer>
  );
}
