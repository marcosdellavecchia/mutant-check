import React from "react";
import "./App.css";
import Mutant from "./Mutant";
import Info from "./Info";

class App extends React.Component {
  state = {
    dna: " ",
  };

  handleChange = (e) => {
    this.setState({ dna: e.target.value.toUpperCase().split(" ") });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-box">
          <div className="header">
            <h1>Mutant Check App</h1>
          </div>
          <form className="form">
            <label>Ingrese una cadena de ADN</label>
            <p className="example">
              Ejemplo: AGGTGA TACTGC ATATGT AGTAGG TCCCCA CTACGT
            </p>
            <input
              type="text"
              onChange={this.handleChange}
              style={{ textTransform: "uppercase" }}
              placeholder="AGGTGA TACTGC ATATGT AGTAGG TCCCCA CTACGT"
            />
            <br />
            <Mutant dna={this.state.dna} />
            <Info initialModalState={false} />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
