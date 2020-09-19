import React from "react";
import "./App.css";
import Mutant from "./Mutant";

class App extends React.Component {
  state = {
    dna: "[]",
  };

  handleChange = (e) => {
    this.setState({ dna: e.target.value.toUpperCase().split(" ") });
  };

  preventSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="header">
            <h1>Mutant Check</h1>
          </div>
          <form className="form">
            <label>Ingrese cadena de ADN</label>
            <input
              type="text"
              onChange={this.handleChange}
              style={{ textTransform: "uppercase" }}
              placeholder="AGGTGA TACTGC ATATGT AGTAGG TCCCCA CTACGT"
            />
            <br />
            <Mutant dna={this.state.dna} />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
