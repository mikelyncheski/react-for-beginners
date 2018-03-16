import React from "react"; // no capital R here!
import { render } from "react-dom"; // Need this to mount to the dom
import Router from "./components/Router";
import "./css/style.css"; // Hot reloaded because of the setup

render(<Router />, document.getElementById("main"));
