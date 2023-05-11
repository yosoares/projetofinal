import casual from '../../pages/Icon/casual.png'
import futebol from '../Icon/futebol.png'
import speed from '../../pages/Icon/speed.png'
import tennis from '../Icon/tennis.jpg'
import corre from './corre.png'
import { Link } from 'react-router-dom'
import Carouselpri from '../../Components/Carrossel/Carrossel'
import whey from '../../image/wheypromo.png'

export default function Icon() {
    return (
        <div>
            <div className='entrada'>
                <div className='speed'>
                    <a href='/Basquete'><img alt='basquete' src={speed}></img></a>
                    <a href='/Futebol'><img alt='futebol' src={futebol}></img></a>
                    <a href='/Volei'><img alt='casual' src={casual}></img></a>
                    <a href='/Esportes'><img alt='tennis' src={tennis}></img></a>
                </div>
                <div className='tuts'>
                    <Carouselpri />
                </div>
                <div className='corre'>
                    <Link to='/Papo'>
                        <a href='corre'><img alt='corre' src={corre}></img></a>
                    </Link>
                </div>
                <div className='banner'>
                    <a href='WheyNeutro'><img src={whey}></img></a>
                </div>
            </div >

        </div >
    )
}
