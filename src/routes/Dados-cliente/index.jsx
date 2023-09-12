import { Link } from "react-router-dom"


export default function index() {

  return (
    <main>
<fieldset className="form-cliente">
    <legend>Seus dados</legend>
        <div>
            <label for="idNome">Nome</label>
            <input type="text" name="nome" id="idNome" placeholder="Digite seu nome" required />
        </div>
        <div>
            <label for="idCPF">CPF</label>
            <input type="text" name="CPF" id="idCPF" placeholder="Digite seu CPF" required/>
        </div>
        <div>
            <label for="idValor">Valor</label>
            <input type="text" name="Valor" id="idValor" placeholder="Digite seu Valor TOTAL da sua bike" required/>
        </div>
</fieldset>

<nav className="navegacao">
  <div>
        <Link to="/"  className="botao-voltar">
          <button className='texto-voltar'>voltar</button>
        </Link>
  </div>
  <div>
    <Link to="/dados-bike" className="botao-avancar">
      <button className='texto-avancar'>avançar</button>
    </Link>
  </div>
</nav>

    </main>
)
}
