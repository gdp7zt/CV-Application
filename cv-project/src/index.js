import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Education from './components/education';
import Experience from './components/experience'
import General from './components/general'
import Resume from './components/resume';
import './index.css';
import GitHub from './imgs/GitHub-Mark-32px.png';

const downloadPDF = () => {
  const input = document.getElementsByClassName('resume')[0];
  input.style.width = '800px';
  html2canvas(input)
      .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();
          pdf.addImage(imgData, 'PNG', 0, 0);
          let name=document.getElementById('fName').value;
          pdf.save(`${name.replace(/\s/g, '')}Resume.pdf`);
          input.style.width='600px';
      })
}

function Main() {
  const [fName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [job, setJob] = useState('');
  const [location, setLocation] = useState('');
  const [about, setAbout] = useState('');
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  return (
    <div className='wholePage'>
      <div className='mainContainer'>
        <div className='box'>
          <h2>Personal Information</h2>
            <General setName={setName} setEmail = {setEmail} setPhone = {setPhone} setJob = {setJob} setLocation = {setLocation} setAbout = {setAbout}/>
            <h2>Experience</h2>
            <Experience setExperience = {setExperience}/>
            <h2>Education</h2>
            <Education setEducation = {setEducation}/>
        </div>
        <div className='resumeBox'>
          <div className="resume">
              <Resume fName={fName} email={email} phoneNumber={phoneNumber} job={job} location={location} about={about} education={education} experience={experience}/>
          </div>
          <button onClick={downloadPDF} className='printButton'>Download PDF</button>
        </div>
      </div>
      <div className='footer'>
            <h4>Copyright 2022 gdp7zt
                <a href="https://github.com/gdp7zt/CV-Application" target="_blank">
                    <img src={GitHub} alt="Github Logo"></img>
                </a>
            </h4>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap');
    </style>
    <Main />
  </React.StrictMode>
);
