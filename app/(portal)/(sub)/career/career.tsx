'use client';
import style from './page.module.scss';
import { cardType } from '@/type/commonType';
import Card from '@/component/common/Card/Card';
import SubTop from '@/component/common/SubTop/Subtop';
import Modal from '@/component/common/Modal/Modal';
import { useState } from 'react';
import { careerArr } from '@/datas/career';
import Btn from '@/component/common/btn/Btn';
import Image from 'next/image';

export default function Career() {
    // 모달
    const [isCareerModalOpen, setIsCareerModalOpen] = useState<boolean>(false);

    // 클릭 데이터
    const [careerClickData, setCareerClickData] = useState<cardType>(
        {} as cardType
    );

    return (
        <div className={style.career_wrap}>
            <div className="wrap">
                {/* 서브탑 */}
                <SubTop title={'CAREER'} color={'var(--pink-01)'} />

                {/* 컨텐츠 */}
                <div className={`flex_start ${style.career_box}`}>
                    {careerArr.map((career: cardType, idx: number) => {
                        const classNum = idx + 1 > 6 ? idx % 5 : idx + 1;
                        return (
                            <div
                                key={`career_${idx}`}
                                className={style[`card_${classNum}`]}
                            >
                                <Card
                                    data={career}
                                    onClick={() => {
                                        setIsCareerModalOpen(
                                            !isCareerModalOpen
                                        );
                                        setCareerClickData(career);
                                    }}
                                />
                            </div>
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
                                            {careerClickData.skills.length ===
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
                                ) : careerClickData.title.includes('Wisdom') ? (
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
                                ) : careerClickData.title.includes('GNCAR') ? (
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
                                ) : careerClickData.title.includes('GNWP') ? (
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
                                ) : careerClickData.title.includes('GNHOME') ? (
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
            </div>
        </div>
    );
}
