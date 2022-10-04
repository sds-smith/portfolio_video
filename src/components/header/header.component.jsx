
import { NavLink } from 'react-router-dom'
import './header.styles.scss'

const Header = () => {
    return (
        <div className='Header'>
            <NavLink className={(navData) => navData.isActive ? 'NavLink active' : 'NavLink'} to='/' end>
                Home
            </NavLink>
            <NavLink className={(navData) => navData.isActive ? 'NavLink active' : 'NavLink'}  to='portfolio'>
                Portfolio
            </NavLink>
            <NavLink className={(navData) => navData.isActive ? 'NavLink active' : 'NavLink'}  to='about' >
                About
            </NavLink>
            <NavLink className={(navData) => navData.isActive ? 'NavLink active' : 'NavLink'}  to='contact'>
                Contact
            </NavLink>
        </div>
    )
}

export default Header