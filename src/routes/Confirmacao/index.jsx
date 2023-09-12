import { Link } from "react-router-dom"
import '../CSS/Confirmacao.css'

export default function index() {
  return (

    <main>
<fieldset className="form-confirm">
    <legend className="titulo-confirm">Confirme as seguintes informações</legend>
    <nav>
    <nav>   
        <div>
            <h3 className="titulo-info">Nome</h3>
            <p  className="info"></p>
        </div>
        <div>
            <h3 className="titulo-info">CPF</h3>
            <p  className="info"></p>
        </div>
        <div>
            <h3 className="titulo-info">Telefone</h3>
            <p  className="info"></p>
        </div>
    </nav>


    <nav>
        <div>
            <h3 className="titulo-info">Modelo</h3>
            <p  className="info"></p>
        </div>
        <div>
            <h3 className="titulo-info">Nº de série</h3>
            <p  className="info"></p>
        </div>
        <div>
            <h3 className="titulo-info">Preço</h3>
            <p  className="info"></p>
        </div>
    </nav>
    </nav>

</fieldset>

<nav>
    <div>
        <Link to="/planos" className="botao-voltar">
            <button  className='texto-voltar'>voltar</button>
        </Link>    
    </div>
    <div>
        <Link to="/" className="botao-avancar">
            <button  className='texto-avancar'>avançar</button>
        </Link>
    </div>
</nav>

    </main>

)
}
