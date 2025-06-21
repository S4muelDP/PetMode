// components/ProductList.tsx
import { useState } from "react";
import { useCart } from "../../Context/CartContext";
import { useAuth } from "../../Hooks/useAuth"; // Ajusta la ruta según tu estructura
import { LoginModal } from "../login/LoginModal"; // Ajusta la ruta según tu estructura

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Collar ajustable para perro",
    description: "Collar de nylon resistente para perros medianos.",
    price: "$25.000",
    image: "/src/assets/collar_ajustable_perro.jpg",
  },
  {
    id: 2,
    name: "Juguete interactivo para gato",
    description: "Pelota con cascabel para estimular el juego.",
    price: "$18.000",
    image: "/src/assets/juguete_interativo_gato.jpg",
  },
  {
    id: 3,
    name: "Cama suave para mascota",
    description: "Cama acolchada para perros o gatos pequeños.",
    price: "$75.000",
    image: "/src/assets/cama_suave_mascotas_gatos.jpg",
  },
  {
    id: 4,
    name: "Comedero doble de acero",
    description: "Dos compartimentos para comida y agua.",
    price: "$38.500",
    image: "/src/assets/comdero_doble_acero.jpg",
  },
  {
    id: 5,
    name: "Rascador para gatos",
    description: "Poste con cuerda de sisal ideal para afilar garras.",
    price: "$42.000",
    image: "/src/assets/Rascador_para_gatos.jpg",
  },
  {
    id: 6,
    name: "Arnés para perro",
    description: "Arnés con ajuste cómodo para paseos seguros.",
    price: "$30.000",
    image: "/src/assets/Arnés_para_perro.jpg",
  },
  {
    id: 7,
    name: "Bolsa de arena para gato",
    description: "Arena absorbente con control de olores.",
    price: "$20.000",
    image: "/src/assets/Bolsa_de_arena_para_gato.jpg",
  },
  {
    id: 8,
    name: "Shampoo hipoalergénico",
    description: "Ideal para pieles sensibles de mascotas.",
    price: "$22.500",
    image: "/src/assets/Shampoo_hipoalergénico.jpg",
  },
  {
    id: 9,
    name: "Pelota para perro con sonido",
    description: "Estimula el juego y la actividad física.",
    price: "$10.000",
    image: "/src/assets/Pelota_para_perro_con_sonido.jpg",
  },
  {
    id: 10,
    name: "Correa extensible",
    description: "Permite libertad controlada durante paseos.",
    price: "$45.000",
    image: "/src/assets/Correa_extensible.jpg",
  },
  {
    id: 11,
    name: "Casa para gato",
    description: "Estructura cómoda para descansar y esconderse.",
    price: "$95.000",
    image: "/src/assets/Casa_para_gato.jpg",
  },
  {
    id: 12,
    name: "Galletas para perro",
    description: "Snacks naturales con sabor a pollo.",
    price: "$12.000",
    image: "/src/assets/Galletas_para_perro.jpg",
  },
  {
    id: 13,
    name: "Juguete en forma de hueso",
    description: "Mordedera de goma no tóxica.",
    price: "$9.500",
    image: "/src/assets/Juguete_en_forma_de_hueso.jpg",
  },
  {
    id: 14,
    name: "Cepillo para pelaje",
    description: "Elimina pelo suelto y masajea la piel.",
    price: "$14.000",
    image: "/src/assets/Cepillo_para_pelaje.jpg",
  },
  {
    id: 15,
    name: "Transportín para mascotas",
    description: "Caja segura para transportar mascotas pequeñas.",
    price: "$120.000",
    image: "/src/assets/Transportín_para_mascotas.jpg",
  },
  {
    id: 16,
    name: "Fuente de agua para gatos",
    description: "Flujo constante de agua fresca.",
    price: "$85.000",
    image: "/src/assets/Fuente_de_agua_para_gatos.jpg",
  },
  {
    id: 17,
    name: "Ropa para perro",
    description: "Abrigo acolchado ideal para climas fríos.",
    price: "$55.000",
    image: "/src/assets/Ropa_para_perro.jpg",
  },
  {
    id: 18,
    name: "Snack dental para perro",
    description: "Ayuda a mantener dientes limpios y encías sanas.",
    price: "$16.000",
    image: "/src/assets/Snack_dental_para_perro.jpg",
  },
  {
    id: 19,
    name: "Juguete láser para gato",
    description: "Diversión sin fin para gatos activos.",
    price: "$22.000",
    image: "/src/assets/Juguete_láser_para_gato.jpg",
  },
  {
    id: 20,
    name: "Bolso para mascotas",
    description: "Bolso estilo mochila para pasear cómodamente.",
    price: "$98.000",
    image: "/src/assets/Bolso_para_mascotas.jpg",
  },
];

const ProductsCore = () => {
  const { addToCart } = useCart();
  const { user, login } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [pendingProduct, setPendingProduct] = useState<Product | null>(null);

  const handleAddToCart = (product: Product) => {
    if (!user) {
      // Si no está logueado, guardar el producto pendiente y mostrar modal
      setPendingProduct(product);
      setShowLoginModal(true);
    } else {
      // Si está logueado, agregar directamente al carrito
      addToCart();
      console.log(`Producto ${product.name} agregado al carrito`);
    }
  };

  const handleLoginSuccess = (username: string) => {
    login(username);
    setShowLoginModal(false);
    
    // Agregar el producto pendiente al carrito después del login
    if (pendingProduct) {
      addToCart();
      console.log(`Producto ${pendingProduct.name} agregado al carrito después del login`);
      setPendingProduct(null);
    }
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
    setPendingProduct(null);
  };

return (
  <>
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Nuestros Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md overflow-hidden flex flex-col"
          >
            <div className="h-40 bg-white flex justify-center items-center">
              <img
                src={product.image}
                alt={product.name}
                className="object-contain h-full"
              />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600 flex-1">{product.description}</p>
              <p className="text-cyan-600 font-bold mt-2">{product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-4 bg-cyan-500 text-white px-4 py-2 hover:bg-cyan-600 transition-colors"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Login */}
      {showLoginModal && (
        <LoginModal
          onClose={handleCloseModal}
          onLoginSuccess={handleLoginSuccess}
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