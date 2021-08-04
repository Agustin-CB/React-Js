import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar.jsx';
import { Component, useState } from 'react';
import { render } from '@testing-library/react';

class MyComponent extends Component {
  constructor() {
    super()
    console.log("contructor()")
    this.state = {
      name: "Jamon con queso"
    }
  }


componentDidMount() {
  console.log("componentDidMount")
}

componentWillUnmount () {
  console.log("componentWillUnmount")
}

render() {
  return(
    <button>Soy un boton {this.state.name}</button>
  )
}

}


function App() {

  const [visible, setVisibility] = useState(true)

  const handleClick = () => {
    console.log("Hice click!")
  }


  return (
    <>
    <NavBar />
    {visible && <MyComponent />}
    <button onClick={handleClick}>Togable</button>

    </>
  );
}

export default App;
