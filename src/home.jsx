import {useState} from "react";
import BlogList from "./blog-list.jsx";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'Blog 1', body: 'Blog body bla bla bla', author: 'Mochi', id: 1,},
    {title: 'Blog 2', body: 'Blog body bla bla bla', author: 'Mia', id: 2,},
    {title: 'Blog 3', body: 'Blog body bla bla bla', author: 'Patrick', id: 3,}
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs)
  }

  return (
    <div className="home">
      <BlogList blogs={blogs}
                title="All blogs"
                handleDelete={handleDelete}/>
    </div>
  )
}

export default Home;