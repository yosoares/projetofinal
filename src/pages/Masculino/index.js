import casual from '../../pages/Icon/casual.png'
import futebol from '../Icon/futebol.png'
import speed from '../../pages/Icon/speed.png'
import tennis from '../Icon/tennis.jpg'
import corre from '../Icon/corre.png'
import h001 from '../../image/h001.png'
import h002 from '../../image/h002.png'
import h003 from '../../image/h003.png'
import h004 from '../../image/h004.png'
import puma from '../../image/logo-puma.jpg'
import net from '../../image/logo-net.png'
import centauro from '../../image/logo-centauro.png'
import adidas from '../../image/logo-adidas.png'
import amazon from '../../image/amazon.png'
import Carouselpri from '../../Components/Carrossel/Carrossel'
import { Link } from 'react-router-dom'
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Components/css/drop.css";
export default function Masculino() {
    return (
        <div>
            <div className='entrada'>
                <div className='speed'>
                    <a href='/Basquete'><img alt='basquete' src={speed}></img></a>
                    <a href='/Futebol'><img alt='futebol' src={futebol}></img></a>
                    <a href='/Volei'><img alt='casual' src={casual}></img></a>
                    <a href='/Tennis'><img alt='tennis' src={tennis}></img></a>
                </div>
            </div>
            < Carouselpri />
            <div className='corre'>
                <Link to='/Papo'>
                    <a href='corre'><img alt='corre' src={corre}></img></a>
                </Link>
            </div>
            <h1>Masculino</h1>
            <div className='camisafit23'>
                <div className='produto'>
                    <img alt='nike' src={h001}></img>
                    <h4>Bermuda Adidas 3S Masculina - Preto</h4>
                    <div className="logos css">
                        <h3>Preços</h3>
                        <div className="centauro">
                            <div className="dropdown-content">
                                <a href="https://www.netshoes.com.br/bermuda-adidas-3s-masculina-preto-2FW-5549-006" target='_blank'><img alt='centauro' src={net}></img><h4>R$ 89,99</h4></a>
                                <a href="https://www.centauro.com.br/bermuda-masculina-adidas-m-3s-961886.html?cor=31&google=2&merchant=true&gclid=CjwKCAjw3ueiBhBmEiwA4BhspKUpheAxegZ8LXhUeyqcIXw65IIk4b5TRU9lKZi12Gg97r3vOzk34hoCx3UQAvD_BwE" target='_blank'><img alt='centauro' src={centauro}></img><h4>R$ 84,99</h4></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='produto'>
                    <img alt='nike' src={h002}></img>
                    <h4>CALÇA JOGGER PWRFLEECE TRAINING MASCULINA</h4>
                    <div className="logos css">
                        <h3>Preços</h3>
                        <div className="centauro">
                            <div className="dropdown-content">
                                <a href='https://br.puma.com/calca-jogger-train-all-day-pwrfleece-training-masculina-522342-01.html?tamanho=egg' target='_blank'><img alt='nike' src={puma}></img><h4>R$ 69,00</h4></a>
                                <a href='https://www.netshoes.com.br/calca-puma-train-all-day-jogger-preta-preto-2I3-7610-006?campaign=gglepqpla&sellerId=5402&gclid=CjwKCAjw3ueiBhBmEiwA4BhspJOdSzOL76W2qxWgC3vxMtQRst_VpOw-oZ9rep4a_7lIbfb0eM26ZRoCgyYQAvD_BwE&gclsrc=aw.ds'><img alt='nike' src={net}></img><h4>R$ 47,76</h4></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='produto'>
                    <img alt='nike' src={h003}></img>
                    <h4>MOLETOM JUSTO CAPUZ ZÍPER MISSION VICTORY</h4>
                    <div className="logos css">
                        <h3>Preços</h3>
                        <div className="centauro">
                            <div className="dropdown-content">
                                <a href='https://www.adidas.com.br/moletom-justo-capuz-ziper-mission-victory/IC0308.html' target='_blank'><img alt='nike' src={adidas}></img><h4>R$599,99</h4></a>
                                <a href='https://www.netshoes.com.br/moletom-justo-capuz-ziper-mission-victory-adidas-bege-FB8-6351-004?campaign=gglepqpla&sellerId=9702&gclid=CjwKCAjw3ueiBhBmEiwA4BhspCpWgSXtChdh-s3_NxMdXhN-zvZv2A2-vP7_RZkHq7AEQBn9MoAz-RoCWPsQAvD_BwE&gclsrc=aw.ds' target='_blank'><img alt='nike' src={net}></img><h4>R$ 479,76</h4></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='produto'>
                    <img alt='nike' src={h004}></img>
                    <h4>Tênis Jordan Nike Air 10 Retrô </h4>
                    <div className="logos css">
                        <h3>Preços</h3>
                        <div className="centauro">
                            <div className="dropdown-content">
                                <a href='https://www.amazon.com.br/T%C3%AAnis-Jordan-infantil-Nike-Retr%C3%B4/dp/B07FX2ZV8S' target='_blank'><img alt='shein' src={amazon}></img><h4>R$59,99</h4></a>
                                <a href='https://https://www.amazon.com.br/Baoblaze-Esportivo-Feminino-Acolchoado-Gin%C3%A1stica/dp/B08L89VTB8/ref=asc_df_B08L89VTB8/?tag=googleshopp00-20&linkCode=df0&hvadid=515365085696&hvpos=&hvnetw=g&hvrand=16751130390032030561&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001725&hvtargid=pla-1253610333774&psc=1.netshoes.com.br/moletom-justo-capuz-ziper-mission-victory-adidas-bege-FB8-6351-004?campaign=gglepqpla&sellerId=9702&gclid=CjwKCAjw3ueiBhBmEiwA4BhspCpWgSXtChdh-s3_NxMdXhN-zvZv2A2-vP7_RZkHq7AEQBn9MoAz-RoCWPsQAvD_BwE&gclsrc=aw.ds' target='_blank'><img alt='nike' src={net}></img><h4>R$ 58,76</h4></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
