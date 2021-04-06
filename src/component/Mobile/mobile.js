import React, { useState } from 'react';
import "./mobile.css";
import {Link} from "react-router-dom"
const mobile = React.memo((props) => {
const addToCartHandler =(props)=>{
    const data={
        name:props.name,
        model:props.model,
        price:props.price,
        id:props.id,
        quantity:1
    }
if(localStorage.cart){
    const cartData=JSON.parse(localStorage.cart);
  
    const item=cartData.findIndex(el=>el.id==props.id);
    if(item>-1){
    cartData[item].quantity+=1;
    localStorage.cart=JSON.stringify(cartData)
    }
    else{
cartData.push(data)
localStorage.cart=JSON.stringify(cartData)
    }
}else{
    localStorage.cart=JSON.stringify([data])
}
}
const onClickOfViewButton=()=>{
    props.history.push("/mobiles/"+props.id)
}
    return (
        <div className="Mobile">
            Name: {props.name}
            <br/>
            Price: {props.price}
            <div className="Buttons">
           <Link to={{
               pathname:"/mobiles/"+props.id,
               click:()=>addToCartHandler(props),
             
               }}><button>View</button></Link> 
            <button onClick={()=>{addToCartHandler(props)}}>Add to Cart</button>
            </div>
        </div>
    );
});

export default mobile;