import React from 'react';
import ReactDOM from 'react-dom';
import  './index.css';
import App from './container/App';
import reportWebVitals from './reportWebVitals';
import {Switch,Route, BrowserRouter, Redirect} from "react-router-dom";
import FullMobile from "./container/FullMobile/FullMobile";
import CartMobile from "./container/CartMobiles/CartMobile";
import Header from './component/Header/Header';
import Login from "./container/Login/Login"
const route=(
<Switch>
<Route path ="/mobiles/cart" component={CartMobile} />
<Route path="/mobiles/:id" component={FullMobile} />
<Route path="/mobiles" component={App}/>
<Route path="/login" component={Login}/>
<Redirect from ="/" to ="/mobiles"/>
</Switch>
)
ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
   <div className="Container">
   <Route path ="/"  component={Header}/>
   {route}
   </div>
  
   </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
