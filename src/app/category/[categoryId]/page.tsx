
import { getCategory, getProducts } from "@/lib/api";
import type { IProducts } from "@/types/products";
import ProductSort from "../ProductSort";

const ProductsCategory = async ({ params }: {params: { categoryId: string }}) => {
    const { categoryId } = await params;

    const category = await getCategory(categoryId);
    const products: IProducts[] = await getProducts(categoryId);

    return (
        <main className="min-h-screen bg-[#f0f5f0] px-4 py-6 sm:px-6 sm:py-8">
            <section className="mx-auto max-w-6xl">
                <header className="flex min-h-[88px] items-center gap-4 rounded-2xl border border-[#e0e8e1] bg-[#fbfdfb] px-5 py-4 sm:px-6">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-3xl">
                        {category.icon}
                    </span>

                    <div className="min-w-0">
                        <h1 className="text-2xl font-bold leading-tight text-[#17251b]">
                            {category.nameBn}
                        </h1>
                        <p className="mt-1 text-sm text-[#69766b]">
                            {products.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন
                        </p>
                    </div>
                </header>
                <ProductSort products={products} />
            </section>
        </main>
    );
};

export default ProductsCategory;
