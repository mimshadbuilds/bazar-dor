import type { Metadata } from "next";
import { getProduct } from "@/lib/api";
import type { IProducts } from "@/types/products";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProductPageProps = {
    params: Promise<{ productId: string }>;
};

export async function generateMetadata(
    { params }: ProductPageProps,
): Promise<Metadata> {
    const { productId } = await params;
    let product: IProducts;

    try {
        product = await getProduct(productId);
    } catch {
        notFound();
    }

    if (!product) notFound();

    return {
        title: `${product.nameBn} আজকের দাম`,
        description: `${product.nameBn} এর আজকের দাম ${product.today.toLocaleString("bn-BD")} টাকা। ${product.categoryNameBn} বিভাগের বাজারভিত্তিক দর ও দামের পরিবর্তন দেখুন।`,
    };
}

const formatPrice = (price: number) =>
    price.toLocaleString("bn-BD", {
        maximumFractionDigits: 2,
    });

const ProductDetails = async ({ params }: { params: { productId: string }}) => {
    const { productId } = await params;

    let product: IProducts;

    try {
        product = await getProduct(productId);
    } catch {
        notFound();
    }

    if(!product) notFound();

    const prices = product.markets.flatMap((market) => [
        market.min,
        market.max,
    ]);

    const lowestPrice = prices.length
        ? Math.min(...prices)
        : product.today;

    const highestPrice = prices.length
        ? Math.max(...prices)
        : product.today;

    const averagePrice = prices.length
        ? Math.round(prices.reduce((sum, price) => sum + price, 0) / prices.length)
        : product.today;

    const isUp = product.change.dir === "up";
    const isDown = product.change.dir === "down";

    return (
        <main className="min-h-screen bg-[#f0f5f0] px-4 py-6 sm:px-6 sm:py-8">
            <div className="mx-auto max-w-6xl">
                <nav className="mb-5 flex flex-wrap items-center gap-2 text-sm text-[#282f2a]">
                    <Link href="/" className="hover:text-[#07883e]">
                        হোম
                    </Link>
                    <span className="text-xl">›</span>
                    <Link href={`/category/${product.category}`}
                        className="hover:text-[#07883e]">
                        {product.categoryNameBn}
                    </Link>
                    <span className="text-xl">›</span>
                    <span className="text-[#26352a]">
                        {product.nameBn}
                    </span>
                </nav>
                <section className="flex flex-col justify-between gap-4 rounded-xl border border-[#e0e8e1] bg-[#fbfdfb] p-4 sm:flex-row sm:items-center sm:p-5">
                    <div className="flex min-w-0 items-center gap-3">
                        <span className="flex size-13 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-3xl">
                            {product.image || product.categoryIcon}
                        </span>
                        <div className="min-w-0">
                            <h1 className="text-3xl font-bold leading-tight text-[#17251b] sm:text-4xl">
                                {product.nameBn}
                            </h1>
                            <p className="mt-1 text-sm text-[#69766b]">
                                প্রতি {product.unit === "kg" ? "কেজি" : product.unit}
                                {" · "}
                                {product.categoryNameBn}
                            </p>
                            <p className="mt-1 text-sm text-[#59685d]">
                                গতকালের তুলনায় আজ দাম{" "}
                                <span className="font-semibold text-sm">
                                    {isUp ? "বেড়েছে" : isDown ? "কমেছে" : "অপরিবর্তিত"}
                                </span>{" "}
                                · {formatPrice(product.change.pct)}%
                            </p>
                        </div>
                    </div>
                    <div className="flex shrink-0 items-center justify-between gap-6 rounded-xl bg-[#f0f5f0] px-4 py-3 sm:min-w-28 sm:flex-col sm:gap-0 sm:text-center">
                        <div>
                            <p className="text-base text-[#69766b]">
                                আজকের দাম
                            </p>
                            <p className="text-3xl font-bold leading-8 text-[#17251b]">
                                {formatPrice(product.today)}
                            </p>
                            <p className="text-sm text-[#69766b]">
                                টাকা / {product.unit === "kg" ? "কেজি" : product.unit}
                            </p>
                        </div>
                        <p
                            className={`mt-1 text-sm font-bold ${
                                isUp
                                    ? "text-[#e53935]"
                                    : isDown 
                                    ? "text-[#07883e]"
                                    : "text-[#69766b]"
                            }`}>
                            {isUp ? "▲" : isDown ? "▼" : "—"}{" "}
                            {formatPrice(product.change.pct)}%
                        </p>
                    </div>
                </section>

                <section className="mt-4 rounded-xl border border-[#e0e8e1] bg-[#fbfdfb] p-4 sm:p-5">
                    <h2 className="mb-3 text-2xl font-bold text-[#26352a]">
                        দামের সারসংক্ষেপ
                    </h2>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        <div className="rounded-xl border border-[#e0e8e1] p-4">
                            <p className="text-base text-[#69766b]">
                                সর্বনিম্ন দাম
                            </p>
                            <p className="mt-1 text-2xl font-bold text-[#07883e]">
                                {formatPrice(lowestPrice)}{" "}
                                <span className="text-xs font-normal">টাকা</span>
                            </p>
                            <p className="mt-1 text-sm text-[#69766b]">
                                সবচেয়ে কম দামের বাজার
                            </p>
                        </div>
                        <div className="rounded-xl border border-[#e0e8e1] p-4">
                            <p className="text-base text-[#69766b]">
                                সর্বোচ্চ দাম
                            </p>
                            <p className="mt-1 text-2xl font-bold text-[#e53935]">
                                {formatPrice(highestPrice)}{" "}
                                <span className="text-xs font-normal">টাকা</span>
                            </p>
                            <p className="mt-1 text-sm text-[#69766b]">
                                সবচেয়ে বেশি দামের বাজার
                            </p>
                        </div>
                        <div className="rounded-xl border border-[#e0e8e1] p-4">
                            <p className="text-base text-[#69766b]">
                                গড় দাম
                            </p>
                            <p className="mt-1 text-2xl font-bold text-[#07883e]">
                                {formatPrice(averagePrice)}{" "}
                                <span className="text-xs font-normal">টাকা</span>
                            </p>
                            <p className="mt-1 text-sm text-[#69766b]">
                                প্রতি কেজি-এর হিসাবে
                            </p>
                        </div>
                    </div>
                    <h2 className="mb-3 mt-6 text-2xl font-bold text-[#26352a]">
                        বাজারভিত্তিক আজকের দাম
                    </h2>
                    {product.markets.length > 0 ? (
                        <div className="overflow-x-auto rounded-lg border border-[#dce5dd]">
                            <table className="w-full min-w-150 border-collapse text-xs">
                                <thead className="bg-[#f0f5f0] text-[#59685d]">
                                    <tr>
                                        <th className="border-r border-[#dce5dd] px-3 py-3 text-left text-base font-semibold">
                                            বাজার
                                        </th>
                                        <th className="border-r border-[#dce5dd] px-3 py-3 text-left text-base font-semibold">
                                            বিভাগ
                                        </th>
                                        <th className="border-r border-[#dce5dd] px-3 py-3 text-right text-base font-semibold">
                                            সর্বনিম্ন
                                        </th>
                                        <th className="border-r border-[#dce5dd] px-3 py-3 text-right text-base font-semibold">
                                            সর্বোচ্চ
                                        </th>
                                        <th className="px-3 py-3 text-right text-base font-bold">
                                            গড়
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {product.markets.map((market, index) => (
                                        <tr key={`${market.market}-${market.division}`}
                                            className={
                                                index % 2 === 0
                                                    ? "bg-[#fbfdfb]"
                                                    : "bg-[#f0f5f0]"
                                            }>
                                            <td className="border-r border-t border-[#dce5dd] px-3 py-3 text-sm text-[#19211b]">
                                                {market.market}
                                            </td>
                                            <td className="border-r border-t border-[#dce5dd] px-3 py-3 text-sm text-[#59685d]">
                                                {market.division}
                                            </td>
                                            <td className="border-r border-t border-[#dce5dd] px-3 py-3 text-sm text-right">
                                                {formatPrice(market.min)} টাকা
                                            </td>
                                            <td className="border-r border-t border-[#dce5dd] px-3 py-3 text-sm text-right">
                                                {formatPrice(market.max)} টাকা
                                            </td>
                                            <td className="border-t border-[#dce5dd] px-3 py-3 text-right text-sm font-bold text-[#26352a]">
                                                {formatPrice(
                                                    (market.min + market.max) / 2
                                                )} টাকা
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className="rounded-lg border border-[#e0e8e1] bg-[#f0f5f0] p-5 text-center text-sm text-[#69766b]">
                            এই পণ্যের বাজারভিত্তিক তথ্য পাওয়া যায়নি।
                        </p>
                    )}
                </section>
                <div className="flex flex-wrap gap-2 mt-5">
                    <Link href={`/category/${product.category}`}
                        className="btn btn-ghost gap-2 rounded-md">
                        <span>{product.categoryIcon}</span>
                        <span>সব {product.categoryNameBn}</span>
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default ProductDetails;
