import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Input, Button, Jumbotron } from 'reactstrap';
import { logIn, registerUser } from '../../reducers/login';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';
import './component.css';

class Authorization extends Component {
    static propTypes = {
        logged: PropTypes.bool.isRequired,
        login: PropTypes.string.isRequired,
        pass: PropTypes.string.isRequired,
    }

    static defaultProps = {
        logged: false,
        login: '',
        pass: '',
    }
    
    logIn = () => {
        const { login, pass, dispatch } = this.props; 
        const userLogin = ReactDOM.findDOMNode(this.refs.login).value;
        const userPass = ReactDOM.findDOMNode(this.refs.pass).value;
        
        login === userLogin && pass === userPass ? dispatch(logIn({login: userLogin, pass: userPass})) : alert('wrong pass or login');
    }

    registerNewUser = () => {
        const { dispatch } = this.props;
        const newLogin = ReactDOM.findDOMNode(this.refs.login).value;
        const newPass = ReactDOM.findDOMNode(this.refs.pass).value;

        if (newLogin.length && newPass.length) {
            dispatch(registerUser({ login: newLogin, pass: newPass }));
            Alert.success('<h2>User registered!! Please LOG IN</h2>', {
                position: 'top',
                effect: 'stackslide',
                offset: 100,
                html: true,
            });
        } else {
            Alert.error('<h2>Login or password can not be empty!</h2>', {
                position: 'top',
                effect: 'stackslide',
                offset: 100,
                html: true,
            });
        }
    }

    render(){
        return (
            <Jumbotron className='authorization-container'>
                <Alert stack={{limit: 3}} />
                <h2 className='text-center'>Login page</h2>
                <Input type="text" ref='login' placeholder='login' />
                <Input type="text" ref='pass' placeholder='pass' />
                <div className='btn-container'>
                    <Button onClick={this.logIn}>Login</Button>    
                    <Button onClick={this.registerNewUser}>Register</Button>
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
