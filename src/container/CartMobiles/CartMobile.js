import React, { useEffect, useState } from 'react';
import classes from "./CartMobile.module.css";
import Header from "../../component/Header/Header"

const CartMobile = () => {
   const data=JSON.parse(localStorage.cart);
    console.log(data)
    const[mobiles,setMobiles]=useState(data);
    const [totalPrice,setTotalPrice]=useState(0);
    useEffect(()=>{
     const price=   mobiles.reduce((ac,el)=>ac+parseInt(el.price),0);
        setTotalPrice(price);
    },[])
const removeMobileHandler=(id)=>{
    console.log(id)
const data=JSON.parse(localStorage.cart);
console.log(data)
const newData=data.filter(el=>el.id!=id)

localStorage.cart=JSON.stringify(newData)
setMobiles(newData)
  }
  const placeOrderHandler=()=>{

  }
return (
        <div className={classes.CartContainer}>
        <h2>Cart Details</h2>
            <div className={classes.MobileDetails}>
            {mobiles.length>0?(
                <table className={classes.CartTable}>
                   
                    <tbody>
                    <tr>
                                    <th>Device</th>
                                    <th>Model</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                        {mobiles.map(el=>{
                               
                              return  <tr>
                                    <td>{el.name}</td>
                                    <td>{el.model}</td>
                                    <td>{el.quantity}</td>
                                    <td>{el.price}</td>
                                    <td><button onClick={()=>removeMobileHandler(el.id)}>Remove</button></td>
                                </tr>
                        })}
                    </tbody>
                </table>
            ):null}
                <div className={classes.OrderDiv}>
                <span><b>Total:</b> {totalPrice}</span>
                <br/>
                <button style={{marginLeft:"80%"}}>Place Order</button>
                </div>
               
               </div>

        </div>
    );
};

export default CartMobile;