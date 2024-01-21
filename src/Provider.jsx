import React, { useState } from 'react'
import Appcontext from './Create'
import propTypes from 'prop-types'

function Provider({children}) {
const [estado,setestado]=useState([])  
const [input,setinput]=useState("")
const [carrinho,setcarrinho]=useState([])
const [soma,setsoma]=useState(0)
const [soma2,setsoma2]=useState(0)
const [veiculo,setveiculo]=useState([])
const [ocultarcarrinho,setocultarcarrinho]=useState(false)
const [ocultarveiculo,setocultarveiculo]=useState(false)

const BuscarProdutos=async(codigo)=>{

 const valores = await fetch(`https://api.mercadoLibre.com/sites/MLB/search?q=${codigo}`)
const data = await valores.json().then((resposta)=>setestado(resposta.results))
}





const objeto={
soma2,
setsoma2,
veiculo,
setveiculo,
ocultarcarrinho,
setocultarcarrinho,
ocultarveiculo,
setocultarveiculo,
soma,
setsoma,
BuscarProdutos,
estado,
setestado,
input,
setinput,
carrinho,
setcarrinho,

}  
  
return (
  <div className="mural">
<Appcontext.Provider  value={objeto} >

{children}



</Appcontext.Provider>
</div>


















    
  )
}
export default Provider
Provider.propTypes={
children:propTypes.any
}.isRequired

















