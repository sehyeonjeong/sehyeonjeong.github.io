export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="shell contact__inner">
        <p className="section-kicker">Contact</p>
        <h2>함께 만들 기회를<br />기다리고 있습니다.</h2>
        <p>Frontend UI Developer 포지션과 프로젝트 협업에 관해 편하게 연락해 주세요.</p>
        <div className="contact__actions">
          <a className="button" href="mailto:AfreSH@AfreSH.page">이메일 보내기</a>
          <a className="button contact__button--secondary" href="/jeong-sehyeon-career.pdf" target="_blank" rel="noreferrer">경력기술서 보기</a>
        </div>
      </div>
    </section>
  )
}
