import { Link } from "react-router-dom";
import '../CSS/Menu.css'
import logo from '../assets/img/cadeado.png'

export default function Menu(){
    
    return(
        <header>
            <nav className="cabecalho">
                <div className="logo">
                    
                    <img className="logo-img" src={logo}/>
                    <li className="logo-text">PROJECT-P</li>
                </div>
                <div className="texts">
                    <Link to="/sobre" className="text">Sobre nós</Link>
                    <Link to="/" className="text">Seguros disponíveis</Link>
                </div>
            </nav>
        </header>
    )


}