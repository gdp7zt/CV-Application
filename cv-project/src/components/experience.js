import React, { Component, useState, useEffect } from 'react'
import '../styles/experience.css'
import uniqueIdGenerator from 'unique-id-generator';

function Experience(props){

    const [experienceList, setExperienceList] = useState([{
        id: uniqueIdGenerator(),
        cName: 'My First Company',
        position: 'Software Engineer',
        description: 'Faucibus purus in massa tempor nec feugiat nisl pretium. Proin fermentum leo vel orci. Adipiscing elit pellentesque habitant morbi tristique senectus et. Laoreet non curabitur gravida arcu ac. Dignissim cras tincidunt lobortis feugiat vivamus. ',
        startDateJob: '2019',
        endDateJob: '2023'}])

    const handleChange = (event, index) => {
        setExperienceList(experienceList.map((experience, i) => {
                if(i === index) {
                    return {...experience, [event.target.id]: event.target.value};
                }
                return experience;
        }));
    };

    useEffect(() => {
        props.setExperience(experienceList);
    }, [experienceList, props]);

    const handleAdd = () => {
            setExperienceList(
            [...experienceList,
                {
                    id: uniqueIdGenerator(),
                    cName: '',
                    position: '',
                    description: '',
                    startDateJob: '',
                    endDateJob: '',
                }
            ]
        );
    };

    const handleDelete = (index) => {
        setExperienceList(
            experienceList.filter((experience, i) => i !== index)
        )
    }

        return(
                <div className = 'experienceSection'>
                    {experienceList.map((experience, index) => (
                        <div key={experience.id} className = 'inputBox'>
                            <input type='text' placeholder = 'Company Name' value = {experience.cName} onChange = {(event) => handleChange(event, index)} id='cName'></input>
                            <input type='text' placeholder = 'Position' value = {experience.position} onChange = {(event) => handleChange(event, index)} id='position'></input>
                            <input type='text' placeholder = 'Start Date' value = {experience.startDateJob} onChange = {(event) => handleChange(event, index)} id='startDateJob'></input>
                            <input type='text' placeholder = 'End Date' value = {experience.endDateJob} onChange = {(event) => handleChange(event, index)} id='endDateJob'></input>
                            <textarea placeholder = 'Description' value = {experience.description} onChange = {(event) => handleChange(event, index)} id='description'></textarea>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    ))}
                    <button onClick = {handleAdd} className='addButton'>Add</button>
                </div>
        )
    }

export default Experience