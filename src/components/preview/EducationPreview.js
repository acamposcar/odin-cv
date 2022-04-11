import React, { Component } from 'react';


class EducationPreview extends Component {


    render() { 
        return ( 
            <div className='education-preview'>
                <p>Organization: {this.props.organization}</p> 
                <p>City: {this.props.city}</p> 
                <p>Title: {this.props.title}</p> 
                <p>From: {this.props.from}</p> 
                <p>To: {this.props.to}</p> 
                <p>Description: {this.props.description}</p> 
            </div>
        );
    }
}
 
export default EducationPreview;