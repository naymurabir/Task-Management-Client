import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaQuestion } from 'react-icons/fa';
import { MdOutlineMiscellaneousServices, MdContacts, MdCreate, } from 'react-icons/md';

const Dashboard = () => {
    return (
        <div >
            <div className="flex flex-col lg:flex-row ">
                <div className="lg:w-[20%] min-h-screen text-white font-semibold bg-[#1b4c88]">
                    <ul className="menu px-4 py-2">
                        <>
                            {/* Users Routes */}
                            <li className="font-bold"> <NavLink to="/dashboard/userHome"> <FaHome></FaHome> User Home</NavLink> </li>

                            {/* <li className="font-bold"> <NavLink to="/dashboard/createTask"> <MdCreate ></MdCreate >Create A Task</NavLink> </li> */}

                            <li className="font-bold"> <NavLink to="/dashboard/taskManagement"> <MdCreate ></MdCreate >Task Management</NavLink> </li>

                        </>

                        {/* Shared NavLinks */}
                        <div className="divider"></div>

                        <li className="font-bold"> <NavLink to="/"> <FaHome className="text-lg"></FaHome>Home</NavLink> </li>

                        <li> <NavLink to="/services"> <MdOutlineMiscellaneousServices className="text-lg"></MdOutlineMiscellaneousServices >Services</NavLink> </li>

                        <li> <NavLink to="/contactUs"> <MdContacts className="text-lg"></MdContacts>Contact Us</NavLink> </li>

                        <li> <NavLink to="/faq"> <FaQuestion className="text-lg"></FaQuestion >FAQ</NavLink> </li>

                    </ul>

                </div>
                <div className="lg:w-[80%]">
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;