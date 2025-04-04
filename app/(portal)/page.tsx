'use client';

import style from './page.module.scss';
import Image from 'next/image';
import Rolling from '@/component/common/rolling/Rolling';
import { useEffect, useRef, useState } from 'react';
import { certifiArr, fullSkillArr, skillArr } from '@/datas/main';
import { certifiType } from '@/type/mainType';
import { cardType } from '@/type/commonType';
import SubTop from '@/component/common/SubTop/Subtop';
import { careerArr } from '@/datas/career';
import Card from '@/component/common/Card/Card';
import Modal from '@/component/common/Modal/Modal';
import Btn from '@/component/common/btn/Btn';

export default function Home() {
    // 스킬 클릭한 배열
    // const [clickSkill, setClickSkill] = useState<string[]>([]);

    // useEffect(() => {
    //   console.log('clickSkill', clickSkill);
    // }, [clickSkill]);

    // career ---------------------------------
    const careerRef = useRef<HTMLDivElement>(null);

    // 스크롤 배경
    const scrollBgRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // scroll
            // let lastScroll = 0;
            window.addEventListener('scroll', function () {
                // const currentScroll = document.documentElement.scrollTop;

                if (scrollBgRef.current !== null) {
                    if (window.scrollY >= window.innerHeight / 1.5) {
                        const num1 = String(
                            window.scrollY / 2.25 - window.innerHeight
                        );

                        scrollBgRef.current.style.setProperty(
                            'transform',
                            `translate(-50%, ${num1}px)`
                        );
                        // lastScroll = currentScroll;
                    }
                }
            });
        }
    }, []);

    // 모달
    const [isCareerModalOpen, setIsCareerModalOpen] = useState<boolean>(false);

    // 클릭 데이터
    const [careerClickData, setCareerClickData] = useState<cardType>(
        {} as cardType
    );

    // project ---------------------------------
    const projectRef = useRef<HTMLDivElement>(null);

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
                    bg="var(--orange-01)"
                    color="var(--yellow-01)"
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
            <section className={`flex_start ${style.skill_section}`}>
                {skillArr.map((skill: string, idx: number) => {
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
                                        {fullSkillArr.map(
                                            (
                                                back: {
                                                    src: string;
                                                    alt: string;
                                                    name: string;
                                                    type: string;
                                                },
                                                idxBack: number
                                            ) =>
                                                back.type === skill && (
                                                    <li
                                                        key={`skill_back_${idxBack}`}
                                                    >
                                                        <span>
                                                            <Image
                                                                src={back.src}
                                                                alt={`${back} 아이콘`}
                                                                width={0}
                                                                height={0}
                                                            />
                                                        </span>
                                                        {back.name}
                                                    </li>
                                                )
                                        )}
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
                                        {fullSkillArr.map(
                                            (
                                                front: {
                                                    src: string;
                                                    alt: string;
                                                    name: string;
                                                    type: string;
                                                },
                                                idxBack: number
                                            ) =>
                                                front.type === skill && (
                                                    <li
                                                        key={`skill_front_${idxBack}`}
                                                    >
                                                        <span>
                                                            <Image
                                                                src={front.src}
                                                                alt={`${front} 아이콘`}
                                                                width={0}
                                                                height={0}
                                                            />
                                                        </span>
                                                        {front.name}
                                                    </li>
                                                )
                                        )}
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
                                        {fullSkillArr.map(
                                            (
                                                design: {
                                                    src: string;
                                                    alt: string;
                                                    name: string;
                                                    type: string;
                                                },
                                                idxBack: number
                                            ) =>
                                                design.type === skill && (
                                                    <li
                                                        key={`skill_design_${idxBack}`}
                                                    >
                                                        <span>
                                                            <Image
                                                                src={design.src}
                                                                alt={`${design} 아이콘`}
                                                                width={0}
                                                                height={0}
                                                            />
                                                        </span>
                                                        {design.name}
                                                    </li>
                                                )
                                        )}
                                    </ul>
                                </>
                            )}
                        </div>
                    );
                })}
            </section>

            {/* 자소서 */}
            <section className={style.resume_section}>
                <div className={`wrap flex_center ${style.resume_box}`}>
                    <div className={style.left}>
                        <div className={` ${style.shortcut}`}>
                            <a
                                href="javascript:void(0);"
                                title="프로젝트 바로가기"
                                className={`flex_center`}
                                onClick={() => {
                                    projectRef.current?.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start',
                                    });
                                }}
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
                                href="javascript:void(0);"
                                title="커리어 바로가기"
                                className={`flex_center`}
                                onClick={() => {
                                    careerRef.current?.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start',
                                    });
                                }}
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
                                기획부터 개발까지 전 과정을 경험하며 실무 역량을
                                쌓아온 풀스택 개발자입니다. 퍼블리셔로 시작하여
                                프론트엔드와 백엔드까지 차근차근 성장하며,
                                기술적 기반을 탄탄히 다져왔습니다.
                            </p>
                            <p>
                                앞으로도 기술과 비즈니스적 감각을 함께 키우며,
                                더욱 깊이 있는 풀스택 개발자로 나아가겠습니다.
                            </p>
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

            {/* 커리어 */}
            <section ref={careerRef} className={style.career_section}>
                <div className={style.career_wrap}>
                    <div ref={scrollBgRef} className={style.scroll_bg}>
                        <Image
                            src={'/img/img_career_bg.svg'}
                            alt="배경"
                            width={0}
                            height={0}
                        />
                    </div>

                    <SubTop title="CAREER" color="var(--pink-01)" />

                    <div className={`wrap ${style.career_box}`}>
                        {careerArr.map((career: cardType, idx: number) => {
                            return (
                                <Card
                                    key={`career_${idx}`}
                                    data={career}
                                    onClick={() => {
                                        setIsCareerModalOpen(
                                            !isCareerModalOpen
                                        );
                                        setCareerClickData(career);
                                    }}
                                />
                            );
                        })}
                    </div>

                    {/* 모달 */}
                    <Modal
                        isOpen={isCareerModalOpen}
                        setIsOpen={setIsCareerModalOpen}
                    >
                        {Object.keys(careerClickData).length > 0 ? (
                            <div className={style.modal_box}>
                                <span className={style.desc}>
                                    {careerClickData.desc}
                                </span>
                                <p className={style.title}>
                                    {careerClickData.title}
                                </p>
                                <p className={style.skills}>
                                    {careerClickData.skills.map(
                                        (skill: string, idx: number) => (
                                            <span key={`careerSkill_${idx}`}>
                                                {careerClickData.skills
                                                    .length ===
                                                idx + 1
                                                    ? skill
                                                    : `${skill}, `}
                                            </span>
                                        )
                                    )}
                                </p>

                                <div className={style.img_box}>
                                    {careerClickData.title.includes('Back') ? (
                                        <>
                                            <span>
                                                <Image
                                                    src={`/img/img_career_back_1.svg`}
                                                    alt={'사이트 이미지 1'}
                                                    width={0}
                                                    height={0}
                                                />
                                            </span>
                                            <span>
                                                <Image
                                                    src={`/img/img_career_back_2.svg`}
                                                    alt={'사이트 이미지 2'}
                                                    width={0}
                                                    height={0}
                                                />
                                            </span>
                                        </>
                                    ) : careerClickData.title.includes(
                                          'Wisdom'
                                      ) ? (
                                        <>
                                            <span>
                                                <Image
                                                    src={`/img/img_career_wisdom_1.svg`}
                                                    alt={'사이트 이미지 1'}
                                                    width={0}
                                                    height={0}
                                                />
                                            </span>
                                            <span>
                                                <Image
                                                    src={`/img/img_career_wisdom_2.svg`}
                                                    alt={'사이트 이미지 2'}
                                                    width={0}
                                                    height={0}
                                                />
                                            </span>
                                        </>
                                    ) : careerClickData.title.includes(
                                          'GNCAR'
                                      ) ? (
                                        <>
                                            <span>
                                                <Image
                                                    src={`/img/img_career_gncar_1.svg`}
                                                    alt={'사이트 이미지 1'}
                                                    width={0}
                                                    height={0}
                                                />
                                            </span>
                                            <span>
                                                <Image
                                                    src={`/img/img_career_gncar_2.svg`}
                                                    alt={'사이트 이미지 2'}
                                                    width={0}
                                                    height={0}
                                                />
                                            </span>
                                        </>
                                    ) : careerClickData.title.includes(
                                          'GNWP'
                                      ) ? (
                                        <>
                                            <span>
                                                <Image
                                                    src={`/img/img_career_gnwp_1.svg`}
                                                    alt={'사이트 이미지 1'}
                                                    width={0}
                                                    height={0}
                                                />
                                            </span>
                                            <span>
                                                <Image
                                                    src={`/img/img_career_gnwp_2.svg`}
                                                    alt={'사이트 이미지 2'}
                                                    width={0}
                                                    height={0}
                                                />
                                            </span>
                                        </>
                                    ) : careerClickData.title.includes(
                                          'GNHOME'
                                      ) ? (
                                        <>
                                            <span>
                                                <Image
                                                    src={`/img/img_career_gnhome_1.svg`}
                                                    alt={'사이트 이미지 1'}
                                                    width={0}
                                                    height={0}
                                                />
                                            </span>
                                            <span>
                                                <Image
                                                    src={`/img/img_career_gnhome_2.svg`}
                                                    alt={'사이트 이미지 2'}
                                                    width={0}
                                                    height={0}
                                                />
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <span>
                                                <Image
                                                    src={`/img/img_career_sandan_1.svg`}
                                                    alt={'사이트 이미지 1'}
                                                    width={0}
                                                    height={0}
                                                />
                                            </span>
                                            <span>
                                                <Image
                                                    src={`/img/img_career_sandan_2.svg`}
                                                    alt={'사이트 이미지 2'}
                                                    width={0}
                                                    height={0}
                                                />
                                            </span>
                                        </>
                                    )}
                                </div>

                                {careerClickData.title.includes('Back') ||
                                careerClickData.title.includes('Sandan') ? (
                                    <></>
                                ) : (
                                    <Btn
                                        title={careerClickData.title}
                                        id={careerClickData.title}
                                        className={style.btn_url}
                                        href={careerClickData.site}
                                        btnSize="xlg"
                                        borderRadius="br_square_round_1"
                                    >
                                        Go
                                    </Btn>
                                )}
                            </div>
                        ) : (
                            <></>
                        )}
                    </Modal>
                </div>
            </section>

            {/* 프로젝트 */}
            <section ref={projectRef} className={style.career_section}>
                <SubTop title="PROJECT" color="var(--blue-02)" />

                <div className={`wrap ${style.career_box}`}>
                    {careerArr.map((career: cardType, idx: number) => {
                        return (
                            <Card
                                key={`career_${idx}`}
                                data={career}
                                onClick={() => {
                                    setIsCareerModalOpen(!isCareerModalOpen);
                                    setCareerClickData(career);
                                }}
                            />
                        );
                    })}
                </div>
            </section>

            {/* 자격증 */}
            <section className={style.certification_section}>
                <div className={`wrap ${style.certification_wap}`}>
                    <h6>MY CERTIFICATION</h6>

                    <div className={`flex_between ${style.crti_card}`}>
                        {certifiArr.map((crti: certifiType, idx: number) => {
                            return (
                                <div
                                    key={crti.name + idx}
                                    className="flex_between"
                                >
                                    <p>{crti.name}</p>
                                    <span className={style.date}>
                                        {crti.date}
                                    </span>
                                    <span className={style.agency}>
                                        {crti.agency}
                                    </span>
                                    <p className={style.detail}>
                                        {crti.detail}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
