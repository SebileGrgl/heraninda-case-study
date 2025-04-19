import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogPost } from "../types";
import PostForm from "../components/PostForm";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
const CreatePost = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formData, setFormData] = useState<BlogPost>({
    id: 0,
    title: "",
    description: "",
    url: "",
    coverImage: "",
    createdAt: "",
    createdBy: "",
    readingTime: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "readingTime" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please log in to publish a post.");
      navigate("/login");
      return;
    }

    const date = new Date().toISOString();

    const newPost: BlogPost = {
      ...formData,
      createdBy: user.fullName,
      createdAt: date,
      id: Date.now(),
    };

    console.log("New post:", newPost);

    toast.success("Published successfully!");
    navigate("/");
  };

  return (
    <div className="bg-sky-100 p-10 w-screen h-screen  flex justify-center items-center ">
      <div className="  bg-white p-10 w-full  sm:w-[450px]  rounded-xl shadow-2xl">
        <h1 className="flex justify-center items-center text-xl font-light">
          Create New Blog Post
        </h1>
        <PostForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default CreatePost;
