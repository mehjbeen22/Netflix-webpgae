import ReactDOM from "react-dom/client";
import Home from "./Home";

import "./index.css";
import Secondsection from "./Secondsection";
import Thirdsection from "./Thirdsection";
import Forthsection from "./Forthsection";
import FIfthsection from "./FIfthsection";
import Sixthsection from "./Sixthsection";
import Lastsec from "./Lastsec";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Home />
    <Secondsection />
    <Thirdsection />
    <Forthsection />
    <FIfthsection />
    <Sixthsection />
    <Lastsec />
  </div>
);
