import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import animation from './Resource/animation';
import AOS from 'aos';
import './Resource/css/style.css'
import './Resource/css/details.css'
import './Resource/css/footer.css'
import './Resource/css/listPost.css'
import './Resource/css/main.css'
import './Resource/css/nav.css'
import './Resource/css/user.css'
import './Resource/css/dashboard.css'
import './Resource/css/responsive_dashboard.css'
import './Resource/css/responsive.css';
import './Resource/css/register.css';
import './Resource/css/profile.css';
// ..
import {createStore, applyMiddleware} from 'redux';
import appReducers from './Resource/reducers/index';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
AOS.init();
animation();
const store = createStore(
  appReducers,
  // call api => dispatch
  applyMiddleware(thunk)
)
ReactDOM.render(
 <Provider store = {store}>
   <App/>
 </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
