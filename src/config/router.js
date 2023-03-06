import { BrowserRouter,Routes,Route, Link, useNavigate, useLocation } from "react-router-dom";
import Home from "../screen/Home.js";
import Chat from "../screen/Chat.js";
import SignIn from "../screen/SignIn";
import SignUp from "../screen/SignUp";
import History from "../screen/History.js";
import Service from "../screen/Services.js";
import Setting from "../screen/Setting.js";
import image2 from "../images/housesweeping.png";
import image3 from "../images/search.png";
import image4 from "../images/heart.png";
import image5 from "../images/justin.png";
import image6 from "../images/hand.png";
import image7 from "../images/history.png";
import image8 from "../images/chat.png";
import image9 from "../images/settings.png";
import image10 from "../images/home.png";
import Item from "../screen/item.js";
import { useEffect, useState } from "react";
import Booking from "../screen/booking.js";
import ConfirmBooking from "../screen/confirmBooking.js";
import Profile from "../screen/profile.js";
import { alignProperty } from "@mui/material/styles/cssUtils.js";
import Searching from "../screen/searching.js";
import image11 from '../images/left.png'


const data = localStorage.getItem("data")
function AppRouter(){
  const [active,setActive] = useState(true);
  const [logOut,setLogout] = useState(true)
  const location = useLocation();
  const [arr,setArr] = useState([])
  const [item,setItem] = useState("")
  const navigate = useNavigate()
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [clickMe,setClickMe]= useState(true);
  let email;


  const getData = () => {
    fetch("https://cleaningapp.8tkt.com/public/api/categories",{
      method : "POST"
    }).then((success) => {
      // console.log(success.json());
    }).catch((err) => {
      //  console.log(err);
    })
    fetch("https://cleaningapp.8tkt.com/public/api/services",{
      method : "POST"
    }).then((success) => {
      // console.log(success);
      //  setArr(success)
    }).catch((err) => {
      //  console.log(err);
    })
 }

    
 useEffect(()=>{
  getData();
  if (!localStorage.getItem("data")) {
    setLogout(false)
  }
 
 },[])



  
  function logout(){
    const data =  localStorage.clear("data")
    navigate('/')

  }


  
  function logIn(){
    navigate("signin")
    // setLogout(true)
  }
 
  function clickme(event){
    if(event.key == "Enter"){
      navigate("searching",{
          state : item 
      });
    }
    
    // setClickMe(false)
  }

    return(
      <>
      {window.location.href != "http://localhost:3000/signup" && window.location.href != "http://localhost:3000/signin" && 
        (<div>
            <div className="mainNavBar " id="mainNavbar">
            
              <nav className="navbar navbar-expand-lg contain">
            <div className="container-fluid">
             

              <a className="navbar-brand" href="#"><img className="houseSweep" src={image2}/></a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              {clickMe ?  <div className="inputDiv"><img className="search" src={image3}/><input className="form-control me-2 inputdiv" 
                type="search" onChange={(e)=>setItem(e.target.value)} onKeyDown={clickme} placeholder="Search here..." aria-label="Search here..."/></div> : null}
            
                
                </ul>
                {logOut ?  <div className="imageDiv">
                  <div><img src={image4} /></div>
                  <div>Justine Boyle <img className="justin" src={image5}/> </div>
                   <button onClick={logout} className="logout">Logout</button> 
                </div> :<button onClick={logIn} className="login">Log In</button>  }
              </div>
            </div>
          </nav>
          <div className="contain linkDiv">
            <Link  className={splitLocation[1] === "" ? "active" : "service"} to="/"><img src={image10}/><span className="marginLeft">Home</span></Link>
            <Link  className={splitLocation[1] === "services" ? "active" : "service"} to="services"><img src={image6}/><span className="marginLeft" >Services</span></Link>
            <Link  className={splitLocation[1] === "history" ? "active" : "service"} to="history"><img src={image7}/><span className="marginLeft" >History</span></Link>
            <Link  className={splitLocation[1] === "chat" ? "active" : "service"} to="chat"><img src={image8}/><span className="marginLeft" >Chat Support</span></Link>
            <Link  className={splitLocation[1] === "setting" ? "active" : "service"} to="setting"><img src={image9}/><span className="marginLeft" >Settings</span></Link>
            
          </div>
          </div>
        </div>)}
        <Routes>
            <Route path='signup' element={<SignUp/>}/>
            <Route path='signin' element={<SignIn/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="chat" element={<Chat/>}/>
            <Route path="history" element={<History/>}/>
            <Route path="services" element={<Service/>}/>
            <Route path="setting" element={<Setting/>}/>
            <Route path="item" element={<Item/>}/>
            <Route path="booking" element={<Booking/>}/>
            <Route path="confirmbooking" element={<ConfirmBooking/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="searching" element={<Searching/>}/>
            
          </Routes>
        </>
    )
}
export default AppRouter;