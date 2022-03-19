import React, { Component } from 'react';
import PersonalInformationEditor from "./edit/PersonalInformationEditor";
import ExperienceEditor from "./edit/ExperienceEditor";
import EducationEditor from './edit/EducationEditor';
import PersonalInformationPreview from "./preview/PersonalInformationPreview";
import ExperiencePreview from "./preview/ExperiencePreview";
import EducationPreview from './preview/EducationPreview';




class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.handleChangePersonal = this.handleChangePersonal.bind(this);
    this.handleChangeExperience = this.handleChangeExperience.bind(this);
    this.handleChangeEducation = this.handleChangeEducation.bind(this);

    this.state = {
        personal:{
            name: '',
            role: '',
            address: '',
            phone: '',
            email: '',
            linkedin: '',
        },
        experience: [],
        company: {
            name: '',
            city: '',
            role: '',
            from: '',
            to: '',
            description: '',
        },
        education: [],
        organization: {
            organization: '',
            city: '',
            title: '',
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
        this.setState(prevState => ({
            company: {
                ...prevState.company,
                [event.target.name]: event.target.value
            },
            experience: this.state.experience.concat(this.state.company)
        }))
    }

    handleChangeEducation(event) {
        this.setState(prevState => ({
            organization: {
                ...prevState.organization,
                [event.target.name]: event.target.value
            }
        }))
    }


    render() { 
        const { personal, company, organization, experience, education } = this.state;

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

                    <EducationEditor 
                        organizationInput={organization.organization} 
                        cityInput={organization.city} 
                        titleInput={organization.title}
                        fromInput={organization.from} 
                        toInput={organization.to} 
                        descriptionInput={organization.description} 
                        inputChange={this.handleChangeEducation} 
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

                    {experience.map((company) => {
                        return (
                            <ExperiencePreview
                                name={company.name} 
                                city={company.city} 
                                role={company.role}
                                from={company.from} 
                                to={company.to} 
                                description={company.description} 
                            />
                        );
                    })}

                    <EducationPreview
                        organization={organization.organization} 
                        city={organization.city} 
                        title={organization.title}
                        from={organization.from} 
                        to={organization.to} 
                        description={organization.description} 
                    />
                </div>
            </div>
        );
    }
}
 
export default Wrapper;