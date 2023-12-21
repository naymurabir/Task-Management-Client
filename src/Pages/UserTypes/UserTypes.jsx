import user1 from '../../assets/Website_Users/user1.jpg'
import user2 from '../../assets/Website_Users/user2.jpg'
import user3 from '../../assets/Website_Users/user3.jpg'
import user4 from '../../assets/Website_Users/user4.jpg'


const UserTypes = () => {
    return (
        <div className='my-5 max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20'>
            <div className="bg-[#0f068a] text-white px-5 py-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Benefitted Users</h1>
                    <p className='text-sm'>The task management website streamlined workflows, enhancing <br />productivity by providing users with intuitive features for efficient task organization.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5 py-10'>

                    <div className='flex flex-col items-center text-center'>
                        <div className='w-[200px] h-[100px] round flex justify-center'>
                            <img src={user2} alt="" />
                        </div>

                        <div>
                            <h2 className='text-2xl font-semibold mt-2'>Project Managers</h2>
                            <p className='text-sm mt-1'>Professionals responsible for planning, executing, and closing projects use task management tools to keep their teams organized, monitor progress, and ensure tasks are completed on time.</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center text-center'>
                        <div className='w-[200px] h-[100px] round flex justify-center'>
                            <img src={user1} alt="" />
                        </div>

                        <div>
                            <h2 className='text-2xl font-semibold mt-2'>Researchers</h2>
                            <p className='text-sm mt-1'> Professionals in research fields use task management tools to organize experiments, manage data collection, and coordinate research activities.They are benefitted as well</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center text-center'>
                        <div className='w-[200px] h-[100px] round flex justify-center'>
                            <img src={user3} alt="" />
                        </div>

                        <div>
                            <h2 className='text-2xl font-semibold mt-2'>Bankers</h2>
                            <p className='text-sm mt-1'> Bankers use task management websites to manage recruitment processes, employee onboarding, and various Bank-related tasks and ensure tasks are completed on time.</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center text-center'>
                        <div className='w-[200px] h-[100px] round flex justify-center'>
                            <img src={user4} alt="" />
                        </div>

                        <div>
                            <h2 className='text-2xl font-semibold mt-2'>Freelancers</h2>
                            <p className='text-sm mt-1'>Freelancers and independent contractors use task management websites to organize their work, manage client projects, and keep track of deadlines. They must be satisfied.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserTypes;