import useTyping from '../hooks/useTyping.js'

const HERO_TITLE = 'JEONG\nSEHYEON.'
const HERO_LINES = HERO_TITLE.split('\n')

export default function Hero() {
  const typed = useTyping(HERO_TITLE)
  const typedLines = typed.split('\n')
  const isTypingComplete = typed === HERO_TITLE
  const activeLineIndex = typed.includes('\n') ? 1 : 0

  return (
    <section className="hero" id="top">
      <div className="shell hero__inner">
        <h1 className={`hero__title${isTypingComplete ? ' is-complete' : ''}`} aria-label="정세현 프론트엔드 UI 포트폴리오">
          {HERO_LINES.map((line, index) => (
            <span className="hero__title-line" key={line}>
              {typedLines[index] || ''}
              {!isTypingComplete && index === activeLineIndex && (
                <span className="hero__cursor" aria-hidden="true" />
              )}
            </span>
          ))}
        </h1>
        <div className="hero__intro">
          <ul className="identity">
            <li className="identity__role">10 years in Web UI · Frontend UI Developer</li>
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
