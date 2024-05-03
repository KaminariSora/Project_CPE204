import PersonalImage from "./Perlmage.js";
import Header from "../../GlobalComponent/header";
import "./mainPer.css"
import PerList from "./PerList.js";

const MainPer = ()=>{


    return(
        <div>
            <Header/>
            <PersonalImage/>
            <PerList/>
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

export default MainPer