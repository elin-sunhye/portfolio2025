"use client";
// TODO:  함수형 컴포넌트 ErrorBoundary 구현 시 조건
// React 16.8부터 도입된 useState와 useEffect 사용
// 다만, ErrorBoundary와 같은 오류 경계 기능은 훅으로는 직접 구현할 수 없기 때문에 React 18부터 제공되는 React.Suspense와 useErrorBoundary 훅을 사용

// components/ErrorBoundary.tsx

"use client";

import React, { ReactNode, useEffect } from "react";
import {
  ErrorBoundary as ReactErrorBoundary,
  FallbackProps,
} from "react-error-boundary";
import style from "./ErrorBoundary.module.scss";
import Image from "next/image";
import { Btn } from "../Btn/Btn";

interface Props {
  children: ReactNode;
}

interface ErrorType {
  name: string;
  message: string;
  stack?: string;
}

export const ErrorFallback: React.FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  // useEffect(() => {
  //   fetch(`/api/menu/registerErrorLog`, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       errMsg: `${error.name} : ${error.message}`,
  //       errUrl: window.location.href,
  //       fullStacktrace: error.stack,
  //     }),
  //   }).then((res) => res.json());
  // }, [error]);
  return (
    <div className={`${style.error_box}`}>
      <div className={`${style.error_img_box} `}>
        <Image
          src={
            error.message.includes("403") || error.message.includes("404")
              ? "/img/img_error_400.svg"
              : "/img/img_error_500.svg"
          }
          alt="에러 이미지"
          width={0}
          height={0}
        />
        <h1>{error.message.includes("40") ? error.message : ""}</h1>
      </div>
      <p className={style.error_txt}>
        {error.message.includes("403")
          ? "Access denied."
          : error.message.includes("404")
          ? "Page not found."
          : "An unexpected error occurred."}
      </p>
      <Btn
        title={"돌아가기"}
        type={"button"}
        id={"goBack"}
        btnType={"text"}
        hover={false}
        // onClick={resetErrorBoundary}
        onClick={() => {
          window.history.back();
        }}
      >
        돌아가기
      </Btn>
    </div>
  );
};

const ErrorBoundary: React.FC<Props> = ({ children }) => {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
