import React from "react";

export const Navbar = (props) => (
  <nav className="navbar fixed-top navbar-expand-sm navbar-primary bg-primary">
    <div className="navbar-brand col-1">
      Contacts
    </div>

    <div className="form-group justify-content-center row col-10 my-2">
        <input
            className="form-control col-9 mr-2"
            onChange={(ev) => {
              props.filterFn(ev.target.value)
              ev.preventDefault()
            }}
            type="search"
            placeholder="Search"
            aria-label="Search"
        />
    </div>
  </nav>
)