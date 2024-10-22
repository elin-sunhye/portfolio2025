'use client';
import CSS from 'csstype';
import React, { Ref, forwardRef, useEffect, useRef, useState } from 'react';
import style from './Table.module.scss';
// import { CommonCheckBox } from "@/component/common/CommonCheckBox/CommonCheckBox";
// import { CheckedState } from "@radix-ui/react-checkbox";

export interface TableHeader {
  /**
   * 실제로 보이는 이름
   */
  name: string;
  /**
   * 실제 데이터의 키값과 매칭 되는 값
   */
  value: string;
  /**
   * 정렬(텍스트만 가능?)
   */
  align?: CSS.Property.TextAlign;
  /**
   * 컬럼 width -> 테이블이 horizontal 일 경우 첫번째 두번째 데이터의 width만 적용됨
   */
  width?: string;
  /**
   * 로우 값을 받아서 커스텀 할 수 있는 함수
   */
  accessFn?: Function;
  /**
   * 테이블에 폼을 넣을 경우 사용. 지금은 checkbox만 가능 추후 필요하면 추가
   */
  form?: 'check';
  /**
   * form에서 select를 선택 했을시 select의 option 데이터
   */
  options?: any[];
  /**
   * 유효성 검사 editable에서만 사용(editable 필요한 경우 추가 함)
   */
  valid?: Function;
}

interface TableProps<T> {
  /**
   * 데이터: checkbox 사용 시, 항상 data는 rowId property를 들고 있어야 함
   */
  data: T[];
  /**
   * 테이블 헤더
   */
  headers: TableHeader[];
  /**
   * 테이블 형태
   */
  tableType: 'vertical' | 'horizontal';
  /**
   * 데이터 로딩 중일 때 tbody에 데이터 불러오는 중입니다 메세지 제공
   */
  isLoading?: boolean;
  /**
   * 웹접근성 : caption
   */
  tableCaption: string;
  /**
   * 웹 접근성과 체크박스 스크린 리더를 위한 props,
   * 체크 박스 클릭 시 해당 제목을 가져옴
   * 데이터 key
   * header value 값ㄴ
   */
  itemTitle: string;
  /**
   * tr 호버 여부
   */
  trHover?: boolean;
  /**
   * 모바일에서는 보이고 웹에서는 안보일 경우 안 보이는 컬럼 index로 보내줘야 함 제일 왼쪽이 1
   */
  pcNone?: number[];
  /**
   * 웹에서는 보이고 모바일에서는 안 보일 경우 안 보이는 컬럼 index로 보내줘야 함 제일 왼쪽이 1
   */
  mobileNone?: number[];
  /**
   * 체크된 리스트 배열
   */
  checkList?: (list: T[]) => void;
}
/**
 * @param data (필수) 데이데
 * @param headers (필수) 테이블 헤더
 * @param tableTupe (필수) 테이블 가로 세로 방향
 * @param trHover tr hover 여부
 * @param isLoading 데이터 로딩 중일 때 tbody에 데이터 불러오는 중입니다. 표시(react query 사용시 사용하면 좋음)
 * @param tableCaption 웹접근성을 위한 테이블의 caption
 * @param itemTitle 웹 접근성과 체크박스 스크린 리더를 위한 props > 체크 박스 클릭 시 해당 props로 접근해 제목을 가져옴
 * @pcNone 모바일에서는 보이고 웹에서는 안보일 경우 안 보이는 컬럼 index로 보내줘야 함 제일 왼쪽이 1
 * @mobileNone 모바일일 경우 안 보이는 컬럼 index로 보내줘야 함 제일 왼쪽이 1
 * @param checkList 체크 리스트
 */

