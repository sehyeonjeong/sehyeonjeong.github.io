import useTyping from '../hooks/useTyping.js'
import usePointerParallax from '../hooks/usePointerParallax.js'

const HERO_TITLE = 'JEONG\nSEHYEON.'

export default function Hero() {
  const typed = useTyping(HERO_TITLE)
  const heroRef = usePointerParallax()
  const isTypingComplete = typed === HERO_TITLE

  return (
    <section ref={heroRef} className="hero" id="top">
      <div className="shell hero__inner">
        <h1 className={`hero__title${isTypingComplete ? ' is-complete' : ''}`} aria-label="정세현 프론트엔드 UI 포트폴리오">
          {typed.split('\n').map((line, index) => <span key={`${line}-${index}`}>{line}</span>)}
        </h1>
        <div className="hero__intro">
          <ul className="identity">
            <li className="identity__role">약 10년 경력 · Frontend UI Developer</li>
            <li className="identity__skills">Web Publishing · React · TypeScript</li>
          </ul>
          <div className="hero__actions">
            <a className="button" href="#experience">Experience 보기</a>
            <a className="button hero__button--secondary" href="/jeong-sehyeon-career.pdf" target="_blank" rel="noreferrer">경력기술서 보기</a>
          </div>
        </div>
      </div>
    </section>
  )
}
