import { useMutation } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";


const AddBook = () => {

    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false)

    const { mutateAsync } = useMutation({
        mutationFn: async bookData => {
            const { data } = await axiosPublic.post('/book', bookData)
            return data;
        },
        onSuccess: () => {
            console.log('Data Saved Successfully')
            toast.success("Room Added Successfully!")
            setLoading(false)
        }
    })


    const handleAddBook = async e => {
        e.preventDefault();
        setLoading(true)
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const author = form.author.value;
        const rating = form.rating.value;
        const description = form.description.value;

        try {
            const bookData = {
                name,
                image,
                quantity,
                category,
                author,
                rating,
                description
            }
            console.log(bookData);

            await mutateAsync(bookData)

        } catch (err) {
            console.log(err);
            toast.error(err.message)
            setLoading(false)
        }
    }

    return (
        <div>
            <Helmet>
                <title>Add Book ||</title>
            </Helmet>
            <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
                <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
                    <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                        Add Book
                    </h2>

                    <form onSubmit={handleAddBook}>
                        <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                            <div>
                                <label className='text-gray-700 ' htmlFor='job_title'>
                                    Name
                                </label>
                                <input
                                    id='name'
                                    name='name'
                                    type='text'
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>

                            <div>
                                <label className='text-gray-700 ' htmlFor='emailAddress'>
                                    Image
                                </label>
                                <input
                                    id='image'
                                    type='text'
                                    name='image'

                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>
                            <div className='flex flex-col gap-2 '>
                                <label className='text-gray-700'>Quantity of the Book</label>

                                <input
                                    id='quantity'
                                    name='quantity'
                                    type='text'
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />

                            </div>

                            <div className='flex flex-col gap-2 mt-2'>
                                <label className='text-gray-700 ' htmlFor='category'>
                                    Category
                                </label>
                                <select
                                    name='category'
                                    id='category'
                                    className='border p-2 rounded-md'
                                >
                                    <option value='Noble'>Fantasy</option>
                                    <option value='Thriller'>Self-Help</option>
                                    <option value='History'>Science Fiction</option>
                                    <option value='Drama'>History</option>
                                </select>
                            </div>
                            <div>
                                <label className='text-gray-700 ' htmlFor='min_price'>
                                    Author Name
                                </label>
                                <input
                                    id='author'
                                    name='author'
                                    type='name'
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>

                            <div>
                                <label className='text-gray-700 ' htmlFor='rating'>
                                    Rating
                                </label>
                                <input
                                    id='rating'
                                    name='rating'
                                    type='number'
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 mt-4'>
                            <label className='text-gray-700 ' htmlFor='description'>
                                Description
                            </label>
                            <textarea
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                name='description'
                                id='description'
                            ></textarea>
                        </div>
                        <div className='flex justify-center mt-6'>

                            <input type="submit" value="Add Book" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-purple-600 rounded-md hover:bg-purple-500 focus:outline-none focus:bg-gray-600 w-full" />
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default AddBook;