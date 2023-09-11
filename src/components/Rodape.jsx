import { Link } from "react-router-dom"
import logo from "../assets/img/cadeado.png"
import "../CSS/Rodape.css"


export default function Rodape(){

    return(
        <footer>
            <nav className="rodape">
                <div className="logo-rodape">
                    <img className="logo-img-rodape" src={logo} />
                    <li className="logo-text-rodape">PROJECT-P</li>
                </div>
                <div className="texts-rodape">
                    <Link to='/sobre'className="text-rodape">Sobre nós</Link>
                    <Link to='/'className="text-rodape">Seguros disponíveis</Link>
                </div>
            </nav>
        </footer>
    )
}