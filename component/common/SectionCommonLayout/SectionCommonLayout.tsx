"use client";

import { BtnLink } from "@/component/common/BtnLink/BtnLink";
import { SectionTitle } from "@/component/common/SectionTitle/SectionTitle";
import style from "./sectionCommonLayout.module.scss";

interface sectionCommonLayoutProps {
  sectionId: string;
  sectionClass?: string;
  sectionBg?: string;
  children?: React.ReactNode;

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
 * @sectionId : 각 섹션의 고유 id
 *
 * @sectionClass ?: 각 섹션의 class
 *
 * @sectionBg : 각 섹션의 배경 컬러 기본은 white
 *
 * @children : 각 섹션의 자식 컨텐츠
 *
 * * 컨텐츠 제목
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
 * * 컨텐츠 제목 버튼
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

export default function SectionCommonLayout({
  sectionId,
  sectionClass,
  sectionBg,
  children,
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
}: sectionCommonLayoutProps) {
  return (
    <section
      id={sectionId}
      className={`section_padding ${sectionClass}`}
      style={{
        background: sectionBg ? sectionBg : "var(--white)",
      }}
    >
      <div className={`wrap flex_start ${style.section_box}`}>
        {title === "" && desc === "" ? (
          <></>
        ) : (
          <SectionTitle
            title={title}
            desc={desc}
            textAlign={textAlign}
            moTextCenter={moTextCenter}
            color={color}
          />
        )}

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

        <>{children ? children : ""}</>
      </div>
    </section>
  );
}
