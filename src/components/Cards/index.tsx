import "./style.css"

export default function Cards(props: { id: number; icone: string; cor: string; titulo: string; descricao: string; tecnologias: string[]; link: string }) {
  return (
    <div className="card">
      <div className="card-banner-1">
        <img src={props.icone} alt="" />
      </div>
      <div className="card-titulo">
        <h2>{props.titulo}</h2>
      </div>
      <div className="card-texto">
        <p>{props.descricao}</p>
      </div>
      <div className="card-tags">
        <div className="tag">{props.tecnologias}</div>
        <div className="tag">{props.tecnologias}</div>
        <div className="tag">{props.tecnologias}</div>
      </div>
        <div className="card-link">
        <a href="#">{props.link}</a>
      </div>
    </div>
  )
}