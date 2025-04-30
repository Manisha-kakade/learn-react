import { useEffect, useState } from "react";
import RestoCards from "./RestoCards";
import { Link } from "react-router-dom";
const Body = () => {
const [listOfRestaurants, setListOfRestaurants] = useState([]);

useEffect(() => {
    fetchData(); 
},[]);

const fetchData = async () => {
    const res = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5414267&lng=73.7923957&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    console.log('res')
    const data = await res.json();
    setListOfRestaurants(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

console.log('listOfRestaurants::',listOfRestaurants)
    return (
        <div className="body">
            <div style={{padding:'10px'}}><h3>Search</h3></div>
<div className="flex flex-wrap">
    {listOfRestaurants?.map((restaurant) => 
    <Link key={restaurant?.info?.id} to={`/restaurants/${restaurant?.info?.id}`}>
        <RestoCards restaurant={restaurant}/>
        </Link>
    )}

</div>
        </div>
    )
}
export default Body;