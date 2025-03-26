'use client';
import style from './subTop.module.scss';

interface SubtopProps {
    title: string;
    color: string;
}
export default function SubTop({ title, color }: SubtopProps) {
    return (
        <div className={style.sub_top}>
            <h2 style={{ color: color }}>{title}</h2>
        </div>
    );
}
