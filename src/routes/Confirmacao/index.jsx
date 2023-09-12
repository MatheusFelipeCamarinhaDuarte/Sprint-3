import { Link } from "react-router-dom"

export default function index() {
  return (

    <main>
<fieldset>
    <legend>Confirme as seguintes informações</legend>
    <nav>   
        <div>
            <label>Nome</label>
            <p></p>
        </div>
        <div>
            <label>CPF</label>
            <p></p>
        </div>
        <div>
            <label>Telefone</label>
            <p></p>
        </div>
    </nav>


    <nav>
        <div>
            <label>Modelo</label>
            <p></p>
        </div>
        <div>
            <label>Nº de série</label>
            <p></p>
        </div>
        <div>
            <label>Preço</label>
            <p></p>
        </div>
    </nav>


</fieldset>
<nav>
    <div>
        <button className="botao-voltar">
            <Link to="/planos" className='texto-voltar'>voltar</Link>
        </button>    
    </div>
    <div>
        <button className="botao-avancar">
            <Link to="/" className='texto-avancar'>avançar</Link>
        </button>
    </div>
</nav>

    </main>

)
}
