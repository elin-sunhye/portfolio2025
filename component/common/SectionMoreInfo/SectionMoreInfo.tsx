"use client";

import style from "./sectionMoreInfo.module.scss";
import SectionVarticalLayout from "@/component/common/SectionVarticalLayout/SectionVarticalLayout";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { SiMicrosoftexcel } from "react-icons/si";
import { VscFilePdf, VscLink } from "react-icons/vsc";

interface SectionMoreInfoProps {
  sectionBg?: string;
}

export default function SectionMoreInfo({ sectionBg }: SectionMoreInfoProps) {
  return (
    <SectionVarticalLayout
      title={`위코에 대해<br />더 궁금하신것이 있으신가요?`}
      desc={``}
      textAlign={`right`}
      moTextCenter={true}
      btnYn={true}
      btnTitle={`문의하기`}
      btnId={`contact`}
      btnHref={`/contact`}
      btnIcoPosition={`right`}
      btnIco={<FiArrowRight role={`img`} aria-label={`오른쪽 화살표 아이콘`} />}
      btnHover={true}
      sectionBg={sectionBg}
    >
      <div className={`flex_start ${style.left}`}>
        <p>
          위코 대해 더 궁금하신것이 있으신가요? <br />
          문서를 통하여 더욱 자세한 정보를 찾아 보실 수 있어요
        </p>

        <ul>
          <li>
            <a href={"#"} title={`위코 소개서`} target="_blank">
              <VscFilePdf
                role={`img`}
                aria-label={`pdf 파일 아이콘`}
                className={style.ico_pdf}
              />
              위코 소개서 &#40;PDF&#41;
              <VscLink role={`img`} aria-label={`외부 링크 아이콘`} />
            </a>
          </li>
          <li>
            <a href={"#"} title={`업종별 사례`} target="_blank">
              <SiMicrosoftexcel
                role={`img`}
                aria-label={`excel 파일 아이콘`}
                className={style.ico_excel}
              />
              업종별 사례 &#40;EXCEL&#41;
              <VscLink role={`img`} aria-label={`외부 링크 아이콘`} />
            </a>
          </li>
        </ul>
      </div>
    </SectionVarticalLayout>
  );
}
