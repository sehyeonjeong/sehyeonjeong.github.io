const ASSET_BASE = 'https://raw.githubusercontent.com/sehyeonjeong/sehyeonjeong.github.io/main/images'

export const imageUrl = (path) => `${ASSET_BASE}/${path}`

export const works = [
  {
    title: '신한금융그룹',
    description: '신한금융그룹 웹사이트 구축 프로젝트입니다.',
    image: 'work/shinhan.png',
    href: 'https://www.shinhangroup.com/kr/main',
    skills: ['퍼블리싱 100%', 'HTML', 'CSS', 'GSAP', 'JavaScript', 'jQuery', '반응형'],
  },
  {
    title: '등기통',
    description: '주소 검색 한 번으로 부동산 공부를 한 번에 받아볼 수 있는 서비스입니다.',
    image: 'work/deunggitong.jpg',
    href: 'https://www.afresh.page/DGT',
    skills: ['퍼블리싱 100%', 'HTML', 'CSS', 'JavaScript', 'jQuery', '반응형'],
  },
  {
    title: '2019 연희걷다 | 연연백화점',
    description: '연희·연남동의 소상공인과 다양한 분야의 크리에이터가 함께 만든 로컬 페스티벌입니다.',
    image: 'work/yeonhui-festival-1600.jpg',
    href: 'https://www.afresh.page/yeonhui-festival',
    skills: ['퍼블리싱 100%', 'HTML', 'CSS', 'jQuery', '반응형'],
  },
]

export const designs = [
  ['3minutevitality.jpg', '상세페이지 — 금단미인 3초활력'],
  ['ganbojima.jpg', '상세페이지 — 금단미인 간보지마'],
  ['ssopalpalpal.jpg', '상세페이지 — 금단미인 쏘팔팔팔'],
  ['vitaminmineral.jpg', '상세페이지 — 금단미인 비타민미네랄'],
  ['postbiotics.jpg', '상세페이지 — 금단미인 포스트바이오틱스'],
  ['maxomega.jpg', '상세페이지 — 금단미인 맥스오메가'],
  ['propolis.jpg', '상세페이지 — 금단미인 프로폴리스'],
  ['chaumcollagen.jpg', '상세페이지 — 금단미인 채움콜라겐'],
  ['dietgueb.jpg', '상세페이지 — 금단미인 다이어트 급'],
  ['goong.jpg', '상세페이지 — 금단미인 궁'],
  ['j_one_diethwan_SPEC_old.jpg', '상세페이지 — 청춘제당 다이어트 환'],
  ['nokyongtheblack_new.jpg', '상세페이지 — 금단미인 녹용더블랙'],
  ['metaliica-poster.png', "포스터 — I MET 'TALLICA"],
  ['sewoon-poster.png', '포스터 — 세운상가에서 놀자'],
  ['dosisi01.png', '포스터 — 도시시 북토크 01'],
  ['dosisi02.png', '포스터 — 도시시 북토크 02'],
  ['one_envelope.png', '인쇄디자인 — 원교재사 대봉투'],
  ['one-shoping.png', '인쇄디자인 — 원교재사 쇼핑백'],
  ['printx-styleguide.jpg', '스타일가이드 — PRINTX'],
].map(([file, title]) => ({ image: `design/${file}`, title }))
