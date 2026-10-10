
const ProductDetailsSkeleton = () => {
    return (
        <main className="min-h-screen bg-[#f0f5f0] px-4 py-6 sm:px-6 sm:py-8">
            <div className="mx-auto max-w-[1040px]">
                <div className="mb-5 flex flex-wrap items-center gap-2">
                    <div className="h-4 w-12 animate-pulse rounded bg-[#dce5dc]" />
                    <div className="h-4 w-2 animate-pulse rounded bg-[#dce5dc]" />
                    <div className="h-4 w-24 animate-pulse rounded bg-[#dce5dc]" />
                    <div className="h-4 w-2 animate-pulse rounded bg-[#dce5dc]" />
                    <div className="h-4 w-28 animate-pulse rounded bg-[#dce5dc]" />
                </div>

                <section className="flex flex-col justify-between gap-4 rounded-xl border border-[#e0e8e1] bg-[#fbfdfb] p-4 sm:flex-row sm:items-center sm:p-5">
                    <div className="flex min-w-0 items-center gap-3">
                        <div className="size-[52px] shrink-0 animate-pulse rounded-xl bg-[#e0e8e1]" />
                        <div className="min-w-0 flex-1">
                            <div className="h-7 w-48 max-w-full animate-pulse rounded bg-[#e0e8e1]" />
                            <div className="mt-2 h-4 w-36 animate-pulse rounded bg-[#e0e8e1]" />
                            <div className="mt-2 h-4 w-52 max-w-full animate-pulse rounded bg-[#e0e8e1]" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between gap-6 rounded-xl bg-[#f0f5f0] px-4 py-3 sm:min-w-[112px] sm:flex-col sm:text-center">
                        <div>
                            <div className="h-4 w-20 animate-pulse rounded bg-[#dce5dc]" />
                            <div className="mt-2 h-8 w-24 animate-pulse rounded bg-[#dce5dc]" />
                            <div className="mt-2 h-3 w-20 animate-pulse rounded bg-[#dce5dc]" />
                        </div>
                        <div className="h-4 w-14 animate-pulse rounded bg-[#dce5dc]" />
                    </div>
                </section>

                <section className="mt-4 rounded-xl border border-[#e0e8e1] bg-[#fbfdfb] p-4 sm:p-5">
                    <div className="mb-3 h-5 w-32 animate-pulse rounded bg-[#e0e8e1]" />

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className="rounded-xl border border-[#e0e8e1] p-4">
                                <div className="h-4 w-20 animate-pulse rounded bg-[#e0e8e1]" />
                                <div className="mt-2 h-7 w-28 animate-pulse rounded bg-[#e0e8e1]" />
                                <div className="mt-2 h-3 w-24 animate-pulse rounded bg-[#e0e8e1]" />
                            </div>
                        ))}
                    </div>

                    <div className="mb-3 mt-6 h-5 w-44 animate-pulse rounded bg-[#e0e8e1]" />

                    <div className="overflow-hidden rounded-lg border border-[#dce5dd]">
                        <div className="grid grid-cols-5 gap-3 bg-[#f0f5f0] px-3 py-3">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div key={index} className="h-4 animate-pulse rounded bg-[#dce5dc]" />
                            ))}
                        </div>
                        {Array.from({ length: 4 }).map((_, row) => (
                            <div key={row} className="grid grid-cols-5 gap-3 border-t border-[#dce5dd] px-3 py-4">
                                {Array.from({ length: 5 }).map((_, column) => (
                                    <div key={column} className="h-4 animate-pulse rounded bg-[#e8eee8]" />
                                ))}
                            </div>
                        ))}
                    </div>
                </section>

                <div className="mt-5 h-10 w-36 animate-pulse rounded-md bg-[#dce5dc]" />
            </div>
        </main>
    );
};

export default ProductDetailsSkeleton;
