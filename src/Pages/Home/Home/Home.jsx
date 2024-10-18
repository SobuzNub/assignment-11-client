import { Helmet } from "react-helmet-async";
import Carousel from "./Carousel";
import CategoryCard from "./CategoryCard";


const Home = () => {
    return (
        <>
        <Helmet>
            <title>Home ||</title>
        </Helmet>
            <div>
                <Carousel></Carousel>
                <CategoryCard></CategoryCard>
            </div>
        </>
    );
};

export default Home;