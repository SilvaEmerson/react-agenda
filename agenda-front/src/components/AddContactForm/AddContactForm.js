import React from "react";

export const AddContact = (props) => {
  const sendPayload = {
    name: '',
    number: '',
  }

  const handleChange = event => {
    sendPayload[event.target.id] = event.target.value;
  }

  const addContact = () => {
    (sendPayload.name && sendPayload.number)
    ? fetch(window.location.href + 'contacts/',{
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(sendPayload)
      })
        .then(res => props.afterAddFn())
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