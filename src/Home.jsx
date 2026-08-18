import { useEffect, useRef, useState } from 'react'
import './App.css'
import heroVisual from './assets/foto-hero.png'
import logoSimbolo from './assets/icone.svg'
import advogadoSobre from './assets/foto-sobre.png'
import cardCriminal from './assets/card-criminal.png'
import cardFamilia from './assets/card-familia.png'
import cardConsumidor from './assets/card-consumidor.png'
import cardCivil from './assets/card-civil.png'
import cardPenal from './assets/card-penal.png'

const carouselCards = [
  {
    title: 'ATENDIMENTO CRIMINAL IMEDIATO',
    image: cardCriminal,
    topics: [
      'Defesa em Flagrante',
      'Inquéritos Policiais',
      'Acompanhamento em Delegacia',
      'Recursos Criminais',
    ],
  },
  {
    title: 'DIREITO DA FAMÍLIA',
    image: cardFamilia,
    topics: [
      'Divórcio e Separação',
      'Guarda e Convivência',
      'Pensão Alimentícia',
      'Partilha de Bens',
    ],
  },
  {
    title: 'DIREITO DO CONSUMIDOR',
    image: cardConsumidor,
    topics: [
      'Indenizações',
      'Cobranças Indevidas',
      'Negativação Indevida',
      'Relações Bancárias',
      'Planos de Saúde',
      'Direito do Passageiro',
      'Produtos e Serviços',
    ],
  },
  {
    title: 'DIREITO CIVIL',
    image: cardCivil,
    topics: [
      'Contratos',
      'Responsabilidade Civil',
      'Indenizações',
      'Direito Imobiliário',
      'Cobranças',
    ],
  },
  {
    title: 'DIREITO PENAL',
    image: cardPenal,
    topics: [
      'Defesa Criminal',
      'Tribunal do Júri',
      'Crimes Econômicos',
      'Crimes Patrimoniais',
      'Habeas Corpus e Recursos',
    ],
  },
]

const areas = [
  [
    'Defesa em Flagrante',
    'Atendimento imediato para prisões em flagrante. Atuação rápida para garantir seus direitos desde o primeiro momento.',
  ],
  [
    'Tribunal do Júri',
    'Defesa técnica especializada em crimes dolosos contra a vida, com estratégia e oratória de excelência.',
  ],
  [
    'Inquéritos Policiais',
    'Acompanhamento desde a fase investigativa, garantindo que seus direitos sejam respeitados.',
  ],
  [
    'Recursos Criminais',
    'Elaboração de recursos aos tribunais superiores para revisão de decisões desfavoráveis.',
  ],
  [
    'Auxílio a Vítimas',
    'Auxílio a vítimas, atuando como assistente do Ministério Público.',
  ],
  [
    'Crimes Contra a Honra',
    'Defesa em casos de calúnia, difamação e injúria, bem como o ingresso de queixa-crime.',
  ],
  [
    'Crimes Sexuais',
    'Atuação em casos de estupro, assédio sexual e outros crimes dessa natureza.',
  ],
  [
    'Crimes de Trânsito',
    'Defesa especializada em homicídio culposo, embriaguez ao volante e outros crimes de trânsito.',
  ],
  [
    'Divórcio e Separação',
    'Orientação e acompanhamento em divórcios consensuais ou litigiosos.',
  ],
  [
    'Guarda e Convivência',
    'Atuação em ações de guarda, regulamentação de convivência e proteção dos interesses dos filhos.',
  ],
  [
    'Direito do Consumidor',
    'Defesa em problemas com produtos, serviços, cobranças abusivas e descumprimento de ofertas ou contratos.',
  ],
  [
    'Direito do Trabalho',
    'Atuação em reclamações trabalhistas, rescisões, verbas, assédio moral e defesa de trabalhadores e empregadores.',
  ],
]

function Icon({ type }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  if (type === 'mail') {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    )
  }

  if (type === 'phone') {
    return (
      <svg {...common}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.66 2.62a2 2 0 0 1-.45 2.11L8.05 9.72a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.84.32 1.72.54 2.62.66A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  }

  if (type === 'clock') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    )
  }

  return (
    <svg {...common}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </svg>
  )
}

