import React, { lazy, Suspense } from "react";
import ReactDOM from 'react-dom/client'
import "./index.css";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Search from "./src/components/SearchClass";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import MenuList from "./src/components/MenuList"
// import Grocery from "./components/Grocery";
const Grocery = lazy(() => import("./src/components/Grocery"))
const App = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

const AppRouter = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children:[
            {
                path:"/",
                element: <Body />
            },
            {
                path:'/about',
                element:<About />
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:'/grocery',
                element:<Suspense fallback={<h1>Loading....</h1>}>
                    <Grocery />
                </Suspense>
            },
            {
                path:'/restaurants/:resId',
                element:<MenuList />
            }
        ]
    },
    
])


ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={AppRouter} />
  );