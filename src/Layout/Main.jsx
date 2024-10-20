import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";


const Main = () => {
    const location = useLocation();
    const noFooter = location.pathname.includes('login') || location.pathname.includes('register') || location.pathname.includes('borrowedBook') || location.pathname.includes('addBook')
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            {noFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;