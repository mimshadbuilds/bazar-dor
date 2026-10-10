import AllProducts from "@/components/homepage/AllProducts";
import ExpensiveProducts from "@/components/homepage/ExpensiveProducts";
import InexpensiveProducts from "@/components/homepage/InexpensiveProducts";
import Banner from "@/components/shared/Banner";
import ProductsSectionSkeleton from "@/components/shared/ProductsSectionSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
        <Banner />
        <main className="mx-auto max-w-6xl space-y-10 px-4 py-8">
            <Suspense fallback={<ProductsSectionSkeleton title="দামি পণ্য" count={6} />}>
                <ExpensiveProducts />
            </Suspense>
            <Suspense fallback={<ProductsSectionSkeleton title="সস্তা পণ্য" count={6} />}>
                <InexpensiveProducts />
            </Suspense>
            <Suspense fallback={<ProductsSectionSkeleton title="সকল পণ্য" count={8} />}>
                <AllProducts />
            </Suspense>
        </main>
    </div>
  );
}
