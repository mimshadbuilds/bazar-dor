import { getProducts } from "@/lib/api";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import Link from "next/link";
import { IProducts } from "@/types/products";

const MarqueePage = async () => {
    const products: IProducts[] = await getProducts();
    // console.log(products)
        
    return (
        <div className="sticky top-0 z-40 w-full border-y border-slate-100 bg-white text-slate-800">
            <div className="mx-auto flex w-full max-w-[1290px]">
                <div className="z-10 flex shrink-0 items-center border-r border-slate-200 bg-neutral-50 px-3 py-2.5 text-sm font-semibold whitespace-nowrap sm:px-4">
                    সর্বশেষ দর
                </div>
                <div className="min-w-0 flex-1 overflow-hidden">
                    <MarqueeText direction="right" duration={8}>
                        {products.map((product) => {
                            const isDown = product.change.dir === "down";
                            const direction = isDown ? "▼" : "▲";
                            return (
                                <Link href={`/products/${product.id}`}
                                    key={product.id}
                                    className="inline-flex items-center border-r border-slate-200 px-4 py-2.5 text-sm whitespace-nowrap transition-colors hover:bg-slate-50">
                                    <span className="mr-2 text-base">{product.image}</span>
                                    <span className="font-medium text-slate-800">{product.nameBn}</span>
                                    <span className="mx-1.5 text-slate-400">{product.today.toLocaleString("bn-BD")}{" "} {product.unit === "kg" 
                                    ? "টাকা/কেজি" 
                                    : product.unit === "litre" 
                                    ? "টাকা/লিটার"
                                    : product.unit === "dozen"
                                    ? "টাকা/ডজন"
                                    : product.unit === "piece"
                                    ? "টাকা/পিস"
                                    : product.unit}
                                    </span>
                                    <span className={`font-bold ${isDown ? "text-emerald-600" : "text-red-600"}`}>
                                        {direction} {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
                                    </span>
                                </Link>
                            );
                        })}
                    </MarqueeText>
                </div>
            </div>
        </div>
    );
};

export default MarqueePage;