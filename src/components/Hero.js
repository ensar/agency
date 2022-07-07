import img from "../assets/images/1.jpg";
import Button from "./Button";

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <div className='hero-info'>
        <h1>Building digital products, brands & experience</h1>
        <p>
          Digital Agency is your online team management tool that easy and
          prompt
        </p>
        <Button />
      </div>
      <img className='hero-image' src={img} alt='peoples'></img>
    </div>
  );
};

export default Hero;
