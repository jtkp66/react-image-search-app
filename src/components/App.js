import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        console.log(term);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;

// The onSubmit property on line 12 is not the same as the 
// onSubmit property of a normal jsx element in SearchBar.js file
// Passing in properties and callbacks we can call it whatever we like
// but it's better to name it something close to it's purpose. 
// onSubmit here is to be able to pass properties with a trick to let App
// pass down props to SearchBar
