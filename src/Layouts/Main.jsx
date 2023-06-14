
import { Outlet } from 'react-router-dom';
import DarkMode from '../DarkMode/DarkMode';
import Home from '../Home/Home';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const Main = () => {
    return (
        
        <div>
           
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;