import { cardType } from '@/type/commonType';

// 프로젝트 리스트
export const projectArr: cardType[] = [
    {
        title: 'StockSim',
        desc: '가상 주식 투자 시뮬레이터',
        site: '',
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
        desc: '멘토링 전문 사이트',
        site: '',
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
        desc: '',
        site: '',
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
