import { Link } from "react-router-dom";
import "./header.css";
const Header = ()=> {
    return (
        <>
            <nav className="header">
                <section className="logo">
                    <img src={require("../../images/header.png")} alt="log"/>
                </section>
                <section className="camera-icon">
                <Link to="/upload">
                <div className="forward">
                <img src={require("../../images/camera.png")} alt="camera"/>
                </div></Link>
                </section>
            </nav>
        </>
    )
}
export default Header;