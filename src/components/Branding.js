import branding from "../assets/images/2.jpg";
import arrow from "../assets/icons/arrow.svg";
import { motion } from "framer-motion";

const Branding = () => {
  return (
    <div className='branding' id='about'>
      <motion.img
        src={branding}
        alt='branding'
        className='branding-img'
        initial={{ opacity: 0, translateX: "-200px" }}
        whileInView={{ opacity: 1, translateX: "0px" }}
        viewport={{ once: true, margin: "-50px" }}
      />
      <div className='branding-info'>
        <h2>Branding & Design system</h2>
        <p>
          Commonly used in the graphic, print & publishing industris for
          previewing visual layout and mockups
        </p>
        <button>
          <img src={arrow} alt='arrow' />
        </button>
      </div>
    </div>
  );
};
export default Branding;
