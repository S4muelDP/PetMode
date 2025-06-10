import { useState } from 'react';
import { Heart, Star, ShoppingCart, Truck, Shield, Award, Phone, Mail, MapPin } from 'lucide-react';

const Home = () => {
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  // Hero Section
  const Hero = () => (
       <section className="relative py-20 px-4 sm:px-6 lg:px-8 h-96 sm:h-[28rem] lg:h-[32rem] flex items-center">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/background-1.jpg" 
          alt="Mascotas felices" 
          className="w-full h-full object-cover"
        />
        {/* Overlay para mejor legibilidad del texto */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center lg:text-left max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Ellos te dan <span className="text-cyan-600">amor</span>,<br/>
            nosotros les damos <span className="text-cyan-600">comodidad</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 mb-8 max-w-lg drop-shadow-md">
            Todo lo que tu mascota necesita para una vida feliz y saludable
          </p>
          <button className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105 shadow-lg backdrop-blur-sm">
            Explorar Productos
          </button>
        </div>
      </div>
    </section>
  );

  // Categories Grid Section - Como en la imagen
  const CategoriesGrid = () => {
    const mainCategories = [
      { 
        id: 1, 
        name: 'Collares y Arneses', 
        icon: '🦮', 
        bgColor: 'bg-gradient-to-br from-cyan-400 to-cyan-600',
        description: 'Cómodos y seguros para paseos diarios'
      },
      { 
        id: 2, 
        name: 'Diversión y Juegos', 
        icon: '🎾', 
        bgColor: 'bg-gradient-to-br from-white-400 to-gray-600',
        description: 'Juguetes para mantenerlos activos'
      },
      { 
        id: 3, 
        name: 'Descanso y Juegos', 
        icon: '🛏️', 
        bgColor: 'bg-gradient-to-br from-cyan-400 to-cyan-600',
        description: 'Comodidad para el descanso'
      }
    ];

    const bottomCategories = [
      { 
        id: 4, 
        name: 'Descanso y Bienestar', 
        icon: '💤', 
        bgColor: 'bg-gradient-to-br from-pink-400 to-pink-600',
        description: 'Productos para su bienestar'
      },
      { 
        id: 5, 
        name: 'Snacks Saludables', 
        icon: '🦴', 
        bgColor: 'bg-gradient-to-br from-orange-400 to-orange-600',
        description: 'Premios nutritivos y deliciosos'
      },
      { 
        id: 6, 
        name: 'Higiene y Cuidado', 
        icon: '🧴', 
        bgColor: 'bg-gradient-to-br from-teal-400 to-teal-600',
        description: 'Todo para su cuidado personal'
      }
    ];

    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Nuestras Categorías</h2>
            <p className="text-lg sm:text-xl text-gray-600">Todo lo que necesitas para tu mascota en un solo lugar</p>
          </div>
          
          {/* Grilla superior - 3 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {mainCategories.map((category) => (
              <div key={category.id} className="group cursor-pointer">
                <div className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className={`${category.bgColor} p-8 text-center`}>
                    <div className="text-5xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 transition-colors text-sm font-semibold">
                      Ver Más
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Grilla inferior - 3 columnas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bottomCategories.map((category) => (
              <div key={category.id} className="group cursor-pointer">
                <div className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className={`${category.bgColor} p-8 text-center`}>
                    <div className="text-5xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 transition-colors text-sm font-semibold">
                      Ver Más
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Products Section
  const Products = () => {
    const products = [
      {
        id: 1,
        name: 'Collar Premium Azul',
        price: 89900,
        originalPrice: 129900,
        rating: 4.8,
        reviews: 124,
        image: '🦮',
        category: 'Collares',
        badge: 'Más Vendido',
        discount: 31
      },
      {
        id: 2,
        name: 'Zapatos Protectores',
        price: 69900,
        originalPrice: 99900,
        rating: 4.6,
        reviews: 89,
        image: '👟',
        category: 'Accesorios',
        badge: 'Oferta',
        discount: 30
      },
      {
        id: 3,
        name: 'Juguete Interactivo',
        price: 45900,
        originalPrice: null,
        rating: 4.9,
        reviews: 203,
        image: '🎾',
        category: 'Juguetes',
        badge: 'Nuevo',
        discount: 0
      },
      {
        id: 4,
        name: 'Cama Ortopédica',
        price: 159900,
        originalPrice: 229900,
        rating: 4.7,
        reviews: 156,
        image: '🛏️',
        category: 'Descanso',
        badge: 'Premium',
        discount: 30
      },
      {
        id: 5,
        name: 'Snacks Naturales',
        price: 35900,
        originalPrice: null,
        rating: 4.8,
        reviews: 267,
        image: '🦴',
        category: 'Alimentos',
        badge: 'Orgánico',
        discount: 0
      },
      {
        id: 6,
        name: 'Kit de Higiene Completo',
        price: 79900,
        originalPrice: 109900,
        rating: 4.5,
        reviews: 98,
        image: '🧴',
        category: 'Cuidado',
        badge: 'Kit Completo',
        discount: 27
      }
    ];

    const formatPrice = (price) => {
      return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
      }).format(price);
    };

    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Productos Destacados</h2>
            <p className="text-lg sm:text-xl text-gray-600">Los favoritos de nuestros clientes peludos</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="relative p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                      product.badge === 'Más Vendido' ? 'bg-red-500' :
                      product.badge === 'Oferta' ? 'bg-green-500' :
                      product.badge === 'Nuevo' ? 'bg-blue-500' :
                      product.badge === 'Premium' ? 'bg-purple-500' :
                      product.badge === 'Orgánico' ? 'bg-orange-500' :
                      'bg-teal-500'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                  {product.discount > 0 && (
                    <div className="absolute top-4 right-16 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      -{product.discount}%
                    </div>
                  )}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.has(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-400'
                      }`}
                    />
                  </button>
                  <div className="text-6xl text-center mb-4">{product.image}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">{product.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className={`w-4 h-4 ${star <= Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                      <span className="text-sm font-semibold ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews} reseñas)</span>
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-800">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>
                  </div>
                  <button className="w-full bg-gray-900 hover:bg-blue-600 text-white py-3 rounded-2xl font-semibold transition-all flex items-center justify-center gap-2 group-hover:bg-blue-600">
                    <ShoppingCart className="w-5 h-5" />
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Features Section
  const Features = () => {
    const features = [
      {
        icon: <Truck className="w-8 h-8" />,
        title: 'Envío Gratis',
        description: 'En compras mayores a $150.000'
      },
      {
        icon: <Shield className="w-8 h-8" />,
        title: 'Garantía Total',
        description: '30 días de garantía en todos los productos'
      },
      {
        icon: <Award className="w-8 h-8" />,
        title: 'Calidad Premium',
        description: 'Solo trabajamos con las mejores marcas'
      }
    ];

    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-blue-100 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Contact Section
  const Contact = () => (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">¿Necesitas Ayuda?</h2>
        <p className="text-xl text-gray-300 mb-12">Nuestro equipo de expertos está aquí para asesorarte</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-2xl">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Teléfono</h3>
            <p className="text-gray-300">+57 3059857855</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-2xl">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Correo Electrónico</h3>
            <p className="text-gray-300">info@petmode.com</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-800 rounded-2xl">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Ubicación</h3>
            <p className="text-gray-300">Manizales, Caldas</p>
          </div>
        </div>
      </div>
    </section>
  );

  // Social Section
  const Socials = () => (
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
  );

  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <CategoriesGrid />
      <Products />
      <Features />
      <Contact />
      <Socials />
    </div>
  );
};

export default Home;