function handleSubmit(event) {
  event.preventDefault()

  const formData = new FormData(event.currentTarget)

  const nome = String(formData.get('nome') || '').trim()
  const email = String(formData.get('email') || '').trim()
  const mensagem = String(formData.get('mensagem') || '').trim()

  const texto = `Olá! Meu nome é ${nome}.

E-mail: ${email}

Mensagem:
${mensagem}`

  window.open(
    `https://wa.me/5547999612565?text=${encodeURIComponent(texto)}`,
    '_blank',
  )
}

function Home() {
    const [activeCard, setActiveCard] = useState(1)
  const carouselViewportRef = useRef(null)
  const cardRefs = useRef([])
  const scrollTimerRef = useRef(null)

  function scrollToCard(index, behavior = 'smooth') {
    const viewport = carouselViewportRef.current
    const card = cardRefs.current[index]

    if (!viewport || !card) return

    const isMobile = window.innerWidth <= 700

    const targetLeft = isMobile
      ? card.offsetLeft - 16
      : card.offsetLeft - viewport.clientWidth / 2 + card.offsetWidth / 2

    viewport.scrollTo({
      left: Math.max(0, targetLeft),
      behavior,
    })

    setActiveCard(index)
  }

  function previousCard() {
    const nextIndex =
      activeCard === 0 ? carouselCards.length - 1 : activeCard - 1

    scrollToCard(nextIndex)
  }

  function nextCard() {
    const nextIndex =
      activeCard === carouselCards.length - 1 ? 0 : activeCard + 1

    scrollToCard(nextIndex)
  }

  function handleCarouselScroll() {
    clearTimeout(scrollTimerRef.current)

    scrollTimerRef.current = setTimeout(() => {
      const viewport = carouselViewportRef.current

      if (!viewport) return

      const isMobile = window.innerWidth <= 700
      const referencePoint = isMobile
        ? viewport.scrollLeft + 18
        : viewport.scrollLeft + viewport.clientWidth / 2

      let closestIndex = 0
      let smallestDistance = Infinity

      cardRefs.current.forEach((card, index) => {
        if (!card) return

        const cardPoint = isMobile
          ? card.offsetLeft
          : card.offsetLeft + card.offsetWidth / 2

        const distance = Math.abs(cardPoint - referencePoint)

        if (distance < smallestDistance) {
          smallestDistance = distance
          closestIndex = index
        }
      })

      setActiveCard(closestIndex)
    }, 90)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToCard(1, 'auto')
    }, 100)

    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="site">
      <header className="topbar">
        <div className="topbar__inner">
          <a
            className="topbar__brand"
            href="#inicio"
            aria-label="Ir para o início"
          >
            <img
              src={logoSimbolo}
              alt="Símbolo da balança da Justiça"
            />
          </a>

          <div className="topbar__item">
            <Icon type="mail" />
            <a href="mailto:lucashobaldeoliveiraadv@gmail.com">
              lucashobaldeoliveiraadv@gmail.com
            </a>
          </div>

          <div className="topbar__item">
            <Icon type="phone" />
            <a href="tel:+5547999612565">
  47 9 9961 2565
</a>
          </div>

          <div className="topbar__item">
            <Icon type="clock" />
            <span>08:00 a 18:00</span>
          </div>

          <a className="topbar__button" href="#contato">
            Entre em contato
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero__inner">
            <div className="hero__copy">
              <p className="hero__eyebrow">
                Advogado em Bombinhas
              </p>

              <h1>
  Atendimento jurídico ético, responsável e individualizado nas áreas
  Criminal, Trabalhista, Cível, do Consumidor e de Família, com análise
  cuidadosa e estratégia adequada para cada caso.
</h1>

              <a className="button button--hero" href="#contato">
                Fale Conosco
              </a>
            </div>

            <img
              className="hero__lawyer"
              src={heroVisual}
              alt="Advogado Lucas Hobal de Oliveira"
            />
          </div>
        </section>

