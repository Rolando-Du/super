import ProductItem from './ProductItem';

const ProductList = ({ products, deleteProduct, updateProduct }) => {
    return (
        <div className="mb-4">
            {products.map((product, index) => (
                <ProductItem
                    key={index}
                    product={product}
                    deleteProduct={deleteProduct}
                    updateProduct={updateProduct}
                />
            ))}
        </div>
    );
};

export default ProductList;
