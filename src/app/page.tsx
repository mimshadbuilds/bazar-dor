import AllProducts from "@/components/homepage/AllProducts";
import ExpensiveProducts from "@/components/homepage/ExpensiveProducts";
import InexpensiveProducts from "@/components/homepage/InexpensiveProducts";
import Banner from "@/components/shared/Banner";
import ProductsSectionSkeleton from "@/components/shared/ProductsSectionSkeleton";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "আজকের বাজার দর",
    description: "চাল, ডাল, তেল, সবজি, মাছ ও মাংসের আজকের বাজারদর, দাম বৃদ্ধি ও কমার তথ্য এক নজরে দেখুন।",
};

export default function Home() {
    return (
    <div>
        <Suspense fallback={
            <section aria-hidden="true" className="bg-[#f0f5f0] px-4 py-7 sm:px-6 lg:px-8 lg:py-8">
                <div className="mx-auto grid min-h-[300px] w-full max-w-6xl animate-pulse grid-cols-1 items-center rounded-[30px] border border-[#dce5dc] bg-[#fafcfa] px-5 py-10 shadow-sm sm:px-8 md:grid-cols-2 md:px-10 lg:px-5">
                    <div className="space-y-5">
                        <div className="h-7 w-36 rounded-full bg-[#dce5dc]" />
                        <div className="h-12 max-w-[500px] rounded bg-[#dce5dc]" />
                        <div className="h-4 max-w-[540px] rounded bg-[#dce5dc]" />
                        <div className="h-4 max-w-[460px] rounded bg-[#dce5dc]" />
                    </div>
                    <div className="mx-auto mt-8 size-[220px] rounded-full bg-[#dce5dc] md:mt-0" />
                </div>
            </section>
        }>
            <Banner />
        </Suspense>
        <main className="mx-auto max-w-6xl space-y-10 px-4 py-8">
            <Suspense fallback={<ProductsSectionSkeleton title="কম দামি পণ্য" count={6} />}>
                <ExpensiveProducts />
            </Suspense>
            <Suspense fallback={<ProductsSectionSkeleton title="বেশি দামি পণ্য" count={6} />}>
                <InexpensiveProducts />
            </Suspense>
            <Suspense fallback={<ProductsSectionSkeleton title="সকল পণ্য" count={8} />}>
                <AllProducts />
            </Suspense>
        </main>
    </div>
    );
}
