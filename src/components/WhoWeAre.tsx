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
            <div className="justification">
                <h2>Production</h2>
                <h3>Design Elements</h3>
                <p>Please provide a list of design elements alongside their justifications:</p>
                
                <ul>
                    <li>
                        <strong>A color scheme</strong>
                        <ul>
                            <li><span>#F6F3ED</span> – A soft off-white background tone that adds a subtle warmth and 
                                minimalistic elegance to the design. It provides contrast for the black-and
                                white imagery and contributes to a professional, clean aesthetic.</li>
                            <li><span>#000000</span> – Pure black is used for typography and branding, ensuring 
                                maximum readability and aligning with the high-contrast, cinematic theme of 
                                the brand’s photography and videography.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Font choices</strong>
                        <ul>
                            <li>Bold, modern sans-serif fonts are used for headings (e.g., "About Us") to 
                                emphasize clarity and strength. This reflects the brand’s bold and confident 
                                personality.</li>
                            <li>Body text uses a clean, readable serif or sans-serif font to ensure accessibility while keeping a professional tone.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>User interface patterns</strong>
                        <ul>
                            <li>A <strong>horizontal navigation bar</strong> at the top allows users to access core pages easily.</li>
                            <li>A <strong>two-column layout</strong> on the “About Us” section features impactful visuals 
                                on the left and text on the right, effectively balancing storytelling with design.</li>
                            <li>High-quality, full-width <strong>imagery</strong> is used throughout the site to immediately 
                                showcase the brand’s visual strength.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Navigation and content structure</strong>
                        <ul>
                            <li>The site uses a clear top menu with intuitive labels such as "Home," "What 
                                We Do," and "Book Your Event." This reflects a user-first mindset and 
                                supports seamless browsing.</li>
                            <li>Content is distributed in clear sections, with large visuals followed by 
                                concise, informative text that builds the narrative and supports the user 
                                journey.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Justification with design theory and vocabulary</strong>
                        <ul>
                            <li>The visual contrast between black-and-white imagery and neutral 
                                background draws focus to the craft of the photography itself, reinforcing 
                                the <strong>value and personality</strong> of a creative, detail-focused brand.</li>
                            <li>The elegant simplicity of the layout and minimal color palette aligns with a 
                                <strong>high-end marketing and communication strategy</strong>, suggesting 
                                professionalism, clarity, and creative confidence.</li>
                            <li>The use of strong visuals and clear messaging supports the <strong>unique value 
                                proposition</strong> of the product: delivering impactful, cinematic visual content.</li>
                        </ul>
                    </li>
                </ul>

                <h3>Testing Report</h3>
                <p><strong>Testing Goals</strong></p>
                <p>The primary goal of our testing was to evaluate whether visitors can clearly understand:</p>
                <ul>
                    <li>What Niceshodz can create (i.e., the type and quality of work).</li>
                    <li>What services we offer.</li>
                    <li>How to book us through the website.</li>
                </ul>

                <p><strong>Testing Methods</strong></p>
                <ul>
                    <li><strong>Participants:</strong> 4 individuals varying in age and digital familiarity.</li>
                    <li><strong>Setting:</strong> Testing was conducted in different environments, such as at home 
                        and in public areas, to observe how the site performs in a range of real
                        world contexts.</li>
                    <li><strong>Protocol:</strong> Each participant was given two tasks:
                        <ol>
                            <li>Browse the website to explore what Niceshodz does.</li>
                            <li>Attempt to book a photoshoot.</li>
                        </ol>
                    </li>
                </ul>

                <p><strong>Testing Results</strong>, which include:</p>
                <ul>
                    <li>The majority of users found the website simple to navigate and appreciated the strong visual impact.</li>
                    <li>Feedback suggested replacing the plain email and phone contact details 
                        with a more professional <strong>contact form</strong> to improve user experience and 
                        encourage inquiries.</li>
                    <li>Another key suggestion was to <strong>categorize the portfolio images</strong> (e.g., 
                        events, portraits, commercials) rather than displaying them all in a single 
                        gallery to make browsing more intuitive and user-friendly.</li>
                </ul>
            </div>
        </div>
    );
}

export default WhoWeAre;
