import { FcBusinessman, FcShare, FcTodoList, FcServices, FcPositiveDynamic, FcAlarmClock } from 'react-icons/fc';


const Services = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20">

            <div className="lg:w-1/2 mx-auto text-center pt-20 mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#00afef]"> Services</h2>
                <p className="text-black mt-2">This task management website simplifies organization by providing a digital platform for creating, prioritizing, and tracking tasks. With collaboration tools and reminders, it enhances productivity for both individuals and teams.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                <div className='flex gap-2'>
                    <div>
                        <FcBusinessman className='text-6xl'></FcBusinessman>
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold text-[#00afef]'>Task Creation and Organization</h2>
                        <p className='text-sm mt-2'>User-friendly interface for quick task creation, organization of tasks into projects or categories, and assignment of due dates and priorities.</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <div>
                        <FcShare className='text-6xl'></FcShare  >
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold text-[#00afef]'>Collaboration and Teamwork</h2>
                        <p className='text-sm mt-2'>User accounts with varying access levels, task assignment to specific team members, and commenting and discussion threads with file attachment options.</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <div>
                        <FcTodoList className='text-6xl'></FcTodoList  >
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold text-[#00afef]'>Calendar Integration</h2>
                        <p className='text-sm mt-2'>Syncing tasks with calendar applications and viewing tasks alongside other scheduled events.</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <div>
                        <FcServices className='text-6xl'></FcServices   >
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold text-[#00afef]'>Notifications and Reminders</h2>
                        <p className='text-sm mt-2'>Email, push notifications, or in-app alerts for upcoming deadlines and customizable reminders for tasks.</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <div>
                        <FcPositiveDynamic className='text-6xl'></FcPositiveDynamic    >
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold text-[#00afef]'>Reporting and Analytics</h2>
                        <p className='text-sm mt-2'>Generation of reports on individual and team performance and analytics on task completion times and productivity.</p>
                    </div>
                </div>

                <div className='flex gap-2'>
                    <div>
                        <FcAlarmClock className='text-6xl'></FcAlarmClock      >
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold text-[#00afef]'>Time Zone Support</h2>
                        <p className='text-sm mt-2'>Handling tasks and deadlines across different time zones for globally distributed teams.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;