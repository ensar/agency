import { motion } from "framer-motion";

const Testimonial = ({ name, img, index }) => {
  const variants = {
    visible: (i) => ({
      translateX: "0px",
      opacity: 1,
      transition: {
        duration: i * 0.8,
      },
    }),
    hidden: { opacity: 0, translateX: "100px" },
  };

  return (
    <motion.div
      className='testimonial'
      custom={index}
      whileInView='visible'
      initial='hidden'
      variants={variants}
      viewport={{ once: true, margin: "-50px" }}
    >
      <img className='testimonial-img' src={img} alt='testimonial' />
      <h6 className='testimonial-name'>{name}</h6>
      <p className='testimonial-view'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        ullamcorper scelerisque mi, in malesuada felis malesuada vel.
      </p>
    </motion.div>
  );
};
export default Testimonial;
