import { NavLink } from 'react-router-dom'
import style from './header.module.css';
import SearchBar from '../../components/search-bar/search-bar.jsx';

const navRoutes = [
    { title: 'Home', url: '/' },
    { title: 'Todo', url: '/todo' },
    { title: 'Pokemon', url: '/pokemon' },
    { title: 'About', url: '/about' },
];

const Header = () => {

    const handleNavLinkStyle = ({ isActive }) => {
        return isActive ? style.active : undefined
    };

    return (
        <header className={style.header}>
            <nav>
                <ul>
                    {navRoutes.map(({ title, url }) => (
                        <li key={url}>
                            <NavLink to={url} className={handleNavLinkStyle}>
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;