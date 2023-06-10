import About from "./HomeComponent/About";
import Banner from "./HomeComponent/Banner";
import Services from "./HomeComponent/Services";

import SliderMarquee from "./HomeComponent/SliderMarquee";

const Home = () => {
    return (
        <div>
     
 <Banner/>
    <Services/>
    <About/>
 <SliderMarquee/>
        </div>
    );
};

export default Home;