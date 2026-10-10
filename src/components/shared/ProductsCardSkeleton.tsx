
const ProductCardSkeleton = () => {
    return (
        <div className="rounded-[20px] border border-[#dce5dc] bg-white p-5">
            <div className="flex items-center gap-4">
                <div className="size-15 shrink-0 animate-pulse rounded-2xl bg-[#e8eee8]" />
                <div className="min-w-0 flex-1">
                    <div className="h-5 w-3/4 animate-pulse rounded bg-[#e8eee8]" />
                    <div className="mt-2 h-4 w-1/3 animate-pulse rounded bg-[#e8eee8]" />
                </div>
            </div>
            <div className="mt-5 flex items-end justify-between gap-3">
                <div className="min-w-0 flex-1">
                    <div className="h-4 w-20 animate-pulse rounded bg-[#e8eee8]" />
                    <div className="mt-2 flex items-baseline gap-2">
                        <div className="h-7 w-20 animate-pulse rounded bg-[#e8eee8]" />
                        <div className="h-4 w-12 animate-pulse rounded bg-[#e8eee8]" />
                    </div>
                </div>
                <div className="h-8 w-20 shrink-0 animate-pulse rounded-full bg-[#e8eee8]" />
            </div>
        </div>
    );
};

export default ProductCardSkeleton;
