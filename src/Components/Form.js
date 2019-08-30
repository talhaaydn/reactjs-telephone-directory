import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
    state = {
        name: '',
        phone: ''
    };

    static propTypes = {
        addContact: PropTypes.func
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.addContact({
            ...this.state
        });

        this.clearState();        
    }

    clearState = () => {
        this.setState({
            name: '',
            phone: ''
        })
    }

    render() {
        return (
            <form className="ui form" onSubmit={this.onSubmit} style={{ marginTop: '10px' }}>
                <div className="field">
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name"
                        value={this.state.name}
                        onChange={this.onChange}
                        placeholder="Enter a name" />
                </div>
                <div className="field">
                    <label>Phone</label>
                    <input 
                        type="text" 
                        name="phone" 
                        id="phone"
                        value={this.state.phone}
                        onChange={this.onChange}
                        placeholder="Enter a phone" />
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        );
    }
}

export default Form;