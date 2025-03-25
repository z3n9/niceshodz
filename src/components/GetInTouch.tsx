// src/pages/GetInTouch.jsx
import sampleImage1 from '../assets/EC_Scheveningen-55.jpg';
import sampleImage2 from '../assets/HUB Radio - SShows-17.jpg';
import sampleImage3 from '../assets/PinkBowl2024-111 (1).jpg';
import sampleImage4 from '../assets/JG&F_Concert-12.jpg';
import sampleImage5 from '../assets/PinkBowl2024-147.jpg';

import "bootstrap-icons/font/bootstrap-icons.css"
import "../styling/GetInTouch.css"


const GetInTouch = () => {
  return (
    <div className="get-in-touch">
        <div className="gallery1">
            <img src={sampleImage1} alt="Gallery 1" />
            <img src={sampleImage2} alt="Gallery 2" />
            <div className='gallery2'>
                <img src={sampleImage3} alt="Gallery 3" />
                <img className="img2" src={sampleImage5} alt="Gallery 5" />
            </div>
            <img src={sampleImage4} alt="Gallery 4" />
        </div>
        <div className="contact-info">
            <h2>Contact Us</h2>
            <p>For more information, feel free to contact us by the following:</p>
            
            <div className="contact-details">
                <p><i className="bi bi-whatsapp"></i>   1800-niceshodz</p>
                <p><i className="bi bi-envelope-at-fill"></i>   niceshodz@icloud.com</p>
            </div>

            <div className="location">
            <h3>Location</h3>
            <p>Monseigneur Hopmansstraat 2, 4817 JS Breda</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.815246785976!2d4.791468512204918!3d51.58994937171474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c69f7c65d8a719%3A0x300d544aff2349b6!2sMonseigneur%20Hopmansstraat%202%2C%204817%20JS%20Breda!5e0!3m2!1spt-BR!2snl!4v1742862827616!5m2!1spt-BR!2snl" width="400" height="300" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
  );
};

export default GetInTouch;
