import { IProducts } from "@/types/products";

const baseUrl = "https://api.abcz.workers.dev/api/bazardor";

export const getCategories = async () => {
    const res = await fetch(`${baseUrl}/categories`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch categories! (${res.status})`);
    }

    return res.json();
};

export const getCategory = async (categoryId: string) => {
    const res = await fetch(
        `${baseUrl}/categories/${encodeURIComponent(categoryId)}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error(`Failed to fetch category! (${res.status})`);
    }

    return res.json();
};

export const getProducts = async (categoryId?: string): Promise<IProducts[]> => {
    const url = new URL(`${baseUrl}/products`);

    if (categoryId) {
        url.searchParams.set("category", categoryId);
    }

    const res = await fetch(url.toString(), {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch products! (${res.status})`);
    }

    return res.json();
};

export const getProduct = async (productId: string): Promise<IProducts> => {
    const res = await fetch(
        `${baseUrl}/products/${encodeURIComponent(productId)}`,
        {
            cache: "no-store",
        }
    );

    if (!res.ok) {
        throw new Error(`Failed to fetch product! (${res.status})`);
    }

    return res.json();
};
