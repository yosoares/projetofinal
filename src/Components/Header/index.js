import { Link } from 'react-router-dom';
import './estilo.css';
import icon from './icon.png';

export default function Header() {
    return (
        <div className='containersp'>
            <div className='icon'>
                <Link to='/'>
                    <a href='icon'><img alt='icon' src={icon}></img></a>
                </Link>
                <div className='css'>
                    <a>Cadastro</a>
                    <div className='dropdown-content'>
                        <Link to='./Vendas'>Cliente</Link>
                        <Link to='./PessoaF'>Pessoa Física</Link>
                        <Link to='./'>Pessoa Jurídica</Link>
                        <Link to='./Manipulacao'> Dados </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}