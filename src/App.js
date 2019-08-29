import React, { Component } from "react";
import axios from 'axios';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends Component {
  state = {
    pokemons: []
  }
  componentDidMount() {
    const url = 'https://pokeapi.co/api/v2/ability/';
    axios.get(url).then(response => response.data.results)
      .then((results) => {
        this.setState({ pokemons: results })
        console.log(results)
      })
  }

  render() {
    return (
      <div>
        <Container>
          <h1>Pokemon List</h1>
          
              <Row>
              { 
                this.state.pokemons.map((pokemon) => (
                  <Col sm="6">{pokemon.name}</Col>
                ))
              }
              </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
