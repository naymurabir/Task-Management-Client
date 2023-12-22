import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaHome, FaQuestion } from 'react-icons/fa';
import { MdOutlineMiscellaneousServices, MdContacts, MdCreate, MdLogout } from 'react-icons/md';
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import swal from "sweetalert";

const Dashboard = () => {

    const { user, logOut } = useAuth()
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Logout Successful',
                    showConfirmButton: false,
                    background: '#343436',
                    heightAuto: '100px',
                    color: 'white',
                    timer: 2000
                })
                navigate('/')
            })
            .catch(error => {
                console.log();
                swal(error.message)
            })
    }

    return (
        <div >
            <div className="flex flex-col lg:flex-row ">
                <div className="lg:w-[20%] min-h-screen text-white font-semibold bg-[#1b4c88]">
                    <div className=" flex flex-col justify-center items-center gap-2 my-4">
                        <img className="w-24 h-24 rounded-full" src={user?.photoURL} alt="" />
                        <div>
                            <h2>{user?.displayName}</h2>
                            <h3 className="text-sm">{user?.email}</h3>
                        </div>
                    </div>
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

                        <li>
                            <button onClick={handleLogOut}>
                                <MdLogout className="text-lg" /> Logout
                            </button>
                        </li>

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