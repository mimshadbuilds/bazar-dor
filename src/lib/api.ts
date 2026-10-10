import { IProducts } from "@/types/products";

const baseUrl = "https://openapi.programming-hero.com/api/bazardor";

export const getCategories = async () => {
    const res = await fetch(`${baseUrl}/categories`, {
        next: { revalidate: 3600 },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch categories! (${res.status})`);
    }

    return res.json();
};

export const getCategory = async (categoryId: string) => {
    const res = await fetch(
        `${baseUrl}/categories/${encodeURIComponent(categoryId)}`,
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
        next: { revalidate: 300 },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch products! (${res.status})`);
    }

    return res.json();
};

export const getProduct = async (productId: string): Promise<IProducts> => {
    const res = await fetch(
        `${baseUrl}/products/${encodeURIComponent(productId)}`,
    );

    if (!res.ok) {
        throw new Error(`Failed to fetch product! (${res.status})`);
    }

    return res.json();
};
