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
                    <TextField label='Name' name='name' value={this.props.nameInput} inputChange={this.props.inputChange} />
                    <TextField label='Role' name='role' value={this.props.roleInput} inputChange={this.props.inputChange} />
                    <TextField label='Address' name='address' value={this.props.addressInput} inputChange={this.props.inputChange} />
                    <TextField label='Phone' name='phone' value={this.props.phoneInput} inputChange={this.props.inputChange} />
                    <TextField label='Email' name='email' value={this.props.emailInput} inputChange={this.props.inputChange} />
                    <TextField label='Linkedin' name='linkedin' value={this.props.linkedinInput} inputChange={this.props.inputChange} />
                  </form>
            </div>
        );
    }
}
 
export default PersonalInformationEditor;