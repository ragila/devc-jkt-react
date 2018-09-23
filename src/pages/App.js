import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import BlogList from "../components/BlogList";

const link =
  "https://cdn.rawgit.com/kevinhermawan/ca5e0083648ba5ffb2421808d972dd9c/raw/c29c7ee02849b58024fb6a058acae33bde38cbd3/react-blog-example.json";

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      search: "",
      blogs: [],
      blogsFiltered: []
    };
  }

  //   componentDidMount() {
  //     setTimeout(() => {
  //       this.setState({ loading: false });
  //     }, 1000);
  //   }
  componentDidMount() {
    this.handleGetBlog();
  }

  handleTypeSearch = e => {
    // Set Value Search
    const blogsFiltered = this.state.blogs.filter(blog => {
      return (
        blog.title.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
      );
    });
    this.setState({ blogsFiltered: blogsFiltered });
  };

  handleGetBlog = () => {
    fetch(link)
      .then(res => res.json())
      .then(res =>
        this.setState({ blogs: res, blogsFiltered: res, loading: false })
      );
  };

  render() {
    if (this.state.loading) {
      return <h1>Loading Sabar....</h1>;
    }

    return (
      // <h1>loading: {JSON.stringify(this.state.loading)}</h1>;
      <div>
        <SearchBar
          search={this.state.search}
          onChangeSearch={this.handleTypeSearch}
        />
        <div style={styles.blogStyle}>
          {this.state.blogsFiltered.map((blog, index) => (
            <BlogList
              key={index}
              title={blog.title}
              content={blog.content}
              author={blog.author}
              date={blog.created_at}
            />
          ))}
        </div>
      </div>
    );
  }
}
const styles = {
  blogStyle: {
    marginRight: "30%",
    marginLeft: "30%"
  }
};

export default App;
