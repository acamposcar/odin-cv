import React, { Component } from 'react';
import PersonalInformationEditor from "./forms/PersonalInformationEditor";
import ExperienceEditor from "./forms/ExperienceEditor";
import EducationEditor from './forms/EducationEditor';
import PersonalInformationPreview from "./preview/PersonalInformationPreview";
import ExperiencePreview from "./preview/ExperiencePreview";
import EducationPreview from './preview/EducationPreview';
import uniqid from "uniqid";




class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.handleChangePersonal = this.handleChangePersonal.bind(this);
    this.handleChangeExperience = this.handleChangeExperience.bind(this);
    this.handleChangeEducation = this.handleChangeEducation.bind(this);
    this.handleSubmitExperience = this.handleSubmitExperience.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.hideComponent = this.hideComponent.bind(this);
    this.addExperience = this.addExperience.bind(this);

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
            id: uniqid(),
            name: '',
            city: '',
            role: '',
            from: '',
            to: '',
            description: '',
        },
        education: [],
        organization: {
            id: uniqid(),
            organization: '',
            city: '',
            title: '',
            from: '',
            to: '',
            description: '',
        },
        showHideEducation: false,
        showHideExperience: false,
    };
  }

    addExperience() {
        this.setState({
            experience: this.state.experience.concat(this.state.company),
        });
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
        }));
    }

    handleChangeEducation(event) {
        this.setState(prevState => ({
            organization: {
                ...prevState.organization,
                [event.target.name]: event.target.value
            }
        }));
    }


    handleSubmitExperience(event, companyID) {
        console.log(companyID);
        this.setState({
            experience: this.state.experience.map(item => (item.id === companyID ? this.state.company : item)),
            company: {
                id: uniqid(),
                name: '',
                city: '',
                role: '',
                from: '',
                to: '',
                description: '',
            },
            showHideExperience: !this.state.showHideExperience
        });
    }

    handleUpdate(companyID, text) {
        this.setState({
            experience: this.state.experience.map(item => (item.id === companyID ? this.state.company : item))
        });
    }

    handleDelete(companyID){
        this.setState({
        experience: this.state.experience.filter((company) =>{
            return company.id !== companyID;
        })});
    }

    handleEdit(companyID){
        this.setState({

            company: this.state.experience.find((company) =>{
                return company.id === companyID;
            }),
        });
        console.log(this.state.company);
    }

    hideComponent(name) {
        switch (name) {
        case "showHideExperience":
            this.setState({ showHideExperience: !this.state.showHideExperience });
            break;
        case "showHideEducation":
            this.setState({ showHideEducation: !this.state.showHideEducation });
            break;
        default:
            break;
        }
    }

    render() { 
        const { personal, company, organization, experience, education, showHideEducation, showHideExperience } = this.state;

        return ( 
            <div className='wrapper'>

                <div className='editor'>
                    <h1>Form</h1>
                    <PersonalInformationEditor 
                        nameInput={personal.name} 
                        emailInput={personal.email} 
                        addressInput={personal.address}
                        linkedinInput={personal.linkedin} 
                        phoneInput={personal.phone} 
                        roleInput={personal.role} 
                        inputChange={this.handleChangePersonal} 
                    />
                    
                    <h1>Experience</h1>

                    <ul>
                        {experience.map((company) => {
                            return (
                                <li key={company.id}> 
                                    {company.name}
                                    <button onClick={(e) => this.handleDelete(company.id, e)}>Delete</button>
                                    <button onClick={(e) => {
                                        this.handleEdit(company.id, e);
                                        this.hideComponent("showHideExperience");
                                    }}>
                                        Edit
                                    </button>
                                </li>
                            );
                        })}
                    </ul>

                    {showHideExperience 
                    ? 
                        <ExperienceEditor 
                        key={company.id}
                        id={company.id}
                        nameInput={company.name} 
                        cityInput={company.city} 
                        roleInput={company.role}
                        fromInput={company.from} 
                        toInput={company.to} 
                        descriptionInput={company.description} 
                        inputChange={this.handleChangeExperience} 
                        handleSubmit={this.handleSubmitExperience}
                        /> 
                    :
                        <button onClick={() => {
                            this.hideComponent("showHideExperience");
                            this.addExperience();
                        }}>
                            Add
                        </button>
                    }
                    


                    <h1>Education</h1>
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
                    <h1>Experience</h1>
                    {experience.map((company) => {
                        return (
                            <ExperiencePreview 
                                key={company.id}
                                name={company.name} 
                                city={company.city} 
                                role={company.role}
                                from={company.from} 
                                to={company.to} 
                                description={company.description} 
                            />
                        );
                    })}
                    <h1>Education</h1>
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