import axios from "axios";
import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import image1 from "../images/housebubble.png"


function SignUp() {
  const navigate = useNavigate()
  const [model, setModel] = useState({})
  const [name,setName] = useState("");
  const [number,setNumber] = useState(); 
  const [email,setEmail] = useState(); 
  const [password,setPassword] = useState(""); 
  const [username,setUsername] = useState(""); 
  const [message,setMessage] = useState();
  const [check,setCheck] = useState(false)
  const [user,setUser] = useState(false)
  const [arr,setArr] = useState({})


  // console.log(data);
  function submitUser(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    // console.log(name);
    data.append("phone", number);
  //  console.log(number);
    data.append("email", email);
    data.append("cpass", password);
    data.append("username", username);
    
    // data.append("otherStuff", "stuff from a text input");
    fetch("https://cleaningapp.8tkt.com/public/api/signup", {
      method: "POST",
      body: data
    }).then((response) => response.json())
    .then((data) => {
      // console.log(data);
      // console.log(data);
      // setArr(data.data)
     
      // console.log(arr);
      if(data.error){
        setCheck(true)
        setMessage(data.error)
        // console.log(data.error);
      }
      if(data?.error?.email){
        setCheck(true)
        setMessage(data.error.email)

       
      }
      if (data?.error?.phone){
        setCheck(true)
        setMessage(data.error.phone)
      }
      if (data?.error?.name){
        setCheck(true)
        setMessage(data.error.name)
      }
      if (data?.error?.cpass){
        setCheck(true)
        setMessage(data.error.cpass)
      }
      if (data?.error?.username){
        setCheck(true)
        setMessage(data.error.username)
      }
      else if (!data.error && !data?.error?.email && !data?.error?.phone && !data?.error?.username && !data?.error?.cpass && !data?.error?.name){
        // navigate("/signin")
        setUser(true)
      }
      
    });
    // console.log(arr);
    // fetch('https://cleaningapp.8tkt.com/public/api/signup', {
    //     method: 'POST',
    //     body: JSON.stringify(
    //      model
    //     ),
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //     },
    //     // body: JSON.stringify(model)
    //   })
    //     .then((response) =>{
    //         response.json();
    //         if (response.ok) {
    //           alert("Perfect! ");
    //         } else if (response.status == 200) {
    //           alert("Oops!", response);
    //         }

    //     }).catch((err)=>{
    //       console.log(err);
    //     })


  }   
  // console.log(data); 
  return (
    <div>
      <div className='signUp container'>
        <div>
          <p className='hello'>Hello <span className='user'>User!</span></p>
          <p className='better'>Signup for Better Experience.</p>
          <form onSubmit={submitUser} method="post">
            <div><input onChange={(e) => setName(e.target.value)} className='name' placeholder='Enter your Full Name' /></div>
            <div><input onChange={(e)=>setNumber(e.target.value)}  className='name' placeholder='Enter Your Number' /></div>
            <div><input  onChange={(e)=>setEmail(e.target.value)}    className='name' placeholder='Enter Your Email Address' /></div>
            <div><input onChange={(e)=>setPassword(e.target.value)} type="password" className='name' placeholder='Enter your Password' /></div>
            <div><input onChange={(e)=>setUsername(e.target.value)} className='name' placeholder='Enter your username' /></div>
            <div><button className='signUpBtn'>Sign Up</button></div>
            {check ? <p className="message">{message} *</p> : null}
            {user? <p className="message2">User Created Successfully</p> : null}

          </form>
          <p className='account'>Already have an Account? <span onClick={() => navigate("/signin")} className='signIn'> Sign In</span></p>
        </div>
        <div>
          <img className="houseBubble" src={image1} />
        </div>

      </div>

    </div>
  )
}


export default SignUp;