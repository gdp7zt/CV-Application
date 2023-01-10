import React, { Component } from 'react'
import '../styles/education.css';


class Education extends Component {

    constructor(props){
        super(props);
        this.state = {
            educationList: [{
            schoolName: 'Missouri University of Science and Technology',
            degree: 'B.S. Mathematics',
            startDate: '2018',
            endDate: '2021',
            description: 'Elementum facilisis leo vel fringilla est ullamcorper. At elementum eu facilisis sed odio. A cras semper auctor neque vitae tempus quam pellentesque.'}]
        };
        this.props.setEducation(this.state.educationList);
    }

    handleChange = (event, index) => {
        this.setState({
            educationList: this.state.educationList.map((education, i) => {
                if(i === index) {
                    return {...education, [event.target.id]: event.target.value};
                }
                return education;
            })
        }, () => {
            this.props.setEducation(this.state.educationList);
        });
    };

    handleAdd = () => {
        this.setState({
            educationList: [
                ...this.state.educationList,
                {
                    schoolName: '',
                    degree: '',
                    startDate: '',
                    endDate: '',
                    description: '',
                }
            ]
        });
    };

    handleDelete = (index) => {
        this.setState({
            educationList: this.state.educationList.filter((education, i) => i !== index)
        })
    }

    render() {
        return(
                <div class = 'educationSection'>
                    {this.state.educationList.map((education, index) => (
                        <div key={index} className = 'inputBox'>
                            <input type='text' placeholder = 'School Name' value = {education.schoolName} onChange = {(event) => this.handleChange(event, index)} id='schoolName'></input>
                            <input type='text' placeholder = 'Degree/qualification' value = {education.degree} onChange = {(event) => this.handleChange(event, index)} id='degree'></input>
                            <input type='text' placeholder = 'Start' value = {education.startDate} onChange = {(event) => this.handleChange(event, index)} id='startDate'></input>
                            <input type='text' placeholder = 'End' value = {education.endDate} onChange = {(event) => this.handleChange(event, index)} id='endDate'></input>
                            <textarea placeholder = 'Description' value = {education.description} onChange = {(event) => this.handleChange(event, index)} id='description'></textarea>
                            <button onClick={() => this.handleDelete(index)}>Delete</button>
                        </div>
                    ))}
                    <button onClick = {this.handleAdd} class='addButton'>Add</button>
                </div>
        )
    }
}

export default Education