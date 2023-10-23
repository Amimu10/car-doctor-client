import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-7xl px-4 lg:px-6 mx-auto">
            <Navbar></Navbar> 
            <Outlet></Outlet> 
            <Footer></Footer> 
        </div>
    );
};

export default MainLayout;