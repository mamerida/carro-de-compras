import { Component } from "react";
import Button from './Button.js'

const styles = {
    producto:{
        border:'solid 2px #eee',
        boxShadow:'0 5px 5px rgb(0,0,0, 0.1)', // rgb 3 elementos define el color cuarto elemento opacidad
        width:'30%', // ocupa un 30% del total de la pantalla
        padding:"10px 15px", // para alejarlo un poco mas de los bordes
        borderRadius:"5px", //redondear borde
    },
    // para que las imagenes tengan su propio estilo y se vean mejor les vamos a dar un estilo 
    img:{
      width:"100%"  
    }

}

// creo el producto de manera individual 
class Producto extends Component{

    render(){
        // creo la variable de producto para poder acceder a las propiedades del mismo
        const {producto,agregarAlCarro } = this.props
        
        return(
            <div style={styles.producto}>
                <img alt ={producto.name} src = {producto.img} style={styles.img}/>
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Button onClick={()=>{agregarAlCarro(producto)}}> 
                    Agregar al carro
                </Button>
            </div>
        
            )
    }


}



export default Producto