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
          <h2>복잡한 요구를<br />자연스러운 화면으로.</h2>
          <div className="copy">
            <p>웹 디자인·운영에서 시작해 금융권 UI 구축과 React·TypeScript 서비스 개발까지 약 10년간 웹 UI를 구현해 온 정세현입니다.</p>
            <p>웹 접근성과 반응형 UI, 인터랙션에 대한 이해를 바탕으로 컴포넌트와 데이터를 연결하고, 복잡한 요구사항을 사용자가 자연스럽게 이해할 수 있는 화면으로 구현합니다.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
