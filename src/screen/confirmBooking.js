import React from "react";
import { useNavigate } from "react-router-dom";
import image6 from "../images/check.png"
function ConfirmBooking() {
    const navigate = useNavigate()
    function continueService(){
        navigate("/services  ")

    }
    return (
        <div>
            <div id="stepThree">
                <div className="bookingConfirmed">
                    <div><img className="check" src={image6} /></div>
                    <p className="confirmBooking">Booking Confirmed</p>
                   

                </div>

            </div>
            <div>
                <button onClick={continueService} className="nextButton">Continue to Services</button>
            </div>
        </div>
    )
}

export default ConfirmBooking;