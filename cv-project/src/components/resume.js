import React, {Component, useState, useEffect} from 'react';
import '../styles/resume.css';
import mail from '../imgs/mail-svgrepo-com.svg';
import phone from '../imgs/phone-svgrepo-com.svg';
import locations from '../imgs/location-sign-svgrepo-com.svg';

function Resume(props) {
        const {fName, email, phoneNumber, job, location, about, education, experience} = props;
        return (
            <div>
                <div className='headerContainer'>
                    <div className='headerContainerLeft'>
                        <h1 className='name'>{fName}</h1>
                        <h2 className='job'>{job}</h2>
                    </div>
                    <div className='headerContainerRight'>
                        <p><img src={mail} width='20px'></img> {email}</p>
                        <p><img src={phone} width='20px'></img>{phoneNumber}</p>
                        <p><img src={locations} width='20px'></img> {location}</p>
                    </div>
                </div>
                <div className='line'></div>
                <p className='about'>{about}</p>
                <h3 className='title'>Experience</h3>
                {experience.map((exp) => (
                    <div className='experience'key={exp.id}> 
                        <div className='experienceHeading'>
                            <h4>{exp.position}</h4>
                            <div className="nameDate">
                                {exp.cName} |
                                <p>{exp.startDateJob} -- {exp.endDateJob}</p>
                            </div>
                        </div>
                        <p>{exp.description}</p>
                    </div>
                ))}
                <h3 className='title'>Education</h3>
                {education.map((edu) => (
                    <div className='education' key={edu.id}>
                        <div className='educationHeading'>
                            <h4>{edu.degree}</h4>
                            <div className='nameDate'>
                                {edu.schoolName} |
                                <p>{edu.startDate} - {edu.endDate}</p>
                            </div>
                        </div>
                        <p>{edu.description}</p>
                    </div>
                ))}
            </div>
        );
}

export default Resume;
