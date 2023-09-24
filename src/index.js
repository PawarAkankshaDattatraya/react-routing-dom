
import ReactDOM from "react-dom/client";

import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import Home from "./views/home/Home";

function App() {
  const path = window.location.pathname;

  if (path=='/') {
      return <Home />;
  }
  else if (path =='/About'){
      return <About />;
  }
  else if (path=='/Contact'){
      return <Contact />;
  }
 else
 {
      return <h1>444</h1>;
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {" "}
    <App />{" "}
  </>
);