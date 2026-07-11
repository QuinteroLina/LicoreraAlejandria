import { useContext } from "react";
import "../styles/dashboard.css";
import ProductManager from "../components/ProductManager";
import { CartContext } from "../context/CartContext";
import productos from "../data/productos";

// Componente que muestra el panel administrativo de la aplicación
function Dashboard() {

    // Obtiene la información del carrito desde el contexto
    const { carrito, total } = useContext(CartContext);

    // Calcula la cantidad total de productos registrados
    const totalProductos = productos.length;

    return (

        <div className="dashboard">

            <header className="dashboard-header">

                <h1>Licorera Alejandría</h1>

                <p>Panel Administrativo</p>

            </header>

            {/* Tarjetas con información general del sistema */}
            <section className="estadisticas">

                <div className="card">

                    <h2>📦 Productos</h2>

                    <h3>{totalProductos}</h3>

                </div>

                <div className="card">

                    <h2>🛒 En carrito</h2>

                    <h3>{carrito.length}</h3>

                </div>

                <div className="card">

                    <h2>💰 Total carrito</h2>

                    <h3>
                        ${total.toLocaleString("es-CO")}
                    </h3>

                </div>

                <div className="card">

                    <h2>📂 Categorías</h2>

                    <h3>6</h3>

                </div>

            </section>

            {/* Componente para la administración de productos */}
            <ProductManager />

        </div>

    );

}

export default Dashboard;