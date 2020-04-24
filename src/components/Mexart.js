import React, { Component } from 'react';
import '../App.css';
import { List, Card } from 'antd';
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
        
      const { users } = this.state;
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
                dataSource={users}
                renderItem={item => (
                  <List.Item>
                    <Card title={item.name}>
                      {item.id}
                    </Card>
                  </List.Item>
                )}
              />
            </div >
      
          );
    }
}

export default App;