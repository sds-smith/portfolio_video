import { Outlet } from "react-router-dom"


const Navigation = () => {
    return (
        <div>
            <div className='Header'>I am the Header</div>
            <Outlet/>
        </div>
    )
}

export default Navigation