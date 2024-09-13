import "../styles/utility.css";
import HeroRectangleOne from "../assets/imagens/rectangleOne.png";
import HeroRectangleTwo from "../assets/imagens/rectangleTwo.png";
import "../styles/hero.css";
import Button from "../components/Button";
import Logo from "../assets/logo.svg";
import "../styles/header.css";
import "../styles/Solutions.css";
import Close from "../assets/close.svg";
import Menu from "../assets/hamburguer.svg";
import { useState } from "react";
export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#solution">Soluções</a>
              </li>
              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>
          <div className="desktop-only">
            <div className="flex items-center">
             
            </div>
          </div>
          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#solution">Soluções</a>
                    </li>
                    <li>
                      <a href="#testimonials">Depoimentos</a>
                    </li>
                    <li>
                      <a href="#pricing">Preços</a>
                    </li>
                    <li>
                      <a href="#contact">Contato</a>
                    </li>
                    <li>
                      <a className="reverse-color" href="#">
                       
                      </a>
                    </li>
                  </ul>
                  <span
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="btn-wrapper"
                  >
                    <img
                      src={Close}
                      alt="ícone fechar menu"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="btn-wrapper"
              >
                <img src={Menu} alt="ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>
      <section id="hero">
  <span className="desktop-only">
    <img src={HeroRectangleTwo} alt="Retângulo decorativo da tela inicial" />
  </span>
  <img src={HeroRectangleOne} alt="Retângulo decorativo da tela inicial" />

  <div className="container content">
    <p className="desktop-only">
      Transformando beleza com tecnologia de ponta e procedimentos inovadores.
    </p>

    <h1>
      Revolucione sua beleza com estética avançada
    </h1>

    <p>
      Na Estética Avançada, trazemos o futuro da beleza para você, com tratamentos exclusivos que combinam ciência, inovação e resultados.
    </p>

    <div className="flex gap-1">
      <span>
        <Button text="Agende Sua Consultoria" />
      </span>
      <span className="desktop-only">
        <Button text="Conheça Nossos Tratamentos" secondary />
      </span>
    </div>
  </div>
</section>

<section id="solutions" className="solutions-section">
  <div className="section-title">
    <h2>Soluções Avançadas de Estética</h2>
    <p>Transforme sua beleza com tecnologia de ponta e resultados comprovados.</p>
  </div>

  <div className="solutions-grid">
    <div className="solution-item">
      <h3>Tratamentos Faciais</h3>
      <p>Rejuvenescimento facial, clareamento de manchas e lifting não cirúrgico com tecnologia de última geração.</p>
      <ul>
        <li>Terapia de Luz LED</li>
        <li>Peeling Químico</li>
        <li>Microagulhamento</li>
        <li>Radiofrequência Facial</li>
      </ul>
    </div>

    <div className="solution-item">
      <h3>Procedimentos Corporais</h3>
      <p>Modelagem corporal, redução de celulite e tratamentos para gordura localizada com técnicas não invasivas.</p>
      <ul>
        <li>Criolipólise Avançada</li>
        <li>Massagem Modeladora</li>
        <li>Radiofrequência Corporal</li>
        <li>Ultrassom de Alta Frequência</li>
      </ul>
    </div>

    <div className="solution-item">
      <h3>Depilação a Laser</h3>
      <p>Depilação definitiva com tecnologia de laser de última geração, proporcionando mais conforto e segurança.</p>
      <ul>
        <li>Laser Alexandrite</li>
        <li>Laser Diodo</li>
        <li>Depilação em Áreas Sensíveis</li>
        <li>Tratamento Personalizado</li>
      </ul>
    </div>

    <div className="solution-item">
      <h3>Tratamentos Capilares</h3>
      <p>Soluções inovadoras para queda de cabelo e fortalecimento capilar, utilizando terapias regenerativas.</p>
      <ul>
        <li>Tratamento com Laser de Baixa Frequência</li>
        <li>Plasma Rico em Plaquetas (PRP)</li>
        <li>Microagulhamento Capilar</li>
        <li>Terapia Capilar Personalizada</li>
      </ul>
    </div>
  </div>

  <div className="cta">
    <p>Quer saber mais sobre como nossos tratamentos podem transformar você? Fale conosco agora mesmo!</p>
    <a href="#contact" className="btn-consult">Agende uma Consulta</a>
  </div>
</section>

 
    </>
  );
}
