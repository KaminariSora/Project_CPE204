import Header from "../../../GlobalComponent/header";
import './PerProfile.css';
import { useParams } from "react-router-dom";
import { Data_Personnel } from "./PerProfileData";


const PerProfile =()=>{
    const {PersonnelId} = useParams()

    const Personnel_name = Data_Personnel[PersonnelId-1].name
    const Personnel_Position = Data_Personnel[PersonnelId-1].position
    const Personnel_img =Data_Personnel[PersonnelId-1].Personnel_img

    const Personnel_Edu = Data_Personnel[PersonnelId-1].education
    const Personel_Good = Data_Personnel[PersonnelId-1].good
    const Personel_work = Data_Personnel[PersonnelId-1].work
    const book_img = Data_Personnel[PersonnelId-1].book_img

    return(
        <div>
            <Header/>
            
            <div className="Aj-bg">
                <div className="Aj-slide">
                <span className="name-Aj">บุคคลากร CPESWU</span>
                <hr></hr>
                <div id="Profile-slide">
                    <div className="Profile-slide-left">
                        <span>{Personnel_name}</span>
                        <span>{Personnel_Position}</span>
                        <a href="https://www.youtube.com/results?search_query=form+slide+to+grid+with+react">ตารางสอน</a>
                    </div>
                    <div className="Profile-slide-Right">
                        <img src={Personnel_img}></img>
                    </div>
                </div>
                </div>
            </div>
            
            <div className="Aj-Data-bg">
                <div className="Aj-data">
                    <div className="Education-degree">
                        <span><strong>วุติการศึกษา</strong></span>
                        <hr></hr>
                        <div className="content-Education-degree">
                            {Personnel_Edu.map((edu)=>{
                                return <p>{edu}</p>
                            })}
                        </div>
                    </div>
                    <div className="Good-at">
                        <span><strong>ความถนัด</strong></span>
                        <hr></hr>
                        <div className="content-Good-at">
                            {Personel_Good.map((good)=>{
                                return <p>{good}</p>
                            })}
                       </div>
                    </div>
                    <div className="Academic-work">
                        <span><strong>ผลงานทางวิชาการ</strong></span>
                        <hr></hr>
                        <div className="content-Academic-work">
                            {Personel_work.map((work)=>{
                                return <p>{work}</p>
                            })}
                            <img src={book_img}></img>
                       </div>
                    </div>
                    
                </div>
            </div>

            <br></br>
            <br></br>

            <footer>
                <div className="left-footer">
                    <p>Copyright 2567 by Faculty of Engineering</p>
                </div>
                <div className="right-footer">
                    <p>Terms Of Use | Privacy Statement</p>
                </div>
                <br></br>
                <br></br>
            </footer>



        </div>
    )
}

export default PerProfile