// components/Navbar.tsx
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { LoginModal } from "../../login/LoginModal";
import { useAuth } from "../../../Hooks/useAuth";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../../Context/CartContext";
import { AuthModal } from '../../login/AuthModal';
import { CartModal } from "../../../Components/CartModal";

const Navbar = () => {
  // ✅ CORRECTO - Hook llamado dentro del componente
  const { cartCount } = useCart();
  
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("es");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const location = useLocation();
  const { user, login, logout } = useAuth();

  const navItems = [
    { label: "Inicio", path: "/" },
    { label: "Productos", path: "/productos" },
    { label: "Contacto", path: "/contacto" },
  ];

  const getLinkStyle = (path: string) =>
    location.pathname === path
      ? "text-cyan-700 font-semibold"
      : "text-gray-700 hover:text-orange-500";

  return (
    <nav className="bg-[#fef9f3] text-gray-800 sticky top-0 z-50 shadow-md w-full">
      <div className="w-full flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 mb-2 cursor-pointer">
          <img src="/src/assets/dog-paw.svg" alt="PetMode Logo" className="w-15 h-8 object-contain" />
          <h3 className="text-3xl font-bold">PetMode</h3>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors duration-200 ${getLinkStyle(item.path)}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right-side controls */}
        <div className="hidden md:flex items-center space-x-4 relative">
          {/* Idioma */}
          <div className="flex items-center space-x-2 bg-white px-2 py-1 rounded-md border border-gray-300">
            <FaGlobeAmericas className="text-cyan-700" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-white text-sm focus:outline-none"
            >
              <option value="en">🇺🇸 EN</option>
              <option value="es">🇪🇸 ES</option>
            </select>
          </div>

          {/* Icono carrito */}
          <div className="relative">
            <FaShoppingCart className="text-2xl text-cyan-500 cursor-pointer" onClick={() => setShowCart(true)} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          {/* Login / User */}
          {!user ? (
            <>
              <button onClick={() => { setAuthMode('login'); setShowAuthModal(true); }} className="text-sm font-medium hover:text-orange-500">
                Iniciar sesión
              </button>
              <button onClick={() => { setAuthMode('register'); setShowAuthModal(true); }} className="text-sm font-medium hover:text-cyan-600 ml-2">
                Registrarse
              </button>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="text-sm font-medium hover:text-orange-500"
              >
                {user}
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg w-40 z-50">
                  <button
                    onClick={() => {
                      logout();
                      setUserMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className="text-gray-700 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${getLinkStyle(item.path)} text-lg`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {/* Idioma */}
          <div className="flex items-center space-x-2 bg-white px-2 py-1 rounded-md border border-gray-300">
            <FaGlobeAmericas className="text-cyan-500" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-white text-sm focus:outline-none"
            >
              <option value="en">🇺🇸 EN</option>
              <option value="es">🇪🇸 ES</option>
            </select>
          </div>
          {/* Login/Logout in mobile */}
          {!user ? (
            <>
              <button onClick={() => { setAuthMode('login'); setShowAuthModal(true); }} className="text-sm font-medium text-cyan-500">
                Iniciar sesión
              </button>
              <button onClick={() => { setAuthMode('register'); setShowAuthModal(true); }} className="text-sm font-medium text-cyan-600 ml-2">
                Registrarse
              </button>
            </>
          ) : (
            <button onClick={logout} className="text-sm font-medium text-red-500">
              Cerrar sesión
            </button>
          )}
        </div>
      )}

      {/* Login Modal */}
      {showAuthModal && (
        <AuthModal
          mode={authMode}
          onClose={() => setShowAuthModal(false)}
          onAuthSuccess={(username) => {
            login(username);
            setShowAuthModal(false);
          }}
        />
      )}

      {showCart && (
        <CartModal onClose={() => setShowCart(false)} />
      )}
    </nav>
  );
};

export default Navbar;