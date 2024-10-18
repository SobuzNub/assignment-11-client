import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import LoadingSpinner from "../Shared/LoadingSpinner";
import AllBookCard from "./AllBookCard";
import { Helmet } from "react-helmet-async";



const AllBook = () => {

    const axiosPublic = useAxiosPublic();

    const { data: allBook, isLoading } = useQuery({
        queryKey: ['allBook'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/books')
            return data;
        }
    })

    if (isLoading) return <LoadingSpinner></LoadingSpinner>

    console.log(allBook);

    return (
        <>
        <Helmet>
            <title>All Book ||</title>
        </Helmet>
            <div className="md:grid md:grid-cols-3 max-w-screen-xl mx-auto gap-5 mt-14">
                {
                    allBook.map(book => <AllBookCard key={book._id} book={book}></AllBookCard>)
                }
            </div>
        </>
    );
};

export default AllBook;