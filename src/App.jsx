import "./App.css";
import Header from "./components/Header";
import Listings from "./components/Listings";
import "../src/components/fonts/fonts.css"

function App() {

  return (
    <div className="App">
      <div className="padding">
        <Header></Header>
        <br></br>
        <Listings/>
      </div>
    </div>
  );
}

export default App;
