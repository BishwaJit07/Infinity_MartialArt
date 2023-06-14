import { useState } from "react";
import About from "./HomeComponent/About";
import Banner from "./HomeComponent/Banner";
import PopularClass from "./HomeComponent/PopularClass";
import PopularInstructor from "./HomeComponent/PopularInstructor";
import Services from "./HomeComponent/Services";

import SliderMarquee from "./HomeComponent/SliderMarquee";

const Home = () => {
    
    return (
        <div >
    
 <Banner/>

    <Services/>
    <PopularClass/>
    <PopularInstructor/>
    <About/>
 <SliderMarquee/>
        </div>
    );
};

export default Home;