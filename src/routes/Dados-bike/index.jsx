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
        </div>
        <div>
            <label for="idNSerie">Nº de Série</label>
            <input type="text" name="NSerie" id="idNSerie" placeholder="Digite seu Nº Série" required/>
        </div>
        <div>
            <label for="idTelefone">Telefone</label>
            <input type="text" name="Telefone" id="idTelefone" placeholder="Digite seu telefone" required/>
        </div>
</fieldset>

<nav className="navegacao">
  <div>
    <button className="botao-voltar">
      <Link to="/dados-cliente" className='texto-voltar'>voltar</Link>
    </button>    
  </div>
  <div>
    <button className="botao-avancar">
      <Link to="/dados-bike/fotos" className='texto-avancar'>avançar</Link>
    </button>
  </div>
</nav>

</main>

)
}
