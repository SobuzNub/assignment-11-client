import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import BorrowModal from "../../components/Modal/BorrowModal";
import { useState } from "react";


const BookDetails = () => {

    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    const [isOpen, setIsOpen] = useState(false)

    const setIsEditModalOpen = () =>{
        setIsOpen(false)
    }

    const { data: book } = useQuery({
        queryKey: ['book', id],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/book/${id}`)
            return data
        }
    })

    console.log(book);

    return (
        <div className="max-w-7xl mx-auto my-12 mt-12">
            <div className="max-w-xl mx-auto p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
                <img src={book?.image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600"><span className="font-bold">Category:</span>  {book?.category}</span>
                    <h2 className="text-xl font-semibold tracking-wide">Name: {book?.name}</h2>
                    <h2 className="text-xl font-semibold tracking-wide">Author Name: {book?.author}</h2>
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600"><span className="font-bold">Rating:</span>  {book?.rating}</span>
                    <p className="dark:text-gray-800"><span className="font-bold">Description:</span> {book?.description}</p>
                </div>
                <div className='flex justify-center mt-6'>
                    <button onClick={() => setIsOpen(true)} className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-purple-600 rounded-md hover:bg-purple-500 focus:outline-none focus:bg-gray-600 w-full">Borrow</button>
                </div>
                <BorrowModal isOpen={isOpen} setIsEditModalOpen={setIsEditModalOpen} book={book}></BorrowModal>
            </div>

        </div>
    );
};

export default BookDetails;