import React, { Component } from 'react'
import '../styles/general.css'

class General extends Component {

    constructor(props){
        super(props);
        this.state = {
            phoneNumber: '012-345-6789',
            job: 'Software Developer',
            fName: 'John Doe',
            email: 'johndoe@gmail.com',
            location: 'Yorktown, VA',
            about: 'Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.',
        };
        this.props.setPhone(this.state.phoneNumber);
        this.props.setEmail(this.state.email);
        this.props.setName(this.state.fName);
        this.props.setJob(this.state.job);
        this.props.setLocation(this.state.location);
        this.props.setAbout(this.state.about);
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value});

        switch (event.target.id) {
            case 'fName':
                this.props.setName(event.target.value);
                break;
            case 'email':
                this.props.setEmail(event.target.value);
                break;
            case 'phoneNumber':
                this.props.setPhone(event.target.value);
                break;
            case 'job':
                this.props.setJob(event.target.value);
                break;
            case 'location':
                this.props.setLocation(event.target.value);
                break;
            case 'about':
                this.props.setAbout(event.target.value);
                break;
            default:
                break;
        }
    }

    render() {
        return(
            <div class='inputBox'>
                <input type='text' placeholder = 'John Doe' value={this.state.fName} onChange={this.handleChange} id='fName'></input>
                <input type='tel' placeholder='012-345-5678'value={this.state.phoneNumber} onChange={this.handleChange} id='phoneNumber'></input>
                <input type='email' placeholder='johndoe@gmail.com'value={this.state.email} onChange={this.handleChange} id='email'></input>
                <input type='text' placeholder='Position'value={this.state.job} onChange={this.handleChange} id='job'></input>
                <input type='text' placeholder='Location'value={this.state.location} onChange={this.handleChange} id='location'></input>
                <textarea placeholder='Information about you!'value={this.state.about} onChange={this.handleChange} id='about'></textarea>
            </div>
        )
    }
}

export default General