/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
  let { id } = useParams();
  const categoryNews = useLoaderData();

  return (
    <div className="mt-4">
      {id && <h2>Category News: {categoryNews.length}</h2>}
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
