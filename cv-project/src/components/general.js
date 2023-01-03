import React, { Component } from 'react'

class General extends Component {

    constructor(props){
        super(props);
        this.state = {
            editing: false,
            phoneNumber: '',
            fName: '',
            lName: '',
            email: '',
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value});
    }

    render() {
        return(
            <div>
                    {this.state.editing ? (
                        <div>
                            <div>{this.state.fName}</div>
                            <div>{this.state.lName}</div>
                            <div>{this.state.phoneNumber}</div>
                            <div>{this.state.email}</div>
                            <button onClick= {() => {this.setState({ editing: false});}}>Edit</button>
                        </div>
                    ) : (
                    <div>
                        <label htmlFor = 'fName'>First Name: </label>
                        <input type='text' value={this.state.fName} onChange={this.handleChange} id='fName'></input>

                        <label htmlFor = 'lName'>Last Name: </label>
                        <input type='text' value={this.state.lName} onChange={this.handleChange} id='lName'></input>

                        <label htmlFor = 'phoneNumber'>Phone Number: </label>
                        <input type='tel' value={this.state.phoneNumber} onChange={this.handleChange} id='phoneNumber'></input>

                        <label htmlFor = 'email'> Email: </label>
                        <input type='email' value={this.state.email} onChange={this.handleChange} id='email'></input>
                        <button onClick = {() => {this.setState({editing: true})}}> Done </button>
                    </div>
                )}
            </div>
        )
    }
}

export default General