import { Component } from "react";
import Producto from "./Producto.js"


//creo los estilos para mostrarlos en pantalla por inline Style

const styles  ={
    productos:{
        display:'flex',
        flexDirectio:'row',// esto se hace para poder mostrar los elementos de izquierda a derecha  
        justifyContent:'space-between', //Comparte el 100% del espacio de manera equitativa con los productos 
    }
}

// creo el componente de productos, le paso las propiedades que recibe de app en el momento de la instaciacion 
class Productos extends Component{
    render(){
        const {productos,agregarAlCarro} = this.props
        return(
            //por cada producto pasado al momento de instanciar productos genero un map ( simil forEach) y genero un componente con una funcion una key y un objeto producto
            // que se va a pasar al componente producto para seguir trabajando con el prodcuto
            <div style={styles.productos}>
                {/* llamo por cada instancia de productos al producto completo, esto para poder tener un manejo de los productos en general
                + */}
                {productos.map((producto)=>
                    <Producto
                        agregarAlCarro={agregarAlCarro}
                        key={producto.name}
                        producto={producto}
                    />
                )}
            </div>

        )

    }

}

export default Productos