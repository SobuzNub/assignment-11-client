import { Link } from "react-router-dom";


const ShowBookCategory = ({ cat }) => {

    const { name, image, rating, description, author, category, _id } = cat;

    return (
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
            <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <span className="block text-xl font-medium tracking-widest uppercase dark:text-violet-600">Name: {name}</span>
                <p className="text-xl"><span className="font-bold">Author Name:</span> {author}</p>
                <p className="text-xl"><span className="font-bold">Category:</span> {category}</p>
                <h2 className="text-xl font-semibold tracking-wide"><span className="font-semi-bold">Rating:</span> {rating}</h2>
                <p className="dark:text-gray-800 text-xl"><span className="font-bold">Description:</span> {description}</p>
            </div>
            <Link to={`/bookDetails/${_id}`}>
                <button disabled={cat?.borrow === true} className="btn bg-purple-600 hover:bg-purple-500 w-full text-white">Details</button>
            </Link>
        </div>
    );
};

export default ShowBookCategory;