'use client';
import style from './subTop.module.scss';

interface SubtopProps {
    title: string;
}
export default function SubTop({ title }: SubtopProps) {
    return (
        <div className={style.sub_top}>
            <h2>{title}</h2>
        </div>
    );
}
