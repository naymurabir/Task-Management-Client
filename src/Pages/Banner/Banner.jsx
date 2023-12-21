import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero h-[450px] md:h-[500px] lg:h-[600px]" style={{ backgroundImage: 'url(https://i.ibb.co/x7TQT6L/banner2.jpg)' }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl text-white font-bold">Productivity Meets Precision Here</h1>
                    <p className="mb-5 text-white">Embark on a journey of success with Vision Task, your trusted companion in navigating the complexities of your day. Vision Task propels you forward, helping you conquer tasks with speed and precision.</p>

                    <Link to="/dashboard/userHome">
                        <button className="bg-[#0336a3] text-white border border-white rounded font-semibold px-3 py-2 hover:bg-[#2559c7] ">“Let’s Explore</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;