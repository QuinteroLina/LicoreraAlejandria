import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/cart.css";

// Componente que muestra el carrito de compras
function Cart() {

    // Obtiene los datos y funciones del contexto del carrito
    const {
        carrito,
        eliminarProducto,
        vaciarCarrito,
        finalizarCompra,
        total
    } = useContext(CartContext);

    return (

        <section className="cart">

            <h2>🛒 Mi Carrito</h2>

            {
                // Validar si el carrito tiene productos
                carrito.length === 0 ? (

                    <p>El carrito está vacío.</p>

                ) : (

                    <>

                        {
                            // Recorrer los productos agregados al carrito
                            carrito.map((producto) => (

                                <div
                                    key={producto.id}
                                    className="cart-item"
                                >

                                    <img
                                        src={producto.imagen}
                                        alt={producto.nombre}
                                    />

                                    <div>

                                        <h3>{producto.nombre}</h3>

                                        <p>
                                            Cantidad: {producto.cantidad}
                                        </p>

                                        <p>
                                            Precio: $
                                            {Number(producto.venta).toLocaleString("es-CO")}
                                        </p>

                                        <p>
                                            Subtotal: $
                                            {(
                                                Number(producto.venta) *
                                                producto.cantidad
                                            ).toLocaleString("es-CO")}
                                        </p>

                                    </div>

                                    {/* Botón para eliminar un producto del carrito */}
                                    <button
                                        onClick={() =>
                                            eliminarProducto(producto.id)
                                        }
                                    >
                                        Eliminar
                                    </button>

                                </div>

                            ))
                        }

                        <hr />

                        {/* Muestra el valor total de la compra */}
                        <h3>
                            Total: ${Number(total).toLocaleString("es-CO")}
                        </h3>

                        {/* Vacía completamente el carrito */}
                        <button onClick={vaciarCarrito}>
                            Vaciar carrito
                        </button>

                        {/* Finaliza la compra y registra la venta */}
                        <button
                            className="btn-finalizar"
                            onClick={finalizarCompra}
                        >
                            Finalizar compra
                        </button>

                    </>

                )
            }

        </section>

    );

}

export default Cart;