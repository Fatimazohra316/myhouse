import axios from "axios";
import React, { useEffect, useState } from "react";
import image1 from "../images/purpleHand.png"
import image2 from "../images/view.png"
import image3 from "../images/rating.png"
import { useNavigate } from "react-router-dom";


function Service() {
   
      const [item, setItem] = useState([]);
      const [arr, setArr] = useState([])
      const navigate = useNavigate()
   
      const getData = () => {
         axios.post("https://cleaningapp.8tkt.com/public/api/categories").then((success) => {
            // console.log(success.data.data);
            setItem(success.data.data)
            // console.log(item);
         }).catch((err) => {
            // console.log(err);
         })
         axios.post("https://cleaningapp.8tkt.com/public/api/services").then((success) => {
            setArr(success.data.data)
         }).catch((err) => {
            // console.log(err);
         })
      }
      //   console.log(item[0].category_name);
      useEffect(() => {
         getData()
      }, [])
   
      function moveData(data) {
         navigate("/Item", {
            state: data
   
         })
         //   console.log(element);
   
      }
      // console.log(arr);
      return (
         <div className="container">
            <div>
               <p className="welcome"> Welcome, <span className="justine">Justine</span></p>
               <p className="services"><img src={image1} /><span className="cleaning">Cleaning Services</span></p>
   
               {/* {alert(item)} */}
               <div className="cardMainDivs" >
                  {item.map((data) => (
                     <div className="card-bodys" onClick={() => moveData(data)} >
                        <div className="cardHalfPart"><img className="img" src={data.category_icon} /></div>
                        <div className="category">{data.category_name}</div>
   
   
                     </div>
                  ))}
               </div>
            </div>
            
         </div>
      )
   
}



export default Service;