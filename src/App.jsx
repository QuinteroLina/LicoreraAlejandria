// Importación de los componentes principales de la aplicación
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Products from "./components/Products";
import Footer from "./components/Footer";
import SalesHistory from "./components/SalesHistory";
import { CartProvider } from "./context/CartContext";

function App() {

    return (

        // CartProvider permite compartir el carrito de compras con todos los componentes
        <CartProvider>

            {/* Barra de navegación */}
            <Navbar />

            {/* Página de bienvenida */}
            <Home />

            {/* Panel administrativo */}
            <Dashboard />

            {/* Catálogo de productos */}
            <Products />

            {/* Carrito de compras */}
            <Cart />

            {/* Historial de ventas */}
            <SalesHistory />

            {/* Pie de página */}
            <Footer />

        </CartProvider>

    );

}

export default App;