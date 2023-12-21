import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Contact from "../Pages/Contact/Contact";
import Faq from "../Pages/FAQ/Faq";
import Services from "../Pages/Services/Services";
import Dashboard from "../Layouts/Dashboard";
import UserDashboard from "../Dashboard/UserPanel/UserDashboard/UserDashboard";
import CreateTask from "../Dashboard/UserPanel/CreateTask/CreateTask";
import ToDoList from "../Dashboard/UserPanel/ToDoList/ToDoList";
import OnGoingList from "../Dashboard/UserPanel/OnGoingList/OnGoingList";
import CompletedTask from "../Dashboard/UserPanel/CompletedTask/CompletedTask";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([{
    path: '/',
    element: <Root></Root>,
    children: [
        {
            path: '/',
            element: <Home></Home>
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
            path: '/services',
            element: <Services></Services>
        },
        {
            path: '/contactUs',
            element: <Contact></Contact>
        },
        {
            path: '/faq',
            element: <Faq></Faq>
        }
    ]
},
{
    path: '/dashboard',
    element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
    children: [
        //Users Routes
        {
            path: '/dashboard/userDashboard',
            element: <UserDashboard></UserDashboard>
        },
        {
            path: '/dashboard/CreateTask',
            element: <CreateTask></CreateTask>
        },
        {
            path: '/dashboard/toDoList',
            element: <ToDoList></ToDoList>
        },
        {
            path: '/dashboard/onGoingList',
            element: <OnGoingList></OnGoingList>
        },
        {
            path: '/dashboard/completedTask',
            element: <CompletedTask></CompletedTask>
        }
    ]
}
])

export default router