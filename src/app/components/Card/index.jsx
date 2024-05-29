export default function Card({ nome, resumo, page }) {
  return (
    <div className="col-lg-3 col-sm-6 col-12">
      <div className="card mb-4 w-100" style={{ minHeight: '200px' }}>
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h4 className="card-title">{nome}</h4>
            <p className="card-text">
              {resumo}
            </p>
          </div>
          <a href={page} className="btn btn-success">
            Saiba mais
          </a>
        </div>
      </div>
    </div>
  )
}