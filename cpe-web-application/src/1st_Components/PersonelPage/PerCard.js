import { Link } from "react-router-dom";
import "./Percard.css"
import PropTypes from 'prop-types';

const Percard = (props)=>{
    const {img,name,position,email,id} = props
    return(
       <div>
            <Link button className="Personnel-card" to={id === 11 || id === 12 ? "#" : `/PerProfile/${id}`}>
             <img src = {img} alt="" id="Personnel-Img"></img>
             <p id="Personnel-name">{name}</p>
             <p>{position}</p>
             <p>{email}</p>
            </Link>
       </div>
    )
}

export default Percard; // Add default export here
