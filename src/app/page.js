import { Questoes } from "@/data";
import styles from "./page.module.css";
import Card from "./components/Card";

export default function Home() {
  return (
    <main className="container mt-3">
      <h1 className="text-center mb-3">Coleçoes usadas</h1>

      <div className="row">
        {Questoes.map((questao) => {
          return (
            <Card
              key={questao.id}
              nome={questao.nome}
              resumo={questao.resumo}
              page={questao.page}
            />
          )
        })}
      </div>
    </main>
  );
}
