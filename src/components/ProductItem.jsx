import { useState } from 'react';

const ProductItem = ({ product, deleteProduct, updateProduct }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);

    const handleUpdate = () => {
        updateProduct({ ...product, name, price: parseFloat(price) });
        setIsEditing(false);
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="number"
                        step="0.01"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full p-2 border rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button onClick={handleUpdate} className="w-full p-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
                        Guardar
                    </button>
                </div>
            ) : (
                <div>
                    <h2 className="text-xl font-bold">{product.name}</h2>
                    <p className="text-gray-600">Precio: ${product.price.toFixed(2)}</p>
                    <div className="flex justify-between mt-2">
                        <button onClick={() => setIsEditing(true)} className="p-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                            Editar
                        </button>
                        <button onClick={() => deleteProduct(product)} className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                            Eliminar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductItem;
