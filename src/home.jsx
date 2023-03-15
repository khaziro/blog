import {useState} from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'Blog 1', body: 'Blog body bla bla bla', author: 'Mochi', id: 1,},
    {title: 'Blog 2', body: 'Blog body bla bla bla', author: 'Mia', id: 2,},
    {title: 'Blog 3', body: 'Blog body bla bla bla', author: 'Patrick', id: 3,}
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview"
             key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  )
}

export default Home;