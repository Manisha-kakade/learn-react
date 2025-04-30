import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import userContext from "../utils/userContext";
const Header = () => {
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(userContext);
    return (
        <div className="flex justify-between items-center">
            <div className="logo-container">
                <img className="w-[100px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRszX7AQ_v0YwFTxGCOsgh4laq_Ps8TCajTCQ&s"/>
            </div>
            <div className="flex">
                <ul className="flex p-4 m-4">
                    <li className="p4 mx-2">Online Status : {onlineStatus ? "🟢" : "🔴"} </li>
                    <li className="p4 mx-2">Home</li> 
                    <Link className="p4 mx-2" to={"/grocery"}><li>Grocery</li></Link>
                    <Link className="p4 mx-2" to={"/about"}><li>About Us</li></Link>
                    <li className="p4 mx-2">Contact Us</li>
                    <li className="p4 mx-2">Cart</li>
                    <li className="p4 mx-2">Login</li>
                    <li className="p4 mx-2">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;