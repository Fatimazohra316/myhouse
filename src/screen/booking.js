import React, { useEffect, useState } from "react";
import image1 from "../images/calender.png"
import image2 from "../images/location.png"
import image4 from "../images/dottedline.png"
import image5 from "../images/washrooms.png"
import image6 from "../images/check.png"
import image7 from "../images/ticks.png";
import image8 from "../images/profile.PNG"
import close from '../images/close.png'

import { json, useLocation, useNavigate } from "react-router-dom";
import { TurnLeftTwoTone } from "@mui/icons-material";

function Booking() {
    let url = "https://cleaningapp.8tkt.com/public/api/booking";
    let url1 = "https://cleaningapp.8tkt.com/public/api/signin";
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(true);
    const [page1, setPage1] = useState(false);
    const [page2, setPage2] = useState(false);
    const navigate = useNavigate();
    const [changeDiv, setChangeDiv] = useState(true)
    const [secondButton, setSecondButton] = useState(true)
    const [changeButton, setChangeButton] = useState(false)
    const [button3, setButton3] = useState(true)
    let email;
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [number, setNumber] = useState();
    const [address, setAddress] = useState("");
    const [coupon, setCoupon] = useState("");
    const [serviceName, setServiceName] = useState("");
    const [cross, setCross] = useState(false);
    const [emailAddress, setEmailAddress] = useState();
    const [password, setPassword] = useState();
    const [fieldDates, setFieldDates] = useState("");
    const [fieldDate, setFieldDate] = useState(false);
    const [fieldTime, setFieldTime] = useState('');
    const [fieldTimes, setFieldTimes] = useState(false)
    const [fieldNumber, setFieldNumber] = useState('');
    const [fieldNumbers, setFieldNumbers] = useState(false)
    const [fieldAddress, setFieldAddress] = useState('');
    const [fieldAddresss, setFieldAddresss] = useState(false);
    const [fieldCount, setFieldCount] = useState('');
    const [fieldCounts, setFieldCounts] = useState(false)
    const [fieldServiceName, setFieldServiceName] = useState('');
    const [fieldServiceNames, setFieldServiceNames] = useState(false);



    function submitUser(e) {
        e.preventDefault();
        const customerDetails = new FormData;
        customerDetails.append("email", emailAddress);
        customerDetails.append("cpass", password);
        fetch(url1, {
            method: "POST",
            body: customerDetails,

        }).then((response) => response.json())
            .then((data) => {
                localStorage.setItem("data", JSON.stringify(data))
                // console.log(data);
                if (data.error) {
                    // console.log(data.error);
                }
                else {
                    setCross(false)
                }

            })


    }

    if (localStorage.getItem("data")) {
        const emailData = JSON.parse(localStorage.getItem("data"))
        email = emailData.data.email;

    }

    // console.log(emailAddress);
    const Location = useLocation()
    let categoryName = Location.state;


    // console.log(categoryName);
    // console.log(email);
    // console.log(locatiom.state);
    function addButton() {

        if (!date) {
            // alert("your date is missing")
            setFieldDates("Date is missing *");
            setFieldDate(true)
        }
        if (!time) {
            setFieldTime("Time is missing *");
            setFieldTimes(true);
        }
        if (!number) {
            setFieldNumber("Number is missing *");
            setFieldNumbers("true");
        }
        if (!address) {
            setFieldAddress("Address is missing *");
            setFieldAddresss("true");
        }
        else {
            setPage(false)
            setPage1(true)
            setChangeDiv(false)

        }


    }
    function addButton1() {
        if (!count) {
            // alert("your date is missing")
            setFieldCount("Service Quantity is missing *");
            setFieldCounts(true)
        }

        if (!serviceName) {
            setFieldServiceName("Service Name is missing *");
            setFieldServiceNames("true");
        }
        else {
            setPage1(false)
            setPage2(true)
            setSecondButton(false)
            setChangeButton(true)
            setButton3(false)
        }

    }
    function addButton2() {
        // setPage1(false)

        if (email) {
            const data = new FormData
            data.append("serviceName", serviceName);
            data.append("categoryName", categoryName);
            data.append("email", email);
            data.append("coupon", coupon);
            data.append("address", address);
            data.append("date", date);
            data.append("time", time);
            data.append("quantity", count);
            data.append("phone", number);

            fetch(url, {
                method: "POST",
                body: data
            }).then((response) => response.json()).then((data) => {
                // console.log(data);
            })
            setPage2(false)
            navigate("/confirmbooking")
        }
        else if (!email) {
            setCross(true)

        }




    }
    function opens() {
        setCross(false)
    }
    function handleSubmit(event) {
        event.preventDefault();

    }

    return (
        <div>
            <div className="container">
                <div className="onePart">
                    <div>
                        {changeDiv ? <button className="ones">1</button> : <img className="ticks" src={image7} />}
                        <p className="serviceText">Service Info</p>
                    </div>
                    <div className="dottedLine"><img src={image4} /></div>
                    <div>{secondButton ? <button className={changeDiv ? "two" : "ones"}>2</button> : <img className="ticks" src={image7} />}

                        <p className="serviceText">Book Service</p></div>
                    <div className="dottedLine"><img src={image4} /></div>
                    <div>
                        <button className={button3 ? "two" : "ones"}>3</button>
                        <p className="serviceText">Booking confirmed</p></div>

                </div>
                {page ? <div>
                    <form onSubmit={handleSubmit} id="stepOne">
                        <div>
                            <div>
                                <p className="deliveryDate">Enter your Delivery Date :</p>
                                <div className="calenderDiv"><img className="calender" src={image1} /><input value={date} type="date" id="datePicker" onChange={(e) => setDate(e.target.value)} placeholder="Enter Date" className="calenderInput" /></div>
                                {fieldDate ? <p className="fieldDate">{fieldDates}</p> : null}

                            </div>
                            <div className="deliveryCalender">
                                <p className="deliveryDate">Enter your Delivery Time :</p>
                                <div className="calenderDiv"><img className="calender" src={image1} /><input id="timePicker" type="time" onChange={(e) => setTime(e.target.value)} placeholder="Enter Time" className="calenderInput" /></div>
                                {fieldTimes ? <p className="fieldDate">{fieldTime}</p> : null}
                            </div>

                        </div>
                        <div>
                            <div>
                                <p className="deliveryDate">Enter your Number :</p>
                                <div className="calenderDiv"> <input onChange={(e) => setNumber(e.target.value)} placeholder="+21-000000000" className="calenderInput" /></div>
                                {fieldNumbers ? <p className="fieldDate">{fieldNumber}</p> : null}
                            </div>

                            <div className="deliveryCalender">
                                <p className="deliveryDates">Your Address : <span className="current">Use Current Location</span></p>
                                <div className="calenderDiv"><img className="calender" src={image2} /><input onChange={(e) => setAddress(e.target.value)} placeholder="Enter Your Address" className="calenderInput" /></div>
                                {fieldAddresss ? <p className="fieldDate">{fieldAddress}</p> : null}
                            </div>


                        </div>


                    </form>
                    <div>
                        <button type="submit" onClick={addButton} className="nextButton">Next</button>
                    </div>

                </div> : null}
                {page1 ? <div>
                    <div id="stepTwo">
                        <div>
                            <div>
                                <p className="deliveryDate">Service Quantity :</p>
                                <div className="incrementDiv"><img src={image5} />
                                    <div className="decrement">
                                        <button onClick={() => {
                                            if (count >= 0) {
                                                setCount(count - 1)
                                            }
                                        }} className="increment">-</button>
                                        <p>{count}</p>
                                        <button onClick={() => setCount(count + 1)} className="increment">+</button>
                                    </div>

                                </div>
                                {fieldCounts ? <p className="fieldDate">{fieldCount}</p> : null}

                            </div>

                            <div className="deliveryCalender">
                                <p className="deliveryDate">Select your Payment Method :</p>


                                <div>
                                    <div className="contains">
                                        <div>
                                            <div class="radio">
                                                <input type="radio" checked value="Male" name='gender' id='male' />
                                                <label for="male"></label>
                                            </div>
                                        </div>
                                        <div class="right">Cash on Delivery</div>
                                    </div>


                                    <div className="contains">
                                        <div >
                                            <div class="radio">
                                                <input type="radio" value="Female" checked name='gender' id='female' />
                                                <label for="female"></label>
                                            </div>
                                        </div>
                                        <div class="right">Credit Card <span>(Coming soon)</span></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div>
                                <p className="deliveryDate">Price details  :</p>
                                <div className="calenderDiv"> <input onChange={(e) => setCoupon(e.target.value)} placeholder="Enter Coupon Code" className="calenderInput text-center" /></div>
                            </div>
                            <div className="marginService">
                                <p className="deliveryDate">Service Name  :</p>
                                <div className="calenderDiv"> <input onChange={(e) => setServiceName(e.target.value)} placeholder="Enter Service" className="calenderInput text-center" /></div>
                                {fieldServiceNames ? <p className="fieldDate">{fieldDates}</p> : null}
                            </div>
                            {/* <div className="deliveryCalender">
                        <div className="priceDiv">
                            <p>Price : 50$</p>
                            <p>Quantity : 2</p>
                            <p className="fw-bold">Total Amount : 100$</p>
                        </div>
                    </div> */}

                        </div>

                    </div>
                    <div>
                        <button onClick={addButton1} className="nextButton">Next</button>
                    </div>
                </div> : null}
                {page2 ? <div>
                    <div id="stepThree">
                        <div className="bookingConfirmed">
                            <div><img className="check" src={image6} /></div>
                            <p className="confirmBooking">Confirm Booking</p>
                            <p className="confirmBooking2">Are you sure you want to confirm
                                the booking</p>

                        </div>

                    </div>
                    <div>
                        <button onClick={addButton2} className="nextButton">Confirm Booking</button>
                    </div>
                    <div>
                        {cross ? <form onSubmit={submitUser} className="box">
                            <img className="close" onClick={opens} src={close} />
                            <p className="access">Access your Account</p>
                            <p className="dontAccount">Don’t have an account? <span>Signup</span></p>
                            <div className="container d-block m-auto">
                                <div className="emaildiv">
                                    <p>Email</p>
                                    <input onChange={(e) => setEmailAddress(e.target.value)} className="emailInput" />
                                </div>
                                <div className="emaildiv">
                                    <p>Password</p>
                                    <input onChange={(e) => setPassword(e.target.value)} className="emailInput" />
                                </div>
                                <button className="loginButton">Log In</button>
                            </div>
                        </form> : null}
                    </div>
                </div> : null}



            </div>
        </div>
    )
}


export default Booking;