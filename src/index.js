import { render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from "react-router-dom";
import App from "./js/App";


require('../src/css/App.css');

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    rootElement
);