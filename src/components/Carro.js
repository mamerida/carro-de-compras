import { Component } from "react";
import BubbleAlert from './BubbleAlert'

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
        return(
            <div>
                {/* Se crea una burbuja indicando los elementos en el carrito donde le estilo creado ahora se usa para posicionar la alerta */}
                <span style={styles.bubble} >
                    <BubbleAlert/>
                </span>
                <button style={styles.carro}>
                    Carro
                </button>
            </div>
        )
    }
}

export default Carro