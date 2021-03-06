import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Input, Button, Jumbotron } from 'reactstrap';
import { logIn } from '../reducers/login';
import './component.css';

class Authorization extends Component {
    logIn = () => {
        const { login, pass, dispatch } = this.props; 
   
        const userLogin = ReactDOM.findDOMNode(this.refs.login).value;
        const userPass = ReactDOM.findDOMNode(this.refs.pass).value;
        
        login === userLogin && pass === userPass ? dispatch(logIn({login: userLogin, pass: userPass})) : alert('wrong pass or login');
    }

    render(){
        return (
            <Jumbotron className='authorization-container'>
                <h2 className='text-center'>Login page</h2>
                <Input type="text" ref='login' defaultValue='' placeholder='login' />
                <Input type="text" ref='pass' defaultValue='' placeholder='pass' />
                <div className='btn-container'>
                    <Button onClick={this.logIn}>Login</Button>    
                    <Button>Register</Button>
                </div>
            </Jumbotron>    
        )
    }
}

let mapStateToProps = ( state => ({
        logged: state.login.isLogged,
        login: state.login.login,
        pass: state.login.pass,
    })
)

export default connect(mapStateToProps)(Authorization);
