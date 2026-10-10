"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import ProductsCard from "../shared/ProductsCard";
import { IProducts } from "@/types/products";

type SortOption = "default" | "price-asc" | "price-desc";

export default function ProductGrid({ products }: { products: IProducts[] }) {
    const [sortBy, setSortBy] = useState<SortOption>("default");

    const sortedProducts = [...products].sort((a, b) => {
        if (sortBy === "price-asc") return a.today - b.today;
        if (sortBy === "price-desc") return b.today - a.today;

        return 0;
    });

    return (
        <>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h2 className="text-xl font-bold text-[#111] sm:text-2xl">
                        সব পণ্য
                    </h2>
                    <p className="mt-1 text-sm text-[#69766b]">
                        মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
                    </p>
                </div>
                <div className="flex w-fit items-center gap-2">
                    <label htmlFor="product-sort"
                        className="shrink-0 text-sm text-[#59685d]">
                        সাজান
                    </label>
                    <div className="relative">
                        <select id="product-sort"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as SortOption)}
                            className="cursor-pointer appearance-none rounded-lg border border-[#e0e8e1] bg-[#fbfdfb] py-2 pl-3 pr-9 text-sm text-[#26352a] outline-none focus:border-[#05893E]">
                            <option value="default">ডিফল্ট</option>
                            <option value="price-asc">দাম: কম থেকে বেশি</option>
                            <option value="price-desc">দাম: বেশি থেকে কম</option>
                        </select>
                        <FiChevronDown aria-hidden="true"
                            className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#69766b]"
                        />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sortedProducts.map((product) => (
                    <Link href={`/products/${product.id}`} key={product.id}>
                        <ProductsCard product={product} />
                    </Link>
                ))}
            </div>
        </>
    );
}