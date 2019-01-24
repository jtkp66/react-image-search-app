import React, { Component } from 'react'

class SearchBar extends Component {
    state = { term: '' };

    // Assign an arrow function rather than an Object to function to bind
    // Can also bind this to onSubmit in render
    // <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
