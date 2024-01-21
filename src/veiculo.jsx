import React, { useContext } from 'react'
import Appcontext from './Create'
import { v4 } from 'uuid'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { CgRemove } from "react-icons/cg";




function Veiculo() {
const {carrinho,veiculo,setveiculo,soma2,setsoma2}=useContext(Appcontext)
const {ocultarveiculo,setocultarveiculo}=useContext(Appcontext)

const ApagarTudo=()=>{
const box = []
setveiculo(box)
}


const removerdoveiculo=(id,x)=>{
const veiculocompleto = [...veiculo]
const filter = veiculocompleto.filter((filtrei)=>(
filtrei.id === id?null:filtrei))
setveiculo(filter)
setsoma2(soma2-x)
}



return (
<div className='veiculo-div' style={{opacity:veiculo.length<1?"0":"1" &&ocultarveiculo?"0":"1"
&& carrinho.length>0?"0":"1", display:carrinho.length>0?"none":"flex"}}>
<button onClick={ApagarTudo}  className='button-apagarTudo-veiculo'>
<CgRemove />
</button>
 {veiculo.map((veiculos,index)=>(
   <div key={v4()}style={{borderBottom:index===veiculo.length-1?"none":"3px solid red"}}    className="conteudo-veiculo">
   <img className='veiculo-imagem' src={veiculos.imagem
.replace(/\w\.jpg/gi, "W/jpg")}/>
  
   <div className="mine-conteudo-veiculo">
   <button onClick={()=>removerdoveiculo(veiculos.id,veiculos.preço)} className='button-veiculo-remove' >
   <IoMdRemoveCircleOutline />

   </button>
   <h2 className='veiculo-preço' >{veiculos.preço
   .toLocaleString("pt-br",{style:"currency",currency:"BRL"})}</h2>
   <p className='veiculo-titulo' >{veiculos.titulo}</p>
    </div>
    
    </div> ))}
     <p className='veiculo-resultado'  style={{opacity:veiculo.length<1?"0":"1"}}  >{soma2
     .toLocaleString("pt-br",
     {style:"currency",currency:"BRL"}
     )+" Reais em compras"
     
     }</p>
     










    </div>
  )
}

export default Veiculo