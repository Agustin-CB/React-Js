import ItemCount from "../itemcount/itemCount";
import ItemList from "../itemList/ItemList";
import ItemDetailContainer from "../itemDetailContainer/itemDetailContainer";
const ItemListContainer=(props)=>{
       

    return(
        <>
        <h1 className="titulo">{props.titulo}</h1>
        <div className="imagen-inicio">
            <img src='/fondo2.jpg' alt='consola' width='20%'/>
        </div>
        <ItemCount stock="5" />
        <ItemList />
        {/* <ItemDetailContainer />  */}
        </>
    )
}

export default ItemListContainer
