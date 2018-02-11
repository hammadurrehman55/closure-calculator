import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Route,Link
} from 'react-router-dom';
import Home from'./home.js';
import Signup from './Signup.js';
import Login from './login.js';
import Dashboard from './userdash.js';

class App extends Component {

  render() {
    return (
      <div className="App">
       <Router>
       <div className="modal-sign-up">

      <ul>
        <div className="tabs">
            <li className="li"><Link to="/">Home</Link></li>
            <li className="li"><Link to="/Signup">Signup</Link></li>
              <li className="li"><Link to="/Login">Login</Link></li>
               <li className="li"><Link to="/userlog">Userpage</Link></li>


        </div>
      </ul>

<Route path='/' component={Home} />
<Route exact path='/Signup' component={Signup} />
<Route exact path='/login' component={Login} />
<Route exact path='/userdash' component={Dashboard} />
</div>

  </Router>

      </div>
    );
  }
}







export default App;
