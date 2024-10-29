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
                  <ul className="flex_start">
                    <li>
                      <span>
                        <Image
                          src={'/img/ico_node.svg'}
                          alt="노드 아이콘"
                          width={0}
                          height={0}
                        />
                      </span>
                      Node.js
                    </li>
                    <li>
                      <span>
                        <Image
                          src={'/img/ico_java.svg'}
                          alt="자바 아이콘"
                          width={0}
                          height={0}
                        />
                      </span>
                      JAVA
                    </li>
                    <li>
                      <span>
                        <Image
                          src={'/img/ico_springboot.svg'}
                          alt="스프링부트 아이콘"
                          width={0}
                          height={0}
                        />
                      </span>
                      Spring Boot
                    </li>
                    <li>
                      <span>
                        <Image
                          src={'/img/ico_mysql.svg'}
                          alt="마이에스큐엘 아이콘"
                          width={0}
                          height={0}
                        />
                      </span>
                      MySQL
                    </li>
                    <li>
                      <span>
                        <Image
                          src={'/img/ico_mybatis.svg'}
                          alt="마이바티스 아이콘"
                          width={0}
                          height={0}
                        />
                      </span>
                      MyBatis
                    </li>
                    <li>
                      <span>
                        <Image
                          src={'/img/ico_restapi.svg'}
                          alt="레스트에이피아이 아이콘"
                          width={0}
                          height={0}
                        />
                      </span>
                      REST API
                    </li>
                    <li>
                      <span>
                        <Image
                          src={'/img/ico_chatgpt.svg'}
                          alt="챗피비티 아이콘"
                          width={0}
                          height={0}
                        />
                      </span>
                      chatGPT 및 OpenAI API
                    </li>
                    <li>
                      <span>
                        <Image
                          src={'/img/ico_aws.svg'}
                          alt="아마존웹서비스 아이콘"
                          width={0}
                          height={0}
                        />
                      </span>
                      AWS &#40;EC2, S3, RDS &#41;
                    </li>
                    <li>
                      <span>
                        <Image
                          src={'/img/ico_docker.svg'}
                          alt="도커 아이콘"
                          width={0}
                          height={0}
                        />
                      </span>
                      Docker
                    </li>
                    <li>
                      <span>
                        <Image
                          src={'/img/ico_putty.svg'}
                          alt="푸티 아이콘"
                          width={0}
                          height={0}
                        />
                      </span>
                      PuTTY
                    </li>
                    <li>
                      <span>
                        <Image
                          src={'/img/ico_dbms.svg'}
                          alt="디비엠에스 아이콘"
                          width={0}
                          height={0}
                        />
                      </span>
                      DBMS
                    </li>
                    {/* <li>Blue&#00;Green 무중단 배포</li> */}
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
                  <ul className="flex_start">
                    <li>
                      <span>
                        <Image
                          src={'/img/ico_next.svg'}
                          alt="넥스트 아이콘"
                          width={0}
                          height={0}
                        />
                      </span>
                      Next.js
                    </li>
                    <li>
                      <span>
                        <Image
                          src={'/img/ico_javascript.svg'}
                          alt="자바스크립트 아이콘"
                          width={0}
                          height={0}
                        />
                      </span>
                      JavaScript
                    </li>
                    <li>
                      <span>
                        <Image
                          src={'/img/ico_typescript.svg'}
                          alt="타입스크립트 아이콘"
                          width={0}
                          height={0}
                        />
                      </span>
                      TypeScript
                    </li>
                    <li>
                      <span>
                        <Image
                          src={'/img/ico_html.svg'}
                          alt="에이치티엠엘 아이콘"
                          width={0}
                          height={0}
                        />
                      </span>
                      HTML
                    </li>
                    <li>
                      <span>
                        <Image
                          src={'/img/ico_scss.svg'}
                          alt="레스트에이피아이 아이콘"
                          width={0}
                          height={0}
                        />
                      </span>
                      SCSS
                    </li>
                    <li>
                      <span>
                        <Image
                          src={'/img/ico_react.svg'}
                          alt="리액트 아이콘"
                          width={0}
                          height={0}
                        />
                      </span>
                      React.js
                    </li>
                    <li>
                      <span>
                        <Image
                          src={'/img/ico_query.svg'}
                          alt="리액트 쿼리 아이콘"
                          width={0}
                          height={0}
                        />
                      </span>
                      React Query
                    </li>
                    <li>
                      <span>
                        <Image
                          src={'/img/ico_hookform.svg'}
                          alt="리액트 훅 폼 아이콘"
                          width={0}
                          height={0}
                        />
                      </span>
                      React Hook Form
                    </li>
                    <li>
                      <span>
                        <Image
                          src={'/img/ico_nextauth.svg'}
                          alt="넥스트어스 아이콘"
                          width={0}
                          height={0}
                        />
                      </span>
                      NextAuth.js
                    </li>
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
                  <ul className="flex_start">
                    <li>
                      <span>
                        <Image
                          src={'/img/ico_figma.svg'}
                          alt="피그마 아이콘"
                          width={0}
                          height={0}
                        />
                      </span>
                      Figma
                    </li>
                    <li>
                      <span>
                        <Image
                          src={'/img/ico_photoshop.svg'}
                          alt="포토샵 아이콘"
                          width={0}
                          height={0}
                        />
                      </span>
                      Photoshop
                    </li>
                    <li>
                      <span>
                        <Image
                          src={'/img/ico_illustrator.svg'}
                          alt="일러스트레이터 아이콘"
                          width={0}
                          height={0}
                        />
                      </span>
                      Illustrator
                    </li>
                  </ul>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
