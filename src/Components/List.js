import React, { Component } from "react";
import PropTypes from "prop-types";

class List extends Component {
    state = {
        filterInput: ''
    };

    static propTypes = {
        contacts: PropTypes.array.isRequired
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const filterContacts = this.props.contacts.filter( contact => {
                return contact.name.toLowerCase().indexOf(
                    this.state.filterInput.toLowerCase()
                ) !== -1
            }            
        );

        return (
            <div>
                <div className="ui input fluid">
                    <input 
                        type="text" 
                        name="filterInput"
                        value={this.state.filterInput}
                        onChange={this.onChange}
                        placeholder="Search..." />
                </div>

                <div className="ui inverted segment">
                    <div className="ui inverted relaxed divided list">
                        {
                            filterContacts.map((contact, index) =>
                                <div className="item" key={index}>
                                    <div className="content">
                                        <div className="header">{contact.name}</div>
                                        {contact.phone}
                                    </div>
                                </div>
                            )
                        }
                        

                    </div>
                </div>
            </div>
        );
    }
}

export default List;