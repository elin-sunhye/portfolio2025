// AutoAlert의 상태타입 지정
export type StatusType = 'success' | 'warning' | 'info' | 'error';

// component card type
export interface cardType {
    title: string;
    desc: string;
    cont: string;
    site: string;
    skills: string[];
    points: string[];
}
