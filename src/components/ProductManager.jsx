import { useEffect, useState } from "react";

// Componente encargado de administrar los productos del sistema
function ProductManager({ actualizarTotal }) {

    // Estados para almacenar la información del formulario
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagen, setImagen] = useState("");

    // Estado que almacena la lista de productos
    const [productos, setProductos] = useState([]);

    // Estados para controlar la edición de un producto
    const [editando, setEditando] = useState(false);
    const [indiceEditar, setIndiceEditar] = useState(null);

    // Cargar los productos almacenados en LocalStorage al iniciar el componente
    useEffect(() => {

        const datos = JSON.parse(localStorage.getItem("productos")) || [];

        setProductos(datos);

        if (actualizarTotal) {
            actualizarTotal(datos.length);
        }

    }, []);

    // Limpia los campos del formulario después de agregar o editar
    const limpiarFormulario = () => {

        setNombre("");
        setPrecio("");
        setCategoria("");
        setImagen("");

        setEditando(false);
        setIndiceEditar(null);

    };

    // Guarda los cambios en LocalStorage y actualiza la lista de productos
    const guardarLocalStorage = (lista) => {

        localStorage.setItem("productos", JSON.stringify(lista));

        setProductos(lista);

        if (actualizarTotal) {
            actualizarTotal(lista.length);
        }

    };

    // Agrega un nuevo producto al inventario
    const agregarProducto = () => {

        if (
            nombre.trim() === "" ||
            precio.trim() === "" ||
            categoria.trim() === "" ||
            imagen.trim() === ""
        ) {
            alert("Complete todos los campos.");
            return;
        }

        const nuevoProducto = {
            nombre,
            precio,
            categoria,
            imagen
        };

        const nuevaLista = [...productos, nuevoProducto];

        guardarLocalStorage(nuevaLista);

        limpiarFormulario();

        alert("Producto agregado correctamente.");

    };

    // Elimina un producto seleccionado
    const eliminarProducto = (indice) => {

        if (!window.confirm("¿Desea eliminar este producto?")) return;

        const nuevaLista = productos.filter((_, i) => i !== indice);

        guardarLocalStorage(nuevaLista);

    };

    // Carga la información del producto para editarla
    const editarProducto = (indice) => {

        const producto = productos[indice];

        setNombre(producto.nombre);
        setPrecio(producto.precio);
        setCategoria(producto.categoria);
        setImagen(producto.imagen);

        setEditando(true);
        setIndiceEditar(indice);

    };

    // Actualiza la información del producto editado
    const actualizarProducto = () => {

        if (
            nombre.trim() === "" ||
            precio.trim() === "" ||
            categoria.trim() === "" ||
            imagen.trim() === ""
        ) {
            alert("Complete todos los campos.");
            return;
        }

        const copia = [...productos];

        copia[indiceEditar] = {
            nombre,
            precio,
            categoria,
            imagen
        };

        guardarLocalStorage(copia);

        limpiarFormulario();

        alert("Producto actualizado.");

    };

    return (

        <div className="manager">

            <h2>Administrador de Productos</h2>

            {/* Formulario para registrar o editar productos */}
            <div className="formulario">

                <input
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Precio"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Categoría"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
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
                        <th>Precio</th>
                        <th>Categoría</th>
                        <th>Imagen</th>
                        <th>Acciones</th>

                    </tr>

                </thead>

                <tbody>

                    {
                        productos.map((producto, indice) => (

                            <tr key={indice}>

                                <td>{producto.nombre}</td>

                                <td>${producto.precio}</td>

                                <td>{producto.categoria}</td>

                                <td>{producto.imagen}</td>

                                <td>

                                    {/* Botón para editar un producto */}
                                    <button
                                        onClick={() => editarProducto(indice)}
                                    >
                                        Editar
                                    </button>

                                    {/* Botón para eliminar un producto */}
                                    <button
                                        onClick={() => eliminarProducto(indice)}
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