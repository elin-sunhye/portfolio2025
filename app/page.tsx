'use client';

import style from './page.module.scss';
import Image from 'next/image';
import Rolling from '@/component/common/rolling/Rolling';
// import { useEffect, useState } from 'react';

export default function Home() {
  // 스킬 배열
  const skillArr: string[] = ['back', 'front', 'design'];

  // 스킬 클릭한 배열
  // const [clickSkill, setClickSkill] = useState<string[]>([]);

  // useEffect(() => {
  //   console.log('clickSkill', clickSkill);
  // }, [clickSkill]);
  return (
    <>
      {/* 메인 비주얼 */}
      <div className={` ${style.main_visual}`}>
        <div className=" flex_center">
          <h1>
            FULL STACK <br />
            SUNHYE
          </h1>
          <p>• 2025 PORTFOLIO •</p>

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

      {/* 무한 롤링 */}
      <Rolling
        speed="120s"
        bg="var(--sub-orange-01)"
        color="var(--sub-yellow-01)"
      >
        <Image
          src={'/img/ico_flower.svg'}
          alt="꽃 아이콘"
          className={style.ico_flower}
          width={0}
          height={0}
        />
        PARADISE IS WHERE I AM
        <Image
          src={'/img/ico_v.svg'}
          alt="브이 아이콘"
          className={style.ico_v}
          width={0}
          height={0}
        />
      </Rolling>

      {/* 스킬 */}
      <div className={`flex_start ${style.skill_box}`}>
        {skillArr.map((skill, idx) => {
          return (
            <div
              key={skill + idx}
              className={`flex_center ${style.inner}`}
              // className={`flex_center ${style.inner} ${
              //   clickSkill.some((ss) => ss === skill) ? style.open : ''
              // }`}
              // onClick={() => {
              //   if (clickSkill.length === 0) {
              //     // 최초 클릭
              //     setClickSkill([skill]);
              //   } else {
              //     if (clickSkill.some((ss) => ss === skill)) {
              //       // 중복
              //       const remove = clickSkill.filter((ns) => ns !== skill);
              //       setClickSkill(remove);
              //     } else {
              //       // 중복아님
              //       setClickSkill([...clickSkill, skill]);
              //     }
              //   }
              // }}
            >
              {skill === 'back' ? (
                <>
                  <p className="flex_center">
                    BACK
                    <br />
                    END
                    <span className={style.img}>
                      <Image
                        src={'/img/ico_sun_line.svg'}
                        alt="해 라인 아이콘"
                        width={0}
                        height={0}
                      />
                    </span>
                  </p>
                  <ul>
                    <li>JAVA</li>
                    <li>MySQL</li>
                  </ul>
                </>
              ) : skill === 'front' ? (
                <>
                  <p className="flex_center">
                    FRONT
                    <br />
                    END
                    <span className={style.img}>
                      <Image
                        src={'/img/ico_eye.svg'}
                        alt="눈 아이콘"
                        width={0}
                        height={0}
                      />
                    </span>
                  </p>
                  <ul>
                    <li>Next.js</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>HTML</li>
                    <li>SCSS</li>
                    <li>React.js</li>
                    <li>React Query</li>
                    <li>React Hook Form</li>
                  </ul>
                </>
              ) : (
                <>
                  <p className="flex_center">
                    DESIGN
                    <span className={style.img}>
                      <Image
                        src={'/img/ico_v_2.svg'}
                        alt="브이 아이콘"
                        width={0}
                        height={0}
                      />
                    </span>
                  </p>
                  <ul></ul>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
