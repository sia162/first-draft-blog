import "./single.css";
import Sidebar from "../../sidebar/Sidebar";
import SingleBlog from "../../single-blog/SingleBlog";
import "../../../responsive/single-blog-page-responsive.css";

const Single = () => {
  return (
    <div className="single-blog-page">
      <SingleBlog />
      <Sidebar />
    </div>
  );
};

export default Single;
