import React from 'react';
import ReactDOM from 'react-dom';
import LoadableApp from "./LoadableApp";

const rootId = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <LoadableApp />
  </React.StrictMode>,
  rootId
);

if (module.hot && process.env.NODE_ENV === "development") {
  module.hot.accept("./App", () => {
    const NextApp = require("./LoadableApp").default;
    ReactDOM.render(
      <React.StrictMode>
        <LoadableApp />
      </React.StrictMode>,
      rootId
    );
  });
}