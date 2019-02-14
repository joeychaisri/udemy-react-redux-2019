import React from 'react';
import SearchBar from './SearchBar'
import axios from 'axios'


class App extends React.Component {

    state = { images : [] };
    
    onSearchSubmit = async term => {
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params: {query: term },
            headers:{
                Authorization: 'Client-ID 2e6c1d33029d9fd7b2c7f96c9f87b20c8e3279b5619c9ec9728cf26cb892d014'
            }
        });
        console.log(this)
        this.setState({ images: response.data.results});
        
    }

    

render(){
    return(
        <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            Found: {this.state.images.length} images
        </div>
        );
    };
}

export default App;
