import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import image from "../images/star.png"


function Item(){
    const location = useLocation();
    const navigate = useNavigate()

    function serviceMove(data){
      navigate("/booking",{
        state : data
      })
    }
  
    //  console.log(location.state);
    return(
        <div className="container mainDiv">
           <div className="itemDiv">
           <div><img className="itemImage" src={location.state.category_image}/></div>
           <div className="cleaningDiv">
           <div className="cleanings">Detail {location.state.category_name} Cleaning</div>
           <div className="price">{location.state.category_price}</div>
           <div className="buttonDiv">
            <button className="durationButton">1 Hour Duration</button>
            <button className="durationButton"><img src={image}/> {location.state.category_rating} Rating</button>
            </div>
           </div>
           </div>
           <div className="description">Description</div>
           <div className="des">{location.state.category_description}</div>
           <div className="continueDiv"><button onClick={()=>serviceMove(location.state.category_name)} className="btn continueButton">Continue</button></div>
           
        </div>
        
    )
}



export default Item;