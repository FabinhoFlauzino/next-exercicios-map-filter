import Link from "next/link";

export default function Header() {
  return (
    <header className="header navbar navbar-expand-lg bg-light shadow-sm shadow-dark-mode-none">
      <div className="container px-3">
        <a href="/" className="navbar-brand pe-3">
          Coleção React
        </a>
      </div>
    </header>
  );
}
