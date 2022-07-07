import { user } from "./user";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  return (
    <div className='testimonialsContainer' id='testimonials'>
      <h5>TESTIMONIALS</h5>
      <h2>Read What Other Have To Say</h2>
      <div className='testimonials'>
        {user.map((u, i) => {
          return <Testimonial img={u.img} name={u.name} key={i} index={i} />;
        })}
      </div>
    </div>
  );
};

export default Testimonials;
