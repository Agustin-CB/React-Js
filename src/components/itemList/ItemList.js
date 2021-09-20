import data from "../data/data"
import Item from "./item/Item"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemList = ()=>{

    const { categoria } = useParams();
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
            if(categoria != null){
               const productosFiltrados=items.filter((productos)=> productos.categoria===categoria)
                setProductos(productosFiltrados);
                setCargando(false);
           } else {

            setProductos(items);
                setCargando(false);
           }

        });
    },[categoria])


    return(
        <>
        <div className="center">
        {cargando ? <h2>Cargando Servicios</h2> : 
        productos.map((productos)=>
        <Item key={productos.id} nombre={productos.nombre} desc={productos.desc} precio={productos.precio} stock={productos.stock} imagen={productos.imagen} categoria={productos.categoria} id={productos.id} />
        )
        }
        </div>
        </>
    )
}

export default ItemList