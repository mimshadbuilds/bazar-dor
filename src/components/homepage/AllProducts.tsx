import { getProducts } from "@/lib/api";
import ProductsCard from "../shared/ProductsCard";
import { IProducts } from "@/types/products";
import Link from "next/link";

const AllProducts = async () => {
    const products: IProducts[] = await getProducts();
    return (
        <section id="সব-পণ্য" className="bg-[#f0f5f0] px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-6xl">
                <div className="mb-4 flex items-center gap-2">
                    <h2 className="text-xl font-bold text-[#111] sm:text-2xl">
                    সব পণ্য
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                    {products.map((product) => (
                        <Link href={`/products/${product.id}`} key={product.id}> 
                        <ProductsCard
                            key={product.id}
                            product={product}
                        />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllProducts;