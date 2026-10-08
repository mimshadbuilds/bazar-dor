import { getProducts } from "@/lib/api";
import ProductsCard from "../shared/ProductsCard";

export interface IProducts {
    id: string;
    nameBn: string;
    unit: string;
    image: string;
    today: number;
    change: {
        dir: string;
        pct: number;
    };
}

const ExpensiveProducts = async () => {
    const pricedProducts = await getProducts();
    const filteredProducts = [...pricedProducts].filter(product => product.change.dir === 'up');
    const topSixExpProducts = filteredProducts.sort((a, b) => b.change.pct - a.change.pct).slice(0, 6);
    // console.log(topSixExpProducts)
    return (
        <section className="bg-[#f0f5f0] px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-6xl">
                <div className="mb-4 flex items-center gap-2">
                    <span className="text-lg text-red-500">▲</span>

                    <h2 className="text-xl font-bold text-[#111] sm:text-2xl">
                        আজ দাম বেড়েছে
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {topSixExpProducts.map((product) => (
                        <ProductsCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpensiveProducts;