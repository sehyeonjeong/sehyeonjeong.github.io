import { useEffect, useRef, useState } from 'react'
import { imageUrl } from '../data.js'

export default function About() {
  const profileRef = useRef(null)
  const [isProfileVisible, setIsProfileVisible] = useState(false)

  useEffect(() => {
    const profile = profileRef.current

    if (!profile || !('IntersectionObserver' in window)) {
      setIsProfileVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsProfileVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(profile)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="section about" id="about">
      <div className="shell about__grid">
        <img
          ref={profileRef}
          className={`profile${isProfileVisible ? ' is-visible' : ''}`}
          src={imageUrl('profile.webp')}
          alt="정세현 프로필"
          width="420"
          height="420"
          loading="lazy"
          decoding="async"
        />
        <div>
          <p className="eyebrow">ABOUT</p>
          <h2>복잡한 요구를<br />자연스러운 화면으로.</h2>
          <div className="copy">
            <p>안녕하세요. 웹 디자인·운영과 금융권 UI 구축 경험을 기반으로 React·TypeScript 서비스 개발까지 업무 범위를 확장해 온 약 10년 경력의 프론트엔드 UI 실무자 정세현입니다.</p>
            <p>웹 접근성과 반응형 UI, CSS·JavaScript 인터랙션을 기반으로 안정적인 화면을 만들고, React·TypeScript 컴포넌트와 API·데이터 연동을 통해 화면과 시스템을 연결합니다.</p>
            <p>복잡한 요구사항과 제약을 사용자에게는 자연스러운 경험으로 전달하고, 새로운 기술과 협업 방식을 익히며 더 나은 구현 방법을 찾는 실무자가 되고자 합니다.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
