import React, { Component } from 'react';
import MyData from './MyData';
import './MyForm.css';


class MyForm extends React.Component {
    constructor(props) {
       
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            birthDay: '',
            gender: '',

            photo: '',
            pdfFile: ''
        }
        this.handelSubmit = this.handelSubmit.bind(this);

    }

    firstNameHandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    lastNameHandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    birthDayHandler = (event) => {
        this.setState({
            birthDay: event.target.value
        })
    }

    genderHandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    photoHandler = (event) => {
        this.setState({
            photo: event.target.value
        })
    }

    fileHandler = (event) => {
        this.setState({
            file: event.target.value
        })
    }

    handelSubmit = (event) => {
        if (this.state.firstName && this.state.lastName &&
            this.state.birthDay && this.state.gender) {
            console.log(`User crated successfully ${this.state.firstName} ${this.state.lastName}`);
            // console.log(event);
        } else if (!this.state.firstName || !this.state.lastName ||
            !this.state.birthDay || !this.state.gender) {
            console.log('You have less data!!!')
        }

        this.setState = ({
            firstName: '',
            lastName: '',
            birthDay: '',
            gender: '',

            photo: '',
            file: ''
        })
        event.preventDefault();
    }
    render() {
        const { min, max, className } = this.props
        return (
            <div className="formContainer">
                <form onSubmit={this.handelSubmit}>
                    <label>First Name:
                        <input id="firstName" value={this.state.firstName}
                            type="text" onChange={this.firstNameHandler} />
                    </label>
                    <br></br>

                    <label>Last Name:
                        <input id="lastName" value={this.state.lastName}
                            type="text" onChange={this.lastNameHandler} />
                    </label>
                    <br></br>

                    <label for="birthday" className="birthdayLabel">Birthday:</label>
                    <input type="date" id="birthday" className={className}
                        name="birthday" value={this.state.birthDay} min={min} max={max}
                        onChange={this.birthDayHandler} />
                    <br></br>
                    <label for="gender" className="genderLabel">Gender:
                        <select onChange={this.genderHandler} defaultValue="selectValue">
                            <option defaultValue="selectValue">Select Gender</option>
                            <option vale="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>
                    <br></br>
                    <div className="buttonContainer">
                        <input type="file" id="photoFile" className="imgAvatar" onChange={this.fileHandler} accept="image/*" />
                        <label for="photoFile" className='imgLabel' >
                            <span class="material-icons">
                                add_a_photo
                            </span>
                            Photo
                        </label>
                        <input type="file" id="pdfFile" className="fileAvatar" onChange={this.fileHandler} />
                        <label for="pdfFile" className='fileLabel' >
                            <span class="material-icons">
                                picture_as_pdf
                            </span>
                            File
                        </label>
                    </div>
                    <br></br>
                    
                    <input type="submit" className='submitButton' value="Submit" />
                </form>
            </div>
        )
    }
}

export default MyForm;