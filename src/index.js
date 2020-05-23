import "lib/normalize.css";
import "lib/skeleton.css";
import "index.scss";

import React from "react";
import ReactDOM from "react-dom";
import Vivus from "vivus";

import { Resume } from "./Resume";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Resume />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("main"));

new Vivus(
  "logo",
  {
    type: "delayed",
    duration: 200,
    animTimingFunction: Vivus.EASE,
    onReady: function (myVivus) {
      myVivus.el.style.visibility = "inherit";
    },
  },
  () => {
    document.querySelector(".icon-github").classList.add("show");
  }
);
