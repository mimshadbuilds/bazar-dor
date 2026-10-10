import Link from "next/link";

export default function ProductNotFound() {
    return (
        <main className="flex min-h-[60vh] items-center justify-center bg-[#f0f5f0] px-4 py-16 sm:px-6">
            <div className="mx-auto w-full max-w-[560px] rounded-[30px] border border-[#dce5dc] bg-[#fafcfa] px-6 py-12 text-center shadow-sm sm:px-10">
                <div className="mx-auto grid size-20 place-items-center rounded-3xl bg-[#e1f2e7] text-4xl">
                    🔍
                </div>
                    <p className="mt-6 inline-block rounded-full bg-[#e1f2e7] px-4 py-1.5 text-sm font-medium text-[#05893e]">
                        পণ্য পাওয়া যায়নি!
                    </p>
                    <h1 className="mt-4 text-2xl font-bold tracking-[-0.02em] text-[#111] sm:text-3xl">
                        এই পণ্যটি খুঁজে পাওয়া যায়নি।
                    </h1>
                    <p className="mx-auto mt-4 max-w-[420px] text-[15px] leading-[1.8] text-[#555]">
                        পণ্যটি হয়তো সরিয়ে ফেলা হয়েছে বা লিংকটি ভুল। অন্যান্য
                        পণ্যের আজকের দাম দেখুন।
                    </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link href="/"
                        className="btn btn-sm h-11 gap-2 rounded-lg border-0 bg-[#05893e] px-6 text-sm font-semibold text-white shadow-sm hover:bg-[#05662f]">
                        🏠 হোমে ফিরুন
                    </Link>
                    <Link href="/category/chal"
                        className="btn btn-sm btn-ghost h-11 gap-2 rounded-lg border border-[#e0e8e1] bg-[#f4f6f4] px-6 text-sm font-medium text-[#26352a] hover:bg-[#e8ede9]">
                        🍚 সব পণ্য
                    </Link>
                </div>
            </div>
        </main>
    );
}