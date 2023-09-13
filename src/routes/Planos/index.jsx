import { useState } from 'react'
import imgPedalElite from '../img/pedal-elite.jpg'
import imgPedalLeve from '../img/pedal-leve.jpg'
import imgPedalEssencial from '../img/pedal-essencial.jpg'
import '../CSS/Home.css'
import { Link } from "react-router-dom"

function escolhePlano(){
  let inputPlano = document.getElementById("opcaoSelecionada")
  let plano = inputPlano.value
  localStorage.setItem("plano", JSON.stringify (plano))
}

export default function index() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(''); // Estado para a opção selecionada

  // Função para lidar com a mudança de seleção
  const handleOpcaoChange = (event) => {
    setOpcaoSelecionada(event.target.value);
  };


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
        <h2>Pedal Leve</h2>
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
    <h2>Pedal Elite</h2>
    <h3>Benefícios</h3>
    <li>Benefícios Pedal Leve</li>
    <li>Transporte do segurado e Bike - limite de 150km, em caso de quebra ou acidente </li>
    <li>Instalação de suporte de parede e chão para bike</li>
    <li>Serviço de Leva e Traz, com limite de 50km, mediante agendamento prévio</li>
    </div>
</nav>

<h1 className='titulo-plano'>Selecione uma opção:</h1>
      {/* adicione o <select> e lide com a mudança de selecao */}
      <select id="opcaoSelecionada" value={opcaoSelecionada} onChange={handleOpcaoChange}>
        <option value="Plano Essencial">Plano Essencial</option>
        <option value="Plano Leve">Plano Leve</option>
        <option value="Plano Elite">Plano Elite</option>
      </select>

<nav className="navegacao">
  <div>
    <Link to="/dados-bike/fotos">
        <button className="botao-voltar">voltar</button>
    </Link>    
  </div>
  <div>
    <Link to="/planos/confirmacao" >
      <button onClick={escolhePlano} className="botao-avancar">avançar</button>
    </Link>
  </div>
</nav>

</main>
)
}
