
import ProductCardSkeleton from "@/components/shared/ProductsCardSkeleton";

interface ProductsSectionSkeletonProps {
    title: string;
    count?: number;
}

const ProductsSectionSkeleton = ({
    title,
    count = 4,
}: ProductsSectionSkeletonProps) => {
    return (
        <section>
            <div className="mb-5">
                <div className="h-7 w-48 animate-pulse rounded bg-[#e8eee8]" />
                <p className="mt-2 text-sm text-[#888]">{title}</p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: count }).map((_, index) => (
                    <ProductCardSkeleton key={index} />
                ))}
            </div>
        </section>
    );
};

export default ProductsSectionSkeleton;
