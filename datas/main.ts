import { certifiType } from '@/type/mainType';

// 스킬 배열 ---------------------------------
export const skillArr: string[] = ['back', 'front', 'design'];

export const fullSkillArr: {
    src: string;
    alt: string;
    name: string;
    type: string;
}[] = [
    {
        src: '/img/ico_node.svg',
        alt: '노드',
        name: 'Node.js',
        type: 'back',
    },
    {
        src: '/img/ico_java.svg',
        alt: '자바',
        name: 'JAVA',
        type: 'back',
    },
    {
        src: '/img/ico_springboot.svg',
        alt: '스프링부트',
        name: 'Spring Boot',
        type: 'back',
    },
    {
        src: '/img/ico_mysql.svg',
        alt: '마이에스큐엘',
        name: 'MySQL',
        type: 'back',
    },
    {
        src: '/img/ico_mybatis.svg',
        alt: '마이바티스',
        name: 'MyBatis',
        type: 'back',
    },
    {
        src: '/img/ico_restapi.svg',
        alt: '레스트에이피아이',
        name: 'REST API',
        type: 'back',
    },
    {
        src: '/img/ico_aws.svg',
        alt: '아마존웹서비스',
        // name: 'AWS (EC2, S3, RDS)',
        name: 'AWS RDS',
        type: 'back',
    },
    {
        src: '/img/ico_oraclecloud.svg',
        alt: '오라클 클라우드',
        name: 'Oracle Cloud',
        type: 'back',
    },
    // {
    //     src: '/img/ico_chatgpt.svg',
    //     alt: '챗피비티',
    //     name: 'chatGPT 및 OpenAI API',
    //     type: 'back',
    // },
    {
        src: '/img/ico_docker.svg',
        alt: '도커',
        name: 'Docker',
        type: 'back',
    },
    // {
    //     src: '/img/ico_putty.svg',
    //     alt: '푸티',
    //     name: 'PuTTY',
    //     type: 'back',
    // },
    {
        src: '/img/ico_nginx.svg',
        alt: '엔진엑스',
        name: 'Nginx',
        type: 'back',
    },
    {
        src: '/img/ico_dbms.svg',
        alt: '디비엠에스',
        name: 'DBMS',
        type: 'back',
    },
    {
        src: '/img/ico_next.svg',
        alt: '넥스트',
        name: 'Next.js',
        type: 'front',
    },
    {
        src: '/img/ico_javascript.svg',
        alt: '자바스크립트',
        name: ' JavaScript',
        type: 'front',
    },
    {
        src: '/img/ico_typescript.svg',
        alt: '타입스크립트',
        name: 'TypeScript',
        type: 'front',
    },
    {
        src: '/img/ico_html.svg',
        alt: '에이치티엠엘',
        name: 'HTML',
        type: 'front',
    },
    {
        src: '/img/ico_scss.svg',
        alt: '에스씨에스에스',
        name: 'SCSS',
        type: 'front',
    },
    {
        src: '/img/ico_react.svg',
        alt: '리액트',
        name: 'React.js',
        type: 'front',
    },
    {
        src: '/img/ico_query.svg',
        alt: '리액트 쿼리',
        name: 'React Query',
        type: 'front',
    },
    {
        src: '/img/ico_hookform.svg',
        alt: '리액트 훅 폼',
        name: 'React Hook Form',
        type: 'front',
    },
    {
        src: '/img/ico_nextauth.svg',
        alt: '넥스트어스',
        name: 'NextAuth.js',
        type: 'front',
    },
    {
        src: '/img/ico_figma.svg',
        alt: '피그마',
        name: 'Figma',
        type: 'design',
    },
    {
        src: '/img/ico_photoshop.svg',
        alt: '포토샵',
        name: 'Photoshop',
        type: 'design',
    },
    {
        src: '/img/ico_illustrator.svg',
        alt: '일러스트레이터',
        name: 'Illustrator',
        type: 'design',
    },
];

// 자격증 배열 ---------------------------------
export const certifiArr: certifiType[] = [
    // {
    //     name: '정보처리기사',
    //     date: '2025-06',
    //     agency: '한국산업인력공단',
    //     detail: '정보시스템의 생명주기 전반에 걸친 프로젝트 업무를 수행하는 직무로서 계획수립, 분석, 설계, 구현, 시험, 운영, 유지보수 등의 업무를 수행할 수 있는 능력 검증',
    // },
    // {
    //     name: 'SQLD',
    //     date: '2025-04',
    //     agency: '한국산업인력공단',
    //     detail: '데이터모델링에 기본 지식을 바탕으로 SQL 작성, 성능 최적화 등 데이터베이스 개체 설계 및 구현 등에 대한 전문지식 및 실무적 수행 능력 검증',
    // },
    {
        name: '정보처리기사 필기',
        date: '2025-03',
        agency: '한국산업인력공단',
        detail: '정보시스템의 생명주기 전반에 걸친 프로젝트 업무를 수행하는 직무로서 계획수립, 분석, 설계, 구현, 시험, 운영, 유지보수 등의 업무를 수행할 수 있는 능력 검증',
    },
    {
        name: 'Web Design 기능사',
        date: '2020-11-05',
        agency: '한국산업인력공단',
        detail: '웹 페이지를 제작할 수 있는 실무 능력을 인정',
    },
    {
        name: 'ACA Photoshop',
        date: '2016-10-16',
        agency: 'ADOBE',
        detail: 'Adobe Photoshop 소프트웨어 사용 능력을 공인',
    },
];
