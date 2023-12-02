import { card } from "../assets";
import style, { layout } from "../style";
import Button from "./Button";

const cardDeal = () => (
  <section className={`${layout.section} mx-[10px] sm:mx-0`}>
    <div className={layout.sectionInfo}>
      <h2 className={style.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${style.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button styles="mt-10 rounded-[10px]" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" loading="lazy" />
    </div>
  </section>
);

export default cardDeal;
