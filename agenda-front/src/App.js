import React, { Component } from 'react';
import { AgendaItem } from "./components/AgendaItem/AgendaItem";
import { Navbar } from "./components/Navbar/Navbar";
import { AddContact } from "./components/AddContactForm/AddContactForm";
import "./App.css"

class App extends Component {
  constructor(props){
    super(props);

    this.contacts = []

    this.state = {
      contacts: [],
      url: `${window.location.href}contacts/`,
      isAddContact: false,
    }

    this.getContacts = this.getContacts.bind(this)
    this.filterContacts = this.filterContacts.bind(this)
  }

  componentWillMount(){
    this.getContacts()
  }

  filterContacts(string) {
    let filtredContacts = this.contacts;

    if (string !== '') {
      filtredContacts = this.state.contacts
        .filter(contact => contact.name.toLowerCase().includes(string)
          || (contact.number).toString().toLowerCase().includes(string));
    }

    this.setState({ contacts: filtredContacts, searchString: string });
  }

  getContacts = async () => {
    let data = await(await fetch(this.state.url)).json()
    this.contacts = data
    this.setState({ contacts: data, isAddContact: false  })
  }

  render() {
    return (
      <div className="App">
        <Navbar filterFn={ this.filterContacts }/>
        <div className="container mt-10">
          {(!this.state.isAddContact)
            ? <button type="button" className="btn btn-success" onClick={
                () => this.setState({isAddContact: true})
              }>Adicionar contato</button>
            : <AddContact afterAddFn={ this.getContacts } url={this.state.url}/>
          }

          {this.state.contacts.map(
            (el, ind) => <AgendaItem
              key={ind}
              name={el.name}
              number={el.number}
              url={this.state.url}
              afterDelete={this.getContacts}
              afterUpdate={this.getContacts} />
          )}
        </div>
      </div>
    )
  }
}

export default App;
