'use client';

import {
    Dispatch,
    HTMLAttributes,
    LegacyRef,
    MutableRefObject,
    RefAttributes,
    SetStateAction,
    useEffect,
    useRef,
} from 'react';
import style from './modal.module.scss';
import Btn from '../btn/Btn';

interface ModalProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export default function Modal({ isOpen, setIsOpen }: ModalProps) {
    return (
        <div
            className={`${style.modal_wrap} ${
                isOpen ? style.open : style.close
            }`}
        >
            <div className={style.modal_box}>
                <Btn
                    title={'닫기 버튼'}
                    id={'close'}
                    className={style.btn_close}
                    btnSize="xlg"
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    X
                </Btn>

                <p>타이틀</p>
            </div>
        </div>
    );
}
