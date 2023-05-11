import { Link } from 'react-router-dom';
import './estilo.css';
import icon from './icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';

//gay, ola Laura 
export default function Header() {
    return (
        <div className='containersp'>
            <div class="sc-75f89d92-0 jzbJjU">
                <div class="navbar navbar-expand-lg navbar-grey bg-grey">
                    <div className='icon'>
                        <Link to='/'>
                            <a href='icon'><img alt='icon' src={icon}></img></a>
                        </Link>
                        <div className='css' style={{ color: "red" }}>
                            <div className='css'>
                                <a className='_kdqa' title='es'>Gêneros</a>
                                <div className='dropdown-content'>
                                    <Link to='./Feminino'>Feminino</Link>
                                    <Link to='./Masculino'>Masculino</Link>
                                </div>
                            </div>
                        </div>
                        <div className='css'>
                            <Link to='./Esportes'>+Esportes</Link>
                        </div>
                        <div className='css'>
                            <Link to='./Proteçao'>Proteção</Link>
                        </div>
                    </div>
                    <div className='css'>
                        <a className='_kdqa' title='es'>Ajuda e suporte</a>
                        <div className='dropdown-content'>
                            <Link to='/Contact'>Entre/Cadastro</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}