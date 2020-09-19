import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import patronMutante from "./mutant-pattern.PNG";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: props.initialModalState,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <React.Fragment>
        <span className="info" onClick={this.toggle}>
          Ver criterio para análisis de ADN
        </span>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader>¿Cómo se verifica un ADN Mutante?</ModalHeader>
          <ModalBody>
            <p>
              Un ADN Mutante es aquel que cumple con el siguiente patrón
              coloreado de bases nitrogenadas de forma exacta:
            </p>
            <div className="img-container">
              <img
                src={patronMutante}
                alt="Estructura de bases nitrogenadas en ADN mutante."
              />
            </div>

            <p>
              Las coincidencias pueden encontrarse en cualquier lugar de la
              matriz, <strong>debiendo sumar exactamente 3</strong>. Tienen que
              estar compuestas de la siguiente manera:
              <ul className="pattern-list">
                <li>1 secuencia de 4 letras A en forma oblicua.</li>
                <li>1 secuencia de 4 letras C en forma horizontal.</li>
                <li>1 secuencia de 4 letras G en forma vertical.</li>
              </ul>
            </p>

            <p>
              El código fuente del algoritmo junto con su API para ejecutar de
              forma local se puede ver{" "}
              <a
                href="https://github.com/marcosdellavecchia/aracar-challenge"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>haciendo click acá</strong>
              </a>
              .
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Volver al sitio
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Info;
