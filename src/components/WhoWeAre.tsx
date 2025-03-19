import image1 from "../assets/Jackey.jpg"
import image2 from "../assets/Maarten de Nooy.jpg"
import "../styling/WhoWeAre.css"


const WhoWeAre = () => {
    return (
        <div className="who-we-are">
            <img src={image1} alt="Photographer 1" className="image1"/>
            <img src={image2} alt="Photographer 2" className="image2"/>
            <div className="text-container">
                <h1>About Us</h1>
                <p>
                    Welcome to Niceshodz - where passion meets creativity. We are a dynamic media company, specializing in photography and videography,
                    dedicated to capturing the essence of every moment and transforming it into compelling visual narratives.
                </p>
                <p>
                    At Niceshodz, we believe that every project tells a unique story. Wether it's the thrill of live sports events, the vibrancy of social media campaigns,
                    or the intimate details of personal milestones, our goal is to deliver high-quality, engaging content that resonates with your audience. We work closely
                    with our clients to understand their vision and bring it to life through innovative shooting techniques and meticulous post-production.
                </p>
                <p>
                    Our expertise spans from dynamic action shots and cinematic videography to comprehensive live streaming solutions - all designed to elevate your brand and
                    create lasting impressions. With a commitment to excellence and a passion for storytelling, Niceshodz is your trusted partner in turning ideas into visually
                    stunning realities.
                </p>
                <p>
                    Discover the power of great visuals with Niceshodz - where every frame tells a story.
                </p>
            </div>
        </div>
    );
}

export default WhoWeAre;
