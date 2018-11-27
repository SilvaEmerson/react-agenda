import React from "react";

export const AgendaItem = (props) => {
  const deleteContact = async () => {
    try{
      await fetch(props.url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: props.name,
          number: props.number
        })
      })
      props.afterDelete()
    }catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className="card">
      <div className="card-body">
        <h1>{props.name}</h1>
        <p>Number: {props.number}</p>
      </div>
      <button type="button" class="btn btn-danger" onClick={ deleteContact }>Excluir</button>
    </div>
  )
}