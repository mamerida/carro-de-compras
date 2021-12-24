import { Component } from "react";
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

const styles = {
    carro:{
        backgroundColor:'#359A2C',
        color:'#fff',
        border:'none',
        padding:'15px',
        borderRadius:'15px',
        cursor:'pointer'
    },
    bubble:{
        position:'relative',
        left:13,
        top:20,


    }
}

class Carro extends Component{
    render(){
        //páso los elementos a variables con su mismo nombre desde el props 
        const {carro, esCarroVisible, mostrarCarro} = this.props
        const cantidad = carro.reduce((acc,el)=> acc + el.cantidad ,0)
        return(
            <div>
                {/* Se crea una burbuja indicando los elementos en el carrito donde le estilo creado ahora se usa para posicionar la alerta */}
                <span style={styles.bubble} >
                    {/* se hace render condicional para evitar que se muestre la alerta en caos de carrito vacio */}
                    { cantidad !== 0 ? <BubbleAlert value={cantidad}/> : null }                   
                </span>
                <button onClick={mostrarCarro} style={styles.carro}>
                    Carro
                </button>
                {esCarroVisible ?  <DetallesCarro carro={carro}/> : null }
               
            </div>
        )
    }
} 


export default Carro