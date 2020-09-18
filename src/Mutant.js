import React from "react";

function Mutant(props) {
  //Funcion para analizar ADN Mutante
  function isMutant(dnaString) {
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
  }

  let test = isMutant(props.dna);

  return (
    <React.Fragment>
      <p>DNA Test Result:</p>
      <p>{test === true ? "MUTANTE" : "NO-MUTANTE"}</p>
      <p>ADN ingresado: {props.dna}</p>
    </React.Fragment>
  );
}

export default Mutant;
