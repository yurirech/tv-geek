import "./App.css";
import Landing from "./pages/Landing";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Geek TV</title>
      </Helmet>
      <Landing />
    </div>
  );
}

export default App;
