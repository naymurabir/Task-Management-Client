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
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import TaskManagement from "../Dashboard/TaskManagement/TaskManagement";
import UpdateTask from "../Dashboard/UserPanel/UpdateTask/UpdateTask";

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
            path: '/dashboard/userHome',
            element: <UserDashboard></UserDashboard>
        },
        {
            path: '/dashboard/taskManagement',
            element: <TaskManagement></TaskManagement>
        },
        {
            path: '/dashboard/createTask',
            element: <CreateTask></CreateTask>
        },
        {
            path: '/dashboard/updateTask/:id',
            element: <UpdateTask></UpdateTask>,
            loader: ({ params }) => fetch(`http://localhost:5000/updateTask/${params.id}`)
        }
    ]
}
])

export default router