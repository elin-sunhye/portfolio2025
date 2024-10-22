import style from './cardIco.module.scss';

interface CardIcoProps {
  title?: string;
  desc?: string;
  cardBg?: string;
  ico?: JSX.Element;
  children?: React.ReactNode;
}

/**
 * @param title ?: 카드 제목
 *
 * @param desc ?: 카드 설명
 *
 * @param ico ?: 카드 아이콘
 *
 * @param cardBg ?: 카드 배경 색 - 기본 white
 */
export default function CardIco({
  title,
  desc,
  cardBg,
  ico,
  children,
}: CardIcoProps) {
  return (
    <div
      className={`flex_start ${style.card_ico}`}
      style={{ background: cardBg ? cardBg : 'var(--white)' }}
    >
      <div className={`flex_between ${style.top}`}>
        <div className={`${style.title_box} ${ico ? '' : style.width_100}`}>
          {title !== '' && title ? (
            <p>
              {title.split(`<br />`).map((text: string) => {
                return (
                  <>
                    {text} <br />
                  </>
                );
              })}
            </p>
          ) : (
            <></>
          )}
          {desc !== '' && desc ? (
            <span>
              {desc.split(`<br />`).map((text: string) => {
                return (
                  <>
                    {text} <br />
                  </>
                );
              })}
            </span>
          ) : (
            <></>
          )}
        </div>
        <div className={`flex_end ${style.ico_box}`}>{ico ? ico : <></>}</div>
      </div>
      {children ? <div className={style.bottom}>{children}</div> : <></>}
    </div>
  );
}
