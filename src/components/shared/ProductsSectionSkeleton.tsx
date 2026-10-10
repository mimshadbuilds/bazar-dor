import ProductCardSkeleton from "@/components/shared/ProductsCardSkeleton";

interface ProductsSectionSkeletonProps {
    title: string;
    count?: number;
    columns?: 1 | 2 | 3;
}

const ProductsSectionSkeleton = ({
    title,
    count = 6,
    columns = 3,
}: ProductsSectionSkeletonProps) => {
    return (
        <section className="bg-[#f0f5f0] px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-6xl">
                <div className="mb-4">
                    <div className="h-7 w-48 animate-pulse rounded bg-[#dce5dc]" />
                    <span className="sr-only">{title}</span>
                </div>
                <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${
                    columns === 3 ? "lg:grid-cols-3" : ""
                }`}>
                    {Array.from({ length: count }).map((_, index) => (
                        <ProductCardSkeleton key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSectionSkeleton;
