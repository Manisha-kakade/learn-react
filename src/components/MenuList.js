import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const MenuList = () => {
    const [resInfo, setResInfo]= useState(null);
    const [categoryList, setCategoryList] = useState();
    const {resId} = useParams();
    const [showIndex, setShowIndex] = useState(0);

    useEffect(() => {

        fetchMenu();
        
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.59430177088924&lng=73.74714612729034&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
    
        const json = await data.json();
        setResInfo(json?.data)
        console.log('filtered dat :: ', json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(item => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))
        setCategoryList(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(item => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))
    }

    if(!resInfo){
        return <h1>Loading...</h1>
    }
    return(
        <div className="text-center">
            <h1 className="font-bold text-2xl">{resInfo?.cards[0]?.card?.card?.text}</h1>
            <h2>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(', ')} - {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</h2>
            <h3>{resInfo?.cards[2]?.card?.card?.info?.areaName} - {resInfo?.cards[2]?.card?.card?.info?.totalRatingsString}</h3>
        {categoryList.map((category, index) => 
        <RestaurantCategory 
        key={category?.card?.card?.title} 
        data={category}
        showItems={index === showIndex ? true : false}
        setShowIndex={() => setShowIndex(index)}
        />)}
            
        </div>
    )
}
export default MenuList;