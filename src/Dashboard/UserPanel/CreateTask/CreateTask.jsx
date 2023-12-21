import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";


const CreateTask = () => {
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()

    const {
        reset,
        register,
        handleSubmit,
    } = useForm()

    const onSubmit = async (data) => {

        {
            const newTask = {
                title: data.title,
                priority: data.priority,
                current_date: data.current_date,
                deadline: data.deadline,
                task_description: data.description,
                email: user?.email,
                name: user?.displayName
            }
            console.log(newTask);

            axiosPublic.post('/allTasks', newTask)
                .then(res => {
                    if (res.data.insertedId) {
                        reset()
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: " A new Task has been added successfully",
                            showConfirmButton: false,
                            timer: 2000
                        });
                    }
                })
        }
    }

    return (
        <div className='max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20 mt-5'>

            <h2 className="text-2xl font-bold text-center mb-4 text-[#1b4c88]">Create A Task</h2>

            <div className="bg-white border-2 lg:w-3/4 mx-auto border-[#4F79AC] p-2 md:p-5 lg:p-10">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="flex justify-between flex-col md:flex-row gap-5 mt-3">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold ">Task Title</span>
                            </label>
                            <input {...register("title")} name="title" type="text" placeholder="Task title.." className="input input-bordered input-md w-full max-w-2xl focus:outline-0" />
                        </div>

                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text font-semibold ">Priority</span>
                            </label>
                            <select
                                id="input"
                                {...register("priority", { required: true })}
                                className="input text-sm input-bordered w-full max-w-xs focus:outline-0 "
                            >
                                <option>Select Task Priority</option>
                                <option value="Low">Low</option>
                                <option value="Moderate">Moderate</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-between flex-col md:flex-row gap-5 mt-3">

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold ">Current Date</span>
                            </label>
                            <input {...register("current_date")} type="date" name="current_date" placeholder="Current Date..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold ">Deadline</span>
                            </label>
                            <input {...register("deadline")} type="date" name="deadline" placeholder="Deadline..." className="input input-bordered w-full text-sm max-w-xs focus:outline-0" />
                        </div>

                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text font-semibold ">Task Description</span>
                        </label>
                        <textarea {...register("description")} name="description" id="" cols="20" rows="5" placeholder="Task Description..." className="input focus:outline-0 input-bordered w-full text-sm h-[100px]" ></textarea>
                    </div>

                    <button className="px-8 py-2.5 leading-5  mt-2 text-white transition-colors duration-300 transform bg-[#1b4c88] rounded-md hover:bg-[#467dc0] focus:outline-none focus:bg-gray-600 font-semibold w-full">Create A Task</button>

                </form>
            </div>

        </div>
    );
};

export default CreateTask;