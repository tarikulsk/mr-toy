import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../component/Home/Home";
import Blogs from "../../component/Blogs/Blogs";
import Login from "../../Shared/Login/Login";
import Register from "../../Shared/Register/Register";
import AllToys from "../../component/AllToys/AllToys";
import MyToys from "../../component/MyToys/MyToys";
import AddAToy from "../../component/AddAToy/AddAToy";
import Error from "../../component/Error/Error";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/alltoys',
                element: <AllToys></AllToys>
            },
            {
                path: '/mytoys',
                element: <MyToys></MyToys>
            },
            {
                path: '/addtoy',
                element: <AddAToy></AddAToy>
            }


        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }

]);
export default router;