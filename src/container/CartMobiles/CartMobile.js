import React, { useEffect, useState } from 'react';
import classes from "./CartMobile.module.css";
import Modal from '../../component/Modal/Modal'
import {withRouter} from 'react-router-dom';
import PlaceOrderModal from "../../component/Modal/PlaceOrderModal"
const CartMobile = (props) => {
    let data=[];
    if(localStorage.cart)
    data=JSON.parse(localStorage.cart);
   
    const[mobiles,setMobiles]=useState(data);
    const [totalPrice,setTotalPrice]=useState(0);
    const [show, setShow] = useState(false);
    const [showPlaceOrder, setShowPlaceOrder]= useState(false);
    
    useEffect(()=>{
        if(mobiles.length>0){
     const price=   mobiles.reduce((ac,el)=>ac+parseInt(el.price),0);
        setTotalPrice(price);
        }
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
      console.log(localStorage.username)
    if(!localStorage.username) 
    setShow(true)
    else{
      setShowPlaceOrder(true);
      console.log(localStorage)
     delete localStorage.cart;
 
    

    }
  }
  const quantityChangeHandler=(event,id)=>{
const mobilesData=mobiles.map(el=>{
    if(el.id==id)
    el.quantity=event.target.value;
    return el;
})

setMobiles(mobilesData)
  }
  const closeOrderPlacedModal=()=>{
    setShowPlaceOrder(false)
    props.history.push("/mobiles")
    
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
                                    <td><input type="text" value={el.quantity} onChange={(event)=>quantityChangeHandler(event,el.id)}/></td>
                                    <td>{el.price}</td>
                                    <td><button onClick={()=>removeMobileHandler(el.id)}>Remove</button></td>
                                </tr>
                        })}
                    </tbody>
                </table>
            ):<h1>There is no item in cart</h1>}
            {mobiles.length>0?(
                <div className={classes.OrderDiv}>
                <span><b>Total:</b> {totalPrice}</span>
                <br/>
                <button style={{marginLeft:"80%"}} onClick={placeOrderHandler}>Place Order</button>
                <Modal show={show} closeClicked={()=>setShow(false)}></Modal>
                <PlaceOrderModal show={showPlaceOrder} closeClicked={closeOrderPlacedModal}></PlaceOrderModal>
                </div>
            ):null}
                
               
               </div>

        </div>
    );
};

export default withRouter(CartMobile);