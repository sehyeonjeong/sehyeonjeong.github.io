import { imageUrl } from '../data.js'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="shell about__grid">
        <img className="profile" src={imageUrl('apple-profile-image.jpeg')} alt="정세현 프로필" />
        <div>
          <p className="eyebrow">ABOUT</p>
          <h2>AfreSH.<br />— 다시, 새로이</h2>
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
