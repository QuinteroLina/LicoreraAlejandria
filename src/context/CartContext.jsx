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

    // Agrega un producto al carrito o aumenta su cantidad si ya existe
    const agregarAlCarrito = (producto) => {

        const existe = carrito.find(
            item => item.id === producto.id
        );

        if (existe) {

            const nuevoCarrito = carrito.map(item =>

                item.id === producto.id
                    ? { ...item, cantidad: item.cantidad + 1 }
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

    // Registra la compra en el historial de ventas
    const finalizarCompra = () => {

        if (carrito.length === 0) {

            alert("El carrito está vacío.");

            return;

        }

        const ventas = JSON.parse(localStorage.getItem("ventas")) || [];

        const nuevaVenta = {

            fecha: new Date().toLocaleString("es-CO"),

            productos: carrito,

            total

        };

        ventas.push(nuevaVenta);

        localStorage.setItem(
            "ventas",
            JSON.stringify(ventas)
        );

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