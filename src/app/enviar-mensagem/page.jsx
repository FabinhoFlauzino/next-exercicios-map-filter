'use client'

import { useState } from "react";

export default function EnviarMensagem() {
  const [mensagem, setMensagem] = useState("");
  const [exibirBotao, setExibirBotao] = useState(false);

  const handleMensagem = (textoDigitado) => {
    setMensagem(textoDigitado);
    textoDigitado.length > 10 && setExibirBotao(true);
  };

  const enviarMensagem = () => {
    alert(`Mensagem enviada: ${mensagem}`);
    setMensagem("");
    setExibirBotao(false);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Enviando Mensagens</h1>
      <div className="row justify-content-center">
        <div className="col-md-3 col-12">
          <div className="card">
            <div className="card-body">
              <div className="">
                <input
                  className="form-control"
                  value={mensagem}
                  onChange={(event) => handleMensagem(event.target.value)}
                  placeholder="Digite sua mensagem..."
                />
                {exibirBotao && <button className="btn btn-success mt-3" onClick={enviarMensagem}>Enviar</button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}