import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { InputGroup, InputGroupAddon, Input, Button, Jumbotron, Table  } from 'reactstrap';
import { addTable, setStoreColor } from '../../reducers/app'
import { logOut } from '../../reducers/login'
import './App.css';


class App extends Component {
    static propTypes = {
        table: PropTypes.array.isRequired,
    }

    static defaultProps = {
        table: []
    }

    addRow = () => {
        const { dispatch } = this.props;

        let col1 = ReactDOM.findDOMNode(this.refs.col1);
        let col2 = ReactDOM.findDOMNode(this.refs.col2);
        const loginData = {name: col1.value, surname: col2.value};

        if (col1.value.length && col2.value.length) {
            dispatch(addTable(loginData))
            col1.value = '';
            col2.value = '';
        } else {
            alert('Inputs must be not empty');
        }
    }

    setColor = () => {
        const { dispatch } = this.props;
        const color = ReactDOM.findDOMNode(this.refs.color).value;

        dispatch(setStoreColor(color))
    }

    logOut = () => {
        const { dispatch } = this.props;
        dispatch(logOut())
    }

    render() {
        const { table, color } = this.props;
        return (
            <div>
                <Button className='btn-danger float-right' onClick={this.logOut}>Log Out</Button>
                <h2 className='text-center'>Data table</h2>
                <Table dark className='text-center data-table'>
                    <thead>
                        <tr>
                            <td>Position #</td>
                            <td>Guest Name</td>
                            <td>Guest Surname</td>
                        </tr>
                    </thead>
                    <tbody>
                        {table.map((item, index) => (
                            <tr key={item+index}>
                                <td>{++index}</td>
                                <td>{item.name}</td>
                                <td>{item.surname}</td>
                            </tr>
                            )
                        )}
                    </tbody>
                </Table>
                <hr/>
                <Jumbotron className='add-row'>
                    <h1>Add Guest</h1>
                    <Input ref='col1' />
                        <br />
                    <Input ref='col2' />
                        <br />
                    <Button onClick={this.addRow}>Add</Button>
                        <hr/>
                    <h4>HEX Color of Wedding</h4>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">Set Color</InputGroupAddon>
                        <Input defaultValue='#b14eff' ref='color' placeholder='Current color is - #b14eff' onChange={this.setColor} />
                    </InputGroup>
                        <br/>
                    <div style={ {width: '100%', height: '30px', backgroundColor: color} }></div>
                </Jumbotron>
            </div>
        )
    }
}

let mapStateToProps = ( state => ({
        table: state.app.table,
        color: state.app.color
    })
)

export default connect(mapStateToProps)(App)