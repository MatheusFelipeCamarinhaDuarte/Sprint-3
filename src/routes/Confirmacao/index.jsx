import { Link } from "react-router-dom"
import '../CSS/Confirmacao.css'

export default function index() {
if (localStorage.infoUser !== null) {
    let infoUser =[] 
    infoUser = JSON.parse(localStorage.getItem("infoUser"))
    console.log(nome, cpf, telefone)
    let nome = infoUser[0]
    let cpf = infoUser[1]
    let telefone = infoUser[2]
}
    return (

    <main>
<fieldset className="form-confirm">
    <legend className="titulo-confirm">Confirme as seguintes informações</legend>
    <nav>
    <nav>   
        <div>
            <h3 className="titulo-info">Nome</h3>
            <p  className="info" id='idInfoNome'>{nome}</p>
        </div>
        <div>
            <h3 className="titulo-info">CPF</h3>
            <p  className="info" id='idInfoCPF'>{cpf}</p>
        </div>
        <div>
            <h3 className="titulo-info">Telefone</h3>
            <p  className="info" id='idInforTelefone'>{telefone}</p>
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
