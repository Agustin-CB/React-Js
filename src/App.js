import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar.jsx';
import { Component, useState } from 'react';
import { render } from '@testing-library/react';
import ItemCount from './components/itemCount';

// class MyComponent extends Component {
//   constructor() {
//     super()
//     console.log("contructor()")
    
//   }


// componentDidMount() {
//   console.log("componentDidMount")
// }

// componentWillUnmount () {
//   console.log("componentWillUnmount")
// }

// render() {
//   return(
//     <button>Soy un boton</button>
//   )
// }

// }


// function App() {

//   const [visible, setVisibility] = useState(true)

//   const handleClick = () => {
//     console.log("Hice click!")
//   }


//   return (
//     <>
//     <NavBar />
//     {visible && <MyComponent />}
//     <button onClick={handleClick}>Togable</button>

//     </>
//   );
// }


function App () {

  const handleAdd = (cantidad) => {
    console.log(cantidad)
  }

  return <ItemCount stock={5} initial={1} onAdd={handleAdd} />
}

export default App;
