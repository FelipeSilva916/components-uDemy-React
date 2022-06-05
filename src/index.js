import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comments">
        <a href="/" className="avatar">
          <img alt="avatar"></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata">
            <span className="date">Today at 6 pm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
