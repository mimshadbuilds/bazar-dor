import { getPriceUnit, getUnitLabel } from "@/lib/ConversionUtils";
import { IProducts } from "../homepage/ExpensiveProducts";

interface ProductsCardProps {
    product: IProducts;
}

const ProductsCard = ({ product }: ProductsCardProps) => {
    const isDown = product.change.dir === "down";

    return (
        <div className="rounded-[20px] border border-[#dce5dc] bg-white p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-center gap-4">
                <div className="grid size-[60px] shrink-0 place-items-center rounded-2xl bg-[#f0f5f0] text-[30px]">
                    {product.image}
                </div>
                <div className="min-w-0">
                    <h3 className="truncate text-[20px] font-semibold leading-tight text-[#111]">
                        {product.nameBn}
                    </h3>
                    <p className="mt-1 text-sm text-[#888]">
                        {getUnitLabel(product.unit)}
                    </p>
                </div>
            </div>
            <div className="mt-5 flex items-end justify-between gap-3">
                <div>
                    <p className="text-sm text-[#888]">
                        আজকের দাম
                    </p>
                    <div className="mt-1 flex items-baseline gap-1.5">
                        <span className="text-[22px] font-bold text-[#111]">
                            {product.today.toLocaleString("bn-BD")}
                        </span>
                        <span className="text-sm text-[#555]">
                            {getPriceUnit(product.unit)}
                        </span>
                    </div>
                </div>
                <span
                    className={`inline-flex shrink-0 items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium ${
                        isDown
                            ? "bg-[#f0f5f0] text-[#059b50]"
                            : "bg-[#f0f5f0] text-[#e63946]"
                    }`}>
                    <span aria-hidden="true" className="text-xs">
                        {isDown ? "▼" : "▲"}
                    </span>
                    <span className="leading-normal">
                        {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
                    </span>
                </span>
            </div>
        </div>
    );
};

export default ProductsCard;