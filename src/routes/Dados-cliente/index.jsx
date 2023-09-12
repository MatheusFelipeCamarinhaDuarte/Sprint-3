import { Link } from "react-router-dom"


export default function index() {

  return (
    <main>
<fieldset>
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

    <nav>
      <button className="botao-voltar">
        <Link to="/" className='texto-voltar'>voltar</Link>
      </button>    
    </nav>
    <nav>
      <button className="botao-avancar">
        <Link to="/dados-bike" className='texto-avancar'>avançar</Link>
      </button>
    </nav>

    </main>
)
}
