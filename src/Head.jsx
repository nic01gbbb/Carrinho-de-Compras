import { useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Appcontext from "./Create";
import { FaCarSide } from "react-icons/fa";




function Head() {
const {carrinho,input,setinput,veiculo}=useContext(Appcontext)
const {ocultarcarrinho,setocultarcarrinho,ocultarveiculo,setocultarveiculo}=useContext(Appcontext)
const{BuscarProdutos}=useContext(Appcontext)


const ocultar=()=>{
setocultarcarrinho(!ocultarcarrinho)
}
const ocultar2=()=>{
setocultarveiculo(!ocultarveiculo)
}



const submit=(e)=>{
e.preventDefault()
if(input){
BuscarProdutos(input)
setinput("")
}
}


useEffect(()=>{
BuscarProdutos("ps2")
},[input])

return (
<div className="Campo">
<header className="header">
<form onSubmit={submit} className="Form">
<input value={input} onChange={(e)=>setinput(e.target.value)}type="text" placeholder="Buscar produtos"/>
<button className="button-input" >
<FaSearch />
</button>
</form>



<div className="buttons-header">
<button onClick={ocultar} className="cart-header" >
<FaCartShopping />
<p className="contador-header" >{carrinho.length}</p>
</button>

<button onClick={ocultar2}  className="veiculo-header" >
<FaCarSide />

<p className="contador-veiculo-header" >{veiculo.length}</p>
</button>
</div>




</header>














    </div>
     
  )

    }

export default Head