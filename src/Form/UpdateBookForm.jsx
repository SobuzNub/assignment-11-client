import { useMutation } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// import { categories } from '../Categories/categoriesData'
const UpdateBookForm = ({book, setIsEditModalOpen}) => {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();

    // const {mutateAsync} = useMutation({
    //     mutationFn: async borrowData =>{
    //         const {data} = await axiosPublic.post('/borrow', borrowData)
    //         return data
    //     },
    //     onSuccess: ()=>{
    //         console.log('Borrowed Book Successfully')
    //         toast.success("Book Added Successfully!")
    //         setLoading(false)
    //     }
    // })

    const handleUpdateBook = async e =>{
        e.preventDefault();
        setLoading(true)
        const form = e.target;
        // const bookName = form.name.value;
        // const image = form.image.value;
        // const category = form.category.value;
        const borrowedDate = form.borrowedDate.value;
        const returnDate = form.returnDate.value;
        const userInfo = {
            ...book,
            bookName: book?.name,
            borrowId: book?._id,
            email: user?.email,
            name: user?.displayName,
            image: user?.photoURL,
            borrowedDate: borrowedDate, 
            returnDate: returnDate
        }

        delete userInfo._id
        console.log(userInfo);

        try{
           const {data} = await axiosPublic.post('/borrow', userInfo)
           navigate('/borrowedBooks')
           toast.success('Book borrowed successfully')
           console.log(data);
           // change borrow status in db
           await axiosPublic.patch(`/book/status/${book?._id}`, {status: true})
        }catch(err){
            console.log(err);
            toast.error(err.message)
            setLoading(false)
        }

    }

    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
            <form onSubmit={handleUpdateBook}>
                <div className='grid grid-cols-1 gap-10'>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='location' className='block text-gray-600'>
                            UserName
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                            name='userName'
                            id='userName'
                            type='text'
                            placeholder='UserName'
                            value={user?.displayName}
                            required
                        />
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='location' className='block text-gray-600'>
                            UserEmail
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                            name='userEmail'
                            id='userEmail'
                            type='email'
                            value={user?.email}
                            placeholder='UserEmail'
                            required
                        />
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='location' className='block text-gray-600'>
                            BookName
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                            name='bookName'
                            id='name'
                            type='text'
                            value={book?.name}
                            placeholder='BookName'
                            required
                        />
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='title' className='block text-gray-600'>
                            Image
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                            name='image'
                            id='image'
                            type='text'
                            value={book?.image}
                            placeholder='Image'
                            required
                        />
                    </div>

                    <div className='space-y-1 text-sm'>
                        <label htmlFor='category' className='block text-gray-600'>
                            Category
                        </label>
                        <select
                            required
                            className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                            name='category'
                            value={book?.category}
                        >
                            <option value='Noble'>Noble</option>
                            <option value='Thriller'>Thriller</option>
                            <option value='History'>History</option>
                            <option value='Drama'>Drama</option>
                            <option value='Sci-Fi'>Sci-Fi</option>
                        </select>
                    </div>
                    <div>
                        <div className=' text-sm'>
                            <label htmlFor='price' className='block text-gray-600'>
                                Borrowed Date
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='borrowedDate'
                                id='borrowedDate'
                                type='text'
                                placeholder='Borrowed Date'
                                required
                            />
                        </div>
                    </div>

                    <div className="w-full">
                        <div className=''>
                            <label htmlFor='bedrooms' className='block text-gray-600'>
                                Return Date
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='returnDate'
                                id='returnDate'
                                type='text'
                                placeholder='Return Date'
                                required
                            />
                        </div>
                    </div>
                </div>
                <button
                    onClick={()=> setIsEditModalOpen(false)}
                    type='submit'
                    className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
                >
                    Update
                </button>
            </form>
        </div>
    )
}

export default UpdateBookForm