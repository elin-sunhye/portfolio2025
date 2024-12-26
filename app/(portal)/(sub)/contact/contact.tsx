'use client';

import style from './page.module.scss';
import inpStyle from '@/component/common/Input/input.module.scss';
import {TiSocialInstagram, TiSocialLinkedin} from "react-icons/ti";
import {MdOutlineMarkEmailUnread, MdSocialDistance} from "react-icons/md";
import {BsTelephone} from "react-icons/bs";
import {IoMdInformationCircleOutline} from "react-icons/io";
import {useForm} from "react-hook-form";
import {ChangeEvent} from "react";
import Textarea from "@/component/common/Textarea/Textarea";
import Btn from "@/component/common/btn/Btn";
import {useRouter} from "next/navigation";
import {useAutoAlert} from "@/hook/useAutoAlert";

//
interface sendMailForm {
    compNm: string;
    pn: string;
    position: string;
    message: string;
}

export default function Contact() {
    //
    const router = useRouter();
    const {setIsChange, setStatus, setText} = useAutoAlert();

    // 메일 연락 ---------------------------------
    const {
        register,
        formState: {errors},
        watch,
        reset,
        handleSubmit,
        setValue,
        getValues,
        setError,
        setFocus,
    } = useForm<sendMailForm>({
        mode: "onChange",
        defaultValues: {
            compNm: "",
            pn: "",
            position: "",
            message: "",
        },
    });

    return (
        <>
            {/* 서브탑 */}
            <div className={style.sub_top}>
                <p>Let's Connect</p>
            </div>

            {/* 컨텐츠 */}
            <div className={style.contact_box}>
                <div className={`wrap ${style.contact_wrap}`}>
                    {/* 정보 */}
                    <div className={style.left}>
                        <div>
                            <span className={style.ico}><IoMdInformationCircleOutline role={"img"}
                                                                                      aria-label={"인포메이션 아이콘"}/></span>
                            <p>INFORMATION</p>
                            <p className={style.information}>
                                <span>김선혜</span>
                                <span>1996.04.03</span>
                            </p>
                        </div>
                        <div>
                            <span className={style.ico}><BsTelephone role={"img"} aria-label={"전화기 아이콘"}/></span>
                            <p>TEL</p>
                            <a href={"tel:01021620043"}>010-2162-0043</a>
                        </div>
                        <div>
                            <span className={style.ico}><MdOutlineMarkEmailUnread role={"img"}
                                                                                  aria-label={"메일 아이콘"}/></span>
                            <p>EMAIL</p>
                            <a href={"mailto:tjsgp1401@naver.com"}>tjsgp1401@ <br/>naver.com</a>
                        </div>
                        <div>
                                <span className={style.ico}><MdSocialDistance role={"img"}
                                                                              aria-label={"소셜 아이콘"}/></span>
                            <p>SOCIAL</p>
                            <a href={"/"} className={style.ico}><TiSocialInstagram role={"img"}
                                                                                   aria-label={"인스타 로고"}/></a>
                            <a href={"/"} className={style.ico}><TiSocialLinkedin role={"img"}
                                                                                  aria-label={"링크드인 로고"}/></a>
                        </div>
                    </div>

                    {/* 메일 연락 */}
                    <form className={style.right}
                          onSubmit={handleSubmit((data: sendMailForm) => {
                              setIsChange(true);
                              setStatus("success");
                              setText("전송되었습니다.")
                              reset();
                          })}>
                        <div className={style.row}>
                            <label htmlFor={"compNm"}>Company</label>
                            <input
                                id={"compNm"}
                                className={`${inpStyle.input} ${inpStyle.lg}`}
                                type={"text"}
                                placeholder={"회사 이름"}
                                {...register("compNm", {
                                    required: "회사 이름을 입력해주세요.",
                                })}
                            />
                        </div>
                        <div className={style.row}>
                            <label htmlFor={"pn"}>Company Number or Reply Number</label>
                            <input
                                id={"pn"}
                                className={`${inpStyle.input} ${inpStyle.lg}`}
                                type={"text"}
                                placeholder={"회신 받을 연락처"}
                                value={watch("pn").replace(
                                    /^(\d{3})(\d{3,4})(\d{4})$/,
                                    `$1-$2-$3`
                                )}
                                {...register("pn", {
                                    required: "회신 받을 연락처를 입력해주세요.",
                                    pattern: {
                                        value: /(01[016789])-(\d{3,4})-(\d{4})/,
                                        message: "숫자만 입력해주세요.",
                                    },
                                })}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                    const value = e.currentTarget.value
                                        .replace(/[^0-9]/g, "")
                                        .replaceAll("-", "");

                                    setValue("pn", value);
                                }}
                            />
                        </div>
                        <div className={style.row}>
                            <label htmlFor={"position"}>Request Position</label>
                            <input
                                id={"position"}
                                className={`${inpStyle.input} ${inpStyle.lg}`}
                                type={"text"}
                                placeholder={"제안 포지션"}
                                {...register("position", {
                                    required: "제안하는 포지션을 입력해주세요.",
                                })}
                            />
                        </div>
                        <div className={style.row}>
                            <label htmlFor={"message"}>Message</label>
                            <Textarea title={"Message"}
                                      placeholder={"내용을 작성해주세요."}
                                      {...register("message", {
                                          required: "내용을 작성해주세요.",
                                      })}
                            ></Textarea>
                        </div>

                        <div className={style.row}>
                            <p className={style.essential}>모두 필수 사항입니다.</p>
                            <p className={style.error_message}>
                                <span>
                                    {errors.compNm && errors.compNm.message}
                                </span>
                                <span>
                                    {errors.pn && errors.pn.message}
                                </span>
                                <span>
                                    {errors.position && errors.position.message}
                                </span>
                                <span>
                                    {errors.message && errors.message.message}
                                </span>
                            </p>

                            <Btn id={'contact'} title={'연락하기'}
                                 type="submit"

                            >SEND</Btn>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
}
