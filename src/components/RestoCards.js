import { IMG_URL } from "../../assets/constant";
const RestoCards = (props) => {
    const {restaurant} = props;

    console.log('restaurant::', restaurant)
    return (
        <div className="w-[250px] border border-solid border-black p-4 m-4 rounded-lg">
            <img className="rounded-lg" alt="resImg" src={IMG_URL + restaurant?.info?.cloudinaryImageId} />
            <div>{restaurant?.info?.name}</div>
            <div>{restaurant?.info?.cuisines?.join(', ')}</div>
            <div>{restaurant?.info?.avgRating} stars</div>
            <div>{restaurant?.info?.sla?.slaString}</div>
        </div>
    )
}
export default RestoCards;