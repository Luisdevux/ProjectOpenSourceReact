import "./style.css"

export default function Footer() {
    return (
      <footer>
          <div className="footer-conteudo">
              <p className="p1">Código aberto (do inglês Open Source) é o <a href="https://pt.wikipedia.org/wiki/C%C3%B3digo-fonte" target="_blank">código-fonte</a> que é disponibilizado gratuitamente para consulta, examinação, modificação e redistribuição. Os produtos incluem permissão para usar o <a href="https://pt.wikipedia.org/wiki/C%C3%B3digo-fonte" target="_blank">código-fonte</a>, documentos de design ou conteúdo do produto.</p>
              <p className="p2">Fonte:<a className="text-link-footer" href="https://pt.wikipedia.org/wiki/Código_aberto" target="_blank">https://pt.wikipedia.org/wiki/Código_aberto</a></p>
              <p className="p3">Software livre é o <a href="https://pt.wikipedia.org/wiki/Software" target="_blank">software</a> que concede <a href="https://pt.wikipedia.org/wiki/Liberdade" target="_blank">liberdade</a> ao usuário para executar, acessar e modificar o <a href="https://pt.wikipedia.org/wiki/C%C3%B3digo-fonte" target="_blank">código fonte</a>, e redistribuir cópias com ou sem modificações. Sua definição é estabelecida pela <a href="https://pt.wikipedia.org/wiki/Free_Software_Foundation" target="_blank">Free Software Foundation</a> em conjunto com o projeto <a href="https://pt.wikipedia.org/wiki/GNU" target="_blank">GNU</a>.</p>
              <p className="p4">Fonte:<a className="text-link-footer" href="https://pt.wikipedia.org/wiki/Software_livre" target="_blank">https://pt.wikipedia.org/wiki/Software_livre</a></p>
          </div>
          <div className="footer-img">
              <img src="/ifro.svg" alt="" />
              <img src="/fslab.svg" alt="" />
          </div>
      </footer>
    )
}