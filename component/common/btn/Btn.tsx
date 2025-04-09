'use client';

import { Ref, forwardRef, useState } from 'react';
import style from './btn.module.scss';

interface BtnProps {
    type?: 'submit' | 'reset';
    btnSize?: 'xsm' | 'sm' | 'lg' | 'xlg';
    color?: string;
    isHover?: boolean;
    borderRadius?: 'br_square_round_1' | 'br_square_round_2' | 'br_round';
    children: React.ReactNode | React.ReactNode[];
    onBlur?: () => void;
    btnStyle?: React.CSSProperties;
    className?: string;

    href?: string;

    id: string;
    title: string;
    tabIndex?: number;
}

/**
 * @param type?: 버튼 타입 (기본 button)
 * @return string
 *
 * @param btnSize?: 버튼 크기 (기본 md)
 * @return "xsm" | "sm" | "lg" | "xlg";
 *
 * @param borderRadius?: 보더 사이즈 (기본 0)
 * @return "br_square_round_1" | "br_square_round_2" | "br_round";
 *
 * @param color?: 버튼 색상 (기본 white)
 * @returns string (black, mainColor, mainColorBorder, disabled, none)
 *
 * @param isHover?: 버튼 호버 (기본 false)
 * @returns boolean
 *
 * @param children: 버튼 text
 * @returns string
 *
 * @param href?: 태그 변경
 * @returns string
 *
 * @param title: 버튼 title
 * @returns string
 *
 * @param tabIndex?
 * @returns number
 *
 * @param onBlur?: 포커스가 해지될 때 이벤트
 * @returns
 *
 * @param id: 버튼 id
 * @returns string
 */
const Btn = (
    {
        type,
        btnSize,
        color,
        borderRadius,
        children,
        tabIndex,
        onBlur,
        title,
        id,
        btnStyle,
        className,
        href,
        isHover,
        ...props
    }: BtnProps &
        React.HTMLProps<HTMLButtonElement> &
        React.HTMLProps<HTMLAnchorElement>,
    ref: Ref<HTMLButtonElement>
) => {
    // hover
    // const [isHover, setIsHover] = useState<boolean>(false);

    return href ? (
        <a
            href={href}
            id={id}
            role={'link'}
            title={title}
            aria-label={title}
            tabIndex={tabIndex !== undefined ? tabIndex : 0}
            onBlur={onBlur ? onBlur : () => {}}
            target={'_blank'}
            className={`${style.btn} ${
                btnSize === 'xsm'
                    ? style.xsm
                    : btnSize === 'sm'
                    ? style.sm
                    : btnSize === 'lg'
                    ? style.lg
                    : btnSize === 'xlg'
                    ? style.xlg
                    : style.md
            } ${color && color !== '' ? style[color] : style.white} ${
                borderRadius ? style[borderRadius] : ''
            } ${
                isHover && isHover === true ? `${style[color + '_hover']}` : ''
            } ${className ? className : ''}`}
            disabled={color === 'disabled' ? true : false}
            style={{ ...btnStyle }}
            {...props}
        >
            {children}
        </a>
    ) : (
        <button
            ref={ref}
            id={id}
            type={type ? type : 'button'}
            role={'button'}
            title={title}
            aria-label={title}
            tabIndex={tabIndex !== undefined ? tabIndex : 0}
            onBlur={onBlur ? onBlur : () => {}}
            className={`${style.btn} ${
                btnSize === 'xsm'
                    ? style.xsm
                    : btnSize === 'sm'
                    ? style.sm
                    : btnSize === 'lg'
                    ? style.lg
                    : btnSize === 'xlg'
                    ? style.xlg
                    : style.md
            } ${color && color !== '' ? style[color] : style.white} ${
                borderRadius ? style[borderRadius] : ''
            } ${isHover === true ? `${style[color + '_hover']}` : ''} ${
                className ? className : ''
            }`}
            disabled={color === 'disabled' ? true : false}
            style={{ ...btnStyle }}
            {...props}
        >
            {children}
        </button>
    );
};

export default forwardRef(Btn);
