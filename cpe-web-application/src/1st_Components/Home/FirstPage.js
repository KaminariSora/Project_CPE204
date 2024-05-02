import "./Firstpage.css"
import "./imageList.css"
import Header from "../../GlobalComponent/header";
import ImageList from "./imageList";
import PrevStudent from "./prev-student";

const Firstpage = () => {
    return (
        <div>
            <Header/>
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
