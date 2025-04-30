import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between items-center">
            <div className="logo-container">
                <img className="w-[100px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRszX7AQ_v0YwFTxGCOsgh4laq_Ps8TCajTCQ&s"/>
            </div>
            <div className="flex">
                <ul className="flex p-4 m-4">
                    <li className="p4">Online Status : {onlineStatus ? "🟢" : "🔴"} </li>
                    <li>Home</li> 
                    <Link to={"/grocery"}><li>Grocery</li></Link>
                    <Link to={"/about"}><li>About Us</li></Link>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;