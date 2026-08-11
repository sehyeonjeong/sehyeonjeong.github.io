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
