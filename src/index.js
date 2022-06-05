import { faker } from "@faker-js/faker";
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetails";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at this time"
        commentText="Love this blog post"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at this time"
        commentText="I like this blog post"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Karen"
        timeAgo="Today at this time"
        commentText="I hate this blog post"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
