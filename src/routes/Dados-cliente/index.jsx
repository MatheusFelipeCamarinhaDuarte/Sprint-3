import { Link } from "react-router-dom"


export default function index() {

  return (
<main>
<fieldset className="form-cliente">
    <legend className="titulo-cliente">Seus dados</legend>
    <nav className="formulario">
        <div>
            <label className="text-form" for="idNome">Nome</label>
            <input className='campo-form' type="text" name="nome" id="idNome" placeholder="Digite seu nome" required />
        </div>
        <div>
            <label className="text-form" for="idCPF">CPF</label>
            <input className='campo-form'  type="text" name="CPF" id="idCPF" placeholder="Digite seu CPF" required/>
        </div>
        <div>
            <label className="text-form" for="idValor">Valor</label>
            <input className='campo-form' type="text" name="Valor" id="idValor" placeholder="Digite seu Valor TOTAL da sua bike" required/>
        </div>
    </nav>
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
