import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to my population census</h1>
      <div className="flex gap-5 mt-5">
        <Link to="/registration">
          <p className="text-purple-700 border-2 w-max p-2 ">Register here</p>
        </Link>
        <Link to="/registered-users">
          <p className="text-purple-700 border-2 w-max p-2 ">
            Registered users
          </p>
        </Link>
        <Link to="/statistics">
          <p className="text-purple-700 border-2 w-max p-2 ">Statistics</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
