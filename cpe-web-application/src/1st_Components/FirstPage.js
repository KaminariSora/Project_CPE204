import "./Firstpage.css"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import ImageList from "./imageList";
import "./imageList.css"
import PrevStudent from "./prev-student";

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
                            <li className="listItem"><img src="./Img/logo cpe swu.png" style={imageStyle} alt="Logo"></img></li>
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
            <div className="text-prev">
                <h1>Hear from Previous Students</h1>
            </div>
            <PrevStudent/>
            <div className="alliance">
                <h1>พันธมิตรของเรา</h1>
                <p>ได้ทำการลงนามบันทึกข้อตกลงความร่วมมือทางวิชาการร่วมกันโดยมีวัตถุประสงค์เพื่อทำความร่วมมือในการจัดหาผู้เชี่ยวชาญร่วมทดสอบและฝึกประสบการณ์วิชาชีพให้กับนิสิตก่อนการทำงานส่งเสริมและพัฒนาบุคลากรทางการศึกษาของคณะวิศวกรรมศาสตร์ให้มีศักยภาพที่สูงขึ้นทางด้านเทคโนโลยีดิจิทัลและเพื่อทำความร่วมมือในการทำงานวิจัยร่วมกัน และพัฒนาต่อยอดนวัตกรรมด้านเทคโนโลยีดิจิทัล</p>
            </div>
            <div className="company">
                <img src="./Img/SCB_logo.png"></img>
                <img src="./Img/Lotus_logo.png"></img>
                <img src="./Img/Technology_logo.png"></img>
            </div>
            <footer>
                <div className="left-footer">
                    <p>Copyright 2567 by Faculty of Engineering</p>
                </div>
                <div className="right-footer">
                    <p>Terms Of Use | Privacy Statement</p>
                </div>
            </footer>

        </div>
    )
}

export default Firstpage
