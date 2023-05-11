import nikecamiseta from '../../image/camisa_nike.png'
import styles from './contact.css'
import centauro from '../../image/logo-centauro.png'
import nike from '../../image/logo-nike.jpg'

export default function Vendas() {
    return (
        <div>
            <h1>Vendas Digitais</h1>
            <section className={styles.vendas}>
                {/* Lista de compras */}
            </section>
            <div className='camisafit23'>
                <div className='produto'>
                    <img alt='nike' src={nikecamiseta}></img>
                    <div className='logos'>
                        <div className='centauro'>
                            <a href="https://www.centauro.com.br/camiseta-nike-dri-fit-academy-23-masculina-m0w772-mktp.html"><img alt='centauro' src={centauro}></img></a>
                            <p><a href="https://www.centauro.com.br/camiseta-nike-dri-fit-academy-23-masculina-m0w772-mktp.html">R$99.90</a>
                            </p>
                        </div>
                        <div className='nike'>
                            <a href="https://www.nike.com.br/camiseta-nike-dri-fit-academy-23-masculina-025194.html?cor=1E&gclid=Cj0KCQjw0tKiBhC6ARIsAAOXutmF_ny75RFX_N8Hlw0VgNt0Vnb3-i61df4e7WUSlcTv_Hu9zsUBlkgaAmV-EALw_wcB"><img alt='centauro' src={nike}></img></a>
                            <p><a href="https://www.nike.com.br/camiseta-nike-dri-fit-academy-23-masculina-025194.html?cor=1E&gclid=Cj0KCQjw0tKiBhC6ARIsAAOXutmF_ny75RFX_N8Hlw0VgNt0Vnb3-i61df4e7WUSlcTv_Hu9zsUBlkgaAmV-EALw_wcB">R$99.90</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}