import imgPedalElite from '../img/pedal-elite.jpg'
import imgPedalLeve from '../img/pedal-leve.jpg'
import imgPedalEssencial from '../img/pedal-essencial.jpg'
import '../CSS/Home.css'
import { Link } from 'react-router-dom'

export default function index() {
  return (
<main className='home'>
<nav className='planos'>
    <nav className='plano'>
        <img className='imagem-plano' src={imgPedalEssencial} />
        <h2 className='titulo-plano'>Pedal Essencial</h2>

        <div className='beneficios'>
            <h3>Benefícios</h3>
            <li>Reparo de câmaras de ar e reparo ou troca de correntes</li>
            <li>Substituição ou regulagem de selim e canote de selim, manetes de freios e cabo de aço, freio dianteiro e traseiro</li>
        </div>
    </nav>

    <nav className='plano'>
        <img className='imagem-plano' src={imgPedalLeve} />
        <h2 className='titulo-plano'>Pedal Leve</h2>
        <div className='beneficios'>
            <h3>Benefícios</h3>
            <li>Benefícios Pedal Essencial</li>
            <li>Lubrificação de correntes e coroas</li>
            <li>Transporte do segurado e Bike - limite de 50km, em caso de quebra ou acidente</li>
        </div>
    </nav>
</nav>
    <nav className='plano-elite'>
        <img className='imagem-plano-elite'src={imgPedalElite} />
        <div className='beneficios-elite'>
          <h2 className='titulo-plano'>Pedal Elite</h2>
            <h3>Benefícios</h3>
            <li>Benefícios Pedal Leve</li>
            <li>Transporte do segurado e Bike - limite de 150km, em caso de quebra ou acidente </li>
            <li>Instalação de suporte de parede e chão para bike</li>
            <li>Serviço de Leva e Traz, com limite de 50km, mediante agendamento prévio</li>
        </div>
    </nav>
    
    <nav className='vistoria'>
      <button className="botao-vistoria">
        <Link to="/dados-cliente" className='texto-vistoria'>Realizar vistoria</Link>
      </button>
    </nav>
</main>
)
}
