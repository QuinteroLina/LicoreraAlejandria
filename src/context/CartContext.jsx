import { createContext, useEffect, useState } from "react";

// Contexto que permite compartir la información del carrito entre los componentes
export const CartContext = createContext();

export function CartProvider({ children }) {

    // Estado que almacena los productos agregados al carrito
    const [carrito, setCarrito] = useState(() => {

        const datos = localStorage.getItem("carrito");

        return datos ? JSON.parse(datos) : [];

    });

    // Guarda automáticamente el carrito en LocalStorage cuando se modifica
    useEffect(() => {

        localStorage.setItem(
            "carrito",
            JSON.stringify(carrito)
        );

    }, [carrito]);

    // Agrega un producto al carrito verificando primero el stock disponible
    const agregarAlCarrito = (producto) => {

        const existe = carrito.find(
            item => item.id === producto.id
        );

        const cantidadActual = existe
            ? existe.cantidad
            : 0;

        // Verifica que todavía haya unidades disponibles
        if (cantidadActual >= producto.stock) {

            alert("⚠️ No hay más unidades disponibles de este producto.");

            return;

        }

        if (existe) {

            const nuevoCarrito = carrito.map(item =>

                item.id === producto.id
                    ? {
                        ...item,
                        cantidad: item.cantidad + 1
                    }
                    : item

            );

            setCarrito(nuevoCarrito);

        } else {

            setCarrito([
                ...carrito,
                {
                    ...producto,
                    cantidad: 1
                }
            ]);

        }

    };

    // Elimina un producto del carrito
    const eliminarProducto = (id) => {

        setCarrito(

            carrito.filter(
                item => item.id !== id
            )

        );

    };

    // Vacía completamente el carrito
    const vaciarCarrito = () => {

        setCarrito([]);

    };

    // Registra la compra y actualiza el inventario
    const finalizarCompra = () => {

        if (carrito.length === 0) {

            alert("El carrito está vacío.");

            return;

        }

        // Recupera el inventario actual almacenado
        const productosGuardados =
            JSON.parse(localStorage.getItem("productos")) || [];

        // Si todavía no existe un inventario guardado,
        // se utiliza el listado inicial de productos.
        if (productosGuardados.length === 0) {

            alert("⚠️ No se encontró el inventario.");

            return;

        }

        // Verifica nuevamente que haya suficiente stock
        const stockDisponible = carrito.every(item => {

            const producto = productosGuardados.find(
                producto => producto.id === item.id
            );

            return producto && producto.stock >= item.cantidad;

        });

        if (!stockDisponible) {

            alert(
                "⚠️ Uno o más productos no tienen suficiente stock disponible."
            );

            return;

        }

        // Actualiza las cantidades disponibles
        const inventarioActualizado = productosGuardados.map(producto => {

            const productoComprado = carrito.find(
                item => item.id === producto.id
            );

            if (productoComprado) {

                return {
                    ...producto,
                    stock: producto.stock - productoComprado.cantidad
                };

            }

            return producto;

        });

        // Guarda el inventario actualizado
        localStorage.setItem(
            "productos",
            JSON.stringify(inventarioActualizado)
        );

        // Recupera el historial de ventas
        const ventas =
            JSON.parse(localStorage.getItem("ventas")) || [];

        // Crea el registro de la nueva venta
        const nuevaVenta = {

            id: Date.now(),

            fecha: new Date().toLocaleString("es-CO"),

            productos: carrito,

            total

        };

        // Agrega la nueva venta al historial
        ventas.push(nuevaVenta);

        localStorage.setItem(
            "ventas",
            JSON.stringify(ventas)
        );
        
        window.dispatchEvent(new Event("ventaRealizada"));

        // Vacía el carrito después de completar la compra
        setCarrito([]);

        alert("✅ Compra realizada correctamente.");

    };

    // Calcula el valor total de la compra
    const total = carrito.reduce(

        (acum, item) =>

            acum + item.venta * item.cantidad,

        0

    );

    return (

        <CartContext.Provider

            value={{

                carrito,

                agregarAlCarrito,

                eliminarProducto,

                vaciarCarrito,

                finalizarCompra,

                total

            }}

        >

            {children}

        </CartContext.Provider>

    );

}