import images from "../assets/portfolio/portfolioImages"
import "../styling/Inspiration.css"


const Inspiration = () => {
  return (
        <div className="inspiration">
        <h2>Photography is the beauty of life, captured.</h2>
        <div className="gallery">
            {images.map((img, index) => (
                <img 
                    key={index} 
                    src={img} 
                    alt={`Portfolio ${index + 1}`} 
                    loading="lazy" 
                    className="gallery-item"
                />
            ))}
        </div>
        </div>
    );
}

export default Inspiration;
