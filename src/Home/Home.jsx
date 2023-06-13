import { useState } from "react";
import About from "./HomeComponent/About";
import Banner from "./HomeComponent/Banner";
import PopularInstructor from "./HomeComponent/PopularInstructor";
import Services from "./HomeComponent/Services";

import SliderMarquee from "./HomeComponent/SliderMarquee";

const Home = () => {
    
    return (
        <div >
    
 <Banner/>

    <Services/>
    <PopularInstructor/>
    <About/>
 <SliderMarquee/>
        </div>
    );
};

export default Home;