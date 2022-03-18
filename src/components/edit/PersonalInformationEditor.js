import React, { Component } from 'react';
import TextField from '../utils/TextField';


class PersonalInformationEditor extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

    render() { 

        return ( 
            <div className='personal-info-editor'>
                <h3>Personal Information</h3> 
                  <form id='personal-info-form' onSubmit={this.handleSubmit}>
                    <TextField label='Name' name='personalName' value={this.props.nameInput} inputChange={this.props.inputChange} />
                    <TextField label='Role' name='personalRole' value={this.props.roleInput} inputChange={this.props.inputChange} />
                    <TextField label='Address' name='personalAddress' value={this.props.addressInput} inputChange={this.props.inputChange} />
                    <TextField label='Phone' name='personalPhone' value={this.props.phoneInput} inputChange={this.props.inputChange} />
                    <TextField label='Email' name='personalEmail' value={this.props.emailInput} inputChange={this.props.inputChange} />
                    <TextField label='Linkedin' name='personalLinkedin' value={this.props.linkedinInput} inputChange={this.props.inputChange} />
                  </form>
            </div>
        );
    }
}
 
export default PersonalInformationEditor;