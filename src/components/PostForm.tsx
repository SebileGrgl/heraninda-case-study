import { PostFormProps } from "../types";

const PostForm = ({ handleChange, handleSubmit, formData }: PostFormProps) => {
  return (
    <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Post Title"
        className="text-[14px] focus:outline-none  bg-gray-100 p-2 rounded"
        required
      />

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Short Description"
        className="text-[14px] focus:outline-none  bg-gray-100 p-2 rounded"
        required
      />

      <input
        type="text"
        name="url"
        value={formData.url}
        onChange={handleChange}
        placeholder="Post URL"
        className="text-[14px] focus:outline-none  bg-gray-100 p-2 rounded"
        required
      />

      <input
        type="text"
        name="coverImage"
        value={formData.coverImage}
        onChange={handleChange}
        placeholder="Cover Image URL"
        className="text-[14px] focus:outline-none  bg-gray-100 p-2 rounded"
        required
      />

      <input
        type="number"
        name="readingTime"
        value={formData.readingTime}
        onChange={handleChange}
        placeholder="Reading Time (minutes)"
        className="text-[14px] focus:outline-none  bg-gray-100 p-2 rounded"
        required
      />

      <button
        type="submit"
        className="bg-amber-300 rounded-xl py-[6px]  text-[14px] mt-8 cursor-pointer hover:bg-amber-400"
      >
        Publish Post
      </button>
    </form>
  );
};

export default PostForm;
