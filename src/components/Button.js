import { Component } from "react";
 
//this.props recibe las propiedades producto y el texto del mismo
//recibe children con el texto y el onclick con agregarAlCarro(producto)

const styles ={
    button:{
        backgroundColor:'#0A283E',
        color:'#fff',
        padding:'15px 20px' , // vertical horizantal izquierda derecha 
        border:'none',
        borderRadius:'5px',
        cursor:'pointer'
    },
 

}
class Button extends Component{
    
    render(){
        return(
            <button  style ={styles.button} {...this.props} />
        )
    }
}


export default Button