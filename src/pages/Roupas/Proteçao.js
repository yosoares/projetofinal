import casual from '../../pages/Icon/casual.png'
import futebol from '../Icon/futebol.png'
import speed from '../../pages/Icon/speed.png'
import tennis from '../Icon/tennis.jpg'
import corre from '../Icon/corre.png'
import p001 from '../../image/p001.jpg'
import p002 from '../../image/p002.jpg'
import p003 from '../../image/p003.png'
import net from '../../image/logo-net.png'
import centauro from '../../image/logo-centauro.png'
import bela from '../../image/logo-bela.png'
import amazon from '../../image/amazon.png';
import Carouselpri from '../../Components/Carrossel/Carrossel'
import { Link } from 'react-router-dom'
export default function Protecao() {
    return (
        <div>
            <div className='entrada'>
                <div className='speed'>
                    <a href='/Basquete'><img alt='basquete' src={speed}></img></a>
                    <a href='/Futebol'><img alt='futebol' src={futebol}></img></a>
                    <a href='/Volei'><img alt='casual' src={casual}></img></a>
                    <a href='/Esportes'><img alt='tennis' src={tennis}></img></a>
                </div>
                <div className='corre'>
                    <Link to='/Papo'>
                        <a href='corre'><img alt='corre' src={corre}></img></a>
                    </Link>
                </div>
                <Carouselpri />
                <h2 className='h2'>Proteção</h2>
            </div>
            <div className='camisafit23'>
                <div className='produto'>
                    <img alt='nike' src={p001}></img>
                    <h4>Kit Vôlei de Praia Azul - Rede Oficial 2 Faixas + Fita de Marcação</h4>
                    <div className='logos'>
                        <div className='centauro'>
                            <a href="https://www.amazon.com.br/Joelheira-Compress%C3%A3o-Esportiva-El%C3%A1stica-Bandagem/dp/B09G75KN3T/ref=asc_df_B09G75KN3T/?tag=googleshopp00-20&linkCode=df0&hvadid=402210205619&hvpos=&hvnetw=g&hvrand=15110801202955261279&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001725&hvtargid=pla-1466003381964&psc=1" target='_blank'><img alt='centauro' src={amazon}></img><h4>R$28,33</h4></a>
                            <a href="https://www.ortobela.com/produtos/joelheira-ortopedica/" target='_blank'><img alt='centauro' src={bela}></img><h4>R$83,20</h4></a>
                        </div>
                    </div>
                </div>
                <div className='produto'>
                    <img alt='nike' src={p002}></img>
                    <h4>Manguito Curto Voleibol Arrow Muvin</h4>
                    <div className='logos'>
                        <div className='centauro'>
                            <a href='https://www.amazon.com.br/Manguito-Curto-Voleibol-Muvin-Mgt-100/dp/B07FYNNL6Y/ref=asc_df_B07FYNNL6Y/?tag=googleshopp00-20&linkCode=df0&hvadid=379725570451&hvpos=&hvnetw=g&hvrand=15110801202955261279&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001725&hvtargid=pla-813326479181&psc=1' target='_blank'><img alt='nike' src={amazon}></img><h4>R$29,90</h4></a>
                            <a href='https://www.netshoes.com.br/manguito-curto-voleibol-arrow-muvin--par-volei--protecao-compressao--diversas-cores-preto-B96-0402-006' target='_blank'><img alt='nike' src={net}></img><h4>R$ 29,66</h4></a>
                        </div>
                    </div>
                </div>
                <div className='produto'>
                    <img alt='nike' src={p003}></img>
                    <h4>Bola de Vôlei, Mikasa</h4>
                    <div className='logos'>
                        <div className='centauro'>
                            <a href='https://www.amazon.com.br/Bola-de-V%C3%B4lei-V200W-Mikasa/dp/B07NJ1FR4K/ref=asc_df_B07NJ1FR4K/?tag=googleshopp00-20&linkCode=df0&hvadid=379720604808&hvpos=&hvnetw=g&hvrand=12696423455848936643&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001725&hvtargid=pla-662864050518&psc=1' target='_blank'><img alt='nike' src={amazon}></img><h4>R$661,97</h4></a>
                            <a href='https://www.centauro.com.br/bola-de-volei-mikasa-v200w-aprovada-cbv-e-fivb-m0pes9-mktp.html' target='_blank'><img alt='nike' src={centauro}></img><h4>R$869,80</h4></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
