import React, { useState, useEffect } from 'react';
import { Heart, Users, Shield, Award, Phone, Mail, MapPin, Menu, X, Activity, Clock } from 'lucide-react';
import './styles.css';


const ChristusMuguerzaLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Heart className="service-icon" />,
      title: "Cardiología Avanzada",
      description: "Atención especializada en enfermedades cardiovasculares con tecnología de vanguardia y personal altamente capacitado."
    },
    {
      icon: <Activity className="service-icon" />,
      title: "Cirugía Robótica",
      description: "Procedimientos mínimamente invasivos utilizando la más avanzada tecnología robótica para mejores resultados."
    },
    {
      icon: <Shield className="service-icon" />,
      title: "Medicina Preventiva",
      description: "Programas integrales de prevención y detección temprana para mantener tu salud en óptimas condiciones."
    }
  ];

  const stats = [
    { number: "50+", label: "Años de Experiencia" },
    { number: "200+", label: "Especialistas" },
    { number: "15", label: "Centros Médicos" },
    { number: "24/7", label: "Atención de Urgencias" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Tabbare */}
      <nav className={`nav ${scrolled ? 'nav-scrolled' : 'nav-transparent'}`}>
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo-container">
              <div className="logo-icon">
                <img 
                  src="https://s3.us-east-1.amazonaws.com/doctoralia.com.mx/doctor/076a7d/076a7d310bef4233b2553dfcc401761b_220_square.jpg" 
                  alt="CHRISTUS MUGUERZA" 
                  className="logo-image" 
                />
              </div>
              <div>
                <h1 className="logo-text">CHRISTUS MUGUERZA</h1>
                <p className="logo-subtext">Sistema de Salud</p>
              </div>
            </div>
            
            {/*  Menu */}
            <div className="desktop-menu">
              <a href="#inicio" className="menu-link">Inicio</a>
              <a href="#servicios" className="menu-link">Servicios</a>
              <a href="#nosotros" className="menu-link">Nosotros</a>
              <a href="#contacto" className="menu-link">Contacto</a>
            </div>

            {/* Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-btn"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile */}
          {isMenuOpen && (
            <div className="mobile-menu">
              <div className="mobile-menu-content">
                <a href="#inicio" className="mobile-menu-link">Inicio</a>
                <a href="#servicios" className="mobile-menu-link">Servicios</a>
                <a href="#nosotros" className="mobile-menu-link">Nosotros</a>
                <a href="#contacto" className="mobile-menu-link">Contacto</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Principal */}
      <section id="inicio" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h2 className="hero-title">
                Cuidando tu
                <span className="hero-title-gradient">
                  salud y vida
                </span>
              </h2>
              <p className="hero-description">
                Más de 50 años brindando atención médica de excelencia con tecnología de vanguardia 
                y el respaldo de especialistas reconocidos internacionalmente.
              </p>
              <div className="hero-buttons">
                <button className="primary-button">
                  Agendar Cita
                </button>
                <button className="secondary-button">
                  Conocer Más
                </button>
              </div>
            </div>
            <div className="stats-container">
              <div className="stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-card">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acerca */}
      <section id="nosotros" className="about">
        <div className="about-container">
          <div className="about-content">
            <div>
              <h3 className="about-title">
                ¿Qué es CHRISTUS MUGUERZA?
              </h3>
              <div className="about-divider"></div>
              <p className="about-text">
                Somos el sistema de salud líder en el noreste de México, comprometidos con brindar 
                atención médica de la más alta calidad. Nuestro enfoque integral combina tecnología 
                de vanguardia con el toque humano que nos caracteriza.
              </p>
              <p className="about-text">
                Con más de 15 centros médicos estratégicamente ubicados, ofrecemos servicios especializados 
                que van desde medicina preventiva hasta los procedimientos más complejos, siempre con 
                los más altos estándares de calidad y seguridad.
              </p>
              <div className="features-grid">
                <div className="feature-item">
                  <Award className="feature-icon" />
                  <span className="feature-text">Certificaciones Internacionales</span>
                </div>
                <div className="feature-item">
                  <Users className="feature-icon" />
                  <span className="feature-text">Personal Especializado</span>
                </div>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Heart />
              </div>
              <h4 className="service-title">Compromiso Total</h4>
              <p className="service-description">Con tu bienestar y recuperación</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="services">
        <div className="services-container">
          <div className="services-header">
            <h3 className="services-title">Nuestros Servicios Especializados</h3>
            <div className="services-divider"></div>
            <p className="services-description">
              Ofrecemos una amplia gama de servicios médicos especializados con tecnología de última generación
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seccion */}
      <section className="cta">
        <div className="cta-overlay"></div>
        <div className="cta-container">
          <h3 className="cta-title">
            Tu salud es nuestra prioridad
          </h3>
          <p className="cta-description">
            No esperes más para cuidar tu bienestar. Agenda tu cita hoy mismo y descubre 
            por qué somos la opción preferida de miles de familias.
          </p>
          <button className="cta-button">
            Contactar Ahora
          </button>
        </div>
      </section>

      {/*  Contactenos */}
      <section id="contacto" className="contact">
        <div className="contact-container">
          <div className="contact-header">
            <h3 className="contact-title">Contáctanos</h3>
            <div className="contact-divider"></div>
          </div>
          
          <div className="contact-grid">
            <div className="contact-card">
              <Phone className="contact-icon" />
              <h4 className="contact-card-title">Teléfono</h4>
              <p className="contact-text">81 8888 0000</p>
              <p className="contact-text">Línea de Urgencias 24/7</p>
            </div>
            
            <div className="contact-card">
              <Mail className="contact-icon" />
              <h4 className="contact-card-title">Email</h4>
              <p className="contact-text">info@christusmuguerza.com.mx</p>
              <p className="contact-text">Respuesta en 24 horas</p>
            </div>
            
            <div className="contact-card">
              <MapPin className="contact-icon" />
              <h4 className="contact-card-title">Ubicación</h4>
              <p className="contact-text">15 Centros Médicos</p>
              <p className="contact-text">En Nuevo León</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div>
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <img 
                    src="https://s3.us-east-1.amazonaws.com/doctoralia.com.mx/doctor/076a7d/076a7d310bef4233b2553dfcc401761b_220_square.jpg" 
                    alt="CHRISTUS MUGUERZA" 
                    className="footer-logo-image" 
                  />
                </div>
                <div>
                  <h4 className="footer-logo-text">CHRISTUS MUGUERZA</h4>
                  <p className="footer-logo-subtext">Sistema de Salud</p>
                </div>
              </div>
              <p className="footer-copyright">
                CHRISTUS MUGUERZA - Todos los derechos reservados
              </p>
            </div>
          </div>
        </div>
      </footer>
      <iframe
        id="sn_va_web_client"
        title="ServiceNow Virtual Agent Client"
        width="320"
        height="420"
        src="https://informationtechnologymatterssadecvdemo3.service-now.com/sn_va_web_client_app_embed.do"
        frameBorder="0"
        className="sn-va-widget"
      >
        Tu navegador no soporta iframes.
      </iframe>
    </div>
  );
};

export default ChristusMuguerzaLanding;