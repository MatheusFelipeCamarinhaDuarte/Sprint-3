import { Link } from 'react-router-dom'
import '../CSS/Fotos.css'

import Acessorios from "../img/Acessorios.jpg"
import Lateral from "../img/Foto-Lateral.jpg"
import FrontalTraseira from "../img/Frontal-traseira.png"
import NumSerie from "../img/numero-de-serie.png"
import Quadro from "../img/Quadro.jpg"
import RodaFrente from "../img/Roda-da-frente.jpg"
import RodaTras from "../img/Roda-de-tras.jpg"

export default function index() {
  return (
<main>
    
<fieldset>
    <legend>Fotos</legend>

        <div className="div-quadro">
            <div>
                <img src={Quadro} />
                {/* 100px por 80px */}
                <p>Foto do Quadro</p>
            </div>
            <div>
                <div></div>
                <div>Enviar</div>
            </div>
        </div>

        <div className="div-numSerie">
            <div>
                <img src={NumSerie} />
                {/* 80px por 80px */}
                <p>Nº de série</p>
            </div>
            <div>
                <div></div>
                <div>Enviar</div>
            </div>
        </div>

        <div className="div-rodaTras">
            <div>
                <img src={RodaTras} />
                {/* 60px por 72px */}
                <p>Roda traseira</p>
            </div>
            <div>
                <div></div>
                <div>Enviar</div>
            </div>
        </div>

        <div className="div-rodaFrente">
            <div>
                <img src={RodaFrente} />
                {/* 60px por 72px */}
                <p>Roda frontal</p>
            </div>
            <div>
                <div></div>
                <div>Enviar</div>
            </div>
        </div>

        <div className="div-frontal">
            <div>
                <img src={Frontal} />
                {/* 70px por 72px */}
                <p>Foto frontal</p>
            </div>
            <div>
                <div></div>
                <div>Enviar</div>
            </div>
        </div>

        <div className="div-lateral">
            <div>
                <img src={Lateral} />
                {/* 100px por 72px */}
                <p>Foto Lateral</p>
            </div>
            <div>
                <div></div>
                <div>Enviar</div>
            </div>
        </div>

        <div className="div-frontalTraseira">
            <div>
                <img src={FrontalTraseira} />
                {/* 70px por 72px */}
                <p>Foto Traseira</p>
            </div>
            <div>
                <div></div>
                <div>Enviar</div>
            </div>
        </div>

        <div className="div-acessorios">
            <div>
                <img src={Acessorios} />
                {/* 124px por 72px */}
                <p>Acessórios</p>
            </div>
            <button>Enviar</button>
        </div>
        
</fieldset>

<nav>
      <button className="botao-voltar">
        <Link to="/dados-bike" className='texto-voltar'>voltar</Link>
      </button>    
</nav>
<nav>
      <button className="botao-avancar">
        <Link to="/planos" className='texto-avancar'>avançar</Link>
      </button>
</nav>

</main>  )
}
