import style from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${style.marginY} ${style.padding} sm:flex-row flex flex-col bg-black-gradient-2 mx-[10px] sm:mx-0 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={style.heading2}>Let’s try our service now!</h2>
      <p className={`${style.paragraph} max-w-[470px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className={`${style.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button styles="rounded-[10px]" />
    </div>
  </section>
);

export default CTA;
