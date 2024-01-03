
const Faq = () => {
    return (
        <div className="pt-20 max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20">
            <div className="text-center ">
                <div data-aos="flip-left">
                    <h2 className="text-xl font-bold text-[#CE1446]">Questions</h2>
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800" >Frequently Ask Your Questions.</h1>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-md px-4 py-5 md:px-4 md:py-5 lg:px-5 lg:py-5 text-black mt-10">
                <div className="collapse collapse-plus mb-3 bg-base-200">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        How can I add a new task to my project?
                    </div>
                    <div className="collapse-content">
                        <p>To add a new task, simply log in to your account, navigate to the project where you want to add the task, and click on the Add Task button. Fill in the task details, such as title, description, and due date, then click Save to add the task to your project.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus mb-3 bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Can I set reminders for my tasks?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, you can set reminders for your tasks. When creating or editing a task, you will find an option to set a reminder. Choose the date and time you want to be reminded, and our system will notify you accordingly.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus mb-3 bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        How do I prioritize my tasks?
                    </div>
                    <div className="collapse-content">
                        <p>To prioritize your tasks, simply drag and drop them in the order of importance within your project. Alternatively, you can assign priority levels (such as high, medium, or low) to each task. This helps you focus on what needs to be done first and ensures a clear understanding of task importance.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus mb-3 bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Is it possible to collaborate with team members on tasks?
                    </div>
                    <div className="collapse-content">
                        <p>Absolutely! Our task management website supports collaboration. You can invite team members to your projects, assign tasks to specific individuals, and leave comments or updates on each task. This promotes seamless communication and ensures everyone is on the same page.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Can I track the progress of my projects and tasks?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, you can track the progress of your projects and tasks easily. The dashboard provides an overview of all your projects, displaying completion percentages and upcoming deadlines. Additionally, each task has a status indicator, allowing you to see whether it is pending, in progress, or completed at a glance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;