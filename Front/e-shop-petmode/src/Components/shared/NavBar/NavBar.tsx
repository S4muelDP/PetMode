import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaGlobeAmericas } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [language, setLanguage] = useState("es");

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
        {/* <div className="flex-shrink-0">
          <h1 className="text-2xl font-bold text-gray-800">🐾 PetMode </h1>
        </div> */}
        <div className="flex items-center gap-3 mb-2">
         <img 
             src="/src/assets/dog-paw.svg" 
             alt="PetMode Logo" 
             className="w-15 h-8 object-contain"
             />
           <h3 className="text-3xl font-bold">PetMode</h3>
        </div>

        {/* Enlaces */}
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

        {/* Idioma */}
        <div className="hidden md:flex items-center space-x-4">
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
        </div>

        {/* Menú hamburguesa */}
        <div className="md:hidden">
          <button
            className="text-gray-700 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Menú móvil */}
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

          {/* Idioma móvil */}
          <div className="flex items-center space-x-2 bg-white px-2 py-1 rounded-md border border-gray-300">
            <FaGlobeAmericas className="text-orange-500" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-white text-sm focus:outline-none"
            >
              <option value="en">🇺🇸 EN</option>
              <option value="es">🇪🇸 ES</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
