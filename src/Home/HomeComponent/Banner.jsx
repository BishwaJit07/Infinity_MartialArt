
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel interval={5000} transitionTime={1000} showStatus={false} infiniteLoop autoPlay >
        <div>
            <img src="/src/assets/home/01.jpg" />
            
        </div>
        <div>
            <img src="/src/assets/home/02.jpg" />
           
        </div>
        <div>
            <img src="/src/assets/home/03.png" />
            
        </div>
    </Carousel>
    );
};

export default Banner;