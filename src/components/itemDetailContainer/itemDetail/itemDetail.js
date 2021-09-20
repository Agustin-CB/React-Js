import ItemCount from "../../itemcount/itemCount"


const itemdetail =({nombre, desc, precio, stock, imagen})=>{
    return (
        <div className="item">
            <h2>Componente Detail</h2>
            <h2>{nombre}</h2>
            <h3>{desc}</h3>
            <h4>${precio}</h4>
            <img src= {imagen} alt={nombre} />
            <ItemCount stock={stock} />
        </div>
    )
}

export default itemdetail