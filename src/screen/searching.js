import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import image3 from "../images/rating.png";
import image4 from "../images/search.png";
import image5 from "../images/left.png";


function Searching() {
    const [serviceArr, setServiceArr] = useState([]);
    const [filterList, setFilterList] = useState([])
    const [filterData, setFilterData] = useState(true)
    const url = "https://cleaningapp.8tkt.com/public/api/services";
    const navigate = useNavigate();
    const [filterArr, setFilterArr] = useState([])

    const location = useLocation()
    let filterValue;
    filterValue = location.state;
    console.log(filterValue);
    const getData = () => {
        fetch(url, {
            method: "POST"
        }).then((response) => response.json()).then((data) => {
            setServiceArr(data.data)
            setFilterList(data.data)



        })
    }

    useEffect(() => {

        getData();

        const filteration = serviceArr.filter((element, index) => {
            if (element.category_name.toLowerCase().includes(filterValue.toLowerCase())) {
                filterValue = '';
                return element;
            }

        })

        setFilterList([...filteration])
        console.log(filterList);






    }, [])



    const searchItem = (val) => {

        const filteredData = serviceArr.filter((item, index) => {
            if (item.category_name.toLowerCase().includes(val.toLowerCase())) {
                return item
            }


        })
        setFilterList([...filteredData]);


    }









    const moveData = (data) => {
        navigate("/Item", {
            state: data

        })

    }




    return (
        <div className="container">
            <div><img className="left" onClick={() => navigate("/")} src={image5} /></div>
            <div className="inputDivs"><img className="search" src={image4} /><input defaultValue={filterValue} className="form-control me-2 inputdivs"
                type="search" onChange={(e) => searchItem(e.target.value)} placeholder="Search here..." aria-label="Search here..." /></div>
            <div className="searchingDiv">

                {filterList.map((item, index) => {
                    return (
                        <div onClick={() => moveData(item)}>
                            <div className="searchingService" style={{
                                backgroundImage: `url(${item.category_image})`,
                                backgroundSize: "cover",
                            }}>
                                <button className="categoryButton">{item.category_name}</button>
                                <button className="categorybutton">{item.category_price}</button>

                            </div>
                            <div className="washroomDiv">
                                <div className="ratingDiv"><img src={image3} /> <span className="rating">{item.category_rating}</span></div>
                                <p>{item.category_name}</p>
                            </div>
                        </div>

                    )
                })}
            </div>


        </div>
    )
}


export default Searching;