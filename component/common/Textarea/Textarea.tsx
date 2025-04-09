import React, { forwardRef, useId, useRef } from 'react';
import style from './textarea.module.scss';

interface TextareaProps {
    taSize?: 'xsm' | 'sm' | 'lg' | 'xlg';
    color?: string;
    border?: 'br_square_round_1' | 'br_square_round_2' | 'br_round';
    title: string;
    value?: string | number;
    fixSize?: boolean;
    onChange?: (e: any) => void;
    resize?: boolean;
}

/**
 * Textarea 컴포넌트를 forwardRef로 감싸서 ref를 사용할 수 있도록 변경
 */
const Textarea = forwardRef<
    HTMLTextAreaElement,
    TextareaProps & React.HTMLProps<HTMLTextAreaElement>
>(
    (
        {
            taSize,
            color,
            title,
            border,
            value,
            fixSize,
            onChange,
            resize,
            ...props
        },
        ref
    ) => {
        const id = useId();
        const textArea = useRef<HTMLTextAreaElement>(null);

        const resizeHeight = () => {
            if (textArea.current !== null) {
                textArea.current.style.height = '20rem';
                textArea.current.style.height =
                    textArea.current.scrollHeight <= 300
                        ? textArea.current.scrollHeight + 'px'
                        : '30rem';
            }
        };

        return (
            <>
                <label htmlFor={`${id}_ ${title}`} className={'screen_out'}>
                    {title}
                </label>
                <textarea
                    id={`${id}_${title}`}
                    title={title}
                    className={`${style.textarea} ${
                        taSize === 'xsm'
                            ? style.xsm
                            : taSize === 'sm'
                            ? style.sm
                            : taSize === 'lg'
                            ? style.lg
                            : taSize === 'xlg'
                            ? style.xlg
                            : style.md
                    } ${color && color !== '' ? style[color] : style.white} ${
                        border ? style[border] : ''
                    } ${resize && resize === true ? style.resize : ''}`}
                    disabled={color === 'disabled' ? true : false}
                    value={value}
                    onChange={(e) => {
                        resizeHeight();
                        if (onChange) {
                            onChange(e);
                        }
                    }}
                    ref={ref || textArea} // ref가 전달되면 이를 사용하고, 아니면 textArea를 사용
                    {...props}
                />
            </>
        );
    }
);

export default Textarea;
