import "./header.css"
// import "../1st_Components/Home/Firstpage.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useState } from 'react';

const Header = () => {
    const imageStyle = {
        width: "50px",
        height: "50px",
        color: "#fff"
    }
    const [showMenu, setShowMenu] = useState(false);

    const ToggleMenu = () => {
        setShowMenu(!showMenu);
        console.log('click')
    }
    return (
        <header className="header">
            <nav className="nav container">
                {/* NavMenu */}
                <div className={`navMenu ${showMenu ? 'showMenu' : ''}`}>
                    <ul className="navList" type="none">
                        <li className="listItem"><Link to="/home"><img src="../Img/logo cpe swu.png" style={imageStyle} alt="Logo"></img></Link></li>
                        <li className="listItem"><Link className="navLink prompt-regular" to="/Program">Program</Link></li>
                        <li className="listItem"><a className="navLink prompt-regular" href="https://admission.swu.ac.th/admissions2/">Admission</a></li>
                        <li className="listItem"><Link className="navLink prompt-regular" to="/Personnal">Personal</Link></li>
                        <li className="listItem"><Link className="navLink prompt-regular" to="/About">About</Link></li>
                        <li className="listItem">
                            <a className="navLink prompt-regular" href="#">Student</a>
                            <ul className="dropdown">
                                <li><Link to="/Blog">Blog</Link></li>
                                <li><a href="https://swu.ac.th/student.php">ปฎิทินการศึกษา</a></li>
                                <li><a href="https://cpe.eng.swu.ac.th/Default.aspx?tabid=20114">ตารางเรียน</a></li>
                                <li><a href="https://cpe.eng.swu.ac.th/Default.aspx?tabid=20115">เอกสารนิสิต</a></li>
                                <li><a href="https://supreme.swu.ac.th/portal/index.php">ระบบลงทะเบียน</a></li>
                            </ul></li>
                    </ul>
                    <div className="navClose" onClick={ToggleMenu}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
            </nav>
            <div className="nav_action">
                <div className="navToggle" onClick={ToggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </header>
    )
}

export default Header