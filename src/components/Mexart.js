import React, { Component } from 'react';
import '../App.css';
import { List, Card } from 'antd';
import axios from 'axios';

class App extends Component {
    state= {
        mexaData: []
    }

    componentDidMount (){
        axios.get('http://localhost:3000/users')
        .then( res => {
            const { results } = res.data;
            console.log( results );

            this.setState({
                mexaData: results
            })
        })
        
        .catch( error => {
            console.log (error);
        });
    }

    render () {
        const { mexaData } = this.setState;
        return (
            < div >
              <h1>MEXAR-T API.js</h1>
              <List
                grid={{
                  gutter: 16,
                  xs: 1,
                  sm: 2,
                  md: 4,
                  lg: 4,
                  xl: 6,
                  xxl: 3,
                }}
                dataSource={mexaData}
                renderItem={item => (
                  <List.Item>
                    <Card title={item.id}>
                      {item.name}
                    </Card>
                  </List.Item>
                )}
              />
            </div >
      
          );
    }
}

export default App;