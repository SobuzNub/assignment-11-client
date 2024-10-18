import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../Shared/LoadingSpinner";
import BorrowBook from "./BorrowBook";
import { Helmet } from "react-helmet-async";


const BorrowedBooks = () => {

    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const { data: borrowedBooks, isLoading, refetch } = useQuery({
        queryKey: ['borrow-book', user?.email],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/borrow-book/${user?.email}`)
            return data;
        }
    })

    if (isLoading) return <LoadingSpinner></LoadingSpinner>

    console.log(borrowedBooks);

    return (
        <div>
            <Helmet>
                <title>Borrowed Book ||</title>
            </Helmet>
            <div className='container mx-auto px-4 sm:px-8'>
                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            User Profile & Book Name
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Book Category
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            User Email
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Borrow Date
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Return Date
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Table Row Data */}
                                    {
                                        borrowedBooks.map(borrow => <BorrowBook key={borrow._id} borrow={borrow} refetch={refetch}></BorrowBook>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BorrowedBooks;