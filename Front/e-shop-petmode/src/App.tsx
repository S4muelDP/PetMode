import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/shared/NavBar/NavBar";
import Home from "./Components/home/Home";
import ProductsCore from "./Components/products/ProductsCore";


function App() {
  return (
    <Router>
      <div className="font-poppins min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ProductsCore />} />           
            {/* <Route path="/contacto" element={<Contacto />} /> */}
          </Routes>
        </main>     
      </div>
    </Router>
  );
}

export default App
