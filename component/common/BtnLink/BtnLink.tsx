"use client";

import Link from "next/link";
import style from "./btnLink.module.scss";

interface BtnLinkProps {
  title: string;
  id: string;
  href: string;
  size?: "sm" | "md" | "xlg";
  // colorstyle?: React.CSSProperties;
  ico?: JSX.Element;
  icoPosition?: "left" | "right";
  hover: boolean;
}

/**
 * @size ?: 버튼의 사이즈 기본 lg
 *
 * @href : 링크
 *
 * @ico ?: 링크 버튼 아이콘 태그
 *
 * @icoPosition ?: 링크 버튼 아이콘 위치
 *
 * @hover : 링크 버튼 호버 유무, 호버 시 아이콘 위치 변경
 *
 * * 접근성
 *
 * @title :  title, 링크 버튼 이름
 *
 * @id : id
 */
export const BtnLink = ({
  title,
  id,
  href,
  size,
  icoPosition,
  ico,
  hover,
  ...props
}: BtnLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      href={href}
      title={title}
      id={id}
      className={`flex_center ${style.link_btn} ${hover ? style.hover : ""} ${
        size ? style[size] : style.lg
      }`}
      {...props}
    >
      {icoPosition === "left" ? (
        <>
          <span
            className={`flex_center ${style.ico_link_btn} ${style.mg_right}`}
          >
            {ico}
          </span>
          {title}
        </>
      ) : icoPosition === "right" ? (
        <>
          {title}
          <span className={`flex_center ${style.ico_link_btn}`}>{ico}</span>
        </>
      ) : (
        title
      )}
    </a>
  );
};
