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
import ProfileImageOne from "../assets/imagens/ProfileImageOne.webp"
import TestimonialsCard from "../components/testimonialsCard";
import Check from "../assets/Check.svg"
import "../styles/pricing.css"
import "../styles/testimonials.css"
import "../styles/Contact.css"
import "../styles/Footer.css"

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);


  useEffect(() => {

    if (showMobileMenu) {
      document.documentElement.style.overflowY = "hidden";
    }
    else {
      document.documentElement.style.overflowY = "auto";
    }
  }, [showMobileMenu]); 
  const sendEmail = async () => {
    setIsSending(true);
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Beare`, // Substitua 'token' pela variável que contém o seu token

        },
        body: JSON.stringify({ toMail: email, content: message }),
      });

      if (response.ok) {
        alert("E-mail enviado com sucesso!");
        setEmail("");
        setMessage("");
      } else {
        alert("Erro ao enviar e-mail. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      alert("Erro ao enviar e-mail. Tente novamente.");
    } finally {
      setIsSending(false);
    }
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail();
  };
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


      <section id="testimonials">
        <header>
          <span>
            <p className="desktop-only">Buscando o melhor pra você</p>
            <h2>Seja sua melhor versão!</h2>
          </span>
          <p>
           
          </p>
        </header>

        <section className="carousel">
          <div className="carousel-content">
            <TestimonialsCard img={ProfileImageOne} nome="Virginia Fonseca" rating={5} />
            <TestimonialsCard img={ProfileImageOne} nome="Paula Fernandes" rating={4} />
            <TestimonialsCard img={ProfileImageOne} nome="Gisele Bundchen" rating={3} />
            <TestimonialsCard img={ProfileImageOne} nome="Romana Novais" rating={4} />
          </div>
        </section>
      </section>
      <section id="pricing" className="container">
        <header>
          <p className="desktop-only">Planos e preços</p>
          <h2>Nossos planos</h2>
        </header>
        <section className="even-columns gap-1.5">
          <div className="pricing-card">
            <span className="plan">
              <h3>Básico</h3>
              <p>Conheça nossa clinica e protocole o melhor procedimento para você.</p>
            </span>
            <h2>Grátis</h2>
            <Button text="Pedir agora" secondary key="free" />
            <span className="hr" /><span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Agende com um de nossos atendentes</p>
            </span>
            <ul className="features">
              <li>
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>Promoção válida somente esse mê<script></script></p>
              </li>
            </ul>
          </div>
          <div className="pricing-card premium">
            <span className="bonus">
              <p>1º MÊS COM DESCONTO</p>
            </span>
            <span className="plan">
              <h3>Premium</h3>
              <p>Procedimentos semanais.</p>
            </span>
            <span className="price">
              <h2>R$5.689</h2>
              <p>/mês</p>
            </span>
            <Button text="Solicitar" key="premium" />
            <span className="hr" />
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Procedimento alinhado</p>
            </span>
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Lasers semanais</p>
            </span>
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Drenagem semanais</p>
            </span>
          </div>
          <div className="pricing-card">
            <span className="plan">
              <h3>Básico</h3>
              <p>Você tem direito a uma sessão de HD.</p>
            </span>
            <h2>R$500,00</h2>
            <Button text="Pedir agora" secondary key="free" />
            <span className="hr" /><span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Faça seu protocolo</p>
            </span>
            <ul className="features">
              <li>
                <img src={Check} alt="ícone check" width={24} height={24} />
                <p>Atendimento personalizado</p>
              </li>
            </ul>
          </div>
        </section>
      </section>

      <section id="contact">
        <header>
          <p className="desktop-only">Envie sua dúvida</p>
          <h2>Entre em contato</h2>
          <p>
           Venha nos visitar e agendar seu atendimento personalizado, pensando no melhor pra você e
           tornando sua melhor versão. Agende sua visita 
          
          </p>
        </header>

        <section className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Seu melhor Email"
                className="contact-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Motivo do contato. Ex: Poderia agendar uma visita personalizada?"
                className="contact-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <Button
              text={isSending ? "Enviando..." : "Enviar"}
              type="submit"
              disabled={isSending}
            />
          </form>
        </section>
      </section>
      <section id="footer">
  <div className="footer-content">

    <div className="footer-logo">
    <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />
      <p>Explorando Novas Fronteiras da Tecnologia</p>
    </div>

  
    <div className="footer-sections">
      <div>
        <h4>Empresa</h4>
        <ul>
          <li><a href="#">Sobre nós</a></li>
          <li><a href="#">Faça parte do time</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <div>
        <h4>Funcionalidades</h4>
        <ul>
          <li><a href="#">Marketing</a></li>
          <li><a href="#">Análise de dados</a></li>
          <li><a href="#">Bot Discord</a></li>
        </ul>
      </div>
      <div>
        <h4>Recursos</h4>
        <ul>
          <li><a href="#">iOS & Android</a></li>
          <li><a href="#">Teste a Demo</a></li>
          <li><a href="#">Clientes</a></li>
          <li><a href="#">API</a></li>
        </ul>
      </div>
    </div>
  </div>


  <div className="footer-bottom">
    <p>
      Feito com amor na aula de Programação Web 💙 ©2024 AntiTech - Todos os direitos reservados.
    </p>
  </div>
</section>

    </>



  );
}

