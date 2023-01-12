import React, { Component, useState, useEffect } from 'react'
import '../styles/general.css'

function General (props) {

    const [phoneNumber, setPhoneNumber] = useState('012-345-6789');
    const [job, setJob] = useState('Software Developer');
    const [fName, setFName] = useState('John Doe');
    const [email, setEmail] = useState('johndoe@gmail.com');
    const [location, setLocation] = useState('Yorktown, VA');
    const [about, setAbout] = useState('Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.');

    const handleChange = (event) => {
        switch (event.target.id) {
            case 'fName':
                setFName(event.target.value);
                break;
            case 'email':
                setEmail(event.target.value);
                break;
            case 'phoneNumber':
                setPhoneNumber(event.target.value);
                break;
            case 'job':
                setJob(event.target.value);
                break;
            case 'location':
                setLocation(event.target.value);
                break;
            case 'about':
                setAbout(event.target.value);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        props.setPhone(phoneNumber);
        props.setEmail(email);
        props.setName(fName);
        props.setJob(job);
        props.setLocation(location);
        props.setAbout(about);
    })
        return(
            <div className='inputBox'>
                <input type='text' placeholder = 'John Doe' value={fName} onChange={(event) => handleChange(event)} id='fName'></input>
                <input type='tel' placeholder='012-345-5678'value={phoneNumber} onChange={(event) => handleChange(event)} id='phoneNumber'></input>
                <input type='email' placeholder='johndoe@gmail.com'value={email} onChange={(event) => handleChange(event)} id='email'></input>
                <input type='text' placeholder='Position'value={job} onChange={(event) => handleChange(event)} id='job'></input>
                <input type='text' placeholder='Location'value={location} onChange={(event) => handleChange(event)} id='location'></input>
                <textarea placeholder='Information about you!'value={about} onChange={(event) => handleChange(event)} id='about'></textarea>
            </div>
        )
}

export default General