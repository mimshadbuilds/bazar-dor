import AllProducts from "@/components/homepage/AllProducts";
import ExpensiveProducts from "@/components/homepage/ExpensiveProducts";
import InexpensiveProducts from "@/components/homepage/InexpensiveProducts";
import Banner from "@/components/shared/Banner";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={ <h1>তারিখ লোড হচ্ছে...</h1> }>
        <Banner />
      </Suspense>      
      <ExpensiveProducts />
      <InexpensiveProducts />
      <AllProducts />
    </div>
  );
}
