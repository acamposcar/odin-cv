import React, { Component } from 'react';
import TextField from '../utils/TextField';


class ExperienceEditor extends Component {
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
                    <TextField label='Company' name='experienceCompany' value={this.props.companyInput} inputChange={this.props.inputChange} />
                    <TextField label='City' name='experienceCity' value={this.props.cityInput} inputChange={this.props.inputChange} />
                    <TextField label='Role' name='experienceRole' value={this.props.roleInput} inputChange={this.props.inputChange} />
                    <TextField label='From' name='experienceFrom' value={this.props.fromInput} inputChange={this.props.inputChange} />
                    <TextField label='To' name='experienceTo' value={this.props.toInput} inputChange={this.props.inputChange} />
                    <TextField label='Description' name='experienceDescription' value={this.props.descriptionInput} inputChange={this.props.inputChange} />
                  </form>
            </div>
        );
    }
}
 
export default ExperienceEditor;