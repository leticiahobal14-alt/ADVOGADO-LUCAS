import './App.css'
import advogadoPrincipal from './assets/advogado-principal.png'
import logoCompleta from './assets/logo-completa.png'
import advogadoSobre from './assets/advogado-sobre.png'

const areas = [
  ['Defesa em Flagrante', 'Atendimento imediato para prisões em flagrante. Atuação rápida para garantir seus direitos desde o primeiro momento.'],
  ['Tribunal do Júri', 'Defesa técnica especializada em crimes dolosos contra a vida, com estratégia e oratória de excelência.'],
  ['Inquéritos Policiais', 'Acompanhamento desde a fase investigativa, garantindo que seus direitos sejam respeitados.'],
  ['Recursos Criminais', 'Elaboração de recursos aos tribunais superiores para revisão de decisões desfavoráveis.'],
  ['Auxílio a Vítimas', 'Auxílio a vítimas, atuando como assistente do Ministério Público.'],
  ['Crimes Contra a Honra', 'Defesa em casos de calúnia, difamação e injúria, bem como o ingresso de queixa-crime.'],
  ['Crimes Sexuais', 'Atuação em casos de estupro, assédio sexual e outros crimes dessa natureza.'],
  ['Crimes de Trânsito', 'Defesa especializada em homicídio culposo, embriaguez ao volante e outros crimes de trânsito.'],
  ['Divórcio e Separação', 'Orientação e acompanhamento em divórcios consensuais ou litigiosos.'],
  ['Guarda e Convivência', 'Atuação em ações de guarda, regulamentação de convivência e proteção dos interesses dos filhos.'],
  ['Direito do Consumidor', 'Defesa em problemas com produtos, serviços, cobranças abusivas e descumprimento de ofertas ou contratos.'],
  ['Direito do Trabalho', 'Atuação em reclamações trabalhistas, rescisões, verbas, assédio moral e defesa de trabalhadores e empregadores.'],
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
    return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
  }
  if (type === 'phone') {
    return <svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.66 2.62a2 2 0 0 1-.45 2.11L8.05 9.72a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.84.32 1.72.54 2.62.66A2 2 0 0 1 22 16.92z"/></svg>
  }
  if (type === 'clock') {
    return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
  }
  return <svg {...common}><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>
}
function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;

  const nome = form.nome.value;
  const email = form.email.value;
  const telefone = form.telefone.value;
  const especialidade = form.especialidade.value;
  const mensagem = form.mensagem.value;

  const texto = `Olá! Meu nome é ${nome}.

E-mail: ${email}
Telefone: ${telefone}

Área: ${especialidade}

Mensagem:
${mensagem}`;

  window.open(
    `https://wa.me/5547999612565?text=${encodeURIComponent(texto)}`,
    "_blank"
  );
}
function App() {
  return (
    <div className="site">
      <header className="topbar">
        <div className="topbar__inner">
          
          <div className="topbar__brand">
  <img src={logoCompleta} alt="Lucas Hobal de Oliveira" />
</div>
          <div className="topbar__item">
  <Icon type="mail" />
  <a href="mailto:lucashobaldeoliveiraadv@gmail.com">
    lucashobaldeoliveiraadv@gmail.com
  </a>
</div>
          <div className="topbar__item">
  <Icon type="phone" />
  <a href="tel:+5547999612565">47 9 9961 2565</a>
</div>
          <div className="topbar__item"><Icon type="clock" /><span>8:00 – 18:00</span></div>
          <a className="topbar__button" href="#contato">Fale Conosco</a>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero__inner">

            <div className="hero__copy">
              <p className="hero__eyebrow">Advogado em Bombinhas</p>
              <h1>
                Acompanhamentos em audiência de custódia, audiência preliminar em processos do
                juizado especial criminal, bem como em depoimentos na delegacia de polícia civil.
              </h1>
              <p className="hero__support">Estou pronto para te ajudar com o que é seu por direito.</p>
              <a
  className="button button--gold"
  href="https://wa.me/5547999612565"
  target="_blank"
  rel="noopener noreferrer"
>
  Entrar em contato agora
</a>
<p className="hero__oab">OAB/SC 75.614</p>            </div>

            <img className="hero__lawyer" src={advogadoPrincipal} alt="Advogado Lucas Hobal de Oliveira" />
          </div>
        </section>

        <section className="benefits">
          <article>
            <span className="benefits__icon"><Icon /></span>
            <h3>Atuação em todas as instâncias judiciais</h3>
            <p>Representação jurídica estratégica e acompanhamento completo em todas as fases do processo.</p>
          </article>
          <article>
            <span className="benefits__icon benefits__icon--round"><Icon /></span>
            <h3>Atuação multidisciplinar</h3>
            <p>Soluções jurídicas na área criminal, trabalhista, cível, consumerista e familiar.</p>
          </article>
          <article>
            <span className="benefits__icon benefits__icon--round"><Icon /></span>
            <h3>Atendimento rápido</h3>
            <p>Atuação em Bombinhas e região.</p>
          </article>
        </section>

        <section className="about" id="sobre">
          <div className="about__imageWrap">
            <img src={advogadoSobre} alt="Retrato profissional do advogado" className="about__image" />
          </div>
          <div className="about__copy">
            <p className="section-kicker">Conheça</p>
            <h2>Lucas Hobal de Oliveira</h2>
            <p>
  Sou advogado com atuação nas áreas de Direito Criminal, Direito do Trabalho,
  Direito Civil e do Consumidor e Direito da Família.
</p>

<p>
  Ofereço atendimento ético, responsável e individualizado, com análise
  cuidadosa de cada caso e definição da estratégia jurídica mais adequada.
</p>

<p className="about__highlight">
  Atuação em Bombinhas e região!
</p>
          </div>
        </section>

        <section className="practice" id="atuacao">
          <div className="section-heading">
            <p>O que fazemos?</p>
            <h2>Áreas de Atuação</h2>
          </div>

          <div className="practice__grid">
            {areas.map(([title, text]) => (
              <article className="practice__item" key={title}>
                <span className="practice__icon"><Icon /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <a className="button button--gold practice__button" href="#contato">Entrar em contato agora</a>
        </section>

        <section className="contact-card" id="contato">
          <div className="contact-card__intro">
            <p className="section-kicker">Precisando de orientação jurídica?</p>
            <h2>Fale diretamente com um advogado.</h2>
            <p>Nossa equipe está pronta para analisar seu caso com discrição, agilidade e atendimento personalizado.</p>
          </div>

<form className="contact-form" onSubmit={handleSubmit}>            <h2>Consulta de caso</h2>
            <div className="contact-form__grid">
              <label>Nome<input type="text" name="nome" /></label>
              <label>E-mail<input type="email" name="email" /></label>
              <label>Telefone<input type="tel" name="telefone" /></label>
              <label>Especialidade
                <select name="especialidade" defaultValue="">
                  <option value="" disabled>Selecionar</option>
                  <option>Direito Criminal</option>
                  <option>Direito Civil</option>
                  <option>Direito da Família</option>
                  <option>Direito do Consumidor</option>
                  <option>Direito do Trabalho</option>
                </select>
              </label>
              <label className="contact-form__message">Mensagem<textarea name="mensagem" rows="3" /></label>
            </div>
            <button className="button button--gold" type="submit">✓ Enviar</button>
          </form>
        </section>

        <section className="footer-contact">
          <div>
            <p className="section-kicker">Fale Conosco</p>
            <h2>Atendimento Online</h2>
            <p><Icon type="phone" /> 47 9 9961 2565</p>
            <p><Icon type="mail" /> lucashobaldeoliveiraadv@gmail.com</p>
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

export default App
