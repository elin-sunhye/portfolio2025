import style from './page.module.scss';

export default function Contact() {
  return (
    <>
      <div className={style.sub_top}>
        <p>Let's Contact</p>
      </div>

      <div className={style.contact_box}>
        <div className={style.left}></div>
        <div className={style.right}></div>
      </div>
    </>
  );
}
