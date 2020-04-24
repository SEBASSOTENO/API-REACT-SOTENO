import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

    constructor () {
        super();
    

    this.state = {
        users: []
    };

        axios.get('http://localhost:3001/users')
        .then( res => {
            this.setState({
                users: res.data
            })
        })
        
        .catch( error => {
            console.log (error);
        });
    }

    render () {
        return (
        <div>
            <h1>MEXART</h1>
           <ul>
                { this.state.users.map(user => 
                    <li>{user.name}</li>
                )}
           </ul>
        </div>
          );
    }
}

export default App;