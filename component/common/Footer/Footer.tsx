'use client';

import { useRouter } from 'next/navigation';
import style from './footer.module.scss';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Footer() {
    const router = useRouter();

    return (
        <footer className={style.footer}>
            <div className={`wrap`}>
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
    );
}
