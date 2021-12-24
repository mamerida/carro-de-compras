import { Component } from "react";

const styles={
    //da estilo a los elementos del carro
    detallesCarro:{
        backgroundColor:'#fff',
        position:'absolute',
        marginTop:30,
        boxShadow:'1px 5px rgb(0,0,0,0.2)',
        borderRadius:'5px',
        width:'300px',
        right:5
    },
    //da estilo a los contenedores para uqe sea vea bonito 
    ul:{
        margin: 0,
        padding: 0
    },
    producto:{
        listStyleType:'none', // elimina los puntos 
        display:'flex', //esto permite manejar mejor los elementos
        justifyContent:'space-between',
        alignItems:'center',
        padding:'25px 20px',
        borderBottom:'solid 1px #aaa'
    },
}
//detalle de carro va a mostrar los elementos y el precio total de los mismos dentro del carrito para poder detallar la compra 
class DetallesCarro extends Component{
    render(){
        const {carro} = this.props

        return(
            <div style={styles.detallesCarro}>
                <ul  style={styles.ul}>
                    {carro.map(x => 
                    <li  style={styles.producto} key={x.name}>
                        <img alt={x.name} src={x.img} width="50" height="32"></img>
                        {x.name} <span>{x.cantidad}</span>
                        
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default DetallesCarro