import { faker } from "@faker-js/faker";
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetails";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" />
      <CommentDetail author="Alex" />
      <CommentDetail author="Nancy" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
