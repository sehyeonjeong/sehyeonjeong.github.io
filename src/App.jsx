import { useEffect, useState } from 'react'
import { A11y, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { designs, imageUrl, works } from './data.js'

function useTyping(text, delay = 95) {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    let index = 0
    const timer = window.setInterval(() => {
      index += 1
      setTyped(text.slice(0, index))
      if (index >= text.length) window.clearInterval(timer)
    }, delay)
    return () => window.clearInterval(timer)
  }, [delay, text])

  return typed
}

function Header() {
  return (
    <header className="header">
      <div className="shell header__inner">
        <a className="logo" href="#top" aria-label="AfreSH 홈">AfreSH<span>.</span></a>
        <nav className="socials" aria-label="연락처">
          <a href="https://github.com/sehyeonjeong" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:AfreSH@AfreSH.page">Email</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
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

function About() {
  return (
    <section className="section about" id="about">
      <div className="shell about__grid">
        <img className="profile" src={imageUrl('apple-profile-image.jpeg')} alt="정세현 프로필" />
        <div>
          <p className="eyebrow">ABOUT</p>
          <h2>AfreSH. — 다시, 새로이</h2>
          <div className="copy">
            <p>안녕하세요. 웹 디자이너이자 웹 퍼블리셔 정세현입니다. 제가 가진 기술로 웹사이트를 디자인하고 제작하는 일을 좋아합니다.</p>
            <p>CSS와 JavaScript를 이용한 동적 모션, 다양한 브라우저와 모바일 환경에 대응하는 반응형 웹을 꾸준히 연구하고 있습니다.</p>
            <p>새로운 곳에서 다양한 방법으로 <em>‘새로이’</em> 쓰이기를 바라며, 사람들과의 소통을 통해 더 나아갈 기회를 만들고자 합니다.</p>
          </div>
          <a className="button" href="https://www.notion.so/afresh-page/Jeong-Sehyeon-AfreSH-Web-Designer-Web-Publisher-fd80e3c500f1453ab4689a6501d8c0e7" target="_blank" rel="noreferrer">이력서 보기</a>
        </div>
      </div>
    </section>
  )
}

function Work() {
  return (
    <section className="section work" id="work">
      <div className="shell">
        <p className="eyebrow">SELECTED WORK</p>
        <h2>Work.</h2>
        <Swiper
          className="work-slider"
          modules={[A11y, Keyboard, Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          spaceBetween={48}
          slidesPerView={1}
        >
          {works.map((work) => (
            <SwiperSlide key={work.title}>
              <article className="work-card">
                <img src={imageUrl(work.image)} alt={`${work.title} 프로젝트 화면`} />
                <div className="work-card__body">
                  <div>
                    <h3>{work.title}</h3>
                    <p>{work.description}</p>
                    <ul className="tags" aria-label="사용 기술">
                      {work.skills.map((skill) => <li key={skill}>{skill}</li>)}
                    </ul>
                  </div>
                  <a className="button" href={work.href} target="_blank" rel="noreferrer">페이지 보기</a>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

function DesignModal({ design, onClose }) {
  useEffect(() => {
    if (!design) return undefined
    const closeOnEscape = (event) => event.key === 'Escape' && onClose()
    document.body.classList.add('modal-open')
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [design, onClose])

  if (!design) return null
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={design.title} onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="modal__window">
        <div className="modal__header">
          <h2>{design.title}</h2>
          <button type="button" onClick={onClose} aria-label="닫기">×</button>
        </div>
        <img src={imageUrl(design.image)} alt={design.title} />
      </div>
    </div>
  )
}

function Design() {
  const [selected, setSelected] = useState(null)
  return (
    <section className="section design" id="design">
      <div className="shell">
        <p className="eyebrow">VISUAL ARCHIVE</p>
        <h2>Design.</h2>
        <ul className="design-grid">
          {designs.map((design) => (
            <li key={design.image}>
              <button type="button" onClick={() => setSelected(design)} aria-label={`${design.title} 크게 보기`}>
                <img loading="lazy" src={imageUrl(design.image)} alt={design.title} />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <DesignModal design={selected} onClose={() => setSelected(null)} />
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <span>AfreSH.</span>
        <p>개인 포트폴리오 용도로 제작되었습니다.<br />© 2026 AfreSH.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return <><Header /><main><Hero /><About /><Work /><Design /></main><Footer /></>
}
