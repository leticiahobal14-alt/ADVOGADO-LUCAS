import './Trabalhista.css'

import advogadoHero from './assets/advogado-hero.png'
import fotoSobre from './assets/foto-sobre.png'
import logoCompleta from './assets/logo-completa.png'


function Trabalhista() {
  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const nome = formData.get('nome')
    const email = formData.get('email')
    const mensagem = formData.get('mensagem')

    const texto = `Olá! Meu nome é ${nome}.

E-mail: ${email}

Gostaria de orientação sobre uma questão trabalhista.

Mensagem:
${mensagem}`

    window.open(
      `https://wa.me/5547999612565?text=${encodeURIComponent(texto)}`,
      '_blank',
    )
  }

  return (
    <div className="trabalhista-page">

      {/* CABEÇALHO */}
      <header className="trabalhista-header">

        <div className="trabalhista-header__info">
          <span>✉ lucashobaldeoliveiraadv@gmail.com</span>
          <span>☎ 47 9 9961 2565</span>
          <span>◷ 08:00 a 18:00</span>
        </div>

        <a href="/" className="trabalhista-header__home">
          Site principal
        </a>

        <a
          href="https://wa.me/5547999612565?text=Olá%21%20Gostaria%20de%20orientação%20sobre%20uma%20questão%20trabalhista."
          target="_blank"
          rel="noopener noreferrer"
          className="trabalhista-header__button"
        >
          Entre em contato
        </a>

      </header>


      {/* HERO */}
      <section className="trabalhista-hero">

        <div className="trabalhista-hero__content">

          <h1>
            <strong>Problemas no trabalho?</strong>{' '}
            Entenda quais são seus direitos.
          </h1>

          <p>
            Orientação jurídica em questões trabalhistas, com análise
            individual do seu caso.
          </p>

          <p className="trabalhista-hero__local">
            Atendimento em Bombinhas e região, com possibilidade de
            atendimento online.
          </p>

          <a
            href="https://wa.me/5547999612565?text=Olá%21%20Gostaria%20de%20orientação%20sobre%20uma%20questão%20trabalhista."
            target="_blank"
            rel="noopener noreferrer"
            className="trabalhista-hero__button"
          >
            Falar com advogado
          </a>

        </div>

        <img
          src={advogadoHero}
          alt="Advogado Lucas Hobal de Oliveira"
          className="trabalhista-hero__lawyer"
        />

      </section>


      {/* SITUAÇÕES */}
      <section className="trabalhista-situacoes">

        <h2>
          Você está passando por algumas dessas situações?
        </h2>

        <div className="trabalhista-situacoes__grid">

          <article>
            Demissão<br />
            sem receber<br />
            corretamente
          </article>

          <article>
            Horas<br />
            extras não<br />
            pagas
          </article>

          <article>
            FGTS<br />
            irregular
          </article>

          <article>
            Assédio<br />
            Moral
          </article>

          <article>
            Acidente/<br />
            doença<br />
            relacionada ao<br />
            trabalho
          </article>

          <article>
            Rescisão<br />
            Indireta
          </article>

        </div>

        <a
          href="https://wa.me/5547999612565?text=Olá%21%20Gostaria%20de%20orientação%20sobre%20uma%20questão%20trabalhista."
          target="_blank"
          rel="noopener noreferrer"
          className="trabalhista-situacoes__button"
        >
          Falar com advogado
        </a>

      </section>


      {/* CONTATO */}
      <section className="trabalhista-contato" id="contato">

        <div className="trabalhista-contato__texto">

          <h2>
            Tem dúvidas sobre seus direitos trabalhistas?
          </h2>

          <div className="trabalhista-contato__linha" />

          <p>
            Cada situação possui particularidades.
            Converse com um advogado para
            entender o seu caso.
          </p>

        </div>


        <form
          className="trabalhista-form"
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
            Sua mensagem
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

      </section>


      {/* SOBRE */}
      <section className="trabalhista-sobre">

        <div className="trabalhista-sobre__box">

          <h2>
            Advocacia com atenção ao seu caso
          </h2>

          <div className="trabalhista-sobre__conteudo">

            <img
              src={fotoSobre}
              alt="Lucas Hobal de Oliveira"
              loading="lazy"
            />

            <div>

              <p>
                Sou Lucas Hobal de Oliveira, advogado inscrito
                na OAB/SC 75.614, com atuação em Direito do
                Trabalho e atendimento voltado à análise
                individual de cada situação.
              </p>

              <p>
                Meu trabalho é compreender cada caso com
                atenção, esclarecer as possibilidades jurídicas de
                forma objetiva e conduzir o atendimento com
                responsabilidade, transparência e estratégia.
              </p>

              <strong>OAB/SC 75.614</strong>

            </div>

          </div>

        </div>

      </section>


      {/* RODAPÉ */}
      {/* RODAPÉ */}
<footer className="trabalhista-footer">

  <div className="trabalhista-footer__main">

    <div className="trabalhista-footer__contato">

      <div className="trabalhista-footer__linha" />

      <span className="trabalhista-footer__chamada">
        Fale Conosco
      </span>

      <h3>Atendimento Online</h3>

      <a href="tel:+5547999612565">
        ☎ &nbsp; 47 9 9961 2565
      </a>

      <a href="mailto:lucashobaldeoliveiraadv@gmail.com">
        ✉ &nbsp; lucashobaldeoliveiraadv@gmail.com
      </a>

    </div>


    <iframe
      title="Mapa do escritório"
      src="https://www.google.com/maps?q=R.%20Martim%20Pescador,%201955,%20Bombas,%20Bombinhas%20SC&output=embed"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />

  </div>


  <div className="trabalhista-footer__bottom">

    <span>
      © Todos os direitos reservados – 2026
    </span>

    <span>
      OAB/SC 75.614
    </span>

  </div>

</footer>

    </div>
  )
}

export default Trabalhista