import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-16 mb-8 bg-sky-100 flex items-center shadow-md">
      <div className="w-screen p-6 md:max-w-4xl lg:max-w-6xl md:p-0 mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">
          Explore the Latest Articles
        </h1>
        <button
          onClick={() => navigate("/create-post")}
          className="bg-amber-300 rounded-md px-4 py-1 hover:bg-amber-400 cursor-pointer"
        >
          + New Post
        </button>
      </div>
    </div>
  );
};

export default Header;
