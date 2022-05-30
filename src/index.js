import ReactDOM from "react-dom";

import App from "./../src/components/App";

import "./assets/reset.css";
import "./assets/styles.css";

const rootElement = document.querySelector(".root");
ReactDOM.render(<App />, rootElement);