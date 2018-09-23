import React from "react";

const SearchBar = props => {
  return (
    <div style={styles.contentSearch}>
      <input
        style={styles.inputSearch}
        type="text"
        placeholder="Seach Here.."
        onChange={props.onChangeSearch}
      />
    </div>
  );
};

const styles = {
  inputSearch: {
    width: 500,
    height: 30,
    color: "#4f5b66"
  },
  contentSearch: {
    backgroundColor: "#0E1E25",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    display: "flex"
  }
};

export default SearchBar;
