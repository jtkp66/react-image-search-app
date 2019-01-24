import React from 'react';
import SearchBar from './SearchBar';
import keys from '../config/keys';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await keys.get('/search/photos', {
            params: { query: term },
        });

        this.setState({ images: response.data.results });
        console.log(response.data.results);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
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