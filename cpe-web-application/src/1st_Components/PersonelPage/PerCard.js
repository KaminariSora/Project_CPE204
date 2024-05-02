import "./Percard.css"
import PropTypes from 'prop-types';

const Percard = (props)=>{
    const {img,name,position,email} = props
    return(
       <div>
            < div className="Personnel-card">
             <img src = {img} alt="" id="Personnel-Img"></img>
             <p id="Personnel-name">{name}</p>
             <p>{position}</p>
             <p>{email}</p>
            </div>
       </div>
    )
}

export default Percard; // Add default export here
