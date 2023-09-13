import { Link } from "react-router-dom"
import '../CSS/Confirmacao.css'

export default function index() {


      // Recupere os dados do localStorage
      const infoUser = JSON.parse(localStorage.getItem("infoUser"));
      const infoBike = JSON.parse(localStorage.getItem("infoBike"));
      const plano = JSON.parse(localStorage.getItem("plano"));
    
      // Certifique-se de verificar se os dados existem antes de usá-los para evitar erros
      if (!infoUser || !infoBike) {
        return <div>Dados não encontrados</div>;
      }
    
      const [nome, cpf, telefone] = infoUser;
      const [modelo, num, valor] = infoBike;

    return (

    <main className='confirmacao'>
<div className="form-confirm">
    <legend className="titulo-confirm">Confirme as seguintes informações</legend>
    <nav>
    <nav>   
        <h3 className="titulo-info">Nome</h3>
        <div>
            <p  className="info" id='idInfoNome'>{nome}</p>
        </div>
        <h3 className="titulo-info">CPF</h3>
        <div>
            <p  className="info" id='idInfoCPF'>{cpf}</p>
        </div>
        <h3 className="titulo-info">Telefone</h3>
        <div>
            <p  className="info" id='idInforTelefone'>{telefone}</p>
        </div>
    </nav>


    <nav>
        <div>
            <h3 className="titulo-info">Modelo</h3>
            <p  className="info">{modelo}</p>
        </div>
        <div>
            <h3 className="titulo-info">Nº de Série</h3>
            <p  className="info">{num}</p>
        </div>
        <div>
            <h3 className="titulo-info">Preço</h3>
            <p  className="info">{valor}</p>
        </div>
    </nav>

        <nav>
            <div>
                <h3 className="titulo-info">Plano</h3>
                <p className="info">{plano}</p>
            </div>
        </nav>

    </nav>

</div>

<nav className="navegacao">
    <div>
        <Link to="/planos">
            <button  className='botao-voltar'>voltar</button>
        </Link>    
    </div>
    <div>
        <Link to="/">
            <button  className='botao-avancar'>Confirmar</button>
        </Link>
    </div>
</nav>

    </main>

)
}
