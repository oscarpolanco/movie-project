import React from "react";
import { render } from "react-dom";
import MoviePage from "./MoviePage";
import "regenerator-runtime/runtime";

function App() {
  return <MoviePage />;
}

render(<App />, document.getElementById("root"));
