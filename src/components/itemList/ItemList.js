import data from "../data/data"
import Item from "./item/Item"
import { useEffect, useState } from "react"

const ItemList = ()=>{

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(()=>{
        const productos = () =>{
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve(data)
                },2000)
            })
        }
        productos().then((items)=>{
            setProductos(items);
            setCargando(false);
        });
    },[])


    return(
        <>
        {cargando ? <h2>cargando productos...</h2> : 
        productos.map((productos)=>
        <Item key={productos.id} nombre={productos.nombre} desc={productos.desc} precio={productos.precio} />
        )
        }
        </>
    )
}

export default ItemList