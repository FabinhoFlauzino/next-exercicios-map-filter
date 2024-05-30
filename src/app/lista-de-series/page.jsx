'use client'
import { ColecaoSeries } from "@/data";
import { useState } from "react";

export default function ListaSeries() {
  const [series, setSeries] = useState(ColecaoSeries);
  const [textoBusca, setTextoBusca] = useState("");

  const handleBuscarFilme = (textoDigitado) => {
    const buscarFilme = ColecaoSeries.filter((serie) => {
      return serie.nome.toLowerCase().includes(textoDigitado.toLowerCase())
    })

    setTextoBusca(textoDigitado)
    setSeries(buscarFilme)
  }


  return (
    <div className="container pt-5">
      <h1 className="text-center">Lista de séries</h1>

      <div className="row justify-content-center">
        <div className="col-md-6 col-12">
          <div className="card">
            <div className="card-body">
              <input className="form-control mb-3" type="text" value={textoBusca} placeholder="Buscar Série"
                onChange={(e) => handleBuscarFilme(e.target.value)}
              />
              <ul class="list-group">
                {series.map((serie, index) => {
                  return (
                    <li class="list-group-item d-flex justify-content-between align-items-center fw-bold" key={index}>
                      {serie.nome}
                      <span class="badge text-bg-primary rounded-pill">{serie.ano}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}