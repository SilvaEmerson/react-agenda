import React from "react";
import { AgendaItem } from "../AgendaItem/AgendaItem";

export const Agenda = (props) => (
  props.contacts.map(
    el => <AgendaItem
      key={el.id}
      name={el.name}
      number={el.number}
      url={props.url}
      afterDelete={props.actionCallback}/>
  )
)