import useTyping from '../hooks/useTyping.js'

export default function Hero() {
  const typed = useTyping('AfreSH\nPORTFOLIO.')

  return (
    <section className="hero" id="top">
      <div className="shell hero__inner">
        <h1 className="hero__title" aria-label="AfreSH Portfolio">
          {typed.split('\n').map((line, index) => <span key={`${line}-${index}`}>{line}</span>)}
        </h1>
        <ul className="identity">
          <li>Jeong Sehyeon 정세현</li>
          <li><a href="mailto:AfreSH@AfreSH.page">AfreSH@AfreSH.page</a></li>
        </ul>
      </div>
    </section>
  )
}
