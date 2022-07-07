import custom from "../assets/images/3.jpg";
import arrow from "../assets/icons/arrow.svg";
import { motion } from "framer-motion";

const Custom = () => {
  return (
    <div className='custom'>
      <div className='custom-info'>
        <h2>Custom & Plugin Development</h2>
        <p>
          Commonly used in the graphic, print & publishing industris for
          previewing visual layout and mockups
        </p>
        <button>
          <img src={arrow} alt='arrow' />
        </button>
      </div>
      <motion.img
        src={custom}
        alt='custom'
        className='custom-img'
        initial={{ opacity: 0, translateX: "200px" }}
        whileInView={{ opacity: 1, translateX: "0px" }}
        viewport={{ once: true, margin: "-50px" }}
      />
    </div>
  );
};
export default Custom;
