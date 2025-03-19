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
            <p>For BOOKINGS, please call us or go to the Book Your Event page.</p>
            
            <div className="contact-details">
                <p><i className="bi bi-whatsapp"></i>   1800-niceshodz</p>
                <p><i className="bi bi-envelope-at-fill"></i>   info@niceshodz.com</p>
            </div>

            <div className="location">
            <h3>Location</h3>
            <p>Somewhere 69, 1234 DP Zoeterwoude</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4920.4595090121!2d4.482097212225334!3d51.92976267179515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c43356d8d6302b%3A0xd5304e7f0f3c4b05!2sNoordplein%2028%2C%203032%20XL%20Rotterdam!5e0!3m2!1spt-BR!2snl!4v1730362775053!5m2!1spt-BR!2snl"
                width="300" height="225" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
  );
};

export default GetInTouch;
