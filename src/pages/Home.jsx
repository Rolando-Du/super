import { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import { getProducts, addProduct, deleteProduct, updateProduct } from '../services/productService';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts();
            setProducts(products);
        };
        fetchProducts();
    }, []);

    const handleAddProduct = async (product) => {
        await addProduct(product);
        setProducts(await getProducts());
    };

    const handleDeleteProduct = async (product) => {
        await deleteProduct(product);
        setProducts(await getProducts());
    };

    const handleUpdateProduct = async (updatedProduct) => {
        await updateProduct(updatedProduct);
        setProducts(await getProducts());
    };

    const totalPrice = products.reduce((total, product) => total + product.price, 0);

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <ProductForm addProduct={handleAddProduct} />
                <ProductList products={products} deleteProduct={handleDeleteProduct} updateProduct={handleUpdateProduct} />
                <div className="mt-4 p-4 bg-blue-100 rounded-lg text-center">
                    <h2 className="text-2xl font-bold text-emerald-950">
                        TOTAL: <span className="dollar-sign">$</span> {totalPrice.toFixed(2)}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Home;
