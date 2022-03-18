import React, { Component } from 'react';
import PersonalInformationEditor from "./edit/PersonalInformationEditor";
import ExperienceEditor from "./edit/ExperienceEditor";
import PersonalInformationPreview from "./preview/PersonalInformationPreview";




class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        personalName: '',
        personalRole: '',
        personalAddress: '',
        personalPhone: '',
        personalEmail: '',
        personalLinkedin: '',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

    render() { 
        const { personalName, personalEmail, personalAddress, personalLinkedin, personalPhone, personalRole } = this.state;

        return ( 
            <div className='wrapper'>

                <div className='editor'>
                    <h1>Editor</h1>
                    <PersonalInformationEditor 
                        nameInput={personalName} 
                        emailInput={personalEmail} 
                        addressInput={personalAddress}
                        linkedinInput={personalLinkedin} 
                        phoneInput={personalPhone} 
                        roleInput={personalRole} 
                        inputChange={this.handleChange} 
                    />

                </div>

                <div className='preview'>

                    <h1>Preview</h1>
                    <PersonalInformationPreview 
                        nameValue={personalName} 
                        emailValue={personalEmail} 
                        addressValue={personalAddress}
                        linkedinValue={personalLinkedin} 
                        phoneValue={personalPhone} 
                        roleValue={personalRole} 
                    />
                </div>
            </div>
        );
    }
}
 
export default Wrapper;