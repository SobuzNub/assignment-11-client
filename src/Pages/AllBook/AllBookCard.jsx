import { Link } from "react-router-dom";


const AllBookCard = ({ book }) => {
    const {image, category, name, author, rating, quantity, _id} = book
    return (
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 border-2 transition hover:scale-105 hover:border-purple-600">
                <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Category: {category}</span>
                    <h2 className="text-xl font-semibold tracking-wide">Name: {name}</h2>
                </div>
                <p className="dark:text-gray-800">Author: {author}</p>
                <p className="dark:text-gray-800">Rating: {rating}</p>
                <p className="dark:text-gray-800">Quantity: {quantity}</p>
                {/* <p className="dark:text-gray-800">Description: {book?.description}</p> */}
                <Link to={`/updateBook/${_id}`}>
                    <button className="btn bg-purple-600 w-full mt-2 text-white">Update</button>
                </Link>
            </div>
        </div>
    );
};

export default AllBookCard;