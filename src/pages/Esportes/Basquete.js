import casual from "../../pages/Icon/casual.png";
import futebol from "../Icon/futebol.png";
import speed from "../../pages/Icon/speed.png";
import tennis from "../Icon/tennis.jpg";
import corre from "../Icon/corre.png";
import b001 from "../../image/b001.png";
import b002 from "../../image/b002.png";
import b003 from "../../image/b003.png";
import nba from "../../image/logo-nba.png";
import net from "../../image/logo-net.png";
import amazon from "../../image/amazon.png";
import Carouselpri from "../../Components/Carrossel/Carrossel";
import { Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Components/css/drop.css";
export default function Basquete() {
  return (
    <div>
      <div className="entrada">
        <div className="speed">
          <a href="/Basquete">
            <img alt="basquete" src={speed}></img>
          </a>
          <a href="/Futebol">
            <img alt="futebol" src={futebol}></img>
          </a>
          <a href="/Volei">
            <img alt="casual" src={casual}></img>
          </a>
          <a href="/Esportes">
            <img alt="tennis" src={tennis}></img>
          </a>
        </div>
        <Carouselpri />
        <div className="corre">
          <Link to="/Papo">
            <a href="corre">
              <img alt="corre" src={corre}></img>
            </a>
          </Link>
        </div>
      </div>
      <div className="camisafit23">
        <div className="produto">
          <img alt="nike" src={b001}></img>
          <h5>Tabela de Basquete Klopf Aglomerado - Branco+Preto</h5>
          <div className="logos css">
            <h4>Preços</h4>
            <div className="centauro">
              <div className="dropdown-content css">
                <a
                  href="https://www.lojanba.com/tabela-de-basquete-klopf-aglomerado-branco+preto-LGH-0004-028?campaign=google-pla&gclid=CjwKCAjw3ueiBhBmEiwA4BhspJK79ZlxTkWzKhsJoStPPRXBxPcgsk-6phrArOjlGX18eqwfoa2-KxoCPSMQAvD_BwE"
                  target="_blank"
                >
                  <img alt="centauro" src={nba}></img>
                  <h4>R$ 165,50</h4>
                </a>
                <a
                  href="https://www.netshoes.com.br/tabela-de-basquete-klopf-aglomerado-branco+preto-LGH-0004-028"
                  target="_blank"
                >
                  <img alt="centauro" src={net}></img>
                  <h4>R$179,50</h4>
                </a>
                
              </div>
            </div>
          </div>
        </div>
        <div className="produto">
          <img alt="nike" src={b002}></img>
          <h5>Mala Adidas Damian Lillard Duffel - Preto+Roxo</h5>
          <div className="logos css">
            <h4>Preços</h4>
            <div className="centauro">
                <div className="dropdown-content">

              <a
                href="https://www.lojanba.com/mala-adidas-damian-lillard-duffel-preto+roxo-3ZP-3383-384"
                target="_blank"
                >
                <img alt="nike" src={nba}></img>
                <h4>R$357,88</h4>
              </a>
              <a
                href="https://www.netshoes.com.br/mala-adidas-damian-lillard-duffel-preto+roxo-3ZP-3383-384"
                target="_blank"
                >
                <img alt="nike" src={net}></img>
                <h4>R$389,00</h4>
              </a>
                  </div>
            </div>
          </div>
        </div>
        <div className="produto">
          <img alt="nike" src={b003}></img>
          <h5>WILSON Bolas de basquete NBA Authentic Series</h5>
          <div className="logos css">
            <h4>Preços</h4>
            <div className="centauro">
                <div className="dropdown-content">
                    
              <a
                href="https://www.amazon.com.br/WILSON-NBA-Authentic-Basketball-interior/dp/B091MGGWJW/ref=asc_df_B091MGGWJW/?tag=googleshopp00-20&linkCode=df0&hvadid=647566990259&hvpos=&hvnetw=g&hvrand=17572083377050095083&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001725&hvtargid=pla-1408995978700&psc=1"
                target="_blank"
                >
                <img alt="nike" src={amazon}></img>
                <h4>R$329,90</h4>
              </a>
              <a
                href="https://www.lojanba.com/bola-de-basquete-wilson-nba-authentic-indoor-outdoor-7-marrom-D25-3615-138"
                target="_blank"
                >
                <img alt="nike" src={nba}></img>
                <h4>R$284,28</h4>
              </a>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
