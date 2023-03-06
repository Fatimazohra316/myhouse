import React, { useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import image2 from "../images/hand.png"
import image1 from "../images/historical.png"
import image3 from "../images/washrooms.png"
import image8 from "../images/account.png";

let item ; 
function History() {
   const[item,setItem] = useState([])
   let email ;
   const navigate = useNavigate()
   if(localStorage.getItem("data")){
      const emailData = JSON.parse(localStorage.getItem("data"))
      email = emailData.data.email;
     }

  
   useEffect(()=>{
     
      // console.log(email);
      
      
    
      const url = "https://cleaningapp.8tkt.com/public/api/getbooking"
      const fetchData = () => {
         const data = new FormData;
         data.append("email",email)
         fetch(url,{
            method : "POST",
            body : data
         }).then((response)=>response.json()).then((data)=>{
            // console.log(data.data);
            setItem(data.data)
         })
     
     };
     fetchData()

 },[]);
   // console.log(item);
    return (
    <div>
      {email ?   <div>
          <div className="container">
        <div><p className="historical"><img src={image1} /><span className="cleaning">History</span></p></div>
        <div className="buttonPart">
            <button className="btn pending">Pending</button>
            <button className="btn completed">Completed</button>
            {/* <p>{email}</p> */}

        </div>
        <div className="serviceName">
         <div><img src={image2}/><span className="names">Service Name</span></div>
         <div className="bookingId">
            <p>Booking Id</p>
            <p>Date</p>
            <p>Time</p>
            <p>Status</p>
            <p>Total Price</p>
         </div>
        </div>
        <div>
        {item ? item.map((e,i) => {
                  return (
                     <div className="serviceNames">
                     <div><img src={image3}/><span className="nam">Service Name</span></div>
                     <div className="booking">
                        <p>{e.id}</p>
                        <p>{e.booking_date}</p>
                        <p>{e.booking_time}</p>
                        <p className="btn btn-warning">Pending</p>
                        <p>{e.booking_total_price}</p>
                     </div>
                    </div>
                  )
               }): null}
        </div>
 
    </div>
          
       
      </div> :   <div className="d-flex justify-content-center align-items-center">
        <div className="container loginRequired">
            <div><img src={image8}/></div>
             <p>Login required</p>
            </div></div>}
    </div>
    )
}



export default History;

// map in react js?