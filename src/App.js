import React from "react";

import HomePages from "./pages/homepages/homepages.components";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HomePages />
      </div>
    );
  }
}

export default App;
