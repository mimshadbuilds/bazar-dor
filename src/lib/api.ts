const baseUrl = "https://api.abcz.workers.dev/api/bazardor"

export const getCategories = async () => {
    const res = await fetch(`${baseUrl}/categories`, {
        cache: 'no-store',
    });

    if(!res.ok) {
        throw new Error(`Failed to fetch categories! (${res.status})`);
    }

    return res.json();
}

export const getProducts = async () => {
    const res = await fetch(`${baseUrl}/products`, {
        cache: 'no-store',
    });

    if(!res.ok){
        throw new Error(`Failed to fetch products! (${res.status})`);
    }

    return res.json();
}