<section className="services-carousel" aria-label="Áreas de atuação">
  <button
    className="carousel-arrow carousel-arrow--left"
    type="button"
    aria-label="Ver card anterior"
    onClick={previousCard}
  >
    ‹
  </button>

  <div
    className="services-carousel__viewport"
    ref={carouselViewportRef}
    onScroll={handleCarouselScroll}
  >
    <div className="services-carousel__track">
      {carouselCards.map((card, index) => (
        <article
          className={`service-card ${
            activeCard === index ? 'service-card--active' : ''
          }`}
          key={card.title}
          ref={(element) => {
            cardRefs.current[index] = element
          }}
          onClick={() => scrollToCard(index)}
        >
          <img
  className="service-card__background"
  src={card.image}
  alt=""
  aria-hidden="true"
  loading="lazy"
  decoding="async"
/>

          <div className="service-card__overlay" />

          <div className="service-card__content">
            <h2>{card.title}</h2>

            <ul>
              {card.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </div>

  <button
    className="carousel-arrow carousel-arrow--right"
    type="button"
    aria-label="Ver próximo card"
    onClick={nextCard}
  >
    ›
  </button>

  <div className="carousel-dots" aria-label="Páginas do carrossel">
    <button
      type="button"
      className={activeCard <= 2 ? 'carousel-dot carousel-dot--active' : 'carousel-dot'}
      aria-label="Ir para a primeira página"
      onClick={() => scrollToCard(1)}
    />

    <button
      type="button"
      className={activeCard >= 3 ? 'carousel-dot carousel-dot--active' : 'carousel-dot'}
      aria-label="Ir para a segunda página"
      onClick={() => scrollToCard(3)}
    />
  </div>
</section>

<section className="about-section" id="sobre">
  <div className="about-section__box">
    <div className="about-section__imageWrap">
     <img
  src={advogadoSobre}
  alt="Foto do advogado Lucas Hobal de Oliveira"
  className="about-section__image"
  loading="lazy"
  decoding="async"
/>
    </div>

    <div className="about-section__content">
      <h2 className="about-section__title">sobre mim</h2>

      <p className="about-section__text">
        Sou advogado com atuação nas áreas de Direito Criminal, Direito do
        Trabalho, Direito Civil e do Consumidor e Direito da Família.
      </p>

      <p className="about-section__text">
        Ofereço atendimento ético, responsável e individualizado, com análise
        cuidadosa de cada caso e definição da estratégia jurídica mais adequada.
      </p>

      <p className="about-section__oab">OAB/SC 75.614</p>
    </div>
  </div>

  <div className="about-section__wave">
    <svg
      viewBox="0 0 1440 180"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,70 C180,150 350,170 560,135 C760,100 915,35 1120,45 C1270,52 1360,78 1440,95 L1440,180 L0,180 Z"
        fill="#ede3ce"
      />
    </svg>
  </div>
</section>

        <section className="legal-contact" id="contato">
  <div className="legal-contact__inner">
    <div className="legal-contact__intro">
      <h2>Precisa de auxílio jurídico?</h2>

      <div
        className="legal-contact__underline"
        aria-hidden="true"
      />

      <p>
        Nossa equipe está pronta para analisar seu caso com discrição,
        agilidade e atendimento personalizado.
      </p>
    </div>

    <form
      className="legal-contact__form"
      onSubmit={handleSubmit}
    >
      <h3>Formulário para contato</h3>

      <label>
        Nome
        <input
          type="text"
          name="nome"
          required
        />
      </label>

      <label>
        E-mail
        <input
          type="email"
          name="email"
          required
        />
      </label>

      <label>
        Sua mensagem:
        <textarea
          name="mensagem"
          rows="4"
          required
        />
      </label>

      <button type="submit">
        Enviar
      </button>
    </form>
  </div>
</section>

        <section className="footer-contact">
          <div>
            <p className="section-kicker">Fale Conosco</p>
            <h2>Atendimento Online</h2>

            <p>
              <Icon type="phone" /> 47 9 9961 2565
            </p>

            <p>
              <Icon type="mail" /> lucashobaldeoliveiraadv@gmail.com
            </p>
          </div>

          <iframe
            title="Mapa do escritório"
            className="map"
            src="https://www.google.com/maps?q=R.%20Martim%20Pescador,%201955,%20Bombas,%20Bombinhas%20SC&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>

      <footer className="copyright">
        <span>© Todos direitos reservados – 2026</span>
        <span>OAB/SC 75.614</span>
      </footer>
    </div>
  )
}

export default Home