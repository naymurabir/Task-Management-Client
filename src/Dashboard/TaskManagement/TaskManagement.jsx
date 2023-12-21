import { Link } from "react-router-dom";
import useAllTasks from "../../Hooks/useAllTasks";

const TaskManagement = () => {

    const { allTasks } = useAllTasks()


    const backgroundImageUrl = 'url("https://i.ibb.co/CPfqSdH/banner-4.jpg)';

    const styles = {
        backgroundImage: backgroundImageUrl,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
    };

    return (
        <div style={styles}>
            <div className="text-center mt-5">
                <h2 className="text-base font-semibold text-white">Task Management</h2>
                <h3 className="text-2xl md:text-3xl font-bold text-white">Elevate Your Efficiency</h3>
            </div>
            <hr className="w-5/12 mx-auto mt-3" />

            <div className="px-2 md:px-5 py-5 flex flex-col md:flex-row justify-between">
                <Link to="/dashboard/createTask">
                    <button className="bg-transparent text-white border border-white rounded font-semibold px-3 py-1 hover:bg-[#2559c7] w-full">Create New Task</button>
                </Link>

                <button className="bg-transparent text-white border border-white rounded font-semibold px-3 py-1 hover:bg-[#2559c7] mt-3 md:mt-0">Total Task: {allTasks?.length}</button>
            </div>
            <hr className="w-11/12 mx-auto" />

            <div className="px-2 md:px-5 py-5 flex flex-col md:flex-row justify-between">
                <div>
                    <h1 className="bg-transparent text-white border border-white rounded font-semibold px-3 py-1 hover:bg-[#2559c7] mt-3 md:mt-0">To Do List</h1>

                    <div className="mt-5">
                        {allTasks?.map((task) => (
                            <div key={task._id}>
                                <div className="rounded-md shadow-md bg-purple-300 bg-opacity-60 mb-2">

                                    <div className="px-6 py-3 text-white w-[250px]">

                                        <h1 className="text-xl font-bold">{task.title}</h1>
                                        <h2 className="text-base font-bold">Priority: <span className="font-normal">{task.priority}</span></h2>
                                        {/* <h2 className="text-base font-bold">Current Date: <span className="font-normal">{task.current_date}</span></h2> */}
                                        <h2 className="text-base font-bold">Deadline: <span className="font-normal">
                                            {task.deadline}</span></h2>

                                        <p className="text-base font-bold">Details: <span className="font-normal text-justify">
                                            {task.task_description}</span></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h1 className="bg-transparent text-white border border-white rounded font-semibold px-3 py-1 hover:bg-[#2559c7] mt-3 md:mt-0">On Going List</h1>
                </div>

                <div>
                    <h1 className="bg-transparent text-white border border-white rounded font-semibold px-3 py-1 hover:bg-[#2559c7] mt-3 md:mt-0">Completed List</h1>
                </div>
            </div>
        </div>
    );
};

export default TaskManagement;