import { useEffect, useState } from "react";
import productosIniciales from "../data/productos";

// Componente encargado de administrar los productos del sistema
function ProductManager({ actualizarTotal }) {

    // Estados para almacenar la información del formulario
    const [nombre, setNombre] = useState("");
    const [compra, setCompra] = useState("");
    const [venta, setVenta] = useState("");
    const [categoria, setCategoria] = useState("");
    const [stock, setStock] = useState("");
    const [imagen, setImagen] = useState("");

    // Estado que almacena la lista de productos
    const [productos, setProductos] = useState([]);

    // Estados para controlar la edición de un producto
    const [editando, setEditando] = useState(false);
    const [indiceEditar, setIndiceEditar] = useState(null);

    // Cargar el inventario al iniciar el componente
    useEffect(() => {

        const datosGuardados =
            JSON.parse(localStorage.getItem("productos"));

        // Si ya existe un inventario, se utiliza.
        // Si no existe, se cargan los productos iniciales.
        const inventarioInicial =
            datosGuardados && datosGuardados.length > 0
                ? datosGuardados
                : productosIniciales;

        localStorage.setItem(
            "productos",
            JSON.stringify(inventarioInicial)
        );

        setProductos(inventarioInicial);

        if (actualizarTotal) {
            actualizarTotal(inventarioInicial.length);
        }

    }, [actualizarTotal]);

    // Limpia los campos del formulario
    const limpiarFormulario = () => {

        setNombre("");
        setCompra("");
        setVenta("");
        setCategoria("");
        setStock("");
        setImagen("");

        setEditando(false);
        setIndiceEditar(null);

    };

    // Guarda los cambios en LocalStorage
    const guardarLocalStorage = (lista) => {

        localStorage.setItem(
            "productos",
            JSON.stringify(lista)
        );

        setProductos(lista);

        window.dispatchEvent(
        );

        if (actualizarTotal) {
            actualizarTotal(lista.length);
        }

    };

    // Agrega un nuevo producto al inventario
    const agregarProducto = () => {

        if (
            nombre.trim() === "" ||
            compra.trim() === "" ||
            venta.trim() === "" ||
            categoria.trim() === "" ||
            stock.trim() === "" ||
            imagen.trim() === ""
        ) {
            alert("Complete todos los campos.");
            return;
        }

        const nuevoProducto = {

            id: Date.now(),

            nombre: nombre.trim(),

            categoria: categoria.trim(),

            compra: Number(compra),

            venta: Number(venta),

            stock: Number(stock),

            imagen: imagen.trim()

        };

        const nuevaLista = [
            ...productos,
            nuevoProducto
        ];

        guardarLocalStorage(nuevaLista);

        limpiarFormulario();

        alert("✅ Producto agregado correctamente.");

    };

    // Elimina un producto seleccionado
    const eliminarProducto = (indice) => {

        if (!window.confirm("¿Desea eliminar este producto?")) {
            return;
        }

        const nuevaLista = productos.filter(
            (_, i) => i !== indice
        );

        guardarLocalStorage(nuevaLista);

    };

    // Carga la información del producto para editarla
    const editarProducto = (indice) => {

        const producto = productos[indice];

        setNombre(producto.nombre);

        setCompra(
            producto.compra ?? ""
        );

        setVenta(
            producto.venta ?? ""
        );

        setCategoria(
            producto.categoria
        );

        setStock(
            producto.stock ?? ""
        );

        setImagen(
            producto.imagen
        );

        setEditando(true);

        setIndiceEditar(indice);

    };

    // Actualiza la información del producto editado
    const actualizarProducto = () => {

        if (
            nombre.trim() === "" ||
            compra.trim() === "" ||
            venta.trim() === "" ||
            categoria.trim() === "" ||
            stock.trim() === "" ||
            imagen.trim() === ""
        ) {
            alert("Complete todos los campos.");
            return;
        }

        const copia = [...productos];

        copia[indiceEditar] = {

            ...copia[indiceEditar],

            nombre: nombre.trim(),

            categoria: categoria.trim(),

            compra: Number(compra),

            venta: Number(venta),

            stock: Number(stock),

            imagen: imagen.trim()

        };

        guardarLocalStorage(copia);

        limpiarFormulario();

        alert("✅ Producto actualizado.");

    };

    return (

        <div className="manager">

            <h2>Administrador de Productos</h2>

            {/* Formulario para registrar o editar productos */}
            <div className="formulario">

                <input
                    type="text"
                    placeholder="Nombre del producto"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Precio de compra"
                    value={compra}
                    onChange={(e) => setCompra(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Precio de venta"
                    value={venta}
                    onChange={(e) => setVenta(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Categoría"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Stock"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Nombre de la imagen"
                    value={imagen}
                    onChange={(e) => setImagen(e.target.value)}
                />

                {
                    editando ?

                        <button onClick={actualizarProducto}>
                            Actualizar Producto
                        </button>

                        :

                        <button onClick={agregarProducto}>
                            Agregar Producto
                        </button>
                }

            </div>

            <hr />

            {/* Tabla con los productos registrados */}
            <table>

                <thead>

                    <tr>

                        <th>Nombre</th>
                        <th>Compra</th>
                        <th>Venta</th>
                        <th>Categoría</th>
                        <th>Stock</th>
                        <th>Imagen</th>
                        <th>Acciones</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        productos.map((producto, indice) => (

                            <tr key={producto.id ?? indice}>

                                <td>
                                    {producto.nombre}
                                </td>

                                <td>
                                    ${producto.compra}
                                </td>

                                <td>
                                    ${producto.venta}
                                </td>

                                <td>
                                    {producto.categoria}
                                </td>

                                <td>
                                    {producto.stock}
                                </td>

                                <td>
                                    {producto.imagen}
                                </td>

                                <td>

                                    <button
                                        onClick={() =>
                                            editarProducto(indice)
                                        }
                                    >
                                        Editar
                                    </button>

                                    <button
                                        onClick={() =>
                                            eliminarProducto(indice)
                                        }
                                    >
                                        Eliminar
                                    </button>

                                </td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>

    );

}

export default ProductManager;