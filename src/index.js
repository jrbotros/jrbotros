import "index.scss";

import React from "react";
import ReactDOM from "react-dom";

import { Logo } from "./Logo";
import { Resume } from "./Resume";

const Main = () => {
  return (
    <React.Fragment>
      <header>
        <Logo />
      </header>
      <div>
        <Resume />
      </div>
    </React.Fragment>
  );
};

ReactDOM.render(<Main />, document.getElementById("main"));
