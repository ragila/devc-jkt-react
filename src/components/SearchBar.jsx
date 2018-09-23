import React, { Component } from "react";

const SearchBar = props => {
  return (
    <div>
      <input
        type="text"
        placeholder="Seach Here.."
        value={props.search}
        onChange={props.onChangeSearch}
      />
    </div>
  );
};

export default SearchBar;
