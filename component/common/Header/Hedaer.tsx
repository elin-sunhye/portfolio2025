'use client';

import style from './header.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Btn from '../btn/Btn';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (isOpen) {
            document.documentElement.style.overflowY = 'hidden';
        } else {
            document.documentElement.style.overflowY = 'auto';
        }
    }, [isOpen]);

    return (
        <>
            <button
                className={style.menu_box}
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <span className={style.face}>
                    <Image
                        src={'/img/ico_menu_face.svg'}
                        alt={'얼굴'}
                        width={0}
                        height={0}
                    />
                </span>
            </button>

            <div className={`${style.menu_wrap} ${isOpen ? '' : style.close}`}>
                <div className={`${style.side_menu}`}>
                    <Btn
                        title={'닫기 버튼'}
                        id={'close'}
                        className={style.btn_close}
                        btnSize={'xlg'}
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        <Image
                            src={'/img/ico_close.svg'}
                            alt={'브이 아이콘'}
                            width={0}
                            height={0}
                        />
                    </Btn>
                    <ul className={style.menu}>
                        <li>
                            <a href={'/'}>HOME</a>
                        </li>
                        <li>
                            <p
                                onClick={() => {
                                    router.push('/?section=career', {
                                        scroll: false,
                                    });

                                    setIsOpen(!isOpen);
                                }}
                            >
                                CAREER
                            </p>
                        </li>
                        <li>
                            <p
                                onClick={() => {
                                    router.push('/?section=project', {
                                        scroll: false,
                                    });
                                    setIsOpen(!isOpen);
                                }}
                            >
                                PROJECT
                            </p>
                        </li>
                        <li>
                            <a href={'/contact'}>CONTACT</a>
                        </li>
                    </ul>

                    <div className={`flex_end ${style.sns_box}`}>
                        <a
                            href={
                                'https://www.notion.so/thunhye/dde0ea1679e5421e868e63a9410ccbcf?pvs=4'
                            }
                            target={'_blank'}
                            className={'flex_center'}
                        >
                            <Image
                                src={'/img/ico_clip.svg'}
                                alt={'클립 아이콘'}
                                width={0}
                                height={0}
                            />
                        </a>
                        <a
                            href={'https://github.com/elin-sunhye'}
                            target={'_blank'}
                            className={'flex_center'}
                        >
                            <Image
                                src={'/img/ico_sns_github.svg'}
                                alt={'깃허브 아이콘'}
                                width={0}
                                height={0}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
