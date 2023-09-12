import { Link } from "react-router-dom"
import '../CSS/Dados-bike.css'


export default function index() {
  return (
    <main>
<fieldset className="form-bike">
    <legend>Dados da Bike</legend>
        <div>
            <label for="idModelo">Modelo</label>
            <input type="text" name="Modelo" id="idModelo" placeholder="Digite seu Modelo de bike" required />

            <label for="idNSerie">Nº de Série</label>
            <input type="text" name="NSerie" id="idNSerie" placeholder="Digite seu Nº Série" required/>

            <label className="text-form" for="idValor">Valor</label>
            <input className='campo-form' type="text" name="Valor" id="idValor" placeholder="Digite seu Valor TOTAL da sua bike" required/>
        </div>
</fieldset>

<nav className="navegacao">
  <div>
    <Link  to="/dados-cliente" className="botao-voltar">
      <button className='texto-voltar'>voltar</button>
    </Link>    
  </div>
  <div>
    <Link to="/dados-bike/fotos" className="botao-avancar">
      <button  className='texto-avancar'>avançar</button>
    </Link>
  </div>
</nav>

</main>

)
}
