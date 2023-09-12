import React, { useState } from 'react';
import imgPedalElite from '../img/pedal-elite.jpg';
import imgPedalLeve from '../img/pedal-leve.jpg';
import imgPedalEssencial from '../img/pedal-essencial.jpg';
import '../CSS/Home.css';
import { Link } from "react-router-dom";

export default function index() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState(''); // Estado para a opção selecionada

  // Função para lidar com a mudança de seleção
  const handleOpcaoChange = (event) => {
    setOpcaoSelecionada(event.target.value);
  };

  return (
    <main>
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
        <img className='imagem-plano-elite' src={imgPedalElite} />
        <div className='beneficios-elite'>
          <h2>Pedal Elite</h2>
          <h3>Benefícios</h3>
          <li>Benefícios Pedal Leve</li>
          <li>Transporte do segurado e Bike - limite de 150km, em caso de quebra ou acidente </li>
          <li>Instalação de suporte de parede e chão para bike</li>
          <li>Serviço de Leva e Traz, com limite de 50km, mediante agendamento prévio</li>
        </div>
      </nav>

      <h1>Selecione uma opção:</h1>
      {/* Adicione o <select> e lide com a mudança de seleção */}
      <select id="opcaoSelecionada" value={opcaoSelecionada} onChange={handleOpcaoChange}>
        <option value="opcao1">plano Essencial</option>
        <option value="opcao2">plano Leve</option>
        <option value="opcao3">plano Elite</option>
      </select>

      <p>Opção selecionada: <span id="opcaoEscolhida">{opcaoSelecionada === '' ? 'Nenhuma opção selecionada' : opcaoSelecionada}</span></p>

      <nav>
        <button className="botao-voltar">
          <Link to="/dados-bike/fotos" className='texto-voltar'>voltar</Link>
        </button>
      </nav>
      <nav>
        <button className="botao-avancar">
          <Link to="/planos/confirmacao" className='texto-avancar'>avançar</Link>
        </button>
      </nav>
    </main>
  );
}
