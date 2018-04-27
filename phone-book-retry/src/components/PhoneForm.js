import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            phone: ''
        })
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}> 
                <input 
                placeholder="Name"
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
                />
                <input 
                placeholder="phone"
                value={this.state.phone}
                name="phone"
                onChange={this.handleChange}
                />
                {this.state.name} :: {this.state.phone}
                <button onSubmit={this.handleSubmit}>Submit</button>
            </form>
        )
    }
}
export default PhoneForm;