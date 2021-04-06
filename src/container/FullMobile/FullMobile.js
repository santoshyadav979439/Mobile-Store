import React, { useEffect, useState } from 'react';
import axios from "axios";
import MobileLogo from "../../assets/mobile.jpg";
import "./FullMobile.css";
import Header from '../../component/Header/Header'
const FullMobile = (props) => {
    const [mobileData, setMobileData]=useState({});
    useEffect(()=>{
        console.log("inside useEffect")
        const id=props.match.params.id
        console.log(id)
        axios.get("http://localhost:3000/mobiles/"+id).then(res=>{
            setMobileData(res.data)
        })
    },[])
    const openCartHandler=()=>{
        console.log('inside open cart');
        console.log(props)
        props.history.push("/mobiles/cart")
        
    }
    return (
        <div className="FullMobileContainer">
        <Header click={openCartHandler}/>
        <div className="MobileContainer">
            
            <div className="MobileLogo">
                <img src={MobileLogo} style={{width:"70%"}} />
            </div>
            <div>

            <table cellSpacing="10" cellPadding="10">
                <tr>
                    <td>Device Name</td>
                    <td>{mobileData.name}</td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td>{mobileData.price}</td>
                </tr>
            </table>
            </div>
           <div>
               <button onClick={props.location.click}>Add to cart</button>
           </div>
        </div>
        </div>
    );
};

export default FullMobile;