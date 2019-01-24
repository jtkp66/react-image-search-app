import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 0f2b92c71f0cb44bf0bf96da2119494dad1af7ec05c1a5a88ade01359162ea13'
            }
        });
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


// 0f2b92c71f0cb44bf0bf96da2119494dad1af7ec05c1a5a88ade01359162ea13

// secret key
// 593b0089e94ec748874e75b5687dd10a5174836228a20fc7999e40baad6fba1f