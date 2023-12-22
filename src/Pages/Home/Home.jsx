import Banner from "../Banner/Banner";
import ClientsFeedback from "../ClientsFeedback/ClientsFeedback";
import UserTypes from "../UserTypes/UserTypes";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <UserTypes></UserTypes>
            <ClientsFeedback></ClientsFeedback>
        </div>
    );
};

export default Home;