import { useDrag } from "react-dnd";

const TaskDragManagement = ({ item, playerType, index, onDropPlayer, handleDeleteTask }) => {

    const [{ isDragging }, dragRef] = useDrag({
        type: playerType,
        item: () => ({ ...item, index }),

        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            console.log(dropResult, isDragging);
            if (item) {
                onDropPlayer(item);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const { _id, title, priority, task_description, deadline } = item

    return (
        <div ref={dragRef} className="rounded-md shadow-md bg-black bg-opacity-60 mb-2">

            <div className="px-4 py-5 text-white w-[250px]">
                <h1 className="text-xl font-bold">{title}</h1>
                <h2 className="text-base font-bold">Priority: <span className="font-normal">{priority}</span></h2>
                <h2 className="text-base font-bold">Deadline: <span className="font-normal">
                    {deadline}</span></h2>

                <p className="text-base font-bold">Details: <span className="font-normal text-justify">
                    {task_description}</span></p>

                <div className="mt-4">
                    <button onClick={() => handleDeleteTask(_id)} className="bg-transparent text-white border border-white rounded font-semibold px-3 py-1 hover:bg-[#c72525] w-full">Delete</button>

                    <button className="bg-transparent text-white border border-white rounded font-semibold px-3 py-1 hover:bg-[#eb992f] mt-3 w-full">Update</button>
                </div>
            </div>
        </div>

    );
};

export default TaskDragManagement;