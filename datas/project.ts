import { cardType } from '@/type/commonType';

// 프로젝트 리스트
export const projectArr: cardType[] = [
    {
        title: 'StockSim',
        desc: '가상 주식 투자 시뮬레이터',
        cont: ' 실제 주식 시장 데이터를 기반으로 가상 자금을 운용하며 투자 연습을 할 수 있는 모의 투자 플랫폼입니다. 자신의 포트폴리오를 구성해 매수·매도 전략을 시험해보고, 시시각각 변하는 시세 차익과 배당 수익을 체험할 수 있습니다.',
        site: 'https://stocksim.store/swagger-ui/index.html',
        skills: [
            'Spring Boot',
            'Java',
            'JWT',
            'MySQL',
            'JPA',
            'Redis',
            'Stripe/Toss Payments',
        ],
        points: [
            '회원가입 및 로그인 기능 (JWT 기반)',
            '실시간 주식 시세 조회 (외부 API 연동)',
            '가상 포인트 충전 및 결제 시스템 (Stripe/Toss Payments 연동)',
            '주식 매매 및 거래 내역 관리',
            '포트폴리오 관리 및 투자 수익률 계산',
            '랭킹 시스템 및 투자 성과 분석',
        ],
    },
    {
        title: 'DreamPath',
        desc: '멘토링 전문 취춘생 사이트',
        cont: ' 취준생들이 멘토링을 하며 정보 및 자료를 공유할 수 있는 플랫폼 입니다. 사용자들이 멘토링을 통해 미니 프로젝트를 진행해볼 수 있으며, 관리자들이 제공하는 정보 및 자료를 통해 정보를 얻을 수 있습니다. 있습니다.',
        site: 'https://dreampathpj.store',
        skills: [
            'Spring Boot',
            'Java',
            'JWT',
            'MySQL',
            'React.js',
            'Next.js',
            'JavaScript',
            'TypeScript',
            'SCSS',
            'CSS',
        ],
        points: [],
    },
    {
        title: 'Wiko',
        desc: '주물 • 주조 및 산업 부자재 전문 기업',
        cont: '주물 • 주조 및 산업 부자재 전문 기업 사이트 입니다.',
        site: 'https://wiko.netlify.app/',
        skills: [
            'React.js',
            'Next.js',
            'JavaScript',
            'TypeScript',
            'SCSS',
            'CSS',
        ],
        points: [],
    },
];
