import React from "react";
import "./SearchBox.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

// (e) => this.setState({ searchField: e.target.value });
