import casual from '../../pages/Icon/casual.png'
import futebol from '../Icon/futebol.png'
import speed from '../../pages/Icon/speed.png'
import tennis from '../Icon/tennis.jpg'
import corre from '../Icon/corre.png'
import Carouselpri from '../../Components/Carrossel/Carrossel'
import { Link } from 'react-router-dom'
export default function Roupas() {
    return (
        <div>
            <div className='entrada'>
                <div className='speed'>
                    <a href='/Basquete'><img alt='basquete' src={speed}></img></a>
                    <a href='/Futebol'><img alt='futebol' src={futebol}></img></a>
                    <a href='/Volei'><img alt='casual' src={casual}></img></a>
                    <a href='/Tennis'><img alt='tennis' src={tennis}></img></a>
                </div>
                <div className='corre'>
                    <Link to='/Papo'>
                        <a href='corre'><img alt='corre' src={corre}></img></a>
                    </Link>
                </div>
                <Carouselpri />
                <h1>Roupas</h1>
            </div>
        </div>
    )
}
