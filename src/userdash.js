import React from 'react';
import {store} from './index';
import {connect} from 'react-redux';
import './App.css';
import axios, { post } from 'axios';



function mapStateToProps(state) {
    return {
        loginUserFromStore: state.loginUser,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatchLogOutUser: (loginDetails) => {
            dispatch({ type: "LOGOUT_USER" })
        }
    }
}



class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  fileUpload(file){
    const url = 'http://example.com/file-upload';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }


    render() {
        if (this.props.loginUserFromStore.length - 1) {
            alert("You need to login first");
            this.props.history.push('/login');
            return '';
        }
        return (
            <div>
                <dashboard-header>
                    <div>
                        <ul>
                            <li>
                                <a href="https://reactjs.org/" target="_blank" rel='noopener noreferrer'>

                                </a>
                                <a href="https://redux.js.org/" target="_blank" rel='noopener noreferrer'>

                                </a>

                                <div classNmae="modal-sign-up"> <h1> WELCOME TO ABC COMPANY</h1></div>
                                 <div className="signup-btn">

                                <button onClick={this.clickHandler.bind(this)}> Logout </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </dashboard-header>
                <div>
                    <p >Welcome Dear <b>{this.props.loginUserFromStore[0].userName}</b>, Please Attach Your CV File Here! </p>


                     <form onSubmit={this.onFormSubmit}>
 <div className="signup-btn">
        <h1>File Upload</h1>
        <input type="file" onChange={this.onChange} />


        <button type="submit">Upload</button>
     </div>
      </form>

                </div>
            </div>
        )
    }

    clickHandler(e) {
        e.preventDefault();
        this.props.dispatchLogOutUser(this.props.loginUserFromStore);
        this.props.history.push('/');
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
