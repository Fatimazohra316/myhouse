import axios, { formToJSON } from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../images/housebubble.png"


function SignIn() {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");
    const [check,setCheck] = useState(false)

    
    const navigate = useNavigate()
    function submituser(e){
        e.preventDefault();
        let data = new FormData();
        data.append("email", email);
        // console.log(email);
        data.append("cpass", password);
        // console.log(password);
        fetch("https://cleaningapp.8tkt.com/public/api/signin",{
            method : "POST",
            body : data

        }).then((response) => response.json())
        .then((data) => {
            localStorage.setItem("data",JSON.stringify(data))
            // console.log(data);
            if(data.error){
                setMessage(data.error)
                setCheck(true)
            }
            else{
                navigate("/")
            }

        })
        
        
       
    }
    return (
        <div>
            <div className='signUp container'>
                <div>
                    <p className='hello'>Hello <span className='user'>User!</span></p>
                    <p className="quality">Your Quality Cleaning service will be done
                        in the best way with us.</p>
                    <p className='better'>SignIn to get the Service Now.</p>
                    <form onSubmit={submituser}>
                    <div><input onChange={(e)=>setEmail(e.target.value)} className='name' placeholder='Enter Your Email Address' /></div>
                    <div><input onChange={(e)=>setPassword(e.target.value)} className='name' placeholder='Password' /></div>
                   {check ?  <p className="message">{message} *</p> : null}
                    <div><button className='signUpBtn'>Sign In</button></div>
                    </form>
                    <p className='account'>Already have an Account? <span  className='signIn'> Sign In</span></p>
                </div>
                <div>
                    <img className="houseBubble" src={image1} />
                </div>

            </div>

        </div>
    )
}


export default SignIn;