import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useDrop } from "react-dnd";
import TaskDragManagement from "./TaskDragManagement";

const TaskManagement = () => {

    const [allTasks, setAllTasks] = useState([]);
    const [tasks, setTasks] = useState([]);
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth()

    useEffect(() => {
        axiosPublic.get(`/allTasks?email=${user?.email}`).then((result) => {
            setAllTasks(result.data);
        });
    }, [axiosPublic, user]);

    const [{ isOver }, addToTeamRef] = useDrop({
        accept: "player",
        collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    });

    console.log(isOver);
    const [{ isOver: isPlayerOver }, removeTeamRef] = useDrop({
        accept: "team",
        collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    });
    console.log(isPlayerOver);
    const moveTask = (item) => {
        console.log(item);
        setAllTasks((prev) => prev.filter((_, i) => item.index !== i));
        setTasks((prev) => [...prev, item]);
    };
    const removeTask = (item) => {
        setTasks((prev) => prev.filter((_, i) => item.index !== i));
        setAllTasks((prev) => [...prev, item]);
    };


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

                    <div className="mt-5"
                        ref={removeTeamRef}>
                        {allTasks?.map((item, i) => (
                            <TaskDragManagement
                                item={item}
                                key={i}
                                playerType="player"
                                onDropPlayer={moveTask}
                                index={i} />
                        ))}
                    </div>


                </div>

                <div>
                    <h1 className="bg-transparent text-white border border-white rounded font-semibold px-3 py-1 hover:bg-[#2559c7] mt-3 md:mt-0">On Going List</h1>

                    <div className="mt-5" ref={addToTeamRef}>
                        {tasks?.map((item, i) => (
                            <TaskDragManagement
                                item={item}
                                key={i}
                                index={i}
                                playerType="team"
                                onDropPlayer={removeTask} />
                        ))}
                    </div>
                </div>

                <div>
                    <h1 className="bg-transparent text-white border border-white rounded font-semibold px-3 py-1 hover:bg-[#2559c7] mt-3 md:mt-0">Completed List</h1>
                </div>
            </div>
        </div>
    );
};

export default TaskManagement;