
const ClientsFeedback = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-10 lg:px-20">
            <div className="lg:w-1/2 mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold">Our Satisfied Clients</h2>
                <p className="text-black mt-2"> Our task management platform has garnered rave reviews from satisfied clients, who have experienced unprecedented success in project execution and team collaboration.</p>
            </div>

            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                <div className="card card-compact bg-base-100 hover:shadow-xl transform transition-transform hover:scale-110">
                    <div className="flex justify-center px-5 py-5">
                        <img className="h-[150px] w-[150px] rounded-full" src="https://i.ibb.co/x50Zv0M/pj-go-ar-PZr6tqso-A-unsplash.jpg" alt="Agents" />
                    </div>

                    <div className="card-body text-center">
                        <h2 className="text-xl font-bold text-[#00AEEF]">Samuel Palmer</h2>
                        <h3 className="font-bold"> Senior Project Manager</h3>
                        <p>The customizable features allowed us to tailor the tool to our unique workflow. The real-time collaboration features are a game-changer for our dispersed team. The analytics dashboard is incredibly insightful, providing comprehensive data for performance analysis.</p>
                        <h3 className="font-bold text-[#00AEEF]">Contact</h3>
                        <p className="text-sm font-semibold">+880000454685</p>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 hover:shadow-xl transform transition-transform hover:scale-110">
                    <div className="flex justify-center px-5 py-5">
                        <img className="h-[150px] w-[150px] rounded-full" src="https://i.ibb.co/gPR8nmY/dollar-gill-Xj-CZ9p-EBJAk-unsplash.jpg" alt="Agents" />
                    </div>

                    <div className="card-body text-center">
                        <h2 className="text-xl font-bold text-[#00AEEF]">Vincent Fuller</h2>
                        <h3 className="font-bold">CEO and Founder</h3>
                        <p>As a CEO, staying informed about ongoing projects is crucial, and this tool provides a comprehensive overview. The UI is sleek and user-friendly, making it easy for team leads and members to navigate. The integration capabilities with other tools have streamlined our workflow further.</p>
                        <h3 className="font-bold text-[#00AEEF]">Contact</h3>
                        <p className="text-sm font-semibold">+880000478649</p>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 hover:shadow-xl transform transition-transform hover:scale-110">
                    <div className="flex justify-center px-5 py-5">
                        <img className="h-[150px] w-[150px] rounded-full" src="https://i.ibb.co/z4Zmpmb/agent-1.jpg" alt="Agents" />
                    </div>

                    <div className="card-body text-center">
                        <h2 className="text-xl font-bold text-[#00AEEF]">Brittany Watkins</h2>
                        <h3 className="font-bold">Head of Operations</h3>
                        <p>EfficiencyGuru is a must-have for any operations manager. The automation features have significantly reduced manual workload, allowing our team to focus on strategic tasks. The real-time notifications keep everyone in the loop, ensuring seamless coordination.Tools have streamlined our workflow further.</p>
                        <h3 className="font-bold text-[#00AEEF]">Contact</h3>
                        <p className="text-sm font-semibold">+880000741369</p>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 hover:shadow-xl transform transition-transform hover:scale-110">
                    <div className="flex justify-center px-5 py-5">
                        <img className="h-[150px] w-[150px] rounded-full" src="https://i.ibb.co/vLz5M32/redd-f-e-LOwn-Wv-K9-Fk-unsplash.jpg" alt="Agents" />
                    </div>

                    <div className="card-body text-center">
                        <h2 className="text-xl font-bold text-[#00AEEF]">John Halking</h2>
                        <h3 className="font-bold"> Independent Contractor</h3>
                        <p>The intuitive interface allows me to quickly organize and prioritize tasks. The time tracking feature is invaluable for billing accurately. The real-time notifications keep everyone in the loop, ensuring seamless coordination. The seamless integration with calendar apps ensures I never miss a deadline.</p>
                        <h3 className="font-bold text-[#00AEEF]">Contact</h3>
                        <p className="text-sm font-semibold">+880000453685</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ClientsFeedback;