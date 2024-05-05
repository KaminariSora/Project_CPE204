import PersonalImage from "./Perlmage.js";
import Header from "../../GlobalComponent/header";
import "./mainPer.css"
import PerList from "./PerList.js";
import { Link } from "react-router-dom";
import Footer from "../../GlobalComponent/footer";

const MainPer = ()=>{


    return(
        <div>
            <Header/>
            <PersonalImage/>
            <PerList/>
            <br></br>
            <Footer/>

        </div>
    )
}

export default MainPer