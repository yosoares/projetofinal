import casual from '../../pages/Icon/casual.png';
import futebol from '../Icon/futebol.png';
import speed from '../../pages/Icon/speed.png';
import tennis from '../Icon/tennis.jpg';
import tennis001 from '../../image/tennis001.jpg';
import tennis002 from '../../image/tennis002.jpg';
import tennis003 from '../../image/tennis003.jpg';
import tennis004 from '../../image/tennis004.jpg';
import corre from '../Icon/corre.png';
import net from '../../image/logo-net.png';
import pro from '../../image/logo-pro.png';
import amazon from '../../image/amazon.png';
import Carouselpri from '../../Components/Carrossel/Carrossel';
import { Link } from 'react-router-dom';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Components/css/drop.css";
export default function Tennis() {
    return (
        <div>
            <div className='entrada'>
                <div className='speed'>
                    <a href='/Basquete'><img alt='basquete' src={speed}></img></a>
                    <a href='/Futebol'><img alt='futebol' src={futebol}></img></a>
                    <a href='/Volei'><img alt='casual' src={casual}></img></a>
                    <a href='/Tennis'><img alt='tennis' src={tennis}></img></a>
                </div>
                <h1>Tennis</h1>
                <Carouselpri />
                <div className='corre'>
                    <Link to='/Papo'>
                        <a href='corre'><img alt='corre' src={corre}></img></a>
                    </Link>
                </div>
            </div>
            <div className='camisafit23'>
                <div className='produto'>
                    <img alt='nike' src={tennis001}></img>
                    <h4>Raquete de tênis Wilson WR087510U2, pré-amarrada, Aggressor 112 Grip tamanho 2, preta</h4>
                    <div className="logos css">
                        <h3>Preços</h3>
                        <div className="centauro">
                            <div className="dropdown-content">
                                <a href="https://www.amazon.com.br/Wilson-WR087510U2-pr%C3%A9-amarrada-Aggressor-Agressor/dp/B09S412V31/ref=asc_df_B09S412V31/?tag=googleshopp00-20&linkCode=df0&hvadid=396163921150&hvpos=&hvnetw=g&hvrand=12916054803913104747&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001725&hvtargid=pla-1944065386206&psc=1" target='_blank'><img alt='centauro' src={amazon}></img><h4>R$329,90</h4></a>
                                <a href="https://www.netshoes.com.br/raquete-de-tenis-aggressor-112-tns-racket-3-wr087510u2-wilson-preto-D25-4700-006" target='_blank'><img alt='centauro' src={net}></img><h4>R$ 261,73</h4></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='produto'>
                <img alt='nike' src={tennis002}></img>
                <h4>Wilson Raquete de tênis recreativa juvenil US Open 19</h4>
                <div className="logos css">
                    <h3>Preços</h3>
                    <div className="centauro">
                        <div className="dropdown-content">
                            <a href='https://www.amazon.com.br/Raquete-t%C3%AAnis-Wilson-Open-Junior/dp/B07MTL4TVY/ref=asc_df_B07MTL4TVY/?tag=googleshopp00-20&linkCode=df0&hvadid=396863930333&hvpos=&hvnetw=g&hvrand=12916054803913104747&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001725&hvtargid=pla-702173526191&psc=1' target='_blank'><img alt='nike' src={amazon}></img><h4>R$225,05</h4></a>
                            <a href='https://www.netshoes.com.br/raquete-de-tenis-wilson-us-open-19-infantil-branco+verde-D25-2040-114' target='_blank'><img alt='nike' src={net}></img><h4>Esgotado</h4></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='produto'>
                <img alt='nike' src={tennis003}></img>
                <h4>Bola de Tênis Head Pro - 3B</h4>
                <div className="logos css">
                    <h3>Preços</h3>
                    <div className="centauro">
                        <div className="dropdown-content">
                            <a href='https://www.amazon.com.br/Caixa-Bola-Head-Pro-4B/dp/B07N9747VH?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A27X3BXQQUSRQO' target='_blank'><img alt='nike' src={amazon}></img><h4>R$69,90</h4></a>
                            <a href='https://www.prospin.com.br/bola-de-tenis-head-master?utm_source=google&utm_medium=cpc&utm_term=&campaignid=17825794754&adgroupid=&targetid=&adid=&rnd=11896216965007594681&gclid=CjwKCAjwge2iBhBBEiwAfXDBR6BIB2WCbxXr3SYh7yKPgy-6eCqh6k_izKQol2IaGRIvje5SQqkrSRoCH6wQAvD_BwE' target='_blank'><img alt='nike' src={pro}></img><h4>R$ 39,90</h4></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='produto'>
                <img alt='nike' src={tennis004}></img>
                <h4>Kit Elástico Extensor com 11 Itens Treino Funcional Yangfit - Preto+Amarelo</h4>
                <div className="logos css">
                    <h3>Preços</h3>
                    <div className="centauro">
                        <div className="dropdown-content">
                            <a href='https://www.amazon.com.br/BOLA-TENIS-INNI-TOURNAMENT-BOLAS/dp/B07RJXSJHW/ref=asc_df_B07RJXSJHW/?tag=googleshopp00-20&linkCode=df0&hvadid=405066876890&hvpos=&hvnetw=g&hvrand=13975104737625722508&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001725&hvtargid=pla-897582477092&psc=1' target='_blank'><img alt='shein' src={net}></img><h4>R$52,00</h4></a>
                            <a href='https://www.prospin.com.br/bola-de-tenis-inni-tournament-tubo-com-3-bolas' target='_blank'><img alt='nike' src={pro}></img><h4>R$ 62,91</h4></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}