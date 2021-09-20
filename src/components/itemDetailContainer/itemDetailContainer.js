import data from "../data/data"
import Itemdetail from "./itemDetail/itemDetail"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer = ()=>{

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const {id} = useParams()    

    useEffect(()=>{
        const productos = () =>{
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    resolve(data)
                },1000)
            })
        }
        productos().then((items)=>{
            const producto = items.find(productos => productos.id === id)
            setProductos(producto); 
            setCargando(false);
        });
    },[id])


    return(
        <>
        <div className="center">
        {cargando ? <h2>cargando servicios...</h2> : 
            <Itemdetail nombre={productos.nombre} desc={productos.desc} precio={productos.precio} stock={productos.stock} imagen={productos.imagen} />
        }
        </div>
        </>
    )
}

export default ItemDetailContainer