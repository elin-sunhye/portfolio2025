'use client';

import style from './cardGradient.module.scss';

interface CardGradientProps {
  title: string;
  desc: string;
  cardBg: string;
  textBg: string;
  textColor: string;
}

/**
 * @title : 카드 제목 - 서비스 설명 `<br />`풍부한 데이터로부터
 *
 * @desc : 카드 제목 밑 설명 - 국내시장 전역을 커버할 수 있는 풍부한 데이터를 활용하여 `<br />`정교한 오디언스 타겟팅으로 광고 효과를 상승 시킬 수 있습니다
 *
 * @cardBg ?: 카드 배경 컬러
 *
 * @textBg ?: 타이틀 배경
 *
 * @textColor ?: 텍스트 컬러
 */
export default function CardGradientProps({
  title,
  desc,
  cardBg,
  textBg,
  textColor,
}: CardGradientProps) {
  return (
    <div
      className={`flex_center ${style.card}`}
      style={{
        background: cardBg ? cardBg : 'var(--gray-1)',
        color: textColor ? textColor : 'var(--main_color)',
      }}
    >
      <p
        className={style.card_title}
        style={{ background: textBg ? textBg : 'var(--gray-1)' }}
      >
        {title.split(`<br />`).map((text: string) => {
          return (
            <>
              {text} <br />
            </>
          );
        })}
      </p>
      <span className={style.card_desc}>
        {desc.split(`<br />`).map((text: string) => {
          return (
            <>
              {text} <br />
            </>
          );
        })}
      </span>
    </div>
  );
}
