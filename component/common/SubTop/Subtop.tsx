'use client';
import { forwardRef, Ref } from 'react';
import style from './subTop.module.scss';

interface SubtopProps {
    title: string;
    color: string;
}
const SubTop = ({ title, color }: SubtopProps, ref: Ref<HTMLDivElement>) => {
    return (
        <div className={style.sub_top}>
            <h2 style={{ color: color }}>{title}</h2>
        </div>
    );
};

export default forwardRef(SubTop);
