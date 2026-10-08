import ExpensiveProducts from "@/components/homepage/ExpensiveProducts";
import InexpensiveProducts from "@/components/homepage/InexpensiveProducts";
import Banner from "@/components/shared/Banner";

export default function Home() {
  return (
    <div>
      <Banner />
      <ExpensiveProducts />
      <InexpensiveProducts />
    </div>
  );
}
