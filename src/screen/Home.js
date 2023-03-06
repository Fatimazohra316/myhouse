import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import image1 from "../images/purpleHand.png"
import image2 from "../images/view.png"
import image3 from "../images/rating.png"



function Home() {

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
   // console.log(item);
   return (
      <div className="container">
         <div>
            <p className="welcome"> Welcome, <span className="justine">Justine</span></p>
            <p className="services"><img src={image1} /><span className="cleaning">Cleaning Services</span></p>

            {/* {alert(item)} */}
            <div className="cardMainDiv" >
               {item.map((data) => (
                  <div className="card-body" onClick={() => moveData(data)} >
                     <div className="cardHalfPart"><img className="img" src={data.category_icon} /></div>
                     <div className="category">{data.category_name}</div>


                  </div>
               ))}
            </div>
         </div>
         <div>
            <p className="services"><img src={image2} /><span className="cleaning">Most Viewed Services</span></p>
            <div className="secondMainDiv">
               {arr.map((e) => {
                  return (
                     <div onClick={()=>moveData(e)} className="secondCard">
                        <div className="secondService" style={{
                           backgroundImage: `url(${e.category_image})`,
                           backgroundSize: "cover",
                        }}>
                           <button className="categoryButton">{e.category_name}</button>
                           <button className="categorybutton">{e.category_price}</button>

                        </div>
                      <div className="washroomDiv">
                      <div className="ratingDiv"><img src={image3}/> <span className="rating">{e.category_rating}</span></div>
                        <p>{e.category_name}</p>
                      </div>
                     </div>
                  )
               })}
            </div>
         </div>
      </div>
   )
}



export default Home;