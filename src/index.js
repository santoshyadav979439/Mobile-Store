import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import reportWebVitals from './reportWebVitals';
import {Switch,Route, BrowserRouter} from "react-router-dom";
import FullMobile from "./container/FullMobile/FullMobile";
import Login from "./container/Login/Login";
import CartMobile from "./container/CartMobiles/CartMobile"
const route=(
<Switch>
<Route path ="/mobiles/cart" component={CartMobile} />
<Route path="/mobiles/:id" component={FullMobile} />
<Route path="/mobiles" component={App}/>
<Route path ="/" exact component={Login}/>
</Switch>
)
ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
   {route}
   </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
