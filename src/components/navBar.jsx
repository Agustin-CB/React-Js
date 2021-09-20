import { Link } from "react-router-dom"


export default function NavBar() {
    return(
        <>
        <div className="logo"><img src='/logo.png' alt='logo'/></div>
        <nav>
            <ul>
                <li>
                    <Link to='/'><p className='padding'>Inicio</p></Link>
                    <Link to='/Servicios'><p className='padding'>Servicios</p></Link>
                    <Link to='/Consolas'><p className='padding'>Consolas</p></Link>
                    <Link to='/Nosotros'><p className='padding'>Nosotros</p></Link>
                </li>
            </ul>
            </nav>
        </>
    )
}

 