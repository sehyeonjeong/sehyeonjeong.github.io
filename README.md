# AfreSH Portfolio — React

기존 `sehyeonjeong.github.io` 정적 HTML 포트폴리오를 React와 Vite 구조로 옮긴 버전입니다.

## 실행

```bash
npm install
npm run dev
```

## 구성

- 섹션별 React 컴포넌트
- Swiper React 기반 프로젝트 슬라이더
- 반응형 레이아웃과 reduced-motion 지원
- GitHub Pages 사용자 도메인을 위한 `public/CNAME`

현재 이미지 자산은 원본 저장소의 Raw URL을 참조합니다. 완전한 독립 배포가 필요하면 `images/`를 `public/images/`로 복사하고 `src/data.js`의 `ASSET_BASE`를 `/images`로 변경하세요.
