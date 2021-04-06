import React from 'react';
import {FaUser} from "react-icons/fa"
import {FaShoppingCart} from "react-icons/fa"
const Header = React.memo((props) => {
    return (
        <header> <b>Mob Online</b> 
        <FaUser  style={{width:"40px",height:"30px",marginLeft:"70%"}}></FaUser>
        <span>{localStorage.username}</span> 
         <FaShoppingCart style={{width:"40px",height:"40px",float:"right", cursor:"pointer"}} onClick={props.click}></FaShoppingCart>
        </header>
    );
});

export default Header;