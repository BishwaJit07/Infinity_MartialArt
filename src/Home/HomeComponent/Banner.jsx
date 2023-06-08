
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel interval={5000} transitionTime={1000} showStatus={false} infiniteLoop autoPlay >
        <div  style={{ position: 'relative' }} >
        <img src="https://i.ibb.co/2M2hPXs/ykal2g6f.jpg" alt="ykal2g6f" border="0"/>
        <div style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)' }} >
        <h2 className='text-xl text-blue-100 font-semibold py-2'>"Unlock the Infinite Power of <br/> Martial Arts at Infinity Martial Arts"</h2>
        <button className="btn glass bg-pink-700 text-white">Join Now</button>
      </div>
        </div>
       


        <div>
        <img src="https://i.ibb.co/w653dG8/full-length-studio-shot-two-women-taekwondo-athletes-training-isolated-black-background.jpg" alt="full-length-studio-shot-two-women-taekwondo-athletes-training-isolated-black-background" border="0"/>
        <div style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)' }} >
        <h2 className='text-xl text-blue-100 font-semibold py-2'>"Unlock the Infinite Power of <br/> Martial Arts at Infinity Martial Arts"</h2>
        <button className="btn glass bg-pink-700 text-white">Join Now</button>
      </div>
        </div>
        <div>
        <img src="https://i.ibb.co/DrxKcbL/karate-fighters.jpg" alt="karate-fighters" border="0"/>
        <div style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)' }} >
        <h2 className='text-xl text-blue-200 font-semibold py-2'>"Unlock the Infinite Power of <br/> Martial Arts at Infinity Martial Arts"</h2>
        <button className="btn glass bg-pink-700 text-white">Join Now</button>
      </div>
        </div>

        <div>
        <img src="https://i.ibb.co/xX4ZqGv/c2c3ldlx.jpg" alt="c2c3ldlx" border="0"/> 
        <div style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)' }} >
        <h2 className='text-xl text-blue-100 font-semibold py-2'>"Unlock the Infinite Power of <br/> Martial Arts at Infinity Martial Arts"</h2>
        <button className="btn glass bg-pink-700 text-white">Join Now</button>
      </div>
        </div>

    </Carousel>
    );
};

export default Banner;