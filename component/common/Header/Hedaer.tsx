'use client';

import style from './header.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Btn from '../btn/Btn';
import { IoClose } from 'react-icons/io5';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <button
                className={style.menu_box}
                onClick={() => {
                    setOpen(true);
                }}
            >
                <span className={style.face}>
                    <Image
                        src={'/img/ico_menu_face.svg'}
                        alt="얼굴"
                        width={0}
                        height={0}
                    />
                </span>
            </button>

            <div className={`${style.menu_wrap} ${open ? '' : style.close}`}>
                <div className={`${style.side_menu}`}>
                    <Btn
                        title={'닫기 버튼'}
                        id={'close'}
                        className={style.btn_close}
                        btnSize="xlg"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        {/* <IoClose
                            role="img"
                            aria-label="메뉴 닫기"
                            onClick={() => {
                                setOpen(false);
                            }}
                        /> */}
                        X
                    </Btn>
                    <ul className={style.menu}>
                        <li>
                            <a href="/">HOME</a>
                        </li>
                        <li>
                            <a href="/career">CAREER</a>
                        </li>
                        <li>
                            <a href="/project">PROJECT</a>
                        </li>
                        <li>
                            <a href="/contact">CONTACT</a>
                        </li>
                    </ul>

                    <div className={`flex_end ${style.sns_box}`}>
                        <a
                            href="https://github.com/elin-sunhye"
                            target="_blank"
                            className="flex_center"
                        >
                            <Image
                                src={'/img/ico_sns_github.svg'}
                                alt="깃허브 아이콘"
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
