import React, { Component } from 'react'

class Education extends Component {

    constructor(props){
        super(props);
        this.state = {
            editing: false,
            schoolName: '',
            degree: '',
            startDate: '',
            endDate: '',
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    }

    render() {
        return(
                <div>
                    {this.state.editing ? (
                        <div>
                            <div>{this.state.schoolName}</div>
                            <div>{this.state.degree}</div>
                            <div>{this.state.startDate}</div>
                            <div>{this.state.endDate}</div>
                            <button onClick = {() => {this.setState({ editing: false})}}>Edit</button>
                        </div>
                    ) : (
                        <div>
                            <label htmlFor = 'schoolName'>School Name: </label>
                            <input type='text' value = {this.state.schoolName} onChange = {this.handleChange} id='schoolName'></input>

                            <label htmlFor = 'degree'> Degree: </label>
                            <input type='text' value = {this.state.degree} onChange = {this.handleChange} id='degree'></input>

                            <label htmlFor = 'startDate'>Start Date: </label>
                            <input type='date' value = {this.state.startDate} onChange = {this.handleChange} id='startDate'></input>

                            <label htmlFor = 'endDate'>End Date: </label>
                            <input type='date' value = {this.state.endDate} onChange = {this.handleChange} id='endDate'></input>

                            <button onClick = {() => {this.setState({editing: true})}}> Done </button>
                        </div>
                    )}
                </div>
        )
    }
}

export default Education