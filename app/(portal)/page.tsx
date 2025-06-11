'use client';

import style from './page.module.scss';
import Image from 'next/image';
import Rolling from '@/component/common/rolling/Rolling';
import { useEffect, useRef, useState } from 'react';
import { certifiArr, fullSkillArr, skillType } from '@/datas/main';
import { certifiType } from '@/type/mainType';
import { cardType } from '@/type/commonType';
import SubTop from '@/component/common/SubTop/Subtop';
import { careerArr } from '@/datas/career';
import Card from '@/component/common/Card/Card';
import Modal from '@/component/common/Modal/Modal';
import Btn from '@/component/common/btn/Btn';
import { projectArr } from '@/datas/project';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    // skill ---------------------------------
    const [skillArr, setSkillArr] = useState<string[]>([]);
    useEffect(() => {
        const types = new Set<string>();

        fullSkillArr.forEach((s: skillType) => {
            // 중복 add 안됨
            types.add(s.type);
        });

        // 타입 변환 (출력 형식 매핑)
        // [...types].map(() => {})
        const result = Array.from(types).map((type) =>
            type === 'back'
                ? 'BACK<br />END'
                : type === 'front'
                ? 'FRONT<br />END'
                : 'DESIGN'
        );

        setSkillArr(result);
    }, [fullSkillArr]);
    // 스킬 클릭한 배열
    // const [clickSkill, setClickSkill] = useState<string[]>([]);

    // 클릭 데이터 ---------------------------------
    const [clickData, setClickData] = useState<cardType>({} as cardType);

    // career ---------------------------------
    const careerRef = useRef<HTMLDivElement>(null);
    // 스크롤 배경
    const scrollBgRef = useRef<HTMLDivElement>(null);

    // project ---------------------------------
    const projectRef = useRef<HTMLDivElement>(null);

    // 모달 ---------------------------------
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    // ref 이동 (메뉴 클릭 시) ---------------------------------
    const params = useSearchParams();
    useEffect(() => {
        if (params.get('section') === 'career') {
            careerRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        } else if (params.get('section') === 'project') {
            projectRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, [params]);

    // scrollBgRef, careerRef, projectRef ---------------------------------
    useEffect(() => {
        if (typeof window === 'undefined') return;

        // 영역 옵저버
        // careerRef.current, projectRef.current가 화면에서 벗어나면 router.push('/', { scroll: false })
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    router.push('/', { scroll: false });
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.95,
        });

        if (careerRef.current) observer.observe(careerRef.current);
        if (projectRef.current) observer.observe(projectRef.current);

        // career 배경 스크롤 이동
        const handleScroll = () => {
            if (scrollBgRef.current) {
                if (window.scrollY >= window.innerHeight / 1.5) {
                    const y = window.scrollY / 2.25 - window.innerHeight;
                    scrollBgRef.current.style.setProperty(
                        'transform',
                        `translate(-50%, ${y}px)`
                    );
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (careerRef.current) observer.unobserve(careerRef.current);
            if (projectRef.current) observer.unobserve(projectRef.current);
            observer.disconnect();
        };
    }, [scrollBgRef, careerRef, projectRef]);

    return (
        <>
            {/* 메인 비주얼 */}
            <section className={` ${style.main_visual}`}>
                <div className={'flex_center'}>
                    <h1>
                        FULL STACK <br />
                        SUNHYE
                        <p>• 2025 PORTFOLIO •</p>
                    </h1>

                    <span>
                        <Image
                            src={'/img/ico_main_visual2.svg'}
                            alt={'메인 아이콘'}
                            width={0}
                            height={0}
                        />
                    </span>
                </div>
            </section>

            {/* 무한 롤링 */}
            <section>
                <Rolling
                    speed={'120s'}
                    bg={'var(--orange-01)'}
                    color={'var(--yellow-01)'}
                    hoverStop={false}
                >
                    <Image
                        src={'/img/ico_flower.svg'}
                        alt={'꽃 아이콘'}
                        className={style.ico_flower}
                        width={0}
                        height={0}
                    />
                    PARADISE IS WHERE I AM
                    <Image
                        src={'/img/ico_v.svg'}
                        alt={'브이 아이콘'}
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
                            className={`flex_center ${style.skill_box}`}
                        >
                            <h6 className={'flex_center'}>
                                {skill.split('<br />')[0]}
                                <br />
                                {skill.split('<br />')[1]}
                                <span className={style.img}>
                                    <Image
                                        src={
                                            skill.includes('BACK')
                                                ? '/img/ico_sun_line.svg'
                                                : skill.includes('FRONT')
                                                ? '/img/ico_eye.svg'
                                                : '/img/ico_v_2.svg'
                                        }
                                        alt={'해 라인 아이콘'}
                                        width={0}
                                        height={0}
                                    />
                                </span>
                            </h6>
                            <ul className={'flex_start'}>
                                {fullSkillArr.map(
                                    (detail: skillType, idxSkill: number) =>
                                        skill
                                            .toLowerCase()
                                            .includes(detail.type) && (
                                            <li
                                                key={`${detail.type}skill_${idxSkill}`}
                                            >
                                                <span>
                                                    <Image
                                                        src={detail.src}
                                                        alt={`${detail} 아이콘`}
                                                        width={0}
                                                        height={0}
                                                    />
                                                </span>
                                                {detail.name}
                                            </li>
                                        )
                                )}
                            </ul>
                        </div>
                    );
                })}
            </section>

            {/* 자소서 */}
            <section className={style.resume_section}>
                <div className={`wrap flex_center ${style.resume_wrap}`}>
                    <div className={style.left}>
                        <div className={` ${style.shortcut}`}>
                            <p
                                title={'프로젝트 바로가기'}
                                className={`flex_center`}
                                onClick={() => {
                                    router.push('/', { scroll: false });
                                    projectRef.current?.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start',
                                    });
                                }}
                            >
                                PROJECT
                            </p>
                            <a
                                href={'/contact'}
                                title={'컨텍트 바로가기'}
                                className={`flex_center`}
                            >
                                CONTACT
                            </a>

                            <p
                                title={'커리어 바로가기'}
                                className={`flex_center`}
                                onClick={() => {
                                    router.push('/', { scroll: false });
                                    careerRef.current?.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start',
                                    });
                                }}
                            >
                                CAREER
                            </p>
                            <a
                                href={
                                    'https://thunhye.notion.site/dde0ea1679e5421e868e63a9410ccbcf?pvs=4'
                                }
                                target={'_blank'}
                                title={'이력서 바로가기'}
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
                            src={'/img/gif_computer2.gif'}
                            alt={'컴퓨터 gif'}
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
                            alt={'배경'}
                            width={0}
                            height={0}
                        />
                    </div>

                    <div className={`wrap ${style.career_box}`}>
                        <SubTop title={'CAREER'} color={'var(--pink-01)'} />

                        <div className={`flex_start ${style.cont}`}>
                            {careerArr.map((career: cardType, idx: number) => {
                                const classNum =
                                    idx + 1 > 6 ? idx % 5 : idx + 1;
                                return (
                                    <div
                                        key={`career_${idx}`}
                                        className={style[`card_${classNum}`]}
                                    >
                                        <Card
                                            data={career}
                                            onClick={() => {
                                                setIsModalOpen(!isModalOpen);
                                                setClickData(career);
                                            }}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* 프로젝트 */}
            <section ref={projectRef} className={style.project_section}>
                <div className={`wrap ${style.project_wrap}`}>
                    <SubTop title={'PROJECT'} color={'var(--blue-01)'} />

                    <div className={style.project_box}>
                        {projectArr.map((pj: cardType, idx: number) => {
                            return (
                                <div
                                    key={`project_${idx}`}
                                    className={style.col}
                                >
                                    <p
                                    // onClick={() => {
                                    //     setIsModalOpen(!isModalOpen);
                                    //     setClickData(pj);
                                    // }}
                                    >
                                        {pj.title}
                                    </p>

                                    <p>{pj.cont}</p>

                                    <Btn
                                        href={pj.site}
                                        title={'GO LINK'}
                                        id={'link'}
                                        btnSize={'sm'}
                                        color={'blue'}
                                        borderRadius={'br_round'}
                                        className={style.btn_link}
                                        isHover
                                    >
                                        GO LINK
                                        <svg
                                            data-bbox="9 70.9 181 59"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 200 200"
                                        >
                                            <g>
                                                <path d="M159 70.9l-2.2 2.4L183.6 99H9v3h174.6l-26.2 25.3 2.1 2.6 30.5-29.3-31-29.7z"></path>
                                            </g>
                                        </svg>
                                    </Btn>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 자격증 */}
            <section className={style.certification_section}>
                <div className={`wrap ${style.certification_wap}`}>
                    <SubTop
                        title={'MY CERTIFICATION'}
                        color={'var(--yellow-02)'}
                    />

                    <div className={`flex_between ${style.crti_card}`}>
                        {certifiArr.map((crti: certifiType, idx: number) => {
                            return (
                                <div
                                    key={crti.name + idx}
                                    className={'flex_between'}
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

            {/* 모달 */}
            <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
                {Object.keys(clickData).length > 0 ? (
                    <div className={style.modal_box}>
                        <span className={style.desc}>{clickData.desc}</span>
                        <p className={style.title}>{clickData.title}</p>
                        <p className={style.cont}>{clickData.cont}</p>
                        <p className={style.skills}>
                            {clickData.skills.map(
                                (skill: string, idx: number) => (
                                    <span key={`careerSkill_${idx}`}>
                                        {clickData.skills.length === idx + 1
                                            ? skill
                                            : `${skill}, `}
                                    </span>
                                )
                            )}
                        </p>

                        <div className={style.img_box}>
                            {clickData.title.includes('Back') ? (
                                <>
                                    {/* <span>
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
                                    </span> */}
                                </>
                            ) : clickData.title.includes('Wisdom') ? (
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
                            ) : clickData.title.includes('GNCAR') ? (
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
                            ) : clickData.title.includes('GNWP') ? (
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
                            ) : clickData.title.includes('GNHOME') ? (
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
                                    {/* <span>
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
                                    </span> */}
                                </>
                            )}
                        </div>

                        {clickData.site !== '' && (
                            <Btn
                                title={clickData.title}
                                id={clickData.title}
                                className={style.btn_url}
                                href={clickData.site}
                                btnSize={'xlg'}
                                borderRadius={'br_square_round_1'}
                            >
                                Go
                            </Btn>
                        )}
                    </div>
                ) : (
                    <></>
                )}
            </Modal>
        </>
    );
}
