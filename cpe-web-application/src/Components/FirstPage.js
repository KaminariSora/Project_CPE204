import "./Firstpage.css"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import ImageList from "./imageList";
import MyComponent from "./mycomponent"
import "./imageList.css"

const Firstpage = () => {
    const imageStyle = {
        width: "50px",
        height: "50px",
        color: "#fff"
    }

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div>
            {/* Header */}
            <header className="header">
                <nav className="nav container">
                    {/* NavMenu */}
                    <div className={`navMenu ${showMenu ? 'showMenu' : ''}`}>
                        <ul className="navList" type="none">
                            <li className="listItem"><img src="./Img/CPE logo.png" style={imageStyle} alt="Logo"></img></li>
                            <li className="listItem"><a className="navLink prompt-regular" href="#">Program</a></li>
                            <li className="listItem"><a className="navLink prompt-regular" href="#">Admission</a></li>
                            <li className="listItem"><a className="navLink prompt-regular" href="#">Personal</a></li>
                            <li className="listItem"><a className="navLink prompt-regular" href="#">About</a></li>
                            <li className="listItem"><a className="navLink prompt-regular" href="#">Student</a></li>
                        </ul>
                        <div className="navClose" onClick={toggleMenu}>
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    </div>
                </nav>
                <div className="nav_action">
                    <div className="navToggle" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </header>
            <ImageList/>

        </div>
    )
}

export default Firstpage
