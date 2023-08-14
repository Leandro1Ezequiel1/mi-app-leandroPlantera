import 'bootstrap/dist/css/bootstrap.css';
import CartWidget from '../CartWidget/CartWidget';
import Carrito from '../../img/carrito.png';

const NavBar = () => {
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className='logoimagen'>
                    <img src={2} alt='logo'/>
                </div>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                       ###
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Productos
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Nosotros
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Contactenos
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <CartWidget />
            </nav>
    );
};

export default NavBar;

<NavBar />;