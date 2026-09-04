// Importación de los componentes principales
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Products from "./components/Products";
import Cart from "./components/Cart";
import SalesHistory from "./components/SalesHistory";

import { CartProvider } from "./context/CartContext";

function App() {
    return (
        <CartProvider>
            <BrowserRouter>

                {/* Barra de navegación */}
                <Navbar />

                {/* Rutas principales de la aplicación */}
                <Routes>

                    {/* Página de inicio */}
                    <Route path="/" element={<Home />} />

                    {/* Catálogo de productos */}
                    <Route path="/productos" element={<Products />} />

                    {/* Carrito de compras */}
                    <Route path="/carrito" element={<Cart />} />

                    {/* Historial de ventas */}
                    <Route path="/ventas" element={<SalesHistory />} />

                    {/* Panel administrativo */}
                    <Route path="/dashboard" element={<Dashboard />} />

                </Routes>

                {/* Pie de página */}
                <Footer />

            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
