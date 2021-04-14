import React from 'react';
import {FaUser} from "react-icons/fa"
import {FaShoppingCart} from "react-icons/fa"
import classes from "./Header.module.css"
import {Link,withRouter} from "react-router-dom"
const Header = React.memo((props) => {
    console.log(props)
    const cartClickHandler= ()=>{
        props.history.push("/mobiles/cart")
      }
      let authenticatedData=null;
      if(localStorage.username){
        authenticatedData= (<>
         <FaUser  style={{width:"40px",height:"30px",marginLeft:"70%"}}></FaUser>
        <span>{localStorage.username}</span> 
         <FaShoppingCart style={{width:"40px",height:"40px",float:"right", cursor:"pointer"}} onClick={cartClickHandler}></FaShoppingCart></>)}
        else{
            authenticatedData= (<div className={classes.rightDiv}>
               <Link to={{
                   pathname:"/login"
               }}>
               <button><b>Login</b></button></Link>
                <FaShoppingCart style={{width:"40px",height:"40px",float:"right", cursor:"pointer"}} onClick={cartClickHandler}></FaShoppingCart></div>) 
        } 
    return (
        <header> <b>Mob Online</b> 
       
        {authenticatedData}
        </header>
    );
});

export default withRouter(Header);