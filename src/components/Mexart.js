import React, {Component} from 'react';

class App extends Component {
    state ={
        mexart: {}
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const id = event.target[0].value
        const url = 'http://127.0.0.1:8000/api/users'
        fetch(url + '/' + id)
         .then(res => res.json())
         .then(data => console.log(data))

    }

    render () {
        return(
            <div>
            <h1>
            Ejemplo Mexart
            </h1>
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                placeholder="INGRESA ID"
                />
                <button>
                    Buscar
                </button>
            </form>
            </div>
        )
    }
}

export default App;