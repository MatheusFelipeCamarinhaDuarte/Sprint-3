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
