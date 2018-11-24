import React, { Component } from 'react';
import "./App.css"
import { Agenda } from "./components/Agenda/Agenda";
import { Navbar } from "./components/Navbar/Navbar";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: [],
      url: 'http://localhost:3000/contacts/'
    }

    this.getContacts = this.getContacts.bind(this)
    this.filterContacts = this.filterContacts.bind(this)
  }

  componentWillMount(){
    this.getContacts()
  }

  filterContacts(string) {
    let filtredContacts = this.state.contacts;

    if (string !== '') {
      filtredContacts = this.state.contacts
        .filter(contact => contact.name.toLowerCase().includes(string)
          || (contact.number).toString().toLowerCase().includes(string));
    }

    this.setState({ contacts: filtredContacts, searchString: string });
  }

  getContacts = () => {
    fetch(this.state.url)
      .then(res => res.json())
      .then(data => {
        this.setState({contacts: data})
        console.log(this.state.data)
        console.log(this.state.contacts)
      })
  }

  render() {
    return (
      <div className="App">
        <Navbar filterFn={ this.filterContacts }/>
        <div className="container mt-10">
          <button type="button" className="btn btn-success">Adicionar contato</button>
          <Agenda contacts={this.state.contacts} />
        </div>
      </div>
    )
  }
}

export default App;
