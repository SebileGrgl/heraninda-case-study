import { useEffect, useState } from "react";
import BlogList from "../components/BlogList";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { fetchBlogPosts } from "../services/BlogServices";
import { BlogPost } from "../types";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const getBlogPosts = async () => {
      try {
        setIsLoading(true);
        const data = await fetchBlogPosts();
        setPosts(data);
        console.log(data);
      } catch (error: any) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getBlogPosts();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div>
      <Header />
      <BlogList posts={posts} />
    </div>
  );
};

export default HomePage;
