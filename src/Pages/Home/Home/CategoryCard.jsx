import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import CategorySubCard from "./CategorysubCard";
import LoadingSpinner from "../../Shared/LoadingSpinner";


const CategoryCard = () => {

    const axiosPublic = useAxiosPublic();

    const {data: category, isLoading}= useQuery({
        queryKey: ['category'],
        queryFn: async ()=>{
            const {data} = await axiosPublic.get('/category')
            return data
        }
    })

    if(isLoading) return <LoadingSpinner></LoadingSpinner>

    console.log(category);

    return (
        <div className="md:grid md:grid-cols-3 gap-5 max-w-screen-xl mx-auto mt-5 mb-10">
            {
                category.map(cate => <CategorySubCard key={cate._id} cate={cate}></CategorySubCard>)
            }
        </div>
    );
};

export default CategoryCard;