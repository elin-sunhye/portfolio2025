'use client';
import style from './page.module.scss';
import { cardType } from '@/type/commonType';
import Card from '@/component/common/Card/Card';
import SubTop from '@/component/common/SubTop/Subtop';
import Modal from '@/component/common/Modal/Modal';
import { useState } from 'react';
import { careerArr } from '@/datas/career';
import Btn from '@/component/common/btn/Btn';

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
                {!!clickData ? (
                    <div className={style.modal_box}>
                        <span className={style.desc}>{clickData.desc}</span>
                        <p className={style.title}>{clickData.title}</p>
                        <p className={style.skills}>
                            {clickData.skills?.map(
                                (skill: string, idx: number) => {
                                    console.log('ASd', clickData.skills.length);
                                    console.log('idx', idx - 1);
                                    return (
                                        <span>
                                            {clickData.skills.length === idx + 1
                                                ? skill
                                                : `${skill}, `}
                                        </span>
                                    );
                                }
                            )}
                        </p>

                        <div className={style.img_box}>
                            <span>img1</span>
                            <span>img2</span>
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
