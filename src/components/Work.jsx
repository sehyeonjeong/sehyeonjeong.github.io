import { A11y, Keyboard, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { imageUrl, works } from '../data.js'

export default function Work() {
  return (
    <section className="section work" id="work">
      <div className="shell">
        <p className="eyebrow">PUBLIC WORK</p>
        <h2>Public Work.</h2>
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
                    {work.period && <p className="work-card__period">{work.period}</p>}
                    <h3>{work.title}</h3>
                    <p>{work.description}</p>
                    {work.role && (
                      <dl className="work-card__meta">
                        <div>
                          <dt>ROLE</dt>
                          <dd>{work.role}</dd>
                        </div>
                      </dl>
                    )}
                    {work.highlights && (
                      <ul className="work-card__highlights">
                        {work.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                      </ul>
                    )}
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
