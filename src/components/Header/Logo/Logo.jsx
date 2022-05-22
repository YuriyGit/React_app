import classes from "./Logo.modules.css";
import logo from "./logoFace(1).png"
const Logo = (props) => {
    return (
        <div className = {classes.logo}>
            <img src = {logo} alt = ""/>
        </div>

    );
}

export default Logo;