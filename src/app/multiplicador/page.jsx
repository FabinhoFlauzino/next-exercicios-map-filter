'use client'

import { useState } from "react"

export default function Multiplicador() {
  const [valor, setValor] = useState(0);
  const [resultado, setResultado] = useState(0);

  const multiplicarPor4 = () => {
    const respostaMultiplicacao = valor * 4;
    setResultado(respostaMultiplicacao);
  }

  const handleInputValor = (valorDigitado) => {
    setValor(valorDigitado);
  }

  return (
    <div className="container">
      
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-lg-3">
          <div className="card">
            <div className="card-header w-100 bg-white">
              <h5 className="card-title text-center">Multiplicador por 4</h5>
            </div>
            <div className="card-body">
              <input
                className="form-control mb-3"
                type="number"
                value={valor}
                onChange={(e) => handleInputValor(e.target.value)}
                placeholder="Digite o valor"
              />
              <button className="btn btn-success mb-3" onClick={multiplicarPor4}>Multiplica por 4x</button>
              <p>Resultado: <strong>{`${resultado}`}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}