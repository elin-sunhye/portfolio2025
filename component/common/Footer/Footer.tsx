'use client';

import { useRouter } from 'next/navigation';
import style from './footer.module.scss';
import { useEffect, useState } from 'react';

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
                        <span>asd</span>
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
