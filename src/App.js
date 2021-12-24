
import { Component } from 'react';
import Productos from "./components/Productos"




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
        <Productos
          agregarAlCarro={(producto)=> console.log(producto)}
          productos = {this.state.productos}
        />

      )


    }
}

export default App;
