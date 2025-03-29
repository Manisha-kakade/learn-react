import React from "react";
import ReactDOM from 'react-dom/client'
import "./index.css";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRszX7AQ_v0YwFTxGCOsgh4laq_Ps8TCajTCQ&s"/>
            </div>
            <div className="header-container">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestoCards = () => {
    return (
        <div className="resto-container">
            <img className="res-logo" alt="resImg" src="https://media.istockphoto.com/id/1206323282/photo/juicy-hamburger-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=2BLwdPMO_VyOaPaOXx3X3Q1lSaXXunhCf8VfBkhvAWw=" />
            <div>Burger King</div>
            <div>Burger, Fries, Italian Cuisine</div>
            <div>4.5 Stars</div>
            <div>30 mins</div>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div style={{padding:'10px'}}><h3>Search</h3></div>
<div className="resto-wrapper">
<RestoCards />
<RestoCards />
<RestoCards />
<RestoCards />
<RestoCards />
<RestoCards />
<RestoCards />
<RestoCards />
<RestoCards />
<RestoCards />
<RestoCards />
<RestoCards />
<RestoCards />
<RestoCards />
<RestoCards />
</div>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('root:', root)
root.render(<App />)