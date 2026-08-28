import { experiences } from '../data.js'

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="shell">
        <div className="experience__heading">
          <div>
            <p className="section-kicker">Selected Frontend Experience</p>
            <h2>Experience.</h2>
          </div>
          <p>React·TypeScript 기반 금융 UI와 Next.js 주문 서비스를 중심으로, 컴포넌트 구현부터 API·데이터 연동까지 담당합니다.</p>
        </div>
        <div className="experience__list">
          {experiences.map((experience) => (
            <article className={`experience-card${experience.featured ? ' is-featured' : ''}`} key={`${experience.period}-${experience.title}`}>
              <div className="experience-card__meta">
                <p>{experience.period}</p>
                <span>{experience.label}</span>
              </div>
              <div className="experience-card__content">
                <p className="experience-card__context">{experience.context}</p>
                <h3>{experience.title}</h3>
                <p className="experience-card__description">{experience.description}</p>
                {experience.highlights && (
                  <ul className="experience-card__highlights">
                    {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                )}
                <ul className="tags" aria-label={`${experience.title} 사용 기술`}>
                  {experience.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
        <p className="experience__notice">금융권 및 회원제 프로젝트는 보안 정책에 따라 실제 화면 대신 참여 범위와 기술적 해결 과정 중심으로 소개합니다.</p>
      </div>
    </section>
  )
}
