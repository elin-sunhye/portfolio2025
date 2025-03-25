import { MouseEventHandler } from 'react';
import style from './card.module.scss';
import { careerType } from '@/type/career';

interface cardProps {
    data: careerType;
    onClick?: MouseEventHandler<HTMLDivElement>;
}
export default function Card({ data, onClick }: cardProps) {
    return (
        <div className={style.card} onClick={onClick}>
            <p>{data.title}</p>
            <span>{data.desc}</span>
        </div>
    );
}
