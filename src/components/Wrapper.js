import React, { Component } from 'react';
import PersonalInformationEditor from "./edit/PersonalInformationEditor";
import ExperienceEditor from "./edit/ExperienceEditor";
import PersonalInformationPreview from "./preview/PersonalInformationPreview";
import ExperiencePreview from "./preview/ExperiencePreview";




class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.handleChangePersonal = this.handleChangePersonal.bind(this);
    this.handleChangeExperience = this.handleChangeExperience.bind(this);

    this.state = {
        personal:{
            name: '',
            role: '',
            address: '',
            phone: '',
            email: '',
            linkedin: '',
        },
        company: {
            name: '',
            city: '',
            role: '',
            from: '',
            to: '',
            description: '',
        }
    };
  }

    handleChangePersonal(event) {
        this.setState(prevState => ({
            personal: {
                ...prevState.personal,
                [event.target.name]: event.target.value
            }
        }))
    }

    handleChangeExperience(event) {
        console.log(event)
        this.setState(prevState => ({
            company: {
                ...prevState.company,
                [event.target.name]: event.target.value
            }
        }))
    }


    render() { 
        const { personal, company } = this.state;

        return ( 
            <div className='wrapper'>

                <div className='editor'>
                    <h1>Editor</h1>
                    <PersonalInformationEditor 
                        nameInput={personal.name} 
                        emailInput={personal.email} 
                        addressInput={personal.address}
                        linkedinInput={personal.linkedin} 
                        phoneInput={personal.phone} 
                        roleInput={personal.role} 
                        inputChange={this.handleChangePersonal} 
                    />

                    <ExperienceEditor 
                        nameInput={company.name} 
                        cityInput={company.city} 
                        roleInput={company.role}
                        fromInput={company.from} 
                        toInput={company.to} 
                        descriptionInput={company.description} 
                        inputChange={this.handleChangeExperience} 
                    />

                </div>

                <div className='preview'>

                    <h1>Preview</h1>
                    <PersonalInformationPreview 
                        nameValue={personal.name} 
                        emailValue={personal.email} 
                        addressValue={personal.address}
                        linkedinValue={personal.linkedin} 
                        phoneValue={personal.phone} 
                        roleValue={personal.role} 
                    />

                    <ExperiencePreview
                        name={company.name} 
                        city={company.city} 
                        role={company.role}
                        from={company.from} 
                        to={company.to} 
                        description={company.description} 
                    />
                </div>
            </div>
        );
    }
}
 
export default Wrapper;