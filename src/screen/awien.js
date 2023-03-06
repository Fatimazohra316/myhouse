// import axios from "axios";
import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import image1 from "../images/historical.png"
import image2 from "../images/hand.png"

function History() {
       const [items,setItems] = useState([])
       let obj ; 
//     const [items, setItems] = useState([]);
    const [email,setEmail] = useState()
    const [password,setPassword] = useState([])
       const getData = ()=>{
        const items = JSON.parse(localStorage.getItem('data'));
        if(items){
          
        }
       }
       const data = new FormData
       data.append("email" , email);
    //    console.log(email);
       fetch("http://cleaningapp.8tkt.com/public/api/getbooking?" , {
        method : "POST",
        body : data
       }).then((response) => response.json()).then((data)=>{
        console.log(data)
            ;
        // console.log(data.data);
        // setPassword(data.data)
        //   obj.push(data.data)
       })

       useEffect(()=>{
        getData();
       })
    // console.log(obj);
//     const getData = ()=>{
//         const data = new FormData
//         console.log(email);
//         data.append("email" , email)
//         // console.log(email);
//         fetch("http://cleaningapp.8tkt.com/public/api/getbooking",{
//             method: "POST",
//             body: data,
//           }).then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             // console.log(data.data);
//             // setPassword(data.data)
        
//         })
        
//     }

//     useEffect(() => {
//       const items = JSON.parse(localStorage.getItem('data'));
//       if (items) {
//        setItems(items);
//        setEmail(items.data.email);
//        getData()
       
       
//       }
//     },[] );
//    useEffect(()=>{
   
//    },)
//    console.log(password);
   return (
    
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
 
    </div>
   )
}



// export default History;