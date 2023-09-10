import { Link } from "react-router-dom";
import '../CSS/Menu.css'


export default function Menu(){
    
    return(
        <nav>
            <div className="container">
                <div className="logo">
                    
                    <img className="logo-img" src="../components/cadeado.png"/>
                    <div className="logo-text">PROJECT-P</div>
                </div>
                <div className="text">Sobre nós</div>
                <div className="text">Seguros disponíveis</div>
            </div>
        </nav>
    )


}