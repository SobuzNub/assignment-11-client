import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";



const UpdateBook = () => {

    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const book = useLoaderData();
    const { image, name, author, category, rating, quantity, description, _id } = book;
    console.log(book)

    const handleUpdateBook = async e =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const image = form.image.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const author = form.author.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const updateBook = {name, image, quantity, category, author, rating, description}
        console.log(updateBook);

        try{
            const {data} = await axiosPublic.put(`/book/${_id}`, updateBook)
            console.log(data);
            toast.success('Update room successfully')
            navigate('/allBook')
        }catch(err){
            toast.error(err.message)
            console.log(err);
        }

    }

    return (
        <div>
            <Helmet>
                <title>Update Book ||</title>
            </Helmet>
            <div>
                <h2 className="text-3xl text-purple-600 text-center mt-12"><span className="font-bold">Update A Book:</span> {name}</h2>
            </div>
            <div>

                <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
                    <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
                        <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                            Update a Book
                        </h2>

                        <form onSubmit={handleUpdateBook}>
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
                                        defaultValue={book?.name}
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
                                        defaultValue={book?.image}
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
                                        defaultValue={quantity}
                                    />

                                </div>

                                <div className='flex flex-col gap-2 '>
                                    <label className='text-gray-700 ' htmlFor='category'>
                                        Category
                                    </label>
                                    <select
                                        name='category'
                                        id='category'
                                        className='border p-2 rounded-md'
                                        defaultValue={category}
                                    >
                                        <option value='Noble'>Noble</option>
                                        <option value='Thriller'>Thriller</option>
                                        <option value='History'>History</option>
                                        <option value='Drama'>Drama</option>
                                        <option value='Sci-Fi'>Sci-Fi</option>
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
                                        defaultValue={author}
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
                                        defaultValue={rating}
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
                                    defaultValue={description}
                                ></textarea>
                            </div>
                            <div className='flex justify-center mt-6'>

                                <input type="submit" value="Submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-purple-600 rounded-md hover:bg-purple-500 focus:outline-none focus:bg-gray-600 w-full" />
                            </div>
                        </form>
                    </section>
                </div>

            </div>
        </div>
    );
};

export default UpdateBook;