import PersonalImage from "./Perlmage.js";
import Header from "../../GlobalComponent/header";
import "./mainPer.css"
import PerList from "./PerList.js";

const MainPer = ()=>{
    return(
        <div>
            <Header/>
            <PersonalImage/>
            <div className="Profile-head">
            <span>โปรไฟล์บุคคลากร</span>
            <a href="/#" className="show-all">แสดงทั้งหมด</a>
            </div>
            <hr></hr>
            <PerList/>

        </div>
    )
}

export default MainPer