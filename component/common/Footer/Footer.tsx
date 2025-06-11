'use client';

import { useRouter } from 'next/navigation';
import style from './footer.module.scss';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Rolling from '../rolling/Rolling';

export default function Footer() {
    const router = useRouter();

    return (
        <>
            <footer className={style.footer}>
                {/* 무한 롤링 */}
                <a href={'/contact'}>
                    <Rolling
                        speed={'120s'}
                        bg={
                            'url(/img/img_paper_black_2.svg) repeat 0 0 / auto 100%'
                        }
                        color={'var(--yellow-01)'}
                    >
                        CONTACT
                        <Image
                            src={'/img/ico_flower_2.svg'}
                            alt={'꽃 아이콘'}
                            className={style.ico_flower}
                            width={0}
                            height={0}
                        />
                    </Rolling>
                </a>
                <div className={`wrap ${style.wrap}`}>
                    <div className={style.top}>
                        {/* 메뉴 */}
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
                                    }}
                                >
                                    PROJECT
                                </p>
                            </li>
                            <li>
                                <a href={'/contact'}>CONTACT</a>
                            </li>
                        </ul>

                        {/* 로고 */}
                        <div className={style.logo_circle}>
                            <Image
                                src={'/img/ico_footer_logo.svg'}
                                alt={'푸터 로고'}
                                width={0}
                                height={0}
                            />
                        </div>
                    </div>

                    {/* 카피라이트 */}
                    <p className={style.copy_right}>
                        © 2025. 김선혜. All rights reserved. ✷
                    </p>
                </div>
            </footer>
        </>
    );
}
