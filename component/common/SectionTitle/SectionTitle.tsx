"use client";

import style from "./sectionTitle.module.scss";

interface SectionTitleProps {
  title: string;
  desc: string;
  titleFs?: string;
  color?: string;
  textAlign?: "center" | "right";
  moTextCenter?: boolean;
}

/**
 * @title : 섹션 제목 - 서비스 설명 `<br />`풍부한 데이터로부터
 *
 * @desc : 섹션 제목 밑 설명 - 국내시장 전역을 커버할 수 있는 풍부한 데이터를 활용하여 `<br />`정교한 오디언스 타겟팅으로 광고 효과를 상승 시킬 수 있습니다
 *
 * @titleFs ?: 섹션 제목 폰트 사이즈 - 기본 48
 *
 * @color ?: 텍스트 컬러
 *
 * @textAlign ?: 텍스트 정렬
 *
 * @moTextCenter ?: 모바일 텍스트 센터 정렬
 */
export const SectionTitle = ({
  title,
  desc,
  titleFs,
  color,
  textAlign,
  moTextCenter,
}: SectionTitleProps) => {
  return (
    <div
      className={`${style.section_title_box} ${
        moTextCenter && moTextCenter === true ? style.mo_center : ""
      }`}
      style={{
        color: color,
        textAlign: textAlign ? textAlign : "left",
      }}
    >
      {title !== "" ? (
        <h6
          className={style.section_title}
          style={{
            marginBottom: desc !== "" ? "1.5rem" : "0",
            fontSize: titleFs ? titleFs : "var(--fs-48)",
          }}
        >
          {title.split(`<br />`).map((text: string) => {
            return (
              <>
                {text} <br />
              </>
            );
          })}
        </h6>
      ) : (
        <></>
      )}

      {desc !== "" ? (
        <p className={style.section_desc}>
          {desc.split(`<br />`).map((text: string) => {
            return (
              <>
                {text} <br />
              </>
            );
          })}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};
