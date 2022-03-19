import React, { Component } from 'react';
import TextField from '../utils/TextField';


class EducationEditor extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

    render() { 

        return ( 
            <div className='education-editor'>
                <h3>Education</h3> 
                  <form id='personal-info-form' onSubmit={this.handleSubmit}>
                    <TextField label='Organization' name='organization' value={this.props.organizationInput} inputChange={this.props.inputChange} />
                    <TextField label='City' name='city' value={this.props.cityInput} inputChange={this.props.inputChange} />
                    <TextField label='Title' name='title' value={this.props.titleInput} inputChange={this.props.inputChange} />
                    <TextField label='From' name='from' value={this.props.fromInput} inputChange={this.props.inputChange} />
                    <TextField label='To' name='to' value={this.props.toInput} inputChange={this.props.inputChange} />
                    <TextField label='Description' name='description' value={this.props.descriptionInput} inputChange={this.props.inputChange} />
                  </form>
            </div>
        );
    }
}
 
export default EducationEditor;