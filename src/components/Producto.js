import { Component } from "react";
// creo el producto de manera individual 
class Producto extends Component{

    

    render(){
        // creo la variable de producto para poder acceder a las propiedades del mismo
        const {producto } = this.props
        console.log(this.props)
        return(
            <div>
                <img alt ={producto.name} src = {producto.img}/>
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
            </div>
        
            )
    }


}



export default Producto