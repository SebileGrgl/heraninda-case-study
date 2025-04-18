import { Link } from "react-router-dom";
import { BlogPost } from "../types";

const BlogCard = ({ post }: { post: BlogPost }) => {
  const formatDate = (isoDate: string): string => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };
  return (
    <div className=" group shadow-md rounded-md  flex flex-col  gap-4 hover:shadow-lg transition duration-300 relative">
      <img
        src={post.coverImage}
        alt="post image"
        className="w-full h-56 rounded-t-md"
      />
      <div className="p-4 min-h-48 flex flex-col justify-between">
        <div>
          <h2 className="text-[18px] font-semibold  text-gray-800 mb-2">
            {post.title}
          </h2>
          <p className="font-light text-[14px] ">{post.description}</p>
        </div>
        <div className="flex  justify-between items-center  text-[12px] font-light text-[#2A2A2A]">
          <div className="flex items-center gap-4 ">
            <p>{`${formatDate(post.createdAt)} - By ${post.createdBy}`}</p>
          </div>

          <p>{post.readingTime} min. read</p>
        </div>
      </div>
      <Link
        className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 bg-amber-300  absolute bottom-0 w-full p-2 flex justify-center items-center text-sm rounded-b-md"
        to={post.url}
      >
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
