"use client";

import { useRecoilState } from "recoil";
import {
  openAlertState,
  openAlertStatus,
  openAlertText,
} from "@/recoil/autoAlert";
import "./AutoAlert.scss";
import {
  BsXCircleFill,
  BsExclamationTriangleFill,
  BsCheckCircleFill,
  BsInfoCircleFill,
} from "react-icons/bs";
import { StatusType } from "@/types/commonType";

export default function AutoAlert() {
  const [openState] = useRecoilState(openAlertState);
  const [text] = useRecoilState(openAlertText);
  const [status] = useRecoilState<StatusType>(openAlertStatus);

  return (
    <div
      className={`alert ${
        status === "error"
          ? "error"
          : status === "info"
          ? "info"
          : status === "success"
          ? "success"
          : status === "warning"
          ? "warning"
          : "disabled"
      } ${openState ? "animation_wrap" : ""}`}
    >
      <p className={openState ? "animation_p" : ""}>
        {status === "error" ? (
          <BsXCircleFill color="var(--error-3)" size={18} />
        ) : status === "info" ? (
          <BsInfoCircleFill color="var(--info-3)" size={18} />
        ) : status === "success" ? (
          <BsCheckCircleFill color="var(--success-3)" size={18} />
        ) : (
          <BsExclamationTriangleFill color="var(--warning-3)" size={18} />
        )}
        <span>{text}</span>
      </p>
    </div>
    // <></>
  );
}
