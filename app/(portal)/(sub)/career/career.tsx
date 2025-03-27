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
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // 클릭 데이터
    const [clickData, setClickData] = useState<cardType>({} as cardType);

    return (
        <div className={style.career_wrap}>
            {/* 서브탑 */}
            <SubTop title="CAREER" color="var(--pink-01)" />

            {/* 컨텐츠 */}
            <div className={`wrap ${style.career_box}`}>
                {careerArr.map((career: cardType, idx: number) => {
                    return (
                        <Card
                            key={`career_${idx}`}
                            data={career}
                            onClick={() => {
                                setIsOpen(!isOpen);
                                setClickData(career);
                            }}
                        />
                    );
                })}
            </div>

            {/* 모달 */}
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                {Object.keys(clickData).length > 0 ? (
                    <div className={style.modal_box}>
                        <span className={style.desc}>{clickData.desc}</span>
                        <p className={style.title}>{clickData.title}</p>
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
                            <span>
                                <Image
                                    src={`/img/img_career_${
                                        clickData.title.includes('Back')
                                            ? 'back'
                                            : clickData.title.includes('Wisdom')
                                            ? 'wisdom'
                                            : clickData.title.includes('GNCAR')
                                            ? 'gncar'
                                            : clickData.title.includes('GNWP')
                                            ? 'gnwp'
                                            : clickData.title.includes('GNHOME')
                                            ? 'gnhome'
                                            : 'sandan'
                                    }_1.svg`}
                                    alt={'사이트 이미지 1'}
                                    width={0}
                                    height={0}
                                />
                            </span>
                            <span>
                                <Image
                                    src={`/img/img_career_${
                                        clickData.title.includes('Back')
                                            ? 'back'
                                            : clickData.title.includes('Wisdom')
                                            ? 'wisdom'
                                            : clickData.title.includes('GNCAR')
                                            ? 'gncar'
                                            : clickData.title.includes('GNWP')
                                            ? 'gnwp'
                                            : clickData.title.includes('GNHOME')
                                            ? 'gnhome'
                                            : 'sandan'
                                    }_2.svg`}
                                    alt={'사이트 이미지 2'}
                                    width={0}
                                    height={0}
                                />
                            </span>
                        </div>

                        <Btn
                            title={clickData.title}
                            id={clickData.title}
                            className={style.btn_url}
                            href={clickData.site}
                            btnSize="xlg"
                            borderRadius="br_round"
                        >
                            Go
                        </Btn>
                    </div>
                ) : (
                    <></>
                )}
            </Modal>
        </div>
    );
}
