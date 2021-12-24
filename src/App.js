
import { Component } from 'react';
import Productos from "./components/Productos"
import Title from "./components/Title"
import Navbar from "./components/Navbar"
import Layout from './components/Layout.js' // esto nos va a permitir centrar el contenido de la pagina web y agergar un menu



class App extends Component{
  //creo un estado inicial, que serian los productos del carrito
    state={
      productos:[
        {name:"Tomate", price: 1500 , img:"/productos/tomate.jpg"},
        {name:"Arbejas", price: 2500 , img:"/productos/arbejas.jpg"},
        {name:"Lechuga", price: 500 , img:"/productos/lechuga.jpg"},
      ],
      carro:[      ]
    }
    //agrego la funcionalidad de carro al boton "agregar al carro" concateno al elemento a agregar la cantidad
    agregarAlCarro = (producto) =>{
      const {carro } = this.state
      //agrego la condicion para que en caso de encontrar este elemento dentro del carro sume cantidades
      if(carro.find(x => x.name=== producto.name)){


        const newCarro = carro.map(
            x=> x.name === producto.name ? ({...x, cantidad: x.cantidad + 1 }): x
         )
        return this.setState({carro: newCarro})

      }else{
      return this.setState({
        carro: this.state.carro.concat({
          ...producto,cantidad:1
        }) // toma el arreglo y lo agrega
      })
    }
    }

    render(){
      return(
        <div>
          {/* paso la propiedad carro al navbar para que el carrito tenga acceso a la misma */}
        <Navbar carro={this.state.carro}/>
        <Layout>
          <Title/>
          
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos = {this.state.productos}
          />
        </Layout>
        </div>
      )


    }
}

export default App;
