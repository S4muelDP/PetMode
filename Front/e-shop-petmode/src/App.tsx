import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/shared/NavBar/NavBar";
import Home from "./Components/home/Home";
import ProductsCore from "./Components/products/ProductsCore";
import { ContactPage } from './Components/contact/ContactPage';

const GraciasPage = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh]">
    <div className="text-green-600 text-7xl mb-4">✔️</div>
    <h2 className="text-3xl font-bold mb-2">¡Gracias por tu compra!</h2>
    <p className="text-gray-600">Tu pedido ha sido recibido y está en proceso.</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="font-poppins min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ProductsCore />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/gracias" element={<GraciasPage />} />
          </Routes>
        </main>     
      </div>
    </Router>
  );
}

export default App
