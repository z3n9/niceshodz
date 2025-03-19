import { Link } from "react-router-dom";
import "../styling/WhatWeDo.css"


const WhatWeDo = () => {
    return (
        <div className="what-we-do">
            <h2>Our specialties</h2>
            <div className="services">
                <div className="service-card-wedding">
                    <div className="wedding-inner-div">
                        <h3>Wedding Photography</h3>
                        <p>Capturing Forever, One Frame at a Time.</p>
                        <Link to="/book-your-event">
                            <button>Book now</button>
                        </Link>   
                    </div>    
                </div>
                <div className="service-card-sport">
                    <div className="sport-inner-div">
                        <h3>Sports Photography</h3>
                        <p>Freeze the Action, Ignite the Passion.</p>
                        <Link to="/book-your-event">
                            <button>Book now</button>
                        </Link> 
                    </div>                  
                </div>
                <div className="service-card-event">
                    <div className="event-inner-div">
                        <h3>Event Photography</h3>
                        <p>Frame the Moment, Relive the Celebration.</p>
                        <Link to="/book-your-event">
                            <button>Book now</button>
                        </Link> 
                    </div>      
                </div>
            </div>
        </div>
    );
  };

export default WhatWeDo;
