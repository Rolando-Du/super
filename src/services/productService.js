const PRODUCTS_KEY = 'products';

const getProducts = () => {
    const products = localStorage.getItem(PRODUCTS_KEY);
    return products ? JSON.parse(products) : [];
};

const addProduct = (product) => {
    const products = getProducts();
    products.push(product);
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
};

const deleteProduct = (product) => {
    const products = getProducts();
    const updatedProducts = products.filter(p => p.name !== product.name);
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(updatedProducts));
};

const updateProduct = (updatedProduct) => {
    const products = getProducts();
    const updatedProducts = products.map(p => (p.name === updatedProduct.name ? updatedProduct : p));
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(updatedProducts));
};

export { getProducts, addProduct, deleteProduct, updateProduct };
