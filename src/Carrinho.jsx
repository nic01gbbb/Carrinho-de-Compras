import React, { useContext } from 'react'
import Appcontext from './Create'
import { v4 } from 'uuid'
import { IoIosRemoveCircle } from "react-icons/io";
import { CgRemove } from "react-icons/cg";


function Carrinho() {
const {carrinho,setcarrinho}=useContext(Appcontext)
const {soma,setsoma,soma2,setsoma2}=useContext(Appcontext)
const {ocultarcarrinho,setocultarcarrinho}=useContext(Appcontext)
const {veiculo,setveiculo}=useContext(Appcontext)

const ApagarTudo=()=>{
const box = []
setcarrinho(box)
}
  
const concluircompra=()=>{
const objeto =[]
 alert("Compra concluida com sucesso")
const carrinhoparaveiculo = [...veiculo,...carrinho]
setveiculo(carrinhoparaveiculo)
setsoma2(+soma2+soma)
setocultarcarrinho(!ocultarcarrinho)
setcarrinho(objeto)
setsoma(0)
}
const removerdocarrinho=(id,x)=>{
const carrinhocompleto = [...carrinho]
const filter = carrinhocompleto.filter((filtrei)=>(
filtrei.id === id?null:filtrei))
setcarrinho(filter)
setsoma(soma-x)
}

return (
    
  <div style={{display:carrinho.length<1?"none":"flex"
  && ocultarcarrinho?"flex":"none"
  
  }}   key={v4()}  className='carrinho-div' >
      <button onClick={ApagarTudo} className='button-apagarTudo'>
    <CgRemove />
      </button>   
   {carrinho.map((carrinhos,index)=>(
    <div style={{borderBottom:index===carrinho.length-1?"none":"3px solid red"}}    className="conteudo-carrinho">
   <img className='carrinho-imagem' src={carrinhos.imagem
  .replace(/\w\.jpg/gi,"W/jpg")
  }/>
   <div className="mine-conteudo-carrinho">
   <button onClick={()=>removerdocarrinho(carrinhos.id,carrinhos.preço)} className='button-carrinho-remove' >
   <IoIosRemoveCircle />
   </button>
   <h2 className='carrinho-preço' >{carrinhos.preço
   .toLocaleString("pt-br",{style:"currency",currency:"BRL"})}</h2>
   <p className='carrinho-titulo' >{carrinhos.titulo}</p>
    </div>
    
    </div> ))}
     <p className='carrinho-resultado'  style={{opacity:carrinho.length<1?"0":"1"}}  >{soma.
     toLocaleString("pt-br",
     {style:"currency",currency:"BRL"}
     )} Reais em compras</p>
       <button onClick={concluircompra} className='button-concluircompra' >Concluir compra</button>
     </div>
  )
}

export default Carrinho


















