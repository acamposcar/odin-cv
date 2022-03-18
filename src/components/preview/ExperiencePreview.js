import React, { Component } from 'react';


class ExperiencePreview extends Component {


    render() { 
        return ( 
            <div className='experience-preview'>
              <h3>Experience:</h3>
                <p>Company: {this.props.name}</p> 
                <p>City: {this.props.city}</p> 
                <p>Role: {this.props.role}</p> 
                <p>From: {this.props.from}</p> 
                <p>To: {this.props.to}</p> 
                <p>Description: {this.props.description}</p> 
            </div>
        );
    }
}
 
export default ExperiencePreview;