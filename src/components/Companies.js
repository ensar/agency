import spotify from "../assets/images/spotify.jpg";
import slack from "../assets/images/slack.jpg";
import dropbox from "../assets/images/dropbox.jpg";
import zoom from "../assets/images/zoom.jpg";

const Companies = () => {
  return (
    <div className='companiesContainer'>
      <h6>Trusted by 4,000+ companies</h6>
      <div className='companies'>
        <img src={spotify} alt='spotify' />
        <img src={slack} alt='slack' />
        <img src={dropbox} alt='dropbox' />
        <img src={zoom} alt='zoom' />
      </div>
    </div>
  );
};

export default Companies;
