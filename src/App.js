import React from "react";
import { render } from "react-dom";
import { Global, css } from "@emotion/core";
import MoviePage from "./MoviePage/";

function App() {
  return (
    <div className="app-container">
      <Global
        styles={css`
          body {
            display: flex;
            flex-direction: column;
            min-height: 100%;
            height: auto;
            background-color: #fff;
            color: #000;
            font-display: auto;
            font-family: "Source Sans Pro", Arial, sans-serif;
            font-size: 1em;
          }
        `}
      />
      <MoviePage />
    </div>
  );
}

render(<App />, document.getElementById("root"));
