import React, { useState } from "react"

const ItemCount = (props) => {

    const[stock, setStock] = useState(props.stock)
    const[unidades, setUnidades] = useState(0)

    const handleStock = {
        sumaStock:()=>{
            if(stock ===0){
            console.log("no hay mas stock")
            } else{
                setUnidades(unidades+1)
                setStock(stock-1)
            }
        },
        restaStock:()=>{
            if(unidades===0){
                console.log("no podes comprar negativo")
            } else {
                setUnidades(unidades-1)
                setStock(stock+1)
            }
        }
    }

    return(
        <div className="button-ItemCount">
            <button onClick={handleStock.sumaStock}>+</button>
            <p>{unidades}</p>
            <button onClick={handleStock.restaStock}>-</button>
            <p>Stock Disponible: {stock}</p>
        </div>
    )
}

export default ItemCount