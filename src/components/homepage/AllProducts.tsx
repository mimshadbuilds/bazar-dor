import { getProducts } from "@/lib/api";
import { IProducts } from "@/types/products";
import ProductGrid from "./ProductGrid";

const AllProducts = async () => {
    const products: IProducts[] = await getProducts();

    return (
        <section id="সব-পণ্য" className="bg-[#f0f5f0] px-4 py-4 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-6xl">
                <ProductGrid products={products} />
            </div>
        </section>
    );
};

export default AllProducts;