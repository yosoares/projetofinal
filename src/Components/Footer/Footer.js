import face from '../../image/face.png'
import insta from '../../image/insta.png'
export default function Footer() {
    return (
        <div>
            <div className='face'>
                <a href='https://pt-br.facebook.com/'><img src={face}></img></a>
            </div>
            <div className='insta'>
                <a href='https://www.instagram.com/yo.soares/?hl=af'><img src={insta}></img></a>
            </div>
            <div className='contato'>
                <h2>Entre em contato: 14 99900-000 oi0</h2>
            </div>
        </div>
    )
}