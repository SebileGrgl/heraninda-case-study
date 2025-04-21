import { BlogListProps, BlogPost } from "../types";
import BlogCard from "./BlogCard";

const BlogList = ({ posts }: BlogListProps) => {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-screen p-6 md:max-w-4xl lg:max-w-6xl md:p-0 mx-auto">
      {posts.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
