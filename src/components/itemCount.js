import "./itemcount.css"
import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)

    const handleOperation = (op) => {
        op === "-" ? setCount(count-1) : setCount(count+1)
    };


    return <>
    <div className="item-count">
    <button onClick={ () => handleOperation("-")} >-</button>
        <span>{count}</span>
    <button onClick={ () => handleOperation("+")}>+</button>
    </div>
    <button className="boton" onClick={() => onAdd(count)} >Agregar al Carrito</button>

     </>
}


export default ItemCount