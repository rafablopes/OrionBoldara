import "../styles/utility.css";
import HeroRectangleOne from "../assets/imagens/rectangleOne.png";
import HeroRectangleTwo from "../assets/imagens/rectangleTwo.png";
import "../styles/hero.css";
import Button from "../components/Button";
import Logo from "../assets/logo.svg";
import "../styles/header.css";
import "../styles/solutions.css";
import Close from "../assets/close.svg";
import Menu from "../assets/hamburguer.svg";
import { useState, useEffect } from "react";
export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  useEffect (() => {

    if (showMobileMenu) {
  document.documentElement.style.overflowY = "hidden";
    }
  else{
    document.documentElement.style.overflowY = "auto";
  }
  },[showMobileMenu]);
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
    Onde a inovação encontra a beleza do futuro.
    </p>

    <h1>
    Experimente a beleza do amanhã, hoje.
    </h1>

    <p>
      Na estética avançada, trazemos o futuro da beleza para você, com tratamentos exclusivos que combinam ciência, inovação e resultados.
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
      <h3>Análise Facial e Corporal com IA</h3>
      <p>Utilizamos software de IA para escanear sua pele e corpo em 3D, oferecendo diagnósticos rápidos e precisos para tratamentos personalizados.</p>
      <ul>
        <li>Escaneamento em 3D: Detecção precisa de detalhes.</li>
        <li>Diagnósticos Personalizados: Planos sob medida</li>
        <li>Monitoramento Contínuo: Acompanhamento de resultados.</li>
      </ul>
    </div>

    <div className="solution-item">
      <h3>Tratamento de Pele Virtual</h3>
      <p>Simule os resultados dos tratamentos antes de realizá-los. Nosso software cria prévias visuais para você ver como ficará após o procedimento.</p>
      <ul>
        <li>Simulação Visual: Visualize resultados antes do procedimento.</li>
        <li>Customização Rápida: Ajuste de tratamentos em tempo real.</li>
        <li>Comparação de Resultados: Veja antes e depois digitalmente.</li>
      </ul>
    </div>

    <div className="solution-item">
      <h3>Ajustes Capilares Digitalizados</h3>
      <p>Nosso sistema de simulação capilar mostra como seu cabelo responderá aos tratamentos, desde o fortalecimento até o combate à queda..</p>
      <ul>
        <li>Simulação de Tratamentos: Resultados antes da aplicação real.</li>
        <li>Mapeamento Capilar: Identifica áreas de perda e fortalecimento.</li>
        <li>Planejamento Personalizado: Ajustes para cada tipo de cabelo.</li>
      </ul>
    </div>

    <div className="solution-item">
      <h3>Consultoria Virtual Personalizada</h3>
      <p>Converse com nossa IA especializada, que ajuda a criar o melhor plano de cuidados, totalmente adaptado ao seu estilo de vida e necessidades.</p>
      <ul>
        <li>IA Especializada: Recomendações adaptadas ao seu perfil.</li>
        <li>Acompanhamento Digital: Evolução constante dos resultados.</li>
        <li>Consultas Online: Orientação virtual com precisão.</li>
       
      </ul>
    </div>
  </div>

  <div className="cta">
    <p>Quer saber mais sobre como nossos tratamentos podem transformar você? Fale conosco agora mesmo!</p>
    <a href="#contact" className="btn-consult">Entre em contato</a>
  </div>
</section>

 
    </>
  );
}
