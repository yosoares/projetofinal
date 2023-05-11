import casual from '../../pages/Icon/casual.png'
import futebol from '../Icon/futebol.png'
import speed from '../../pages/Icon/speed.png'
import tennis from '../Icon/tennis.jpg'
import corre from '../Icon/corre.png'
import v001 from '../../image/v001.png'
import v002 from '../../image/v002.png'
import v003 from '../../image/v003.jpg'
import amazon from '../../image/amazon.png'
import centauro from '../../image/logo-centauro.png'
import net from '../../image/logo-net.png'
import Carouselpri from '../../Components/Carrossel/Carrossel'
import { Link } from 'react-router-dom'
export default function Volei() {
    return (
        <div>
            <div className='entrada'>
                <div className='speed'>
                    <a href='/Basquete'><img alt='basquete' src={speed}></img></a>
                    <a href='/Futebol'><img alt='futebol' src={futebol}></img></a>
                    <a href='/Volei'><img alt='casual' src={casual}></img></a>
                    <a href='/Esportes'><img alt='tennis' src={tennis}></img></a>
                </div>
                <Carouselpri />
                <div className='corre'>
                    <Link to='/Papo'>
                        <a href='corre'><img alt='corre' src={corre}></img></a>
                    </Link>
                </div>
            </div>
            <div className='camisafit23'>
                <div className='produto'>
                    <img alt='nike' src={v001}></img>
                    <h4>Kit Vôlei de Praia Azul - Rede Oficial 2 Faixas + Fita de Marcação</h4>
                    <div className='logos'>
                        <div className='centauro'>
                            <a href="https://www.amazon.com.br/Kit-V%C3%B4lei-Praia-Azul-Marca%C3%A7%C3%A3o/dp/B0BS9R28NQ/ref=asc_df_B0BS9R28NQ/?tag=googleshopp00-20&linkCode=df0&hvadid=647484684673&hvpos=&hvnetw=g&hvrand=3071212264279747243&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001725&hvtargid=pla-1970645804377&psc=1" target='_blank'><img alt='centauro' src={amazon}></img><h4>R$268,85</h4></a>
                            <a href="https://www.netshoes.com.br/kit-rede-volei-evo-sports-6m--marcacao-preto-0EP-0039-006" target='_blank'><img alt='centauro' src={net}></img><h4>R$175,95</h4></a>
                        </div>
                    </div>
                </div>
                <div className='produto'>
                    <img alt='nike' src={v002}></img>
                    <h4>Bola Vôlei Praia Penalty Fun XXI - Branco+Verde</h4>
                    <div className='logos'>
                        <div className='centauro'>
                            <a href='https://www.amazon.com.br/Volei-Praia-Fun-PENALTY-Verde/dp/B08V36W63S/ref=asc_df_B08V36W63S/?tag=googleshopp00-20&linkCode=df0&hvadid=398198028705&hvpos=&hvnetw=g&hvrand=2940161471140416902&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001725&hvtargid=pla-1174219337445&psc=1' target='_blank'><img alt='nike' src={amazon}></img><h4>R$95,90</h4></a>
                            <a href='https://www.netshoes.com.br/bola-volei-praia-penalty-fun-xxi-branco+verde-D23-9561-114' target='_blank'><img alt='nike' src={net}></img><h4>R$84,90</h4></a>
                        </div>
                    </div>
                </div>
                <div className='produto'>
                    <img alt='nike' src={v003}></img>
                    <h4>Bola de Vôlei, Mikasa</h4>
                    <div className='logos'>
                        <div className='centauro'>
                            <a href='https://www.amazon.com.br/Bola-de-V%C3%B4lei-V200W-Mikasa/dp/B07NJ1FR4K/ref=asc_df_B07NJ1FR4K/?tag=googleshopp00-20&linkCode=df0&hvadid=379720604808&hvpos=&hvnetw=g&hvrand=12696423455848936643&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001725&hvtargid=pla-662864050518&psc=1' target='_blank'><img alt='nike' src={amazon}></img><h4>R$661,97</h4></a>
                            <a href='https://www.centauro.com.br/bola-de-volei-mikasa-v200w-aprovada-cbv-e-fivb-m0pes9-mktp.html' target='_blank'><img alt='nike' src={centauro}></img><h4>R$869,80</h4></a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
