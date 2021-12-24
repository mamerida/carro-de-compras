import { Component } from "react";
 // creo el componente y exporto un fiv con los hijos, se coloca en otro div para poder agregar elementos por arriba o abajo del body
 // div de mas arriba centra todo el contenido
 // div de abajo dar el ancho detenermiado. Si no lo centro lo alinea a la izquierda. Y si no creo el div inferior todo se va a centrar
 const styles = {
    layout:{
        backgroundColor: '#fff',
        color:'#0A283E',
        alignItems:'center',
        display:'flex',
        flexDirection:'column',
    },
    container:{
        width:"1200px",
    }
}
class Layout extends Component{

    render(){
        return(
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}                
                </div>
                
            </div>
        )
    }
}

export default Layout