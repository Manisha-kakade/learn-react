import { IMG_URL } from "../../assets/constant";
const CategoryList = (props) => {

    const {data} = props;
    return (
        <div className="text-center m-auto w-6/12 ">
            {data.map(menu => <div key={menu?.card?.info?.id} className="flex border-b-2 border-gray-100 p-4 my-2 shadow-lg">
                <div className="flex flex-col w-11/12 text-left">
                <span>{menu?.card?.info?.name}</span>
                <span>Rs. {menu?.card?.info?.price ? menu?.card?.info?.price/100 : menu?.card?.info?.defaultPrice/100}</span>
                <span>{menu?.card?.info?.ratings?.aggregatedRating?.rating} stars ({menu?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</span>
                </div>
                <div className="w-1/12">
                    <img src={IMG_URL + menu?.card?.info?.imageId} />
                </div>
            </div>)}
        </div>
    )

}
export default CategoryList;