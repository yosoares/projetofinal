import casual from '../../pages/Icon/casual.png'
import futebol from '../Icon/futebol.png'
import speed from '../../pages/Icon/speed.png'
import tennis from '../Icon/tennis.jpg'
export default function Speed() {
    return (
        <div>
            <div className='entrada'>
                <div className='speed'>
                    <a href='/Basquete'><img alt='basquete' src={speed}></img></a>
                    <a href='/Futebol'><img alt='futebol' src={futebol}></img></a>
                    <a href='/Volei'><img alt='casual' src={casual}></img></a>
                    <a href='/Esportes'><img alt='tennis' src={tennis}></img></a>
                </div>
                <h1>Home</h1>
            </div>
        </div>
    )
}
