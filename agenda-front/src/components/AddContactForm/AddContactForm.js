import React from "react";
import "./AddContactForm.css";

export const AddContact = (props) => {
  const sendPayload = {
    name: '',
    number: '',
  }

  const handleChange = event => {
    sendPayload[event.target.id] = event.target.value;
    event.preventDefault()
  }

  const addContact = () => {
    (sendPayload.name && sendPayload.number)
    ? (async () => {
        await fetch(props.url,{
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(sendPayload)
        })
        props.afterAddFn()
      })()
    : alert('Agum campo está em branco')
  }

  return (
    <div>
      <input type="text" className="form-control" id="name" placeholder="Nome"
        value={sendPayload.contactName} onChange={handleChange}/>
      
      <input type="text" className="form-control" id="number" placeholder="Número"
        value={sendPayload.contactNumber} onChange={handleChange}/>
      <button className="btn btn-primary" id="btn-add-contact" onClick={addContact}>Add</button>
    </div>
  )
}