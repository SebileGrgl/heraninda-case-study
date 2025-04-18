import axios from "axios";

export const fetchBlogPosts = async () => {
  const response = await axios.get("https://dev.to/api/articles");
  const mappedData = response.data.map((item: any) => {
    return {
      id: item.id,
      title: item.title,
      description: item.description,
      url: item.url,
      coverImage: item.cover_image,
      createdAt: item.created_at,
      createdBy: item.user.name,
      readingTime: item.reading_time_minutes,
    };
  });
  return mappedData;
};
