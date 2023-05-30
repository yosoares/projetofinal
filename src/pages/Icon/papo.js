import casual from '../../pages/Icon/casual.png'
import futebol from '../Icon/futebol.png'
import speed from '../../pages/Icon/speed.png'
import tennis from '../Icon/tennis.jpg'
import vita from '../../image/logo-vita.png'
import fuel from '../../image/logo-fuel.png'
import pura from '../../image/logo-pura.png'
import hdt from '../../image/logo-hdt.png'
import nat from '../../image/logo-natura.png'
import whey_neutro from '../../image/whey_neutro.png'
import whey_vanilla from '../../image/whey_vanilla.png'
import whey_protein from '../../image/whey_protein.png'
import './index.css';
import Carouselpri from '../../Components/Carrossel/Carrossel'
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Components/css/drop.css";


export default function Papo() {
    return (
        <div>
            <div className='entrada'>
                <div className='speed'>
                    <a href='/Basquete'><img alt='basquete' src={speed}></img></a>
                    <a href='/Futebol'><img alt='futebol' src={futebol}></img></a>
                    <a href='/Volei'><img alt='casual' src={casual}></img></a>
                    <a href='/Tennis'><img alt='tennis' src={tennis}></img></a>
                </div>
                < Carouselpri />
                <div className='corre'>
                </div>
            </div>
            <div className='camisafit23'>
                <div className='produto'><img alt='whey_neutro' src={whey_neutro}></img>
                    <h3>Tabela de Basquete Klopf Aglomerado - Branco+Preto</h3>
                    <div className="logos css">
                        <h3>Preços</h3>
                        <div className="centauro">
                            <div className="dropdown-content css">
                                <a href="https://www.puravida.com.br/vegan-protein-neutro-450g-70343" target='_blank'><img alt='centauro' src={pura}></img><h3>R$ 174,97</h3></a>
                                <a href="https://www.homemdaterra.com.br/vegan-protein-puravida-sabor-neutro-450g-74273-p6875" target='_blank'><img alt='centauro' src={hdt}></img><h3>R$ 99,90</h3></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='produto'><img alt='whey_protein' src={whey_protein}></img>
                    <h3>Whey Protein Original</h3>
                    <div className="logos css">
                        <h3>Preços</h3>
                        <div className="centauro">
                            <div className="dropdown-content css">
                                <a href="https://vitahub.com.br/produtos/whey-protein-isolado-dark-chocolate-puravida-450g/" target='_blank'><img alt='centauro' src={vita}></img><h3>R$242,47</h3></a>
                                <a href="https://www.fuelsuplementos.com.br/produto/whey-isolado-450g-pura-vida.html" target='_blank'><img alt='centauro' src={fuel}></img><h3>R$199,50</h3></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='produto'><img alt='WheyVanilla' src={whey_vanilla}></img>
                    <h3>Whey Proteina sabor Vanilla</h3>
                    <div className="logos css">
                        <h3>Preços</h3>
                        <div className="centauro">
                            <div className="dropdown-content css">
                                <a href='https://www.puravida.com.br/vegan-protein-vanilla-450g-70344' target='_blank'><img alt='centauro' src={pura}></img><h3>R$ 174,97</h3></a>
                                <a href="https://www.naturallifejf.com.br/vegan-protein-blend-de-proteinas-vegetais-vanilla" target='_blank'><img alt='centauro' src={nat}></img><h3>R$179,50</h3></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
