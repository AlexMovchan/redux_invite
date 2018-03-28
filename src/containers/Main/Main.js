import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import App from '../App/App';
import Authorization from '../Authorization/Authorization';

class Main extends Component {
    static propTypes = {
        isLogged: PropTypes.bool.isRequired,
    }

    static defaultProps = {
        isLogged: false
    }
    
    render() {
        const { isLogged } = this.props;
        return (
            <div>
                { isLogged ? <App/> : <Authorization/> }
            </div>
        )
    }
}

let mapStateToProps = ( state => ({
        isLogged: state.login.isLogged,
    })
)

export default connect(mapStateToProps)(Main)