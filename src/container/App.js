import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import classes from './App.module.css';
import Mobile from "../component/Mobile/mobile";
import Header from "../component/Header/Header"
const App=React.memo((props)=> {
  const [mobiles,setMobiles]=useState([])
  const [searchText,setSearchText] = useState("");
useEffect(()=>{
  console.log("mounting:::")
axios.get("http://localhost:3000/mobiles").then((res)=>{
const data=res.data;
console.log('data is',data)
setMobiles(data);
}).catch(err=>{
  console.log("some error occurred",err)
})
  },[])
  
  const onChangeHandler =useCallback((event)=>{
    setSearchText(event.target.value);
   })
  useEffect(()=>{
    console.log("update on searchtext changes")
      const timer=setTimeout(()=>{
        console.log("inside settimeout")
        const query=searchText.length>0?`?name=${searchText}`:""
    axios.get("http://localhost:3000/mobiles"+query).then(res=>{
      const data=res.data;
      setMobiles(data);
    })
      },1000)
  return ()=>{
    console.log("component will unmount");
    clearTimeout(timer)
  }  
  
  },[searchText])
  const cartClickHandler= ()=>{
    props.history.push("/mobiles/cart")
  }
  return (
    <div className={classes.App}>
    <Header click={cartClickHandler}/>
    
      <table >
        <tr>
          <td><b>Mobiles</b></td>
          <td><input type="text" placeholder="Search Mobile" value={searchText} onChange={onChangeHandler} /></td>
        </tr>
      </table>
      <div className={classes.Container}>
      {mobiles.map(el=>{
  return <Mobile 
  key={el.id} 
  name={el.name}
  price={el.price}
  id={el.id}
  color={el.color}
  size={el.size}
  model={el.model}
  os={el.os}
  storage={el.storage}
  ram={el.ram}
  
  />
})}
      
      
    </div>
    </div>
    
  )
})

export default App;
