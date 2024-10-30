'use client';

import style from './page.module.scss';
import Image from 'next/image';
import Rolling from '@/component/common/rolling/Rolling';
import { useEffect, useRef } from 'react';

//
interface certifiType {
  name: string;
  date: string; // (YYYY-MM-DD)
  agency: string;
  detail: string;
}
export default function Home() {
  // 스킬 배열 ---------------------------------
  const skillArr: string[] = ['back', 'front', 'design'];

  // 자격증 배열 ---------------------------------
  const certifiArr: certifiType[] = [
    {
      name: '정보처리기사',
      date: '2025-06',
      agency: '한국산업인력공단',
      detail:
        '정보시스템의 생명주기 전반에 걸친 프로젝트 업무를 수행하는 직무로서 계획수립, 분석, 설계, 구현, 시험, 운영, 유지보수 등의 업무를 수행할 수 있는 능력 검증',
    },
    {
      name: 'SQLD',
      date: '2025-04',
      agency: '한국산업인력공단',
      detail:
        '데이터모델링에 기본 지식을 바탕으로 SQL 작성, 성능 최적화 등 데이터베이스 개체 설계 및 구현 등에 대한 전문지식 및 실무적 수행 능력 검증',
    },
    {
      name: 'Web Design 기능사',
      date: '2020-11-05',
      agency: '한국산업인력공단',
      detail: '웹 페이지를 제작할 수 있는 실무 능력을 인정',
    },
    {
      name: 'ACA Photoshop',
      date: '2016-10-16',
      agency: 'ADOBE',
      detail: 'Adobe Photoshop 소프트웨어 사용 능력을 공인',
    },
  ];

  // 스킬 클릭한 배열
  // const [clickSkill, setClickSkill] = useState<string[]>([]);

  // useEffect(() => {
  //   console.log('clickSkill', clickSkill);
  // }, [clickSkill]);

  // 스크롤 배경 ---------------------------------
  const scrollBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // scroll
      // let lastScroll = 0;
      window.addEventListener('scroll', function () {
        // const currentScroll = document.documentElement.scrollTop;

        if (scrollBgRef.current !== null) {
          if (window.scrollY >= window.innerHeight / 1.5) {
            const num1 = String(window.scrollY / 2.25 - window.innerHeight);

            scrollBgRef.current.style.setProperty(
              'transform',
              `translateY(${num1}px)`
            );
            // lastScroll = currentScroll;
          }
        }
      });
    }
  }, []);

  return (
    <>
      {/* 메인 비주얼 */}
      <section className={` ${style.main_visual}`}>
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
      </section>

      {/* 무한 롤링 */}
      <section>
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
      </section>

      {/* 스킬 */}
      <section className={`flex_start ${style.skill_box}`}>
        {skillArr.map((skill: string, idx1: number) => {
          return (
            <div
              key={skill + idx1}
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
                  <h6 className="flex_center">
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
                  </h6>
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
                  <h6 className="flex_center">
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
                  </h6>
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
                  <h6 className="flex_center">
                    DESIGN
                    <span className={style.img}>
                      <Image
                        src={'/img/ico_v_2.svg'}
                        alt="브이 아이콘"
                        width={0}
                        height={0}
                      />
                    </span>
                  </h6>
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
      </section>

      {/* 자소서 */}
      <section className={style.resume_box}>
        <div className={`wrap flex_center ${style.resume_wrap}`}>
          <div className={style.left}>
            <div className={` ${style.shortcut}`}>
              <a
                href="/project"
                title="프로젝트 바로가기"
                className={`flex_center`}
              >
                PROJECT
              </a>
              <a
                href="/contact"
                title="컨텍트 바로가기"
                className={`flex_center`}
              >
                CONTACT
              </a>

              <a
                href="/career"
                title="커리어 바로가기"
                className={`flex_center`}
              >
                CAREER
              </a>
              <a
                href="https://thunhye.notion.site/dde0ea1679e5421e868e63a9410ccbcf?pvs=4"
                target="_blank"
                title="이력서 바로가기"
                className={`flex_center`}
              >
                RESUME
              </a>
            </div>

            <h6 className={style.title}>FULL-STACK DEVELOPER</h6>

            <div className={style.txt}>
              <p>
                탄핵소추의 의결을 받은 자는 탄핵심판이 있을 때까지 그 권한행사가
                정지된다. 각급 선거관리위원회의 조직·직무범위 기타 필요한 사항은
                법률로 정한다. 국회는 상호원조 또는 안전보장에 관한 조약, 중요한
                국제조직에 관한 조약, 우호통상항해조약, 주권의 제약에 관한 조약,
                강화조약, 국가나 국민에게 중대한 재정적 부담을 지우는 조약 또는
                입법사항에 관한 조약의 체결·비준에 대한 동의권을 가진다.
              </p>

              <p>
                근로자는 근로조건의 향상을 위하여 자주적인 단결권·단체교섭권 및
                단체행동권을 가진다. 모든 국민은 학문과 예술의 자유를 가진다.
                재산권의 행사는 공공복리에 적합하도록 하여야 한다. 군인 또는
                군무원이 아닌 국민은 대한민국의 영역안에서는 중대한 군사상
                기밀·초병·초소·유독음식물공급·포로·군용물에 관한 죄중 법률이
                정한 경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의
                재판을 받지 아니한다.
              </p>

              <p>국회는 의원의 자격을 심사하며, 의원을 징계할 수 있다.</p>
            </div>
          </div>
          <div className={style.right}>
            <Image
              src={'/img/gif_computer.png'}
              alt="컴퓨터 gif"
              width={0}
              height={0}
            />
          </div>
        </div>
      </section>

      {/* 미정 */}
      <section className={style.no_name_box}>
        <div ref={scrollBgRef} className={style.scroll_bg}>
          <Image
            src={'/img/img_no_name_bg.svg'}
            alt="배경"
            width={0}
            height={0}
          />
        </div>
        {/* <div className={`wrap ${style.no_name_wrap}`}></div> */}
      </section>

      {/* 자격증 */}
      <section className={style.certification_box}>
        <div className={`wrap ${style.certification_wap}`}>
          <h6>MY CERTIFICATION</h6>

          <div className={`flex_between ${style.crti_card}`}>
            {certifiArr.map((crti: certifiType, idx2: number) => {
              return (
                <div key={crti.name + idx2} className="flex_between">
                  <p>{crti.name}</p>
                  <span className={style.date}>{crti.date}</span>
                  <span className={style.agency}>{crti.agency}</span>
                  <p className={style.detail}>{crti.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
