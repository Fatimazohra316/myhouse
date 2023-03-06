import { FaceRetouchingNatural } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import image1 from '../images/justin.png';
import image8 from "../images/account.png";



function Profile(){
   
    const [name,setName] = useState("");
    const [address,setAddress] = useState("");
    const [username,setUsername] = useState("");
    const [status,setStatus] = useState("");
    const [country,setCountry] = useState("");
    let userDetails;
    let email;


    
        if (localStorage.getItem("data")) {
            const data = JSON.parse(localStorage.getItem("data"));
            userDetails = data.data;
            email = userDetails.email
            
        }

    function updateProfile(){
        const data = new FormData;
        data.append("email",email);
        data.append("name",name);
        data.append("address",address);
        data.append("username",username);
        data.append("status",status);
        data.append("country",country);
        fetch("https://cleaningapp.8tkt.com/public/api/editprofile",{
            method : "POST",
            body : data,
        }).then((response)=>(response.json())).then((data)=>{
            if(data){
                const detail = JSON.parse(localStorage.setItem(data)) 
            }
        })
    }
   

        
    return(
     <div>
           <div className="container">
               <div  className="detailDiv">
                          <div className="profilesDiv">
                          <img src={image1}/>  
                          <p className="details">My Details</p>
                          </div>
                </div>
            <div className="informationDiv">
              <div>
               <div>
               <p className="emailAddress">Email Address</p>
               <div className="emailDiv">
                   
                    <input disabled  value={email}/>
                </div>
               </div>
               <div>
               <p className="emailAddress"> Name</p>
               <div className="emailDiv">
                   
                    <input onChange={(e)=>setName(e.target.value)} defaultValue={userDetails.name}/>
                </div>
               </div>
               <div>
               <p className="emailAddress"> Address</p>
               <div className="emailDiv">
                   
                    <input onChange={(e)=>setAddress(e.target.value)} defaultValue={userDetails.address}/>
                </div>
               </div>
              
              </div>
              <div>
              <div>
               <p className="emailAddress">UserName</p>
               <div  className="emailDiv">
                   
                    <input onChange={(e)=>setUsername(e.target.value)} defaultValue={userDetails.username}/>
                </div>
               </div>
              <div>
               <p className="emailAddress">Status</p>
               <div className="emailDiv">
                   
                    <input onChange={(e)=>setStatus(e.target.value)} defaultValue={userDetails.status}/>
                </div>
               </div>
              <div>
               <p className="emailAddress">Country</p>
               <div className="emailDiv">
                   
                    <input onChange={(e)=>setCountry(e.target.value)}  defaultValue={userDetails.country}/>
                </div>
               </div>
              </div>
            </div>
            <div>
                <button onClick={updateProfile}  className="nextButton">Update</button>
            </div>
        </div> :  
     </div>
    )
}


export default Profile;