import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "পেজটি খুঁজে পাওয়া যায়নি",
    description: "আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি। আজকের বাজারদর দেখতে হোমপেজে ফিরে যান।",
};

export default function NotFound() {
    return (
        <main className="flex min-h-[70vh] items-center justify-center bg-[#f0f5f0] px-4 py-16 sm:px-6">
            <div className="mx-auto w-full max-w-[640px] rounded-[30px] border border-[#dce5dc] bg-[#fafcfa] px-6 py-12 text-center shadow-sm sm:px-10 sm:py-16">
                <div className="mx-auto grid size-20 place-items-center rounded-3xl bg-[#e1f2e7] text-4xl">
                    🧺
                </div>
                    <p className="mt-6 inline-block rounded-full bg-[#e1f2e7] px-4 py-1.5 text-sm font-medium text-red-700">
                        এরর ৪০৪
                    </p>
                <h1 className="mt-4 text-[28px] font-bold leading-tight tracking-[-0.02em] text-[#111] sm:text-[34px]">
                    পেজটি খুঁজে পাওয়া যায়নি
                </h1>
                <p className="mx-auto mt-4 max-w-[460px] text-[15px] leading-[1.8] text-[#555] sm:text-[16px]">
                    আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে, মুছে ফেলা হয়েছে,
                    অথবা কখনোই ছিল না। বাজারের দাম দেখতে হোমপেজে ফিরে যান।
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link href="/"
                        className="btn btn-sm h-11 gap-2 rounded-lg border-0 bg-[#05893e] px-6 text-sm font-semibold text-white shadow-sm hover:bg-[#05662f]">
                        🏠 হোমপেজে যান
                    </Link>
                    <Link href="/category/chal"
                        className="btn btn-sm btn-ghost h-11 gap-2 rounded-lg border border-[#e0e8e1] bg-[#f4f6f4] px-6 text-sm font-medium text-[#26352a] hover:bg-[#e8ede9]">
                        🍚 আজকের বাজার দেখুন
                    </Link>
                </div>
                <p className="mt-8 text-xs text-[#69766b]">
                    সহায়তা প্রয়োজন?{" "}
                    <Link href="/contact"
                        className="font-medium text-[#05893e] hover:underline">
                        আমাদের সাথে যোগাযোগ করুন
                    </Link>
                </p>
            </div>
        </main>
    );
}