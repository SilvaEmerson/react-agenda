import React from "react";
import { AgendaItem } from "../AgendaItem/AgendaItem";
import "./Agenda.css";

export const Agenda = (props) => (
  props.contacts.map(
    (el, ind) => <AgendaItem
      key={ind}
      name={el.name}
      number={el.number}
      url={props.url}
      afterDelete={props.actionCallback}
      afterUpdate={props.actionCallback}/>
  )
)