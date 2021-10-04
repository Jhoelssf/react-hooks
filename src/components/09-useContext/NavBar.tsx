import {NavLink} from 'react-router-dom'

export const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink to="./" exact activeClassName={'active'} className="navbar-brand">HomeA</NavLink>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact activeClassName={'active'} to="./" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName={'active'} to="./about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName={'active'} to="./login" className="nav-link">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
