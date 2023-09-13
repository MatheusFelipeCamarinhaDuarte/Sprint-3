import { Link } from "react-router-dom"
import '../CSS/Dados-bike.css'

function recolherDados(){
  let inputModelo = document.getElementById("idModelo");
  let modelo = inputModelo.value;
  let inputNum = document.getElementById("idNSerie");
  let num = inputNum.value;
  let inputValor = document.getElementById("idValor");
  let valor = inputValor.value;
  let infoBike = [modelo, num, valor];
  localStorage.setItem("infoBike", JSON.stringify(infoBike));
}

export default function index() {
  return (
    <main className='dados'>
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
    <Link  to="/dados-cliente" >
      <button className="botao-voltar">voltar</button>
    </Link>    
  </div>
  <div>
    <Link to="/dados-bike/fotos">
      <button onClick={recolherDados} className="botao-avancar">avançar</button>
    </Link>
  </div>
</nav>

</main>

)
}
