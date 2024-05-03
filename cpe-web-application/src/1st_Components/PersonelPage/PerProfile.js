import Header from "../../GlobalComponent/header";
import './PerProfile.css';

const PerProfile =()=>{
    return(
        <div>
            <Header/>
            <div className="Aj-bg">
                <div className="Aj-slide">
                <span className="name-Aj">บุคคลากร CPESWU</span>
                <hr></hr>
                <div id="Profile-slide">
                    <div className="Profile-slide-left">
                        <span>ผศ.ดร.ประมวล ชูรัตน์</span>
                        <span>หัวหน้าภาควิชา</span>
                        <a href="https://www.youtube.com/results?search_query=form+slide+to+grid+with+react">ตารางสอน</a>
                    </div>
                    <div className="Profile-slide-Right">
                        <img src="./Aj-crop/AjTor_crop2-removebg-preview (1).png"></img>
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
                            <p>ปรัชญาดุษฎีบัณฑิต สาขาวิชาวิศวกรรมไฟฟ้าและคอมพิวเตอร์ มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p>
                            <p>วิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมอิเล็กทรอนิกส์และโทรคมนาคม มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี</p>
                            <p>ประกาศนียบัตรวิชาชีพชั้นสูง แผนกช่างอิเล็กทรอนิกส์ มหาวิทยาลัยราชมงคลอีสาน วิทยาเขตขอนแก่น</p>
                        </div>
                    </div>
                    <div className="Good-at">
                        <span><strong>ความถนัด</strong></span>
                        <hr></hr>
                        <div className="content-Good-at">
                            <p>Medical image and signal processing</p>
                            <p>Pattern Recognition</p>
                            <p>Computer Vision</p>
                       </div>
                    </div>
                    <div className="Academic-work">
                        <span><strong>ผลงานทางวิชาการ</strong></span>
                        <hr></hr>
                        <div className="content-Academic-work">
                            <p>Medical image and signal processing</p>
                            <p>Pattern Recognition</p>
                            <p>Computer Vision</p>
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