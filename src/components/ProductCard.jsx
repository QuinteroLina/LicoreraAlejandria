import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/productCard.css";

// Componente que muestra la información de cada producto del catálogo
function ProductCard({ producto }) {

    // Obtiene la función para agregar productos al carrito
    const { agregarAlCarrito } = useContext(CartContext);

    // Verifica si el producto está agotado
    const agotado = producto.stock <= 0;

    return (

        <div className="product-card">

            <img
                src={producto.imagen}
                alt={producto.nombre}
            />

            <h3>{producto.nombre}</h3>

            {/* Precio de venta del producto */}
            <p className="precio">
                ${Number(producto.venta).toLocaleString("es-CO")}
            </p>

            {/* Categoría del producto */}
            <p className="categoria">
                {producto.categoria}
            </p>

            {/* Cantidad disponible en inventario */}
            <p className="stock">
                {
                    agotado
                        ? "Agotado"
                        : `Disponibles: ${producto.stock}`
                }
            </p>

            {/* Agrega el producto seleccionado al carrito */}
            <button
                onClick={() => agregarAlCarrito(producto)}
                disabled={agotado}
            >
                {
                    agotado
                        ? "Producto agotado"
                        : "Agregar al carrito"
                }
            </button>

        </div>

    );

}

export default ProductCard;