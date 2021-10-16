import { NavLink } from "react-router-dom"

const NavBar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper light-blue lighten-1 px1">
                <a href="/" className="brand-logo">
                    React + Typescript
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                    <NavLink to="/">Список дел</NavLink>
                    </li>
                    <li>
                    <NavLink to="/about">Информация</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
