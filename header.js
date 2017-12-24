import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Header extends React.Component {
	constructor(){
		super();
	
    this.state = {
      image : ""
    }

    this.fileHandler = this.fileHandler.bind(this);
  }
	
	
	fileHandler(e){
		
		
  console.log(e.target.files[0]);

  var fileReader = new FileReader();

    fileReader.onload = (e)=>{
      var base64 = e.target.result;
      console.log(base64);

      this.setState({image : base64})

    };
  
    fileReader.readAsDataURL(e.target.files[0]);
}
  render() {
    return (
      <div className="Header">
        
					
					 <Router>
        <div>
          <ul>
            <li><Link to='/page1'><img src={require('../images/iphone.png')} height="100"/>iphone</Link></li>
            <li><Link to='/page2'><img src={require('../images/download.jpg')} height="100"/>samsung</Link></li>
            <li><Link to='/page3/1'><img src={require('../images/download (1).jpg')} height="100"/>motorola</Link></li>
            <li><Link to='/page3/2'></Link></li>
          </ul>
        <Route exact path='/' component={Page1} /> 
        <Route exact path='/page2' component={Page2} />
        <Route path='/page3/:id' component={Page3} />
        </div>
      </Router>
			
			</div>

			
			

    );
  }
}
class Page1 extends React.Component {
  render() {
    return(
      <div>
      this is page 1
      </div>
    )
  }
}

class Page2 extends React.Component {
  render() {
    return(
      <div>
      this is page 2
      </div>
    )
  }
}

class Page3 extends React.Component {
  constructor(props) {
    super(props);

    console.log(props.match);

  }
  render() {
    return(
      <div>
      this is page 3
      </div>
    )
  }
}



export default Header;
