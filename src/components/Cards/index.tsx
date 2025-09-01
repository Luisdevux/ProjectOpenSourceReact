import "./style.css"

export default function Cards(props: { id: number; icone: string; cor: string; titulo: string; descricao: string; tecnologias: string[]; link: string }) {
  return (
    <div className="card">
      <div className="card-banner" style={{ backgroundColor: props.cor }}>
        <img src={props.icone} alt="" />
      </div>
      <div className="card-titulo">
        <h2>{props.titulo}</h2>
      </div>
      <div className="card-texto">
        <p>{props.descricao}</p>
      </div>
      <div className="card-tags">
        {props.tecnologias.map((tech, index) => (
          <div key={index} className="tag">{tech}</div>
        ))}
      </div>
        <div className="card-link">
        <a href={`#${props.link}`}>Saiba Mais</a>
      </div>
    </div>
  )
}