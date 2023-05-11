import casual from '../../pages/Icon/casual.png'
import futebol from '../Icon/futebol.png'
import speed from '../../pages/Icon/speed.png'
import tennis from '../Icon/tennis.jpg'
import corre from '../Icon/corre.png'
import amazon from '../../image/amazon.png'
import net from '../../image/logo-net.png'
import esport01 from '../../image/esporte001.png'
import esport02 from '../../image/esporte002.png'
import esport03 from '../../image/esporte003.png'
import esport04 from '../../image/esporte004.png'
import Carouselpri from '../../Components/Carrossel/Carrossel'
import { Link } from 'react-router-dom'
export default function Esportes() {
    return (
        <div>
            <div className='entrada'>
                <div className='speed'>
                    <a href='/Basquete'><img alt='basquete' src={speed}></img></a>
                    <a href='/Futebol'><img alt='futebol' src={futebol}></img></a>
                    <a href='/Volei'><img alt='casual' src={casual}></img></a>
                    <a href='/Tennis'><img alt='tennis' src={tennis}></img></a>
                </div>
                <Carouselpri />
                <div className='corre'>
                    <Link to='/Papo'>
                        <a href='corre'><img alt='corre' src={corre}></img></a>
                    </Link>
                </div>
                <div className='links'>
                    <Link to='/Basquete'>
                        <h2>Basquete</h2>
                    </Link>
                    <Link to='/Volei'>
                        <h2>Vôlei</h2>
                    </Link>
                    <Link to='/Futebol'>
                        <h2>Futebol</h2>
                    </Link>
                    <Link to='/Tennis'>
                        <h2>Tennis</h2>
                    </Link>
                </div>
            </div>
            <div className='camisafit23'>
                <div className='produto'>
                    <img alt='nike' src={esport01}></img>
                    <h4>Kit Treino Para Futebol de Agilidade Funcional Escada - Cone - Chapeu - Corda - Mochila</h4>
                    <div className='logos'>
                        <div className='centauro'>
                            <a href="https://www.amazon.com.br/Treino-Futebol-Agilidade-Funcional-Escada/dp/B09FKMYZCW?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=ADPJ8XIB554SC" target='_blank'><img alt='centauro' src={amazon}></img><h4>R$109,90</h4></a>
                            <a href="https://www.netshoes.com.br/kit-funcional-escada-agilidade-cones-barreira-chapeu-chines-yangfit-colorido-ISQ-0280-888?campaign=gglepqpla&gclid=CjwKCAjw3ueiBhBmEiwA4BhspDFVD02_7FOn2jDgsvooJoWbt1bYPg3A806k9eXaxJuSedjf-wn-8xoCBd0QAvD_BwE&gclsrc=aw.ds" target='_blank'><img alt='centauro' src={net}></img><h4>Esgotado</h4></a>
                        </div>
                    </div>
                </div>
                <div className='produto'>
                    <img alt='nike' src={esport02}></img>
                    <h4>Kit Halteres De Barras Fitness 40cm com 12kg em Anilhas</h4>
                    <div className='logos'>
                        <div className='centauro'>
                            <a href='https://www.amazon.com.br/Halteres-Barras-Fitness-40cm-Anilhas/dp/B09RJVBRQZ/ref=asc_df_B09RJVBRQZ/?tag=googleshopp00-20&linkCode=df0&hvadid=395332364100&hvpos=&hvnetw=g&hvrand=16831596333740341678&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001725&hvtargid=pla-1644314884468&psc=1' target='_blank'><img alt='nike' src={amazon}></img><h4>R$219,17</h4></a>
                            <a href='https://www.netshoes.com.br/kit-halteres-de-anilhas-e-barras-fitness-12kg-em-anilhas-preto-DDU-0262-006?campaign=gglepqpla&gclid=CjwKCAjw3ueiBhBmEiwA4BhspP5o9L5-Q9VGdy-r0xzoUaGmGH5yHMBExp6QDD4J49aqAuZylqBlgxoCD2gQAvD_BwE&gclsrc=aw.ds' target='_blank'><img alt='nike' src={net}></img><h4>R$225,56</h4></a>
                        </div>
                    </div>
                </div>
                <div className='produto'>
                    <img alt='nike' src={esport03}></img>
                    <h4>Kit Completo Treino Boxe Rhino By Spank com Bolsa</h4>
                    <div className='logos'>
                        <div className='centauro'>
                            <a href='https://www.amazon.com.br/Completo-Treino-Rhino-Spank-Bolsa/dp/B0B8F2TTG6/ref=asc_df_B0B8F2TTG6/?tag=googleshopp00-20&linkCode=df0&hvadid=397212884285&hvpos=&hvnetw=g&hvrand=16831596333740341678&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001725&hvtargid=pla-1722158453943&psc=1' target='_blank'><img alt='nike' src={amazon}></img><h4>R$139,90</h4></a>
                            <a href='https://www.netshoes.com.br/kit-muaythai-rhino-14oz-luva-boxe--caneleira--bandagem--bucal-preto-D73-0416-006?campaign=gglepqpla&gclid=CjwKCAjw3ueiBhBmEiwA4BhspLNV7kd0aldLsonvt-1LCMbebfxBfjyB-75nb8U9zN0uR-GUzszCbhoCICoQAvD_BwE&gclsrc=aw.ds' target='_blank'><img alt='nike' src={net}></img><h4>R$129,90</h4></a>
                        </div>
                    </div>
                    <div className='produto'>
                        <img alt='nike' src={esport04}></img>
                        <h4>Kit Elástico Extensor com 11 Itens Treino Funcional Yangfit - Preto+Amarelo</h4>
                        <div className='logos'>
                            <div className='centauro'>
                                <a href='https://www.netshoes.com.br/kit-elastico-extensor-com-11-itens-treino-funcional-yangfit-preto+amarelo-ISQ-0058-178' target='_blank'><img alt='shein' src={net}></img><h4>R$68,31</h4></a>
                                <a href='https://www.amazon.com.br/Tubing-El%C3%A1stico-Treinamento-Funcional-Pilates/dp/B07NWMNKKB' target='_blank'><img alt='nike' src={amazon}></img><h4>R$ 58,76</h4></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
