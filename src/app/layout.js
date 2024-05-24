import "./globals.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css"

export const metadata = {
  title: "Exercícios de React - Coleção de Dados",
  description: "Exercícios propsostos para fixar a a manipulação de coleção de dados no React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-bt">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