const Table = forwardRef(
  <T extends { rowId: string }>(
    {
      data,
      headers,
      tableType,
      isLoading,
      trHover,
      tableCaption,
      itemTitle,
      pcNone,
      mobileNone,
      checkList,
    }: TableProps<T>,
    ref: Ref<any>
  ) => {
    // check
    let checkRef = useRef<HTMLButtonElement[]>([]);
    const [checkArray, setCheckArray] = useState<T[]>([]);
    const [keyboardSyncAllEventBoolean, setKeyboardSyncAllEventBoolean] =
      useState<boolean>(false);
    const [
      keyboardSyncIndividEventBoolean,
      setKeyboardSyncIndividEventBoolean,
    ] = useState<boolean[]>(
      data === null || !data.length ? [false] : data.map((item) => false)
    );

    useEffect(() => {
      if (checkList !== undefined) {
        checkList(checkArray);
      }

      if (checkArray.length === data.length) {
        setKeyboardSyncAllEventBoolean(true);
        setKeyboardSyncIndividEventBoolean(data.map((item) => true));
      }

      if (checkArray.length === 0) {
        setKeyboardSyncAllEventBoolean(false);
        setKeyboardSyncIndividEventBoolean(data.map((item) => false));
      }

      if (checkArray.length < data.length) {
        setKeyboardSyncAllEventBoolean(false);
      }
    }, [checkArray]);

    // const allCheck;

    return tableType === 'vertical' ? (
      <table className={style.tb_st1} ref={ref}>
        <colgroup>
          {headers.map((width: TableHeader, index: number) => {
            return (
              <col
                key={`vertical_${index}`}
                width={width.width ? width.width : 'auto'}
              />
            );
          })}
        </colgroup>
        <caption>{tableCaption}</caption>
        <thead>
          <tr>
            {headers.map((thead: TableHeader, thIndex: number) => {
              switch (thead.form) {
                case 'check':
                  return (
                    <th
                      key={`thCheck_${thead.value}`}
                      className={`${
                        pcNone?.find((num) => num === thIndex + 1) !== undefined
                          ? style.pc_none
                          : ''
                      } ${
                        mobileNone?.find((num) => num === thIndex + 1) !==
                        undefined
                          ? style.mo_none
                          : ''
                      }`}
                    >
                      {/* <CommonCheckBox
                        id={"thChekcBoxAll"}
                        style={{ margin: "0 auto" }}
                        checked={
                          data.length === checkArray.length ? true : false
                        }
                        onCheckedChange={(e) => {
                          if (e === true) {
                            setKeyboardSyncAllEventBoolean((prev) => !prev);
                            setCheckArray(data);
                          } else if (e === false) {
                            setKeyboardSyncAllEventBoolean((prev) => !prev);
                            setCheckArray([]);
                          }
                          //   handleInputChange(e);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            if (keyboardSyncAllEventBoolean === false) {
                              setKeyboardSyncAllEventBoolean((prev) => !prev);
                              setCheckArray(data);
                            } else if (keyboardSyncAllEventBoolean === true) {
                              setKeyboardSyncAllEventBoolean((prev) => !prev);
                              setCheckArray([]);
                            }
                          }
                        }}
                      /> */}
                    </th>
                  );

                default:
                  return (
                    <th
                      key={`thCheck_${thead.value}`}
                      className={`${
                        pcNone?.find((num) => num === thIndex + 1) !== undefined
                          ? style.pc_none
                          : ''
                      } ${
                        mobileNone?.find((num) => num === thIndex + 1) !==
                        undefined
                          ? style.mo_none
                          : ''
                      }`}
                    >
                      {thead.name}
                    </th>
                  );
              }
            })}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={headers.length}>데이터가 없습니다.</td>
            </tr>
          ) : (
            data.map((tbody, trIndex) => {
              return (
                <tr
                  key={`tbody_${trIndex}`}
                  className={`${
                    trHover && trHover === true ? style.hover : ''
                  }`}
                >
                  {headers.map((thead: TableHeader, tdIndex) => {
                    switch (thead.form) {
                      case 'check':
                        return (
                          <td
                            key={`check_${thead.value}`}
                            className={`${
                              pcNone?.find((num) => num === tdIndex + 1) !==
                              undefined
                                ? style.pc_none
                                : ''
                            } ${
                              mobileNone?.find((num) => num === tdIndex + 1) !==
                              undefined
                                ? style.mo_none
                                : ''
                            }`}
                          >
                            {/* <CommonCheckBox
                              id={"thChekcBox"}
                              data-value={trIndex}
                              style={{ margin: "0 auto" }}
                              ref={(elem) => {
                                if (elem !== null) {
                                  // if (ref !== null) {
                                  //   //@ts-ignore
                                  //   ref.current[trIndex] = elem;
                                  // }
                                  checkRef.current[trIndex] = elem;
                                }
                              }}
                              checked={
                                checkArray.some(
                                  (seq) => seq.rowId === tbody.rowId
                                )
                                  ? true
                                  : false
                              }
                              onCheckedChange={(e: CheckedState) => {
                                if (e === true) {
                                  setCheckArray([...checkArray, tbody]);

                                  const newKeyboardSyncIndividEventBoolean =
                                    keyboardSyncIndividEventBoolean.map(
                                      (item, idx) => {
                                        if (idx === trIndex) {
                                          return !item;
                                        } else {
                                          return item;
                                        }
                                      }
                                    );

                                  setKeyboardSyncIndividEventBoolean(
                                    newKeyboardSyncIndividEventBoolean
                                  );
                                } else if (e === false) {
                                  setCheckArray((array) => {
                                    if (
                                      array.some(
                                        (seq) => seq.rowId === tbody.rowId
                                      )
                                    ) {
                                      // 이미 멤버에 있으면
                                      const removeList = array.filter(
                                        (seq) => seq.rowId !== tbody.rowId
                                      );
                                      return [...removeList];
                                    } else {
                                      return checkArray;
                                    }
                                  });

                                  const newKeyboardSyncIndividEventBoolean =
                                    keyboardSyncIndividEventBoolean.map(
                                      (item, idx) => {
                                        if (idx === trIndex) {
                                          return !item;
                                        } else {
                                          return item;
                                        }
                                      }
                                    );

                                  setKeyboardSyncIndividEventBoolean(
                                    newKeyboardSyncIndividEventBoolean
                                  );
                                }
                              }}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  if (
                                    keyboardSyncIndividEventBoolean[trIndex] ===
                                    false
                                  ) {
                                    const newKeyboardSyncIndividEventBoolean =
                                      keyboardSyncIndividEventBoolean.map(
                                        (item, idx) => {
                                          if (idx === trIndex) {
                                            return !item;
                                          } else {
                                            return item;
                                          }
                                        }
                                      );

                                    setKeyboardSyncIndividEventBoolean(
                                      newKeyboardSyncIndividEventBoolean
                                    );
                                    setCheckArray([...checkArray, tbody]);
                                  } else if (
                                    keyboardSyncIndividEventBoolean[trIndex] ===
                                    true
                                  ) {
                                    const newKeyboardSyncIndividEventBoolean =
                                      keyboardSyncIndividEventBoolean.map(
                                        (item, idx) => {
                                          if (idx === trIndex) {
                                            return !item;
                                          } else {
                                            return item;
                                          }
                                        }
                                      );

                                    setKeyboardSyncIndividEventBoolean(
                                      newKeyboardSyncIndividEventBoolean
                                    );
                                    setCheckArray((array) => {
                                      if (
                                        array.some(
                                          (seq) => seq.rowId === tbody.rowId
                                        )
                                      ) {
                                        // 이미 멤버에 있으면
                                        const removeList = array.filter(
                                          (seq) => seq.rowId !== tbody.rowId
                                        );
                                        return [...removeList];
                                      } else {
                                        return checkArray;
                                      }
                                    });
                                  }
                                }
                              }}
                            /> */}
                            <span className="screen_out">
                              {/* @ts-ignore */}
                              {tbody[itemTitle] + ' 선택'}
                            </span>
                          </td>
                        );
                      default:
                        return (
                          <td
                            key={thead.value}
                            className={`${
                              pcNone?.find((num) => num === tdIndex + 1) !==
                              undefined
                                ? style.pc_none
                                : ''
                            } ${
                              mobileNone?.find((num) => num === tdIndex + 1) !==
                              undefined
                                ? style.mo_none
                                : ''
                            }`}
                            style={{
                              textAlign: thead.align,
                            }}
                          >
                            {/* @ts-ignore */}
                            {thead.accessFn
                              ? thead.accessFn(data[trIndex], trIndex)
                              : // @ts-ignore
                                tbody[thead.value]}
                          </td>
                        );
                    }
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    ) : (
      <table className={style.tb_st2} ref={ref}>
        <colgroup>
          <col
            width={
              headers.length > 0 && headers[0].width ? headers[0].width : 'auto'
            }
          />
          <col
            width={
              headers.length > 0 && headers[1].width ? headers[1].width : 'auto'
            }
          />
        </colgroup>
        <caption>{tableCaption}</caption>
        <tbody>
          {headers.map((thead: TableHeader, trIndex: number) => {
            return (
              <tr key={`tr_${trIndex}`}>
                <th>{thead.name}</th>
                <td
                  style={{
                    textAlign: thead.align,
                  }}
                >
                  {data.length === 0
                    ? thead.accessFn
                      ? thead.accessFn(headers[trIndex], trIndex)
                      : ''
                    : data.map((tbody: T, index: number) => {
                        return (
                          <>
                            {/* @ts-ignore */}
                            {thead.accessFn
                              ? thead.accessFn(data[index], index)
                              : // @ts-ignore
                                tbody[thead.value]}
                          </>
                        );
                      })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
);

Table.displayName = 'Table';
export default Table as <T extends {}>(
  props: TableProps<T> & {
    ref: Ref<HTMLTableElement | HTMLButtonElement | HTMLButtonElement[]>;
  }
) => JSX.Element;
