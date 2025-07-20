import React, { useState, useEffect } from 'react';
import { Heart, Users, Shield, Award, Phone, Mail, MapPin, Menu, X, Activity, Clock, MessageCircle, Stethoscope, Brain, Baby, Eye, Calendar, Star } from 'lucide-react';
import './styles.css';

const ChristusMuguerzaLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Carousel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Heart style={{ color: '#7C3AED', width: '48px', height: '48px' }} />,
      title: "Cardiología Avanzada",
      description: "Diagnóstico y tratamiento de enfermedades cardiovasculares con tecnología de vanguardia y especialistas certificados."
    },
    {
      icon: <Activity style={{ color: '#7C3AED', width: '48px', height: '48px' }} />,
      title: "Cirugía Robótica",
      description: "Procedimientos mínimamente invasivos con robots quirúrgicos Da Vinci para mayor precisión y recuperación rápida."
    },
    {
      icon: <Shield style={{ color: '#7C3AED', width: '48px', height: '48px' }} />,
      title: "Medicina Preventiva",
      description: "Check-ups ejecutivos y programas de prevención personalizados para detectar enfermedades tempranamente."
    },
    {
      icon: <Brain style={{ color: '#7C3AED', width: '48px', height: '48px' }} />,
      title: "Neurología",
      description: "Atención especializada en enfermedades del sistema nervioso con equipos de neuroimagen avanzados."
    },
    {
      icon: <Baby style={{ color: '#7C3AED', width: '48px', height: '48px' }} />,
      title: "Pediatría",
      description: "Cuidado médico integral para niños desde recién nacidos hasta adolescentes con especialistas certificados."
    },
    {
      icon: <Eye style={{ color: '#7C3AED', width: '48px', height: '48px' }} />,
      title: "Oftalmología",
      description: "Cirugías oculares avanzadas incluyendo LASIK, cataratas y tratamientos de retina con tecnología láser."
    }
  ];

  const stats = [
    { number: "50+", label: "Años de Experiencia", icon: <Clock style={{ width: '24px', height: '24px' }} /> },
    { number: "300+", label: "Médicos Especialistas", icon: <Users style={{ width: '24px', height: '24px' }} /> },
    { number: "15", label: "Hospitales y Clínicas", icon: <MapPin style={{ width: '24px', height: '24px' }} /> },
    { number: "24/7", label: "Atención de Urgencias", icon: <Activity style={{ width: '24px', height: '24px' }} /> }
  ];

  const testimonials = [
    {
      name: "María González",
      text: "Excelente atención médica. Los doctores son muy profesionales y las instalaciones están muy bien equipadas.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      text: "Mi familia y yo confiamos en CHRISTUS MUGUERZA. Siempre recibimos atención de calidad.",
      rating: 5
    },
    {
      name: "Ana López",
      text: "La tecnología que manejan es impresionante. Me operaron con robot y la recuperación fue muy rápida.",
      rating: 5
    }
  ];

  const bannerSlides = [
    {
      title: "Tecnología Médica de Vanguardia",
      subtitle: "Equipos de última generación para diagnósticos precisos",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Especialistas Certificados",
      subtitle: "Médicos con reconocimiento internacional",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      title: "Atención Integral",
      subtitle: "Cuidamos tu salud en cada etapa de la vida",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      {/* Barra Superior */}
      <div style={{
        backgroundColor: '#7C3AED',
        color: 'white',
        padding: '8px 0',
        fontSize: '14px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span>📞 81 8888 0000</span>
            <span>✉️ info@christusmuguerza.com.mx</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Pacientes</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Médicos</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Trabaja con nosotros</a>
          </div>
        </div>
      </div>

      {/* Navegación Principal */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: scrolled ? 'white' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '80px'
          }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#7C3AED',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="https://s3.us-east-1.amazonaws.com/doctoralia.com.mx/doctor/076a7d/076a7d310bef4233b2553dfcc401761b_220_square.jpg" 
                  alt="CHRISTUS MUGUERZA" 
                  style={{
                    width: '40px',
                    height: '40px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </div>
              <div>
                <h1 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#7C3AED',
                  margin: 0
                }}>CHRISTUS MUGUERZA</h1>
                <p style={{
                  fontSize: '12px',
                  color: '#666',
                  margin: 0
                }}>Sistema de Salud</p>
              </div>
            </div>
            
            {/* Menú Desktop */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '30px'
            }}>
              <a href="#inicio" style={{
                color: '#374151',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.3s'
              }}>Inicio</a>
              <a href="#servicios" style={{
                color: '#374151',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.3s'
              }}>Servicios</a>
              <a href="#especialidades" style={{
                color: '#374151',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.3s'
              }}>Especialidades</a>
              <a href="#nosotros" style={{
                color: '#374151',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.3s'
              }}>Nosotros</a>
              <a href="#contacto" style={{
                color: '#374151',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'color 0.3s'
              }}>Contacto</a>
              <button style={{
                backgroundColor: '#7C3AED',
                color: 'white',
                padding: '10px 24px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'background-color 0.3s'
              }}>
                Agendar Cita
              </button>
            </div>

            {/* Menú Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                display: 'none',
                padding: '8px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer'
              }}
            >
              {isMenuOpen ? <X style={{ width: '24px', height: '24px' }} /> : <Menu style={{ width: '24px', height: '24px' }} />}
            </button>
          </div>

          {/* Menú Mobile Desplegable */}
          {isMenuOpen && (
            <div style={{
              backgroundColor: 'white',
              borderTop: '1px solid #e5e7eb',
              padding: '20px 0'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <a href="#inicio" style={{
                  color: '#374151',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}>Inicio</a>
                <a href="#servicios" style={{
                  color: '#374151',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}>Servicios</a>
                <a href="#especialidades" style={{
                  color: '#374151',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}>Especialidades</a>
                <a href="#nosotros" style={{
                  color: '#374151',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}>Nosotros</a>
                <a href="#contacto" style={{
                  color: '#374151',
                  textDecoration: 'none',
                  fontWeight: '500'
                }}>Contacto</a>
                <button style={{
                  backgroundColor: '#7C3AED',
                  color: 'white',
                  padding: '10px 24px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}>
                  Agendar Cita
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section con Carousel */}
      <section id="inicio" style={{
        position: 'relative',
        height: '600px',
        overflow: 'hidden'
      }}>
        {bannerSlides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 1s ease-in-out'
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.8), rgba(59, 130, 246, 0.6))'
              }}></div>
            </div>
            <div style={{
              position: 'relative',
              zIndex: 10,
              height: '100%',
              display: 'flex',
              alignItems: 'center'
            }}>
              <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 20px'
              }}>
                <div style={{ maxWidth: '700px' }}>
                  <h2 style={{
                    fontSize: '60px',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '24px',
                    lineHeight: '1.2'
                  }}>
                    {slide.title}
                  </h2>
                  <p style={{
                    fontSize: '20px',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: '32px',
                    lineHeight: '1.6'
                  }}>
                    {slide.subtitle}
                  </p>
                  <div style={{
                    display: 'flex',
                    gap: '16px',
                    flexWrap: 'wrap'
                  }}>
                    <button style={{
                      backgroundColor: '#7C3AED',
                      color: 'white',
                      padding: '16px 32px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '18px',
                      transition: 'background-color 0.3s'
                    }}>
                      Agendar Cita
                    </button>
                    <button style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      color: 'white',
                      padding: '16px 32px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '18px',
                      transition: 'background-color 0.3s'
                    }}>
                      Conocer Más
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Indicadores del Carousel */}
        <div style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          zIndex: 20
        }}>
          {bannerSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: index === currentSlide ? 'white' : 'rgba(255, 255, 255, 0.5)',
                transition: 'background-color 0.3s'
              }}
            />
          ))}
        </div>
      </section>

      {/* Estadísticas */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{
                textAlign: 'center',
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  color: '#7C3AED'
                }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  color: '#374151',
                  marginBottom: '8px'
                }}>{stat.number}</div>
                <div style={{
                  color: '#6b7280',
                  fontWeight: '500'
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" style={{
        padding: '80px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '60px',
            alignItems: 'center'
          }}>
            <div>
              <h3 style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#374151',
                marginBottom: '24px'
              }}>
                Líder en Atención Médica
              </h3>
              <div style={{
                width: '80px',
                height: '4px',
                backgroundColor: '#7C3AED',
                marginBottom: '24px'
              }}></div>
              <p style={{
                color: '#6b7280',
                marginBottom: '24px',
                fontSize: '18px',
                lineHeight: '1.6'
              }}>
                CHRISTUS MUGUERZA es el sistema de salud más confiable del noreste de México. 
                Con más de 50 años de experiencia, combinamos tecnología médica de vanguardia 
                con el cuidado humano que nos caracteriza.
              </p>
              <p style={{
                color: '#6b7280',
                marginBottom: '32px',
                fontSize: '18px',
                lineHeight: '1.6'
              }}>
                Nuestros 15 centros médicos ofrecen servicios especializados con los más altos 
                estándares de calidad, certificaciones internacionales y un equipo de más de 
                300 especialistas altamente capacitados.
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '24px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#ede9fe',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Award style={{ width: '20px', height: '20px', color: '#7C3AED' }} />
                  </div>
                  <span style={{ color: '#374151', fontWeight: '500' }}>Certificaciones JCI</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#ede9fe',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Users style={{ width: '20px', height: '20px', color: '#7C3AED' }} />
                  </div>
                  <span style={{ color: '#374151', fontWeight: '500' }}>Especialistas Certificados</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#ede9fe',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Shield style={{ width: '20px', height: '20px', color: '#7C3AED' }} />
                  </div>
                  <span style={{ color: '#374151', fontWeight: '500' }}>Seguridad del Paciente</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#ede9fe',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Stethoscope style={{ width: '20px', height: '20px', color: '#7C3AED' }} />
                  </div>
                  <span style={{ color: '#374151', fontWeight: '500' }}>Tecnología Avanzada</span>
                </div>
              </div>
            </div>
            <div>
              <div style={{
                background: 'linear-gradient(135deg, #ede9fe, #dbeafe)',
                borderRadius: '16px',
                padding: '40px',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: '#7C3AED',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px'
                }}>
                  <Heart style={{ width: '40px', height: '40px', color: 'white' }} />
                </div>
                <h4 style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#374151',
                  marginBottom: '16px'
                }}>Nuestro Compromiso</h4>
                <p style={{
                  color: '#6b7280',
                  fontSize: '18px',
                  lineHeight: '1.6'
                }}>
                  Cuidar tu salud y la de tu familia con excelencia médica, 
                  tecnología de vanguardia y el toque humano que nos distingue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" style={{
        padding: '80px 0',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h3 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#374151',
              marginBottom: '24px'
            }}>Servicios Médicos Especializados</h3>
            <div style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#7C3AED',
              margin: '0 auto 24px'
            }}></div>
            <p style={{
              color: '#6b7280',
              fontSize: '18px',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Ofrecemos una amplia gama de servicios médicos con tecnología de última generación 
              y especialistas certificados para brindarte la mejor atención.
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px'
          }}>
            {services.map((service, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                padding: '32px',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}>
                <div style={{
                  marginBottom: '24px',
                  transition: 'transform 0.3s'
                }}>
                  {service.icon}
                </div>
                <h4 style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#374151',
                  marginBottom: '16px'
                }}>{service.title}</h4>
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6'
                }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section style={{
        padding: '80px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h3 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#374151',
              marginBottom: '24px'
            }}>Lo que Dicen Nuestros Pacientes</h3>
            <div style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#7C3AED',
              margin: '0 auto 24px'
            }}></div>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{
                backgroundColor: 'white',
                padding: '32px',
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{
                  display: 'flex',
                  marginBottom: '16px'
                }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} style={{
                      width: '20px',
                      height: '20px',
                      color: '#fbbf24',
                      fill: '#fbbf24'
                    }} />
                  ))}
                </div>
                <p style={{
                  color: '#6b7280',
                  fontStyle: 'italic',
                  marginBottom: '24px',
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}>"{testimonial.text}"</p>
                <div style={{
                  fontWeight: '600',
                  color: '#374151'
                }}>- {testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Mejorado */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            {/* Columna 1: Logo y texto */}
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
                © {new Date().getFullYear()} CHRISTUS MUGUERZA - Todos los derechos reservados
              </p>
            </div>
            {/* Columna 2: Enlaces útiles y redes sociales */}
            <div style={{ textAlign: 'right' }}>
              <div className="footer-links">
                <a href="#contacto" className="footer-link">Contacto</a>
                <a href="#" className="footer-link">Aviso de Privacidad</a>
              </div>
              <div className="footer-social">
                <a href="#" className="footer-social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                </a>
                <a href="#" className="footer-social-icon" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.015-.633A9.936 9.936 0 0 0 24 4.557z"/></svg>
                </a>
                <a href="#" className="footer-social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.809 2.256 6.089 2.243 6.498 2.243 12c0 5.502.013 5.911.072 7.191.059 1.277.353 2.45 1.32 3.417.967.967 2.14 1.261 3.417 1.32 1.28.059 1.689.072 7.191.072s5.911-.013 7.191-.072c1.277-.059 2.45-.353 3.417-1.32.967-.967 1.261-2.14 1.32-3.417.059-1.28.072-1.689.072-7.191s-.013-5.911-.072-7.191c-.059-1.277-.353-2.45-1.32-3.417C21.05.425 19.877.131 18.6.072 17.32.013 16.911 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Botón flotante de chat mejorado */}
      {!showChat && (
        <button
          className="sn-va-chat-btn sn-va-chat-btn-anim"
          onClick={() => setShowChat(true)}
          aria-label="Abrir VA"
        >
          <MessageCircle size={28} className="sn-va-chat-icon" />
        </button>
      )}

      {showChat && (
        <div className="sn-va-widget-container">
          <button
            className="sn-va-close-btn"
            onClick={() => setShowChat(false)}
            aria-label="Cerrar VA"
          >
            <X size={20} className="sn-va-close-icon" />
          </button>
          <iframe
            id="sn_va_web_client"
            title="ServiceNow Virtual Agent Client"
            width="460"
            height="620"
            src="https://informationtechnologymatterssadecvdemo3.service-now.com/sn_va_web_client_app_embed.do"
            frameBorder="0"
            className="sn-va-widget"
          >
            Tu navegador no soporta iframes.
          </iframe>
        </div>
      )}

      {/* Call to Action */}
      {/* ...aquí iría el contenido de la sección de Call to Action... */}

    </div> 
  );
};

export default ChristusMuguerzaLanding;