import "./header.css"
import Logo from "../assets/images/svg/logo.svg"

const Header = ()=>{
    return(
        <header>
            <navLeft>
                <img src={Logo} alt="logoimg"/>
              
                <select name="" id="features">
                    <option value="">Features</option>
                </select>
                <select name="" id="company">
                    <option value="">Company</option>
                </select>
                <a href="">Careers</a>
                <a href="" id="About">About</a>
             
            </navLeft>


            <navRight>
                <button id="Login">Login</button>
                <button id="Register">Register</button>
            </navRight>
        </header>

           
    );
};

export default Header;