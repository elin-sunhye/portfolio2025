"use client";

import Image from "next/image";
import style from "./card.module.scss";

interface CardProps {
  title: string;
  desc: string;
  cardBg?: string;
  imgYn?: "top" | "bottom";
  imgSrc?: string;
  imgAlt?: string;
  imgBg?: string;
}

/**
 * @title : 카드 제목 - 서비스 설명 `<br />`풍부한 데이터로부터
 *
 * @desc : 카드 제목 밑 설명 - 국내시장 전역을 커버할 수 있는 풍부한 데이터를 활용하여 `<br />`정교한 오디언스 타겟팅으로 광고 효과를 상승 시킬 수 있습니다
 *
 * @cardBg ?: 카드 배경 컬러
 *
 * @imgBg ?: 이미지 배경 컬러
 */
export default function Card({
  title,
  desc,
  cardBg,
  imgYn,
  imgSrc,
  imgAlt,
  imgBg,
}: CardProps) {
  return (
    <div
      className={`flex_start ${style.card}`}
      style={{
        background: cardBg ? cardBg : "var(--gray-1)",
      }}
    >
      {imgYn === "top" ? (
        <>
          {imgSrc ? (
            <div
              className={style.card_img_box}
              style={{ backgroundColor: imgBg }}
            >
              <Image
                src={imgSrc}
                alt={imgAlt !== undefined ? imgAlt : "/"}
                width={"10"}
                height={"10"}
                className={style.card_img}
              />
            </div>
          ) : (
            <></>
          )}

          <div className={style.card_title_box}>
            <p className={style.card_title}>
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
        </>
      ) : imgYn === "bottom" ? (
        <>
          <div className={style.card_title_box}>
            <p className={style.card_title}>
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

          {imgSrc ? (
            <div
              className={style.card_img_box}
              style={{ backgroundColor: imgBg }}
            >
              <Image
                src={imgSrc}
                alt={imgAlt !== undefined ? imgAlt : ""}
                width={"10"}
                height={"10"}
                className={style.card_img}
              />
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <div className={style.card_title_box}>
          <p className={style.card_title}>
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
      )}
    </div>
  );
}
