import React, { Component } from 'react';
import TextField from '../utils/TextField';


class ExperienceEditor extends Component {
  constructor(props) {
    super(props);
  }

    render() { 

        return ( 
            <div className='experience-editor'>
                  <form id='personal-info-form' onSubmit={(event) => {
                      event.preventDefault();
                      this.props.handleSubmit(event, this.props.id);
                      }}>
                    <TextField label='Company' name='name' value={this.props.nameInput} inputChange={this.props.inputChange} />
                    <TextField label='City' name='city' value={this.props.cityInput} inputChange={this.props.inputChange} />
                    <TextField label='Role' name='role' value={this.props.roleInput} inputChange={this.props.inputChange} />
                    <TextField label='From' name='from' value={this.props.fromInput} inputChange={this.props.inputChange} />
                    <TextField label='To' name='to' value={this.props.toInput} inputChange={this.props.inputChange} />
                    <TextField label='Description' name='description' value={this.props.descriptionInput} inputChange={this.props.inputChange} />
                    <input type="submit" value="Save" />
                  </form>
            </div>
        );
    }
}
 
export default ExperienceEditor;