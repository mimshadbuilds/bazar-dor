import { getProducts } from "@/lib/api";
import ProductsCard from "../shared/ProductsCard";
import Link from "next/link";

const InexpensiveProducts = async () => {
        const cheapProducts = await getProducts();
        const filteredProducts = [...cheapProducts].filter(product => product.change.dir === 'down');
        const topSixCheapProducts = filteredProducts.sort((a, b) => a.change.pct - b.change.pct).slice(0, 6);
        // console.log(topSixCheapProducts)
    return (
        <section className="bg-[#f0f5f0] px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-6xl">
                <div className="mb-4 flex items-center gap-2">
                    <span className="text-lg text-green-500">▼</span>
                    <h2 className="text-xl font-bold text-[#111] sm:text-2xl">
                        আজ দাম কমেছে
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {topSixCheapProducts.map((product) => (
                    <Link key={product.id} href={`/products/${product.id}`}>
                        <ProductsCard product={product}
                        />
                    </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InexpensiveProducts;