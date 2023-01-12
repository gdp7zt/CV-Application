import React, { Component, useState, useEffect } from 'react'
import uniqueIdGenerator from 'unique-id-generator';
import uniqueId from 'unique-id-generator';
import '../styles/education.css';

function Education (props) {

    const [educationList, setEducationList] = useState([{
        id: uniqueIdGenerator(),
        schoolName: 'Missouri University of Science and Technology',
        degree: 'B.S. Mathematics',
        startDate: '2018',
        endDate: '2021',
        description: 'Elementum facilisis leo vel fringilla est ullamcorper. At elementum eu facilisis sed odio. A cras semper auctor neque vitae tempus quam pellentesque.'}])
    
    const handleChange = (event, index) => {
        setEducationList(educationList.map((education,i) => {
            if(i === index) {
                return {...education, [event.target.id]: event.target.value};
            }
            return education;
        }));
    }

    useEffect(() => {
            props.setEducation(educationList);
    }, [educationList,props]);

    const handleAdd = () => {
        setEducationList(
            [...educationList,
                {
                    id: uniqueIdGenerator(),
                    schoolName: '',
                    degree: '',
                    startDate: '',
                    endDate: '',
                    description: ''
                }
            ]
        );
    };

    const handleDelete = (index) => {
        setEducationList(
            educationList.filter((education, i) => i !== index)
        )
    }

    return(
        <div className = 'educationSection'>
            {educationList.map((education, index) => (
                <div key={education.id} className = 'inputBox'>
                    <input type='text' placeholder = 'School Name' value = {education.schoolName} onChange = {(event) => handleChange(event, index)} id='schoolName'></input>
                    <input type='text' placeholder = 'Degree/qualification' value = {education.degree} onChange = {(event) => handleChange(event, index)} id='degree'></input>
                    <input type='text' placeholder = 'Start' value = {education.startDate} onChange = {(event) => handleChange(event, index)} id='startDate'></input>
                    <input type='text' placeholder = 'End' value = {education.endDate} onChange = {(event) => handleChange(event, index)} id='endDate'></input>
                    <textarea placeholder = 'Description' value = {education.description} onChange = {(event) => handleChange(event, index)} id='description'></textarea>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
            ))}
            <button onClick = {handleAdd} className='addButton'>Add</button>
        </div>
    )
}

export default Education;