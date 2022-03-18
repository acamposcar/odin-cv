import React, { Component } from 'react';


class TextField extends Component {
    render() { 

        return ( 
            <label>
                {this.props.label}
                <input type='text' name={this.props.name} value={this.props.value} onChange={this.props.inputChange}  />
            </label>
        );
    }
}   
 
export default TextField;