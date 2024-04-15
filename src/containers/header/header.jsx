import { NavLink } from 'react-router-dom'
import style from './header.module.css';

const Header = () => {

    const handleNavLinkStyle = ({isActive}) => {
        return isActive ? style.active : undefined
    };

    return (
        <header className={style.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' className={handleNavLinkStyle}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={handleNavLinkStyle}>
                            About
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;