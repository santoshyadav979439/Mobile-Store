import React, { useState } from 'react';
import "./Login.css"
const Login = (props) => {
    const[username,setUserName]=useState("");
    const [password, setPassword]= useState("");
    const onSubmitHandler=()=>{
        const name=username;
        const pass= password;
        if(name==="santosh" && pass==="santosh"){
            localStorage.username=name;
            props.history.push("/mobiles")
        }
    }
    const onResetHandler=()=>{
        setUserName("");
        setPassword("");
    }
    return (
        <div className="LoginContainer">
            <header>Mob Online</header>
            <div>
                <input type="text" placeholder="Username"  value={username} 
                onChange={(event)=>{setUserName(event.target.value)}} /> <br/>
                <input type="password" placeholder="Password" value={password}
                onChange={(event)=>{setPassword(event.target.value)}}
                /><br/>
                <button onClick={onSubmitHandler}>Submit</button>
                <button onClick={onResetHandler}>Reset</button>
                
                
            </div>
        </div>
    );
};

export default Login;