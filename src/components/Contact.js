import contact from "../assets/images/4.jpg";
import Button from "./Button";

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <img src={contact} alt='contact' />
      <div className='contact-info'>
        <h2>Be a part of the next big thing</h2>
        <p>
          We work with Brans, Startups, to SMEs. Colaborate for more impact and
          growt
        </p>
        <Button />
      </div>
    </div>
  );
};

export default Contact;
