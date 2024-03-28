import "./Firstpage.css"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

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
            {/* Body */}
            <div className="hero">
                <div className="image-box">
                    <img className="bg-img" src="./Img/Background.png" alt="background"></img>
                    <div className="subtitle">
                        <h1 className="prompt-regular">เรียนรู้ทักษะแห่งโลกดิจิทัล</h1>
                        <h2 className="prompt-regular roboto-mono-100" id="h2">เปิดโอกาศให้คุณก้าวสู่โลกดิจิตอลไปพร้อมกับเรา</h2>
                        <h2 className="roboto-mono-100" id="computer-engineering">Computer Engineering</h2>
                        <h2 className="roboto-mono-100" id="swu">Srinakarinwirot University</h2>
                        <a className="cpe-link" href="#">cpe.eng.swu.ac.th</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Firstpage
