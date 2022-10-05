import { NavLink } from "react-router-dom"
import { navLinksData } from "../../assets/data/nav-links.data"
import './nav-bar.styles.scss'

const NavBar = () => {
    return (
        <div>
            {
                navLinksData.map((link, index) => (
                    <NavLink 
                        key={index}
                        className={(navData) => navData.isActive ? 'NavLink active' : 'NavLink'}
                        to={link.to}
                        end={link.name === 'Home'}
                    >
                        {link.name}
                    </NavLink>
                ))
            }
        </div>
    )
}

export default NavBar