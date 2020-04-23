import React, { Component } from 'react';
import '../App.css'
import axios from 'axios';
import { List, Card } from 'antd';

class Pokeapp extends Component {
  state = {
    pokeData: [],
    img: []
  }

  componentDidMount () {
    axios.get( 'https://pokeapi.co/api/v2/pokemon' )
      .then( res => {
        const { results } = res.data;
        console.log( results );

        this.setState( {
          pokeData: results
        } )

      } )
      .catch( error => {
        console.log( error );
      } );


  }

  render () {

    const { pokeData } = this.state;
    return (

      < div >
        <h1>POKE APP.js</h1>
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
          dataSource={pokeData}
          renderItem={item => (
            <List.Item>
              <Card title={item.name}>
                {item.url}
              </Card>
            </List.Item>
          )}
        />,
        {/* <ul>
          {this.state.pokeData.map( pokeData =>
            <li key={pokeData.id}>
              {pokeData.name}
            </li>
          )}
        </ul> */}
      </div >

    );

  }
};

/** exportamos el componente presentational aquellos que solo tienen una parte pequeÃ±a que solo se 
 * ve en el navegador de html
 */
export default Pokeapp;