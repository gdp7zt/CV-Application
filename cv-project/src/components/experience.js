import React, { Component } from 'react'
import '../styles/experience.css'

class Experience extends Component {

    constructor(props){
        super(props);
        this.state = {
            experienceList: [{
            cName: 'My First Company',
            position: 'Software Engineer',
            description: 'Faucibus purus in massa tempor nec feugiat nisl pretium. Proin fermentum leo vel orci. Adipiscing elit pellentesque habitant morbi tristique senectus et. Laoreet non curabitur gravida arcu ac. Dignissim cras tincidunt lobortis feugiat vivamus. ',
            startDateJob: '2019',
            endDateJob: '2023'}]
        };
        this.props.setExperience(this.state.experienceList);
    }

    handleChange = (event, index) => {
        this.setState({
            experienceList: this.state.experienceList.map((experience, i) => {
                if(i === index) {
                    return {...experience, [event.target.id]: event.target.value};
                }
                return experience;
            })
        }, () => {
            this.props.setExperience(this.state.experienceList);
        });
    };

    handleAdd = () => {
        this.setState({
            experienceList: [
                ...this.state.experienceList,
                {
                    cName: '',
                    position: '',
                    description: '',
                    startDateJob: '',
                    endDateJob: '',
                }
            ]
        }, () => {
            this.props.setExperience(this.state.experienceList);
        });
    };

    handleDelete = (index) => {
        this.setState({
            experienceList: this.state.experienceList.filter((experience, i) => i !== index)
        }, () => {
            this.props.setExperience(this.state.experienceList);
        })
    }

    render() {
        return(
                <div class = 'experienceSection'>
                    {this.state.experienceList.map((experience, index) => (
                        <div key={index} className = 'inputBox'>
                            <input type='text' placeholder = 'Company Name' value = {experience.cName} onChange = {(event) => this.handleChange(event, index)} id='cName'></input>
                            <input type='text' placeholder = 'Position' value = {experience.position} onChange = {(event) => this.handleChange(event, index)} id='position'></input>
                            <input type='text' placeholder = 'Start Date' value = {experience.startDateJob} onChange = {(event) => this.handleChange(event, index)} id='startDateJob'></input>
                            <input type='text' placeholder = 'End Date' value = {experience.endDateJob} onChange = {(event) => this.handleChange(event, index)} id='endDateJob'></input>
                            <textarea placeholder = 'Description' value = {experience.description} onChange = {(event) => this.handleChange(event, index)} id='description'></textarea>
                            <button onClick={() => this.handleDelete(index)}>Delete</button>
                        </div>
                    ))}
                    <button onClick = {this.handleAdd} class='addButton'>Add</button>
                </div>
        )
    }
}

export default Experience