import React from 'react'
import { Link} from 'react-router-dom'

const Nav = ()=>{
    const auth = localStorage.getItem('user');
    return(
        <div>
            <ul className="nav-ul">
                <li><Link to="/"> Home Page </Link></li>
                <li><Link to="/add"> Add Product </Link></li>
                <li><Link to="/update"> Update Product </Link></li>
                {/* <li><Link to="/logout">LogOut</Link></li> */}
                <li><Link to="/profile">Profile</Link></li>
                <li>{ auth ? <Link to="/logout">Log out</Link> 
                : <Link to="/signup">SIGNUP</Link> }</li>
            </ul>
        </div>
    )
}

export default Nav;