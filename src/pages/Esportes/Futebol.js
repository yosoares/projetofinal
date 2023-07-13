import casual from '../../pages/Icon/casual.png'
import futebol from '../Icon/futebol.png'
import speed from '../../pages/Icon/speed.png'
import tennis from '../Icon/tennis.jpg'
import corre from '../Icon/corre.png'
import f001 from '../../image/F001.png'
import f002 from '../../image/F002.png'
import f003 from '../../image/F003.png'
import mizu from '../../image/logo-mizu.png';
import nike from '../../image/logo-nike.jpg';
import adidas from '../../image/logo-adidas.png';
import net from '../../image/logo-net.png';
import centauro from '../../image/logo-centauro.png';
import Carouselpri from '../../Components/Carrossel/Carrossel';
import { Link } from 'react-router-dom';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Components/css/drop.css";
export default function Futebol() {
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
            </div>
            <div className='camisafit23'>
                <div className='produto'>
                    <img alt='nike' src={f001}></img>
                    <h4>Chuteira Nike Mercurial Zoom Vapor 15 Elite Campo</h4>
                    <div className='logos css'>
                        <h4>Preços</h4>
                        <div className="centauro">
                            <div className="dropdown-content css">
                                <a href="https://www.nike.com.br/chuteira-nike-zoom-vapor-15-elite-campo-024600.html?cor=15#1&u_utm_source=GP_search&u_utm_medium=Cpc&u_utm_campaign=DSA&u_utm_content=Todo_Site&u_utm_referrer=https%3A%2F%2Fwww.google.com%2F&u_gclid=CjwKCAjwge2iBhBBEiwAfXDBR2BeDoRc47cuegOsivn-1usEv7fDFhMHFnWmTE90QChJstGqB9nPvxoComsQAvD_BwE" target='_blank'><img alt='centauro' src={nike}></img><h4>R$ 2299,99</h4></a>
                                <a href="https://www.centauro.com.br/chuteira-nike-zoom-vapor-15-elite-campo-m0w1rr-mktp.html" target='_blank'><img alt='centauro' src={centauro}></img><h4>R$ 2299,99</h4></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='produto'>
                    <img alt='nike' src={f002}></img>
                    <h4>Chuteira de Campo Masculina Mizuno Alpha Japan</h4>
                    <div className='logos css'>
                        <h4>Preços</h4>
                        <div className="centauro">
                            <div className="dropdown-content css">
                                <a href='https://www.mizuno.com.br/chuteira-de-campo-masculina-mizuno-alpha-japan-102100003-1-030/p?idsku=31092&utm_source=google&utm_campaign=googlepla&utm_medium=shopping&gclid=CjwKCAjwge2iBhBBEiwAfXDBR-37yESi_GGJM_vQFOfpTe2K7wie47QzStD2MMfWL6LW5Zmic4HRfhoCARkQAvD_BwE' target='_blank'><img alt='nike' src={mizu}></img><h4>R$ 2299,99</h4></a>
                                <a href='https://www.centauro.com.br/chuteira-de-campo-masculina-mizuno-alpha-japan---mizuno-m0x49v-mktp.htmlhttps://www.centauro.com.br/chuteira-de-campo-masculina-mizuno-alpha-japan---mizuno-m0x49v-mktp.html' target='_blank'><img alt='nike' src={centauro}></img><h4>R$ 2299,99</h4></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='produto'>
                    <img alt='nike' src={f003}></img>
                    <h4>Chuteira Copa Pure+ Campo Adidas - Laranja+Brancoa</h4>
                    <div className='logos css'>
                        <h4>Preços</h4>
                        <div className="centauro">
                            <div className="dropdown-content css">
                                <a href='https://www.adidas.com.br/chuteira-copa-pure-campo/HQ8894.html' target='_blank'><img alt='nike' src={adidas}></img><h4>R$661,97</h4></a>
                                <a href='https://www.netshoes.com.br/chuteira-copa-pure-campo-adidas-laranja+branco-FB8-6525-388' target='_blank'><img alt='nike' src={net}></img><h4>R$869,80</h4></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
