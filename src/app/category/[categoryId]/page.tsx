import ProductsCard from "@/components/shared/ProductsCard";
import { getCategory, getProducts } from "@/lib/api";
import type { IProducts } from "@/types/products";
import Link from "next/link";

const ProductsCategory = async ({ params }: { params: { categoryId: string }}) => {
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
                <div className="mt-4 flex min-h-[62px] items-center justify-end rounded-2xl border border-[#e0e8e1] bg-[#fbfdfb] px-5 sm:px-6">
                    <p className="text-sm text-[#59685d]">
                        সাজান
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-[#69766b]">
                            মোট {products.length.toLocaleString("bn-BD")}টি
                        </span>
                    </div>
                </div>
                <p className="mb-3 mt-4 text-sm text-[#59685d]">
                    মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
                </p>

                {products.length > 0 ? (
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map((product) => (
                            <Link key={product.id}
                                href={`/products/${product.id}`}
                                className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05893e]">
                                <ProductsCard product={product} />
                            </Link>
                        ))}
                    </div>
                ) : (
                    <p className="rounded-2xl border border-[#e0e8e1] bg-[#fbfdfb] p-8 text-center text-sm text-[#69766b]">
                        কোনো পণ্য পাওয়া যায়নি।
                    </p>
                )}
            </section>
        </main>
    );
};

export default ProductsCategory;

