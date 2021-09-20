import './App.css';
import ItemListContainer from './components/ItemListContainer/itemListContainer';
import "./components/data/datastyle.css";
import NavBar from "./components/navBar";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import ItemList from './components/itemList/ItemList';

function App () {
  return (
      <BrowserRouter>
      <NavBar />
      <Switch> 
        
      <Route path="/" exact>
          <ItemListContainer />
        </Route>

      <Route path="/:servicios/:id" >
          <ItemList/> 
        </Route>

        <Route path="/contacto" > 
        <ItemListContainer titulo="Servicios"/>
        </Route>
     

      </Switch>

      </BrowserRouter>
  )
  
}

export default App;
{/* <BrowserRouter>
      <NavBar/>
      <Switch> 
        <ItemCount/>
        <Route path="/servicios"> 
        <Servicios/>
        </Route>

        <Route path="/consolas"> 
        <Consolas/>
        </Route>

        <Route path="/nosotros"> 
        <Nosotros/>
        </Route>

        <Route path="/"> 
        <Inicio/>
        </Route>
      </Switch>
      </BrowserRouter> */}