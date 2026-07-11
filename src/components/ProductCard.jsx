import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/productCard.css";

// Componente que muestra la información de cada producto del catálogo
function ProductCard({ producto }) {

    // Obtiene la función para agregar productos al carrito
    const { agregarAlCarrito } = useContext(CartContext);

    return (

        <div className="product-card">

            <img
                src={producto.imagen}
                alt={producto.nombre}
            />

            <h3>{producto.nombre}</h3>

            {/* Precio de venta del producto */}
            <p className="precio">
                ${producto.venta.toLocaleString("es-CO")}
            </p>

            {/* Categoría del producto */}
            <p className="categoria">
                {producto.categoria}
            </p>

            {/* Cantidad disponible en inventario */}
            <p className="stock">
                Disponibles: {producto.stock}
            </p>

            {/* Agrega el producto seleccionado al carrito */}
            <button
                onClick={() => agregarAlCarrito(producto)}
            >
                Agregar al carrito
            </button>

        </div>

    );

}

export default ProductCard;