import React, { Component } from "react";
import "./AgendaItem.css";

export class AgendaItem extends Component {
  constructor(props){
    super(props)

    this.state = {
      isEditMode: false,
      name: props.name,
      number: props.number
    }

    this.deleteContact = this.deleteContact.bind(this)
    this.updateContact = this.updateContact.bind(this)
    this.changeName = this.changeName.bind(this)
    this.changeNumber = this.changeNumber.bind(this)
  }

  async deleteContact(){
    try{
      await fetch(this.props.url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.props.name,
          number: this.props.number
        })
      })
      this.props.afterDelete()
    }catch (err) {
      console.log(err.message)
    }
  }

  async updateContact() {
    try {
      let hasNoChange = (this.state.name === this.props.name)
        && (this.state.number === this.props.number)
      
      if (!hasNoChange) {
        await fetch(this.props.url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            new: {
              name: this.state.name,
              number: +this.state.number
            },
            old: {
              name: this.props.name,
              number: this.props.number
            }
          })
        })
        this.props.afterUpdate()
      }
    } catch (err) {
      console.log(err.message)
    }
    this.setState({ isEditMode: false })
  }


  changeName(event){
      let value = event.target.value
      this.setState({ name: value})
  }

  changeNumber(event) {
    let value = event.target.value
    this.setState({ number: value })
  }

  render(){
    return (
      <div className="card">
        {
          (this.state.isEditMode)
            ? <div className="card-body">
                <h1>
                  <input className="contact-edit-field" value={this.state.name} onChange={this.changeName}/>
                </h1>
                <p>
                  Número: <input className="contact-edit-field" value={this.state.number} onChange={this.changeNumber}/>
                </p>
                <button type="button" className="btn btn-primary" onClick={this.updateContact}>
                  OK
                </button>
              </div>
            : <div className="card-body">
                <h1>{this.props.name}</h1>
                <p>Número: {this.props.number}</p>
              </div>
        }
          <div>
            <button type="button" className="btn btn-secondary"
              onClick={() => this.setState({isEditMode : !this.state.isEditMode})}>
              {
                (this.state.isEditMode)
                  ? "Cancelar"
                  : "Editar"
              }
            </button>
          <button type="button" className="btn btn-danger" onClick={this.deleteContact}>Excluir</button>
        </div>
      </div>
    )
  }
}