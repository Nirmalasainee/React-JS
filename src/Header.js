
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=>{
    const [loginBtn, setloginBtn] = useState("Login");
    const status = useOnlineStatus;
    return (
        <div className="header">
            <div className="logo-container">
                <img alt="logo" className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online: {status ? "✅" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{
                        loginBtn ==="Login" ? setloginBtn("Logout") : setloginBtn("Login")}}>Login</button>
                </ul>
        
            </div>
       
        </div>
    )
    
}

export default Header;