'use client';

import style from './TopBtn.module.scss';
import { useEffect, useRef, useState } from 'react';
import { IoArrowUp } from 'react-icons/io5';
import { Btn } from '@/component/common/Btn/Btn';

export default function TopBtn() {
  const [sticky, setSticky] = useState(true);

  useEffect(() => {
    let mounted = true;
    window.addEventListener('scroll', () => {
      //   console.log("window.scrollY", window.scrollY);
      //   console.log("document.body.scrollHeight", document.body.scrollHeight);
      //   console.log("window.innerHeight", window.innerHeight);
      //   console.log("asd", document.body.scrollHeight - window.scrollY);

      if (mounted) {
        if (
          document.body.scrollHeight - window.scrollY - window.innerHeight >=
          300
          // 300은 footer height와 탑 버튼과의 사이를 계산한 값! 고정임!
        ) {
          // 계산한 값이 300보다 크면 sticky
          return setSticky(true);
        } else {
          // 계산한 값이 300보다 작으면 sticky = false
          return setSticky(false);
        }
      }
    });
    return () => {
      setSticky(true);
      mounted = false;
    };
  }, []);

  return (
    <div className={`${style.top_btn} ${sticky ? style.sticky : ''}`}>
      <Btn
        title={'상단으로 가기'}
        btnType={'ico'}
        ico={<IoArrowUp role="img" aria-label="위로 화살표 아이콘" />}
        type={'button'}
        id={'BtnTop'}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        hover={false}
      />
    </div>
  );
}
