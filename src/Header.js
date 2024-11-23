import { LOGO_URL } from "../utils/constants";

const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img alt="logo" className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=>{}}>Login</button>
                </ul>
        
            </div>
       
        </div>
    )
    
}

export default Header;