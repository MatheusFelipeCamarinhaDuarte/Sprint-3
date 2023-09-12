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
    
<fieldset className='form-fotos'>
    <legend className='titulo-fotos'>Fotos</legend>

        <div className="quadro">
            <div>
                <img className='img-quadro' src={Quadro} />
                {/* 100px por 80px */}
                <p>Foto do Quadro</p>
            </div>
            <div>
                <div></div>
                <div>Enviar</div>
            </div>
        </div>

        <div className="quadro">
            <div>
                <img  className='img-num'src={NumSerie} />
                {/* 80px por 80px */}
                <p>Nº de série</p>
            </div>
            <div>
                <div></div>
                <div>Enviar</div>
            </div>
        </div>

        <div className="quadro">
            <div>
                <img  className='img-roda-tras' src={RodaTras} />
                {/* 60px por 72px */}
                <p>Roda traseira</p>
            </div>
            <div>
                <div></div>
                <div>Enviar</div>
            </div>
        </div>

        <div className="quadro">
            <div>
                <img  className='img-roda-frente' src={RodaFrente} />
                {/* 60px por 72px */}
                <p>Roda frontal</p>
            </div>
            <div>
                <div></div>
                <div>Enviar</div>
            </div>
        </div>

        <div className="quadro">
            <div>
                <img className='img-frente-tras' src={FrontalTraseira} />
                {/* 70px por 72px */}
                <p>Foto frontal</p>
            </div>
            <div>
                <div></div>
                <div>Enviar</div>
            </div>
        </div>

        <div className="quadro">
            <div>
                <img  className='img-lateral' src={Lateral} />
                {/* 100px por 72px */}
                <p>Foto Lateral</p>
            </div>
            <div>
                <div></div>
                <div>Enviar</div>
            </div>
        </div>

        <div className="quadro">
            <div>
                <img  className='img-frente-tras' src={FrontalTraseira} />
                {/* 70px por 72px */}
                <p>Foto Traseira</p>
            </div>
            <div>
                <div></div>
                <div>Enviar</div>
            </div>
        </div>

        <div className="quadro">
            <div>
                <img  className='img-acessorios' src={Acessorios} />
                {/* 124px por 72px */}
                <p>Acessórios</p>
            </div>
            <button className="botao-enviar">
                <Link to="" className="texto-enviar">Enviar</Link>
            </button>
        </div>
        
</fieldset>

<nav className="navegacao">
    <div>
        <Link to="/dados-bike" className="botao-voltar">
            <button className='texto-voltar'>voltar</button>
        </Link>    
    </div>

    <div>
        <Link to="/planos" className="botao-avancar">
            <button  className='texto-avancar'>avançar</button>
        </Link>
    </div>
</nav>

</main>
)
}
