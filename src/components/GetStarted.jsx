import style from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div
    className={`${style.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${style.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${style.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] text-gradient mr-2">
          Get
        </p>
        <img
          src={arrowUp}
          alt="arrow"
          className="w-[23px] h-[23px] object-contain"
          loading="lazy"
        />
      </div>
      <div className={`${style.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] text-gradient">
          Started
        </p>
      </div>
    </div>
  </div>
);

export default GetStarted;
