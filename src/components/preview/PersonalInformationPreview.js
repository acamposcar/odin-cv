import React, { Component } from 'react';


class PersonalInformationPreview extends Component {


    render() { 
        return ( 
            <div className='personal-info-preview'>
              <h3>Personal Information</h3>
                <p>Name: {this.props.nameValue}</p> 
                <p>Role: {this.props.roleValue}</p> 
                <p>Address: {this.props.addressValue}</p> 
                <p>Phone: {this.props.phoneValue}</p> 
                <p>Email: {this.props.emailValue}</p> 
                <p>Linkedin: {this.props.linkedinValue}</p> 
            </div>
        );
    }
}
 
export default PersonalInformationPreview;