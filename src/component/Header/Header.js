import React, { useState } from 'react';
import {FaUser} from "react-icons/fa"
import {FaShoppingCart} from "react-icons/fa"
import classes from "./Header.module.css"
import {Link,withRouter} from "react-router-dom"
const Header = React.memo((props) => {
    const [isAuth, setAuth]=useState(false)
   const logoutClickHandler=()=>{
       console.log("inside logout")
       localStorage.removeItem("username")
       console.log(localStorage.username)
    setAuth(null) 
   }
    const cartClickHandler= ()=>{
        props.history.push("/mobiles/cart")
      }
      let authenticatedData=null;
      if(localStorage.username){
          //(true);
        authenticatedData= (<>
         <FaUser  style={{width:"40px",height:"30px",marginLeft:"70%"}}></FaUser>
         <select onChange={logoutClickHandler}>
             <option style={{display:"none"}}>{localStorage.username}</option>
             <option  style={{cursor:"pointer"}}>Logout</option>
         </select>
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