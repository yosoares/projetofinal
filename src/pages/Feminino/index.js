import casual from '../../pages/Icon/casual.png';
import futebol from '../Icon/futebol.png';
import speed from '../../pages/Icon/speed.png';
import tennis from '../Icon/tennis.jpg';
import corre from '../Icon/corre.png';
import net from '../../image/logo-net.png';
import moletom from '../Feminino/moletom.png';
import adidas from '../../image/logo-adidas.png';
import f002 from '../../image/002.png';
import sp from '../../image/logo-sp.png';
import allianz from '../../image/logo-allianz.png';
import Carouselpri from '../../Components/Carrossel/Carrossel';
import f001 from '../../image/001.png';
import shein from '../../image/logo-shein.png';
import f003 from '../../image/003.png';
import centauro from '../../image/logo-centauro.png';
import { Link } from 'react-router-dom';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Components/css/drop.css";
export default function Feminino() {
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
            <div className='camisafit23'>
                <div className='produto'>
                    <img alt='nike' src={moletom}></img>
                    <h3>BLUSA MOLETOM CAPUZ ESSENTIALS LOGO COLORBLOCK</h3>
                    <div className="logos css">
                        <h3>Preços</h3>
                        <div className="centauro">
                            <div className="dropdown-content">
                                <a href="https://www.adidas.com.br/blusa-moletom-capuz-adidas-essentials-logo-colorblock/GL1444.html" target='_blank'><img alt='centauro' src={sp}></img><h3>R$ 229,99</h3></a>
                                <a href="https://www.netshoes.com.br/moletom-adidas-capuz-essentials-logo-colorblock-feminina-azul-2FW-4108-008" target='_blank'><img alt='centauro' src={adidas}></img><h3>Esgotado</h3></a>
                                <a href="https://www.allianzparqueshop.com.br/moletom-adidas-capuz-colorblock-canguru-feminino-azul+bege-NQQ-7236-842" target='_blank'><img alt='centauro' src={allianz}></img><h3>R$ 290,99</h3></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='produto'>
                    <img alt='nike' src={f002}></img>
                    <h3>Top Fitness sem Costura Bodywear Puma com 2 Unidades - Adulto</h3>
                    <div className="logos css">
                        <h3>Preços</h3>
                        <div className="centauro">
                            <div className="dropdown-content">
                                <a href='https://www.centauro.com.br/top-fitness-sem-costura-bodywear-puma-com-2-unidades-adulto-978730.html?cor=H3&google=2&merchant=true&gclid=CjwKCAjw3ueiBhBmEiwA4BhspNfsjfgZgOeMJF32-SGnAvvL4E0yz0OiS2mN0rZNmHjH5ejSSyVJexoC-tcQAvD_BwE' target='_blank'><img alt='nike' src={centauro}></img><h3>R$ 69,00</h3></a>
                                <a href='https://www.netshoes.com.br/top-puma-nadador-sem-costura-feminino-preto-2I3-4108-006?campaign=gglepqpla&gclid=CjwKCAjw3ueiBhBmEiwA4BhspLYhrTgN8kSjhlkrPZf86bvlu0nDqzLUCsOfWwyS5JlkkjN4A6GPBBoChJ0QAvD_BwE&gclsrc=aw.ds' target='_blank'><img alt='nike' src={net}></img><h3>R$ 47,76</h3></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='produto'>
                    <img alt='nike' src={f001}></img>
                    <h3>MOLETOM JUSTO CAPUZ ZÍPER MISSION VICTORY</h3>
                    <div className="logos css">
                        <h3>Preços</h3>
                        <div className="centauro">
                            <div className="dropdown-content">
                                <a href='https://www.adidas.com.br/moletom-justo-capuz-ziper-mission-victory/IC0308.html' target='_blank'><img alt='nike' src={adidas}></img><h3>R$599,99</h3></a>
                                <a href='https://www.netshoes.com.br/moletom-justo-capuz-ziper-mission-victory-adidas-bege-FB8-6351-004?campaign=gglepqpla&sellerId=9702&gclid=CjwKCAjw3ueiBhBmEiwA4BhspCpWgSXtChdh-s3_NxMdXhN-zvZv2A2-vP7_RZkHq7AEQBn9MoAz-RoCWPsQAvD_BwE&gclsrc=aw.ds' target='_blank'><img alt='nike' src={net}></img><h3>R$ 479,76</h3></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='produto'>
                    <img alt='nike' src={f003}></img>
                    <h3>Sutiã de desporto alto suporte zíper frontal</h3>
                    <div className="logos css">
                        <h3>Preços</h3>
                        <div className="centauro">
                            <div className="dropdown-content">
                                <a href='https://br.shein.com/High-Support-Zip-Front-Sports-Bra-p-11510352-cat-2182.html?onelink=1/2j8ou108i4u9&url_from=adpla-br-pla-st2209019761777791-M_GPM&cid=19653802706&setid=&adid=&pf=GOOGLE&gclid=CjwKCAjw3ueiBhBmEiwA4BhspCAo1jXyJf69J4-ddOa-DfdWNdQ2n7NhNsIOAZh4J72SnOqkm8vDHBoC5ckQAvD_BwE://www.adidas.com.br/moletom-justo-capuz-ziper-mission-victory/IC0308.html' target='_blank'><img alt='shein' src={shein}></img><h3>R$59,99</h3></a>
                                <a href='https://https://www.amazon.com.br/Baoblaze-Esportivo-Feminino-Acolchoado-Gin%C3%A1stica/dp/B08L89VTB8/ref=asc_df_B08L89VTB8/?tag=googleshopp00-20&linkCode=df0&hvadid=515365085696&hvpos=&hvnetw=g&hvrand=16751130390032030561&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001725&hvtargid=pla-1253610333774&psc=1.netshoes.com.br/moletom-justo-capuz-ziper-mission-victory-adidas-bege-FB8-6351-004?campaign=gglepqpla&sellerId=9702&gclid=CjwKCAjw3ueiBhBmEiwA4BhspCpWgSXtChdh-s3_NxMdXhN-zvZv2A2-vP7_RZkHq7AEQBn9MoAz-RoCWPsQAvD_BwE&gclsrc=aw.ds' target='_blank'><img alt='nike' src={net}></img><h3>R$ 58,76</h3></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
