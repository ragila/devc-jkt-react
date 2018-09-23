import React, { Component } from "react";
import Search from "../components/SearchBar";
import SearchBar from "../components/SearchBar";

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      search: ""
    };
  }

  //   componentDidMount() {
  //     setTimeout(() => {
  //       this.setState({ loading: false });
  //     }, 1000);
  //   }

  handleTypeSearch = e => {
    // Set Value Search
    this.setState({
      search: e.target.value
    });

    console.log(e.target.value);
  };

  render() {
    return (
      // <h1>loading: {JSON.stringify(this.state.loading)}</h1>;
      <SearchBar
        search={this.state.search}
        onChangeSearch={this.handleTypeSearch}
      />
    );
  }
}

export default App;
