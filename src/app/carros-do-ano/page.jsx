import { ColecaoCarros } from "@/data";

export default function CarrosDoAno() {
  const carrosPorAno = () => {
    let hoje = new Date();
    let anoAtual = hoje.getFullYear();
    const carrosDoAno = ColecaoCarros.filter(
      (carro) => carro.anoFabricacao == anoAtual
    );
    return carrosDoAno;
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 mb-3">
          <h1 className="text-center">Confira nossos carros</h1>
        </div>
        {ColecaoCarros.map((carro) => {
          return (
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card mb-4">
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
                <div className="card-body">
                  <h4 className="card-title">{carro.modelo}</h4>
                  <p className="card-text">
                    O{" "}
                    <strong>
                      {carro.marca} {carro.modelo} {carro.anoFabricacao}
                    </strong>{" "}
                    é um carro versátil e com bom desempenho, fazendo ser mais
                    vendido da categoria.
                  </p>
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
