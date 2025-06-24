// components/ProductList.tsx
import { useState, useEffect } from "react";
import { useCart } from "../../Context/CartContext";
import { useAuth } from "../../Hooks/useAuth"; // Ajusta la ruta según tu estructura
import { AuthModal } from "../login/AuthModal"; // Ajusta la ruta según tu estructura

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const ProductsCore = () => {
  const { addToCart } = useCart();
  const { user, login } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [pendingProduct, setPendingProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch('/src/mocks/products.json')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddToCart = (product: Product) => {
    if (!user) {
      setPendingProduct(product);
      setAuthMode('login');
      setShowAuthModal(true);
    } else {
      addToCart(product, quantity);
      setQuantity(1);
      setSelectedProduct(null);
    }
  };

  const handleAuthSuccess = (username: string) => {
    login(username);
    setShowAuthModal(false);
    if (pendingProduct) {
      addToCart(pendingProduct, quantity);
      setPendingProduct(null);
      setQuantity(1);
      setSelectedProduct(null);
    }
  };

  return (
    <>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Nuestros Productos</h2>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="mb-6 px-4 py-2 border rounded w-full max-w-md"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md overflow-hidden flex flex-col cursor-pointer"
            >
              <div
                className="h-40 bg-white flex justify-center items-center"
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain h-full"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600 flex-1">{product.description}</p>
                <p className="text-cyan-600 font-bold mt-2">${product.price.toLocaleString('es-CO')}</p>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="mt-2 bg-gray-200 text-cyan-700 px-2 py-1 rounded hover:bg-cyan-100 text-xs"
                >
                  Ver detalle
                </button>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-2 bg-cyan-500 text-white px-4 py-2 hover:bg-cyan-600 transition-colors"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de producto ampliado */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/10">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl flex flex-col md:flex-row relative">
              <button onClick={() => setSelectedProduct(null)} className="absolute top-2 right-2 text-gray-400 hover:text-gray-700">✕</button>
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-64 h-64 object-contain mb-4 md:mb-0 md:mr-8" />
              <div className="flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{selectedProduct.name}</h3>
                <p className="mb-4">{selectedProduct.description}</p>
                <p className="text-cyan-600 font-bold text-xl mb-4">${selectedProduct.price.toLocaleString('es-CO')}</p>
                <label className="mb-2">Cantidad:</label>
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={e => setQuantity(Number(e.target.value))}
                  className="border rounded px-2 py-1 w-20 mb-4"
                />
                <button
                  onClick={() => handleAddToCart(selectedProduct)}
                  className="bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700 font-semibold"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Login/Registro */}
        {showAuthModal && (
          <AuthModal
            mode={authMode}
            onClose={() => setShowAuthModal(false)}
            onAuthSuccess={handleAuthSuccess}
          />
        )}
      </div>

      {/* Footer */}
      <div>
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">PetMode</h3>
                <p className="text-gray-400">Amor y cuidado para tu mejor amigo</p>
              </div>
              <div className="flex gap-4">
                <button className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                  📘
                </button>
                <button className="w-12 h-12 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors">
                  📷
                </button>
                <button className="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors">
                  🐦
                </button>
                <button className="w-12 h-12 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center transition-colors">
                  📱
                </button>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 PetMode Colombia. Todos los derechos reservados. Hecho con ❤️ para las mascotas.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductsCore;