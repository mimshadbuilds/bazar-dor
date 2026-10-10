'use client'

import ProductsCard from "@/components/shared/ProductsCard";
import { IProducts } from "@/types/products";
import Link from "next/link";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

type SortOption = "default" | "price-desc" | "price-asc";

const ProductSort = ({ products }: { products: IProducts[] }) => {
    const [sortBy, setSortBy] = useState<SortOption>("default");

    const sortProducts = (products: IProducts[]) => {
        const sortedProducts = [...products];

        if(sortBy === "default") return products;

        if (sortBy === "price-desc") {
            sortedProducts.sort((a, b) => a.today - b.today);
        } else if (sortBy === "price-asc") {
            sortedProducts.sort((a, b) => b.today - a.today);
        }
        return sortedProducts;
    }
    const allSortProducts = sortProducts(products);

    return (
<>
            <div className="mt-4 flex min-h-[62px] items-center justify-end gap-3 rounded-2xl border border-[#e0e8e1] bg-[#fbfdfb] px-4 sm:px-6">
                <label htmlFor="product-sort" className="shrink-0 text-sm text-[#59685d]">
                    সাজান:
                </label>
                <div className="relative">
                    <select id="product-sort"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value as SortOption)}
                        className="w-full cursor-pointer appearance-none rounded-lg border border-[#e0e8e1] bg-[#fbfdfb] py-2 pl-3 pr-9 text-sm text-[#26352a] outline-none transition focus:border-[#07883e]">
                        <option value="default">ডিফল্ট</option>
                        <option value="price-desc">দাম: কম থেকে বেশি</option>
                        <option value="price-asc">দাম: বেশি থেকে কম</option>
                    </select>
                    <FiChevronDown
                        aria-hidden="true"
                        className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#69766b]"
                    />
                </div>
            </div>

            <p className="mb-3 mt-4 text-sm text-[#59685d]">
                মোট {allSortProducts.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
            </p>

            {allSortProducts.length > 0 ? (
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {allSortProducts.map((product) => (
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
        </>
    );
};

export default ProductSort;