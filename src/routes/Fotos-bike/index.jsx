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
<main className='fotos'>
    

<nav className='form-fotos'>
<fieldset>
    <legend className='titulo-fotos'>Fotos</legend>
    <div className='superior'>
        <nav className="quadro">
            <nav>
                <img className='img-quadro' src={Quadro} />
                {/* 100px por 80px */}
                <p>Foto do Quadro</p>
            </nav>
            <button className="botao-enviar">
                <Link className="texto-enviar">Enviar</Link>
            </button>
        </nav>

        <nav className="quadro">
            <nav>
                <img  className='img-num'src={NumSerie} />
                {/* 80px por 80px */}
                <p>Nº de série</p>
            </nav>
            <button className="botao-enviar">
                <Link className="texto-enviar">Enviar</Link>
            </button>
        </nav>

        <nav className="quadro">
            <nav>
                <img  className='img-roda-tras' src={RodaTras} />
                {/* 60px por 72px */}
                <p>Roda traseira</p>
            </nav>
            <button className="botao-enviar">
                <Link className="texto-enviar">Enviar</Link>
            </button>
        </nav>

        <nav className="quadro">
            <nav>
                <img  className='img-roda-frente' src={RodaFrente} />
                {/* 60px por 72px */}
                <p>Roda frontal</p>
            </nav>
            <button className="botao-enviar">
                <Link className="texto-enviar">Enviar</Link>
            </button>
        </nav>
    </div>
<div className='inferior'>
        <nav className="quadro">
            <nav>
                <img className='img-frente-tras' src={FrontalTraseira} />
                {/* 70px por 72px */}
                <p>Foto frontal</p>
            </nav>
            <button className="botao-enviar">
                <Link className="texto-enviar">Enviar</Link>
            </button>
        </nav>

        <nav className="quadro">
            <nav>
                <img  className='img-lateral' src={Lateral} />
                {/* 100px por 72px */}
                <p>Foto Lateral</p>
            </nav>
            <button className="botao-enviar">
                <Link className="texto-enviar">Enviar</Link>
            </button>
        </nav>

        <nav className="quadro">
            <nav>
                <img  className='img-frente-tras' src={FrontalTraseira} />
                {/* 70px por 72px */}
                <p>Foto Traseira</p>
            </nav>
            <button className="botao-enviar">
                <Link className="texto-enviar">Enviar</Link>
            </button>
        </nav>

        <nav className="quadro">
            <nav>
                <img  className='img-acessorios' src={Acessorios} />
                {/* 124px por 72px */}
                <p>Acessórios</p>
            </nav>
            <button className="botao-enviar">
                <Link className="texto-enviar">Enviar</Link>
            </button>
        </nav>
        </div>
</fieldset>
</nav>  

<nav className="navegacao">
    <nav>
        <Link to="/dados-bike">
            <button className="botao-voltar">voltar</button>
        </Link>    
    </nav>

    <nav>
        <Link to="/planos">
            <button  className="botao-avancar">avançar</button>
        </Link>
    </nav>
</nav>

</main>
)
}