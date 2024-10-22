"use client";

import {
  ChangeEventHandler,
  KeyboardEventHandler,
  Ref,
  forwardRef,
} from "react";
import style from "./input.module.scss";
import { TextField } from "@mui/material";
interface InputProps {
  size?: "sm" | "md" | "xlg";
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
  // 웹접근성
  id: string;
  labelNm: string;
  type: "text" | "password";
  value?: string;
  name: string;
}

/**
 * @size ?: 버튼의 사이즈 기본 lg
 *
 * @onChange ?:
 *
 * * 접근성
 *
 * @id : id
 *
 * @labelNm :  인풋 이름 라벨
 *
 * @type : 인풋 타입
 *
 * @value : value
 *
 * @name : name
 */
const Input = forwardRef(
  (
    {
      size,
      id,
      labelNm,
      type,
      value,
      name,
      onChange,
      onKeyUp,
      ...props
    }: InputProps & React.InputHTMLAttributes<HTMLInputElement>,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <>
        <label htmlFor={id} className="screen_out">
          {labelNm}
        </label>
        <input
          ref={ref}
          type={type}
          name={name}
          id={id}
          className={`${style.input} ${size ? style[size] : style.lg}`}
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
          autoComplete={"off"}
          {...props}
        />
      </>
    );
  }
);

Input.displayName = "Input";
export default Input as <T extends {}>(
  props: InputProps & {
    ref: Ref<HTMLInputElement>;
  }
) => JSX.Element;
