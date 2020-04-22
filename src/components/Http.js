import React, { Component } from 'react'

class App extends Component {
    state = {
        users: []
    }

    componentDidMount (){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => this.setState({ users }))
    }

    render (){
        return (
            <div><center>
             <h1>EJEMPLO FAKE API</h1>
             <h2>{ this.state.text }</h2>
             <ul>
                {this.state.users.map(user=>(
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}    
             </ul>  
                </center>
            </div>
        )
    }
}

export default App;