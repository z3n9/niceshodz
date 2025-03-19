import { Link } from "react-router-dom";
import image from "../assets/home_page_image.png"
import "../styling/Home.css"


const Home = () => {
    return (
        <div className="home">
            <h1 className="title">
                Here to capture <br />
                <span className="subtitle">THOSE NICE MOMENTS</span>
            </h1>
            <Link to="/inspiration">
                <button className="cta-button">View our portfolio</button>
            </Link>
            <div className="img-div">
                <img src={image} alt="Home" className="home-image" />
            </div>
        </div>
    );
};

export default Home;
