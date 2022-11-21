import CartWidget  from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


export default function NavBarr() {
    return (
        <>
            <header id="mainNavigation">
                <nav role="navigation">
                    <div className="pt-3 text-center">
                        <Link to="/"><img src="img/logo.svg" alt="Logo Agentur S.A." className="invert logo"/></Link>
                    </div>
                </nav>
                <div className="navbar-expand-md ">
                    <div className="navbar-dark text-center my-1 ">
                        <button className="navbar-toggler w-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span> <span className="align-center ff-rw fs-n fw-700">Menú</span>
                        </button>
                    </div>
                    <div className="text-center mt-3 collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item"><Link className="nav-link" aria-current="page" to="/destinos">Destinos</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/alojamientos">Alojamientos</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/autos">Autos</Link></li>
                            {/* <li className="nav-item"><a className="nav-link" href='#'>Contacto</a></li> */}
                            <CartWidget/>                          
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}