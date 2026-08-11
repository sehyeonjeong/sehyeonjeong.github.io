const ASSET_BASE = '/images'

export const imageUrl = (path) => `${ASSET_BASE}/${path}`

export const experiences = [
  {
    period: '2026.04.03—현재',
    title: '하나은행 고도화',
    context: '미디어포스 얼라이언스 · 고객사 파견',
    label: 'FINANCE · CONFIDENTIAL',
    description: 'React·TypeScript 환경에서 기존 공통 컴포넌트를 활용해 메인 홈과 보이스피싱 피해 서류 제출 페이지를 구현했습니다.',
    highlights: ['페이지 단위 클라이언트 요청 반영', '금융 UI 가이드·웹 접근성·반응형 기준 준수'],
    skills: ['React', 'TypeScript', 'SCSS', '웹 접근성', '반응형'],
  },
  {
    period: '2025.10.22—현재',
    title: 'STRAS 주문 서비스',
    context: '외주 프로젝트',
    label: 'COMMERCE · CONFIDENTIAL',
    description: '맞춤형 댄스화의 상품 탐색부터 옵션 구성, 고객별 가격 계산, 주문 취합, ERP 판매주문과 관리자 운영까지 연결한 주문 서비스를 개발하고 있습니다.',
    highlights: ['사용자 웹·관리자 시스템 기능 개발', 'Supabase 주문 데이터와 ECOUNT ERP 연동'],
    skills: ['Next.js', 'React', 'TypeScript', 'Supabase', 'ECOUNT ERP'],
  },
  {
    period: '2024.12.02—2025.07.17',
    title: 'IBK기업은행 리뉴얼',
    context: '미디어포스 얼라이언스 · 고객사 파견',
    label: 'FINANCE · CONFIDENTIAL',
    description: '기업은행 웹 서비스 리뉴얼 프로젝트에 참여해 금융 서비스 기준에 맞는 화면 퍼블리싱과 품질 대응을 수행했습니다.',
    skills: ['HTML5', 'CSS', 'JavaScript', '웹 접근성', '반응형'],
  },
  {
    period: '2024.10—2024.11',
    title: 'NH농협 본사 제안',
    context: '미디어포스 얼라이언스 · 고객사 파견',
    label: 'FINANCE · PROPOSAL',
    description: 'NH농협 본사 제안 프로젝트의 화면 구현과 인터랙션 표현에 참여했습니다.',
    skills: ['HTML5', 'CSS', 'JavaScript', 'UI Prototype'],
  },
  {
    period: '2024.06—2024.09.30',
    title: '신한카드 아름인 구축·고도화',
    context: '미디어포스 얼라이언스 · 고객사 파견',
    label: 'FINANCE · CONFIDENTIAL',
    description: '신한카드 아름인 서비스의 구축과 고도화 프로젝트에서 화면 퍼블리싱과 운영 요청 반영을 수행했습니다.',
    skills: ['HTML5', 'CSS', 'JavaScript', '웹 접근성', '반응형'],
  },
]

export const works = [
  {
    title: '신한금융그룹',
    description: '신한금융그룹 웹사이트 구축 프로젝트에서 주요 콘텐츠 영역의 퍼블리싱과 인터랙션 구현을 담당했습니다.',
    image: 'work/shinhan.webp',
    imageWidth: 1600,
    imageHeight: 775,
    href: 'https://www.shinhangroup.com/kr/main',
    period: 'Git 활동 확인 2024.04.25—06.18',
    role: '주요 콘텐츠 영역 퍼블리싱 · 인터랙션 구현',
    highlights: [
      'ESG, 그룹 소개, 스포츠 후원, IR, 지배구조 등 주요 콘텐츠 영역 구축·고도화',
      '국문 중심의 다국어 화면과 반응형 UI 구현 및 운영 요청 반영',
      'Git 이력 기준 121개 파일, 34개 HTML 화면 구축·수정',
    ],
    skills: ['HTML5', 'CSS', 'JavaScript', 'jQuery', 'GSAP', 'ScrollTrigger', 'Swiper', '반응형', '다국어'],
  },
  {
    title: '등기통',
    description: '주소 검색부터 부동산 공부 선택, 열람 동의·결제, 마이페이지까지 이어지는 부동산 문서 발급 서비스의 반응형 UI를 퍼블리싱했습니다.',
    image: 'work/deunggitong.webp',
    imageWidth: 1600,
    imageHeight: 1067,
    href: 'https://www.afresh.page/DGT',
    role: '전 화면 퍼블리싱 · UI 인터랙션 구현',
    highlights: [
      '주소 검색·검색 결과·문서 선택·열람으로 이어지는 서비스 흐름 구현',
      '회원·마이페이지·결제·충전·모달·폼 검증 상태 구현',
      'PC·모바일 내비게이션과 반응형 화면 대응',
    ],
    skills: ['HTML5', 'CSS', 'JavaScript', 'jQuery', 'GSAP', 'Gulp', '반응형'],
  },
  {
    title: '2019 연희걷다 | 연연백화점',
    description: '연희·연남동의 약 100개 상점과 크리에이터 정보를 5개 주제관으로 구성한 로컬 페스티벌 웹사이트를 반응형으로 퍼블리싱했습니다.',
    image: 'work/yeonhui-festival.webp',
    imageWidth: 1600,
    imageHeight: 1067,
    href: 'https://www.afresh.page/yeonhui-festival',
    role: '행사 웹사이트 전 화면 퍼블리싱',
    highlights: [
      '연연패스·브랜드관·특별관·문화센터·지도 등 5개 콘텐츠 섹션 구성',
      'PC·모바일 내비게이션과 이미지 중심의 반응형 레이아웃 구현',
      '영상·지도·외부 링크와 SEO·OG 메타데이터 구성',
    ],
    skills: ['HTML5', 'CSS', 'JavaScript', 'jQuery', '반응형', 'SEO·OG'],
  },
]
