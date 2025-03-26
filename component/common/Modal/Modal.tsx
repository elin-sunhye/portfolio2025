'use client';

import { Dispatch, SetStateAction, useEffect } from 'react';
import style from './modal.module.scss';
import Btn from '../btn/Btn';
import Image from 'next/image';

interface ModalProps {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode;
}
export default function Modal({ isOpen, setIsOpen, children }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.documentElement.style.overflowY = 'hidden';
        } else {
            document.documentElement.style.overflowY = 'auto';
        }
    }, [isOpen]);

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
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    <Image
                        src={'/img/ico_close.svg'}
                        alt="브이 아이콘"
                        width={0}
                        height={0}
                    />
                </Btn>

                <div className={style.content}>{children}</div>
            </div>
        </div>
    );
}
