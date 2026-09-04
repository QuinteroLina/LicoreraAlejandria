import { useContext, useEffect, useState } from "react";
import "../styles/dashboard.css";
import ProductManager from "../components/ProductManager";
import { CartContext } from "../context/CartContext";

// Componente que muestra el panel administrativo de la aplicación
function Dashboard() {

    // Obtiene la información del carrito desde el contexto
    const { carrito, total } = useContext(CartContext);

    // Estado que almacena el inventario actual
    const [productos, setProductos] = useState([]);

    // Carga el inventario almacenado en LocalStorage
    const cargarInventario = () => {

        const datos =
            JSON.parse(localStorage.getItem("productos")) || [];

        setProductos(datos);

    };

    // Carga el inventario al iniciar el Dashboard
    useEffect(() => {

        cargarInventario();

        // Actualiza el Dashboard cuando cambia el inventario
        window.addEventListener(
            "inventarioActualizado",
            cargarInventario
        );

        return () => {

            window.removeEventListener(
                "inventarioActualizado",
                cargarInventario
            );

        };

    }, []);

    // Calcula la cantidad total de productos registrados
    const totalProductos = productos.length;

    // Calcula la cantidad de categorías diferentes
    const totalCategorias = new Set(
        productos.map(producto => producto.categoria)
    ).size;

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
                        ${Number(total).toLocaleString("es-CO")}
                    </h3>

                </div>

                <div className="card">

                    <h2>📂 Categorías</h2>

                    <h3>{totalCategorias}</h3>

                </div>

            </section>

            {/* Componente para la administración de productos */}
            <ProductManager />

        </div>

    );

}

export default Dashboard;