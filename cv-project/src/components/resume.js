import React, {Component} from 'react';
import '../styles/resume.css';
import mail from '../imgs/mail-svgrepo-com.svg';
import phone from '../imgs/phone-svgrepo-com.svg';
import locations from '../imgs/location-sign-svgrepo-com.svg';

class Resume extends Component {
    render() {
        const {fName, email, phoneNumber, job, location, about, education, experience} = this.props;
        return (
            <div>
                <div class='headerContainer'>
                    <div class='headerContainerLeft'>
                        <h1 class='name'>{fName}</h1>
                        <h2 class='job'>{job}</h2>
                    </div>
                    <div class='headerContainerRight'>
                        <p><img src={mail} width='20px'></img> {email}</p>
                        <p><img src={phone} width='20px'></img>{phoneNumber}</p>
                        <p><img src={locations} width='20px'></img> {location}</p>
                    </div>
                </div>
                <div class='line'></div>
                <p class='about'>{about}</p>
                <h3 class='title'>Experience</h3>
                {experience.map((exp) => (
                    <div class='experience'key={exp.cName}> 
                        <div class='experienceHeading'>
                            <h4>{exp.position}</h4>
                            <div class="nameDate">
                                {exp.cName} |
                                <p>{exp.startDateJob} -- {exp.endDateJob}</p>
                            </div>
                        </div>
                        <p>{exp.description}</p>
                    </div>
                ))}
                <h3 class='title'>Education</h3>
                {education.map((edu) => (
                    <div class='education' key={edu.schoolName}>
                        <div class='educationHeading'>
                            <h4>{edu.degree}</h4>
                            <div class='nameDate'>
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
}

export default Resume;
