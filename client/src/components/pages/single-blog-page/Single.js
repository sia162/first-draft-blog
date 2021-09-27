import "./single.css";
import Sidebar from "../../sidebar/Sidebar";
import SingleBlog from "../../single-blog/SingleBlog";

const Single = () => {
  return (
    <div className="single-blog-page">
      <SingleBlog />
      <Sidebar />
    </div>
  );
};

export default Single;
