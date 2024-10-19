import { Link } from "react-router-dom";



const CategorySubCard = ({ cate }) => {
    const { image, name, category } = cate;
    return (
        <div>
            <Link to={`/books/${category}`}>
                <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900 border-2 transition hover:scale-105 hover:border-purple-600">
                    <img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="mt-6 mb-2">
                        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">{name}</span>
                        <h2 className="text-xl font-semibold tracking-wide">{category}</h2>
                    </div>
                    <p className="dark:text-gray-800">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
                </div>
            </Link>
        </div>
    );
};

export default CategorySubCard;