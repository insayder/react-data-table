import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import TableRows from './components/tables-rows'


class App extends Component {

  state = {
    persons: []    

  }

  componentDidMount() {
    axios.get(`http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`)
      .then(res => {
        const persons = res.data;
        console.log(persons)  
        this.setState({ persons });      
      })      
  }
  render() {
    return (
      
      <TableRows
      persons={this.state.persons}/>
    );
  }
}

export default App;