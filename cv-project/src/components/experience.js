import React, { Component } from 'react'

class Experience extends Component {

    constructor(props){
        super(props);
        this.state = {
            edititng: false,
            cName: '',
            position: '',
            description: '',
            startDateJob: '',
            endDateJob: '',
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.id]:event.target.value});
    }

    render() {
        return(
                <div>
                {this.state.editing ? (
                        <div>
                            <div>{this.state.cName}</div>
                            <div>{this.state.position}</div>
                            <div>{this.state.description}</div>
                            <div>{this.state.startDateJob}</div>
                            <div>{this.state.endDateJob}</div>
                            <button onClick = {() => {this.setState({ editing: false})}}>Edit</button>
                        </div>
                    ) : (
                        <div>
                            <label htmlFor = 'cName'>Company Name: </label>
                            <input type='text' value={this.state.cName} onChange={this.handleChange} id='cName'></input>

                            <label htmlFor = 'position'>Position: </label>
                            <input type='text' value={this.state.position} onChange={this.handleChange} id='position'></input>

                            <label htmlFor = 'description'> Description: </label>
                            <input type='text' value={this.state.description} onChange={this.handleChange} id='description'></input>

                            <label htmlFor = 'startDateJob'>Start Date: </label>
                            <input type='date' value={this.state.startDateJob} onChange={this.handleChange} id='startDateJob'></input>

                            <label htmlFor = 'endDateJob'>End Date: </label>
                            <input type='date' value={this.state.endDateJob} onChange={this.handleChange} id='endDateJob'></input>

                            <button onClick = {() => {this.setState({editing: true})}}> Done </button>
                        </div>
                    
                    )}
                </div>
        )
    }
}

export default Experience