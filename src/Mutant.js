import React from "react";

class Mutant extends React.Component {
  state = {
    result: null,
  };

  // Función para analizar ADN Mutante
  isMutant = (dnaString) => {
    const matchA = ["A", "A", "A", "A"];
    const matchC = ["C", "C", "C", "C"];
    const matchG = ["G", "G", "G", "G"];
    let counterA = 0;
    let counterC = 0;
    let counterG = 0;
    let dnaToAnalyse;
    let i, j, k;

    for (i = 0; i < dnaString.length; i++) {
      for (j = 0; j <= dnaString[i].length - matchC.length; j++) {
        dnaToAnalyse = [];
        for (k = 0; k < matchC.length; k++) {
          dnaToAnalyse.push(dnaString[i][j + k]);
        }
        if (dnaToAnalyse.join() === matchC.join()) {
          counterC++;
        }
      }
    }

    for (i = 0; i < dnaString[0].length; i++) {
      for (j = 0; j <= dnaString.length - matchG.length; j++) {
        dnaToAnalyse = [];
        for (k = 0; k < matchG.length; k++) {
          dnaToAnalyse.push(dnaString[j + k][i]);
        }
        if (dnaToAnalyse.join() === matchG.join()) {
          counterG++;
        }
      }
    }

    for (i = 0; i <= dnaString.length - matchA.length; i++) {
      for (j = 0; j <= dnaString[i].length - matchA.length; j++) {
        dnaToAnalyse = [];
        for (k = 0; k < matchA.length; k++) {
          dnaToAnalyse.push(dnaString[i + k][j + k]);
        }
        if (dnaToAnalyse.join() === matchA.join()) {
          counterA++;
        }
      }
    }

    for (i = 0; i <= dnaString.length - matchA.length; i++) {
      for (j = dnaString[i].length - 1; j >= 0 + matchA.length - 1; j--) {
        dnaToAnalyse = [];
        for (k = 0; k < matchA.length; k++) {
          dnaToAnalyse.push(dnaString[i + k][j - k]);
        }
        if (dnaToAnalyse.join() === matchA.join()) {
          counterA++;
        }
      }
    }

    if (counterA === 1 && counterC === 1 && counterG === 1) {
      return true;
    } else {
      return false;
    }
  };

  joinInput = (array) => {
    return array.join(" ");
  };

  // Función para verificar la validez del ADN alojado en props y pasarlo al estado
  checkDna = (e) => {
    e.preventDefault();
    // Regex para testear que no haya espacios vacíos
    if (/^\s+$|^$/gi.test(this.props.dna) === true) {
      alert("Debe ingresar una cadena de valores para analizar su ADN.");
    }
    // Regex para testear que solo se ingresen los caracteres A C G T
    else if (/^[ACGT ]+$/i.test(this.joinInput(this.props.dna)) === false) {
      alert("Sólo está permitido ingresar los caracteres A, C, G, T.");
    }
    // Si se verifican las condiciones, ejecuta la funcion y la guarda en el estado
    else {
      this.setState({ result: this.isMutant(this.props.dna) });
    }
  };

  // Función para mostrar resultado en pantalla según el valor del estado 'result'
  getResult = () => {
    if (this.state.result === false) {
      return "Resultado: NO-MUTANTE";
    }
    if (this.state.result === true) {
      return "Resultado: MUTANTE";
    }
    return "⠀";
  };

  setColors = () => {
    if (this.state.result === false) {
      return "red";
    }
    if (this.state.result === true) {
      return "green";
    }
    return "black";
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.checkDna}>Verificar ADN</button>
        <p
          className="dnaresult"
          style={{
            color: this.setColors(),
          }}
        >
          {this.getResult()}
        </p>
      </React.Fragment>
    );
  }
}

export default Mutant;
