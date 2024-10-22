"use client";

import { Link } from "react-scroll";
import style from "./scrollSection.module.scss";
import { useEffect, useState } from "react";
import { SectionTitle } from "@/component/common/SectionTitle/SectionTitle";
import Image from "next/image";

interface ScrollSectionProps {
  tab: itemArrayType[];
  children: React.ReactNode;
}

export interface itemArrayType {
  item: string;
  desc: string;
  img: JSX.Element;
  /**
   * 첫번쨰 요소는 무조건 "first"여야한다
   */
  tab: string;
}

export default function ScrollSection({ tab, children }: ScrollSectionProps) {
  // 스크롤 시 fixed
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    let mounted = true;
    window.addEventListener("scroll", () => {
      const location = document.querySelector("#scrollSection") as HTMLElement;

      if (mounted) {
        if (window.scrollY >= location.offsetTop - 1) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      }
    });

    return () => {
      setScroll(false);
      mounted = false;
    };
  }, []);

  // link click
  const [linkClick, setLinkClick] = useState("first");

  return (
    <section
      id="scrollSection"
      className={`section_padding ${style.product_item_section}`}
    >
      <div className={`wrap flex_between ${style.wrap}`}>
        <div className={`${style.left} ${scroll ? style.active : ""}`}>
          {tab.map((item: itemArrayType) => {
            return (
              <Link
                key={`item_${item.item}`}
                to={item.tab}
                activeClass={style.active}
                spy={true}
                className={
                  linkClick === "first" && item.tab === "first"
                    ? style.active
                    : ""
                }
                onSetActive={() => {
                  setLinkClick(item.tab);
                }}
              >
                <SectionTitle title={item.item} desc={item.desc} />
              </Link>
            );
          })}
        </div>

        <div className={style.right}>{children}</div>
      </div>
    </section>
  );
}
