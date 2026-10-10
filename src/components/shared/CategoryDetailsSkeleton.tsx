import ProductCardSkeleton from "@/components/shared/ProductsCardSkeleton";

const CategoryDetailsSkeleton = () => {
    return (
        <main className="min-h-screen bg-[#f0f5f0] px-4 py-6 sm:px-6 sm:py-8">
            <section className="mx-auto max-w-6xl">
                <header className="flex min-h-[88px] items-center gap-4 rounded-2xl border border-[#e0e8e1] bg-[#fbfdfb] px-5 py-4 sm:px-6">
                    <div className="size-11 shrink-0 animate-pulse rounded-xl bg-[#e0e8e1]" />
                    <div className="flex-1">
                        <div className="h-7 w-48 max-w-full animate-pulse rounded bg-[#e0e8e1]" />
                        <div className="mt-2 h-4 w-64 max-w-full animate-pulse rounded bg-[#e0e8e1]" />
                    </div>
                </header>
                <div className="mt-4 flex min-h-[62px] items-center justify-end gap-3 rounded-2xl border border-[#e0e8e1] bg-[#fbfdfb] px-4 sm:px-6">
                    <div className="h-4 w-14 animate-pulse rounded bg-[#e0e8e1]" />
                    <div className="h-10 w-36 animate-pulse rounded-xl bg-[#e0e8e1]" />
                </div>
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <ProductCardSkeleton key={index} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default CategoryDetailsSkeleton;
