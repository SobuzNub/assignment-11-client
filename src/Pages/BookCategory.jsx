

import { useLoaderData } from "react-router-dom";

import ShowBookCategory from "./ShowBookCategory";
import { Helmet } from "react-helmet-async";




const BookCategory = () => {

    const cate = useLoaderData();

    console.log(cate);

    return (
        <>
        <Helmet>
            <title>Book Category ||</title>
        </Helmet>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 my-12 max-w-7xl gap-5 mx-auto">
                {
                    cate.map(cat => <ShowBookCategory key={cat._id} cat={cat}></ShowBookCategory>)
                }
            </div>
        </>
    );
};

export default BookCategory;