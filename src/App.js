
import { Component } from 'react';
import Productos from "./components/Productos"
import Layout from './components/Layout.js' // esto nos va a permitir centrar el contenido de la pagina web y agergar un menu



class App extends Component{
  //creo un estado inicial, que serian los productos del carrito
    state={
      productos:[
        {name:"Tomate", price: 1500 , img:"/productos/tomate.jpg"},
        {name:"Arbejas", price: 2500 , img:"/productos/arbejas.jpg"},
        {name:"Lechuga", price: 500 , img:"/productos/lechuga.jpg"},
      ]
    }


    render(){
      return(
        <div>
        <Layout>


        
        <Productos
          agregarAlCarro={(producto)=> console.log(producto)}
          productos = {this.state.productos}
        />
        </Layout>
        </div>
      )


    }
}

export default App;
