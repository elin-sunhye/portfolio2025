"use client";

import { BtnLink } from "@/component/common/BtnLink/BtnLink";
import { SectionTitle } from "@/component/common/SectionTitle/SectionTitle";
import style from "./sectionVarticalLayout.module.scss";

interface sectionVarticalLayoutProps {
  children: React.ReactNode;
  sectionBg?: string;
  reverse?: boolean;

  title: string;
  desc: string;
  color?: string;
  textAlign?: "center" | "right";
  moTextCenter?: boolean;

  btnYn: boolean;
  btnTitle?: string;
  btnId?: string;
  btnHref?: string;
  btnColorStyle?: React.CSSProperties;
  btnIco?: JSX.Element;
  btnIcoPosition?: "left" | "right";
  btnHover?: boolean;
}

/**
 * @children : 왼쪽 컨텐츠
 *
 * @sectionBg : 각 섹션의 배경 컬러 - 기본 white
 *
 * @reverse : 죄우 변경 - 기본 왼쪽 child 오른쪽 title
 *
 * * 오른쪽 컨텐츠 정보
 *
 * @title : 섹션 제목 - 서비스 설명 `<br />`풍부한 데이터로부터
 *
 * @desc : 섹션 제목 밑 설명 - 국내시장 전역을 커버할 수 있는 풍부한 데이터를 활용하여 `<br />`정교한 오디언스 타겟팅으로 광고 효과를 상승 시킬 수 있습니다
 *
 * @color ?: 텍스트 컬러
 *
 * @textAlign ?: 텍스트 정렬
 *
 * @moTextCenter ?: 모바일 텍스트 센터 정렬
 *
 * * 오른쪽 컨텐츠 버튼
 *
 * @btnYn : 버튼 여부
 *
 * @btnHref ?: 링크
 *
 * @btnColorStyle ?: 링크 버튼 색상 (배경, 텍스트)
 *
 * @btnIco ?: 링크 버튼 아이콘 태그
 *
 * @btnIcoPosition ?: 링크 버튼 아이콘 위치
 *
 * @btnHover ?: 링크 버튼 호버 유무, 호버 시 아이콘 위치 변경
 *
 * * 접근성
 *
 * @btnTitle :  title, 링크 버튼 이름
 *
 * @btnId : id
 */

export default function SectionVarticalLayout({
  children,
  sectionBg,
  reverse,
  title,
  desc,
  color,
  textAlign,
  moTextCenter,
  btnYn,
  btnTitle,
  btnId,
  btnHref,
  btnColorStyle,
  btnIco,
  btnIcoPosition,
  btnHover,
}: sectionVarticalLayoutProps) {
  return (
    <section
      id={style.lastSection}
      className={`section_padding`}
      style={{ background: sectionBg ? sectionBg : "var(--white)" }}
    >
      <div className={`wrap flex_between ${style.section_box}`}>
        {reverse === undefined || reverse === false ? (
          <div className={style.children}>{children}</div>
        ) : (
          <></>
        )}

        <div
          className={`${
            reverse !== undefined || reverse === true
              ? "flex_start"
              : "flex_end"
          } ${style.title}`}
          style={
            {
              // width: reverse === undefined || reverse === false ? "" : "70%",
            }
          }
        >
          <SectionTitle
            title={title}
            desc={desc}
            titleFs={`var(--fs-36)`}
            textAlign={textAlign}
            moTextCenter={moTextCenter}
            color={color}
          />

          {btnYn === true ? (
            <BtnLink
              title={btnTitle ? btnTitle : ""}
              id={btnId ? btnId : ""}
              href={btnHref ? btnHref : ""}
              // colorStyle={btnColorStyle}
              icoPosition={btnIcoPosition}
              ico={btnIco}
              hover={btnHover ? btnHover : false}
            />
          ) : (
            <></>
          )}
        </div>

        {reverse !== undefined || reverse === true ? (
          <div className={style.children}>{children}</div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
