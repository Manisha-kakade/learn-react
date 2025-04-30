import React,{ useState } from "react";
import CategoryList from "./CategoryList";

const RestaurantCategory = (props) => {
    const {data} = props;
    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems)
    }
    return (
        <div>
            <div className="flex justify-between w-6/12 m-auto m-4 p-4" onClick={handleClick}>
            <div>
            <span className="text-left font-bold text-lg">{data?.card?.card?.title}</span>
        
            </div>
                <span>🔽</span>
            </div>
            
            {showItems && <CategoryList data={data?.card?.card?.itemCards} />}

        </div>
    )

}
export default RestaurantCategory;