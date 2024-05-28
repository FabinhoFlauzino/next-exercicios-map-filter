'use client'

import { ColecaoCarros } from "@/data";
import { useState } from "react";

export default function CarrosDoAno() {
  const [listaCarros, setListaCarros] = useState(ColecaoCarros)

  const carrosPorAno = () => {
    let hoje = new Date();
    let anoAtual = hoje.getFullYear();
    const carrosDoAno = ColecaoCarros.filter(
      (carro) => carro.anoFabricacao == anoAtual
    );
    return carrosDoAno;
  };

  const carrosPorMarca = (marca) => {
    return setListaCarros(ColecaoCarros.filter((carro) => carro.marca.toLowerCase() === marca.toLowerCase()))
  }

  const limparFiltro = () => {
    setListaCarros(ColecaoCarros)
  }

  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center gap-3 mb-5">
        <span>Filtros:</span>
        <button className="btn btn-sm btn-outline-dark text-uppercase" onClick={() => carrosPorMarca("chevrolet")}>Chevrolet</button>
        <button className="btn btn-sm btn-outline-dark text-uppercase" onClick={() => carrosPorMarca("fiat")}>Fiat</button>
        <button className="btn btn-sm btn-outline-dark text-uppercase" onClick={() => carrosPorMarca("ford")}>Ford</button>
        <button className="btn btn-sm btn-outline-dark text-uppercase" onClick={() => carrosPorMarca("renault")}>Renault</button>
        <button className="btn btn-sm text-uppercase text-danger" onClick={() => limparFiltro()}>X Limpar Filtro</button>
      </div>
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="text-center">Confira nossos carros</h1>
        </div>
        {listaCarros.map((carro, index) => {
          return (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="card mb-4" style={{ minHeight: '450px' }}>
                <img
                  src={carro.imagem}
                  className="card-img-top"
                  alt={`${carro.modelo} - ${carro.marca}`}
                  style={{
                    height: "250px",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                <div className="card-body d-flex flex-column align-items-baseline justify-content-between">
                  <div>
                    <h4 className="card-title">{carro.modelo}</h4>
                    <p className="card-text">
                      O{" "}
                      <strong>
                        {carro.marca} {carro.modelo} {carro.anoFabricacao}
                      </strong>{" "}
                      é um carro versátil e com bom desempenho, fazendo ser mais
                      vendido da categoria.
                    </p>
                  </div>
                  <a href="#" className="btn btn-success">
                    Saiba mais
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
