import ItemCount from "../itemcount/itemCount";
import ItemList from "../itemList/ItemList";
import NavBar from "../navBar";

const ItemListContainer=(props)=>{
    return(
        <>
        <NavBar/>
        <ItemCount stock="5" />
        <ItemList />
        </>
    )
}

export default ItemListContainer
