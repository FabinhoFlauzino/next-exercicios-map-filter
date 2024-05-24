import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="container mt-3">
      <h1 className="text-center mb-3">Coleçoes usadas</h1>

      <div className="row">
          <div className="col-lg-3 col-sm-6 col-12">
            <div className="card mb-4 w-100">
              <div className="card-body">
                <h4 className="card-title">Coleção de carros</h4>
                <p className="card-text">
                  Coleção destinada para filtrar carros
                </p>
                <a href="/carros-do-ano" className="btn btn-success">
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}
