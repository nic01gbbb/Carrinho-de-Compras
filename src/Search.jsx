import React, { useContext, useEffect, useState } from 'react'
import Appcontext from './Create'
import { FaCartShopping } from "react-icons/fa6";
import { v4 } from 'uuid';


function Search() {
const {soma,setsoma}=useContext(Appcontext)
const {estado,setestado}=useContext(Appcontext)
const {carrinho,setcarrinho}=useContext(Appcontext)
const cod = v4()


const adicionarelementonocarrinho=(a,b,c)=>{
  const carrinhocompleto = [...carrinho,
  {
  imagem:a,
  preço:b,
  titulo:c,
   id:v4()
    }]
  setcarrinho(carrinhocompleto)
  setsoma(+soma+b )
}
  



return (
<div className="search" style={{opacity:estado.length>0?"1":"0"}} >
{estado.map((peça)=>(
<div key={v4()}  className="conteudo">

<button onClick={()=>adicionarelementonocarrinho(peça.thumbnail,peça.price,peça.title)} className='button-card' >
<FaCartShopping />
</button>
<img className='imagem-card' src={peça.thumbnail
.replace(/\w\.jpg/gi,"W/jpg")}/>
<div className="min-conteudo">
<h4 className='preço-card' >{peça.price.toLocaleString(
"pt-br",{style:"currency", currency:"BRL"})
}</h4>
<p className='nome-card' >{peça.title}</p>
</div>
</div>


))



}



</div>


  )
}

export default Search