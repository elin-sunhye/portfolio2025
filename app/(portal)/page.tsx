'use client';

import style from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className={` ${style.main_visual}`}>
        <div className=" flex_center">
          <h1>
            PORTFOLIO <br />
            SUNHYE
          </h1>
          <p>• FULL-STACK •</p>

          <span>
            <Image
              src={'/img/ico_main_visual.svg'}
              alt="메인 아이콘"
              width={0}
              height={0}
            />
          </span>
        </div>
      </div>

      <div className={style.infinity_scroll}>PARADISE IS WHERE I AM</div>
    </>
  );
}
