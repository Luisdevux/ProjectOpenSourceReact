import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { dados } from "./components/dados.ts";
import Search from "./components/Search/index.tsx";

export default function App() {
  return (
    <div>
      <Header />
      <Search />
      <main className="card-container">
        {dados.map(d => (
          <Cards 
            key = {d.id}
            id={d.id}
            titulo={d.titulo}
            descricao={d.descricao}
            icone={d.icone}
            cor={d.cor}
            tecnologias={d.tecnologias}
            link={d.link}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}