import React from "react";

const BlogList = props => {
  return (
    <div style={styles.Bloglist}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p>
        {props.author} - {props.date}
      </p>
    </div>
  );
};

const styles = {
  Bloglist: {
    backgroundColor: "#F7F7F6"
  }
};

export default BlogList;
