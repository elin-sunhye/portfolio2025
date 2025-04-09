'use client';
import style from './page.module.scss';
import { cardType } from '@/type/commonType';
import Card from '@/component/common/Card/Card';
import SubTop from '@/component/common/SubTop/Subtop';
import { projectArr } from '@/datas/project';

export default function Project() {
    return (
        <div className={style.project_wrap}>
            {/* 서브탑 */}
            <SubTop title={'PROJECT'} color={'var(--blue-02)'} />

            {/* 컨텐츠 */}
            <div className={` ${style.project_box}`}>
                {projectArr.map((pj: cardType, idx: number) => {
                    return <Card key={`career_${idx}`} data={pj} />;
                })}
            </div>
        </div>
    );
}
