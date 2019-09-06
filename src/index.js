import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
)
// import React from 'react';
// import ReactDOM from 'react-dom';
// import indexRoutes from '../src/routes/index';
// import {  Route, Switch } from 'react-router-dom';
// import { HashRouter } from 'react-router-dom'

// import '../assets/scss/style.css';



// ReactDOM.render(
//   <HashRouter>
  
//     <Switch>
//       {indexRoutes.map((prop, key) => {
//         return <Route path={prop.path} key={key} component={prop.component} />;
//       })}
//     </Switch>
  
//   </HashRouter>
//   ,document.getElementById('root')); 
