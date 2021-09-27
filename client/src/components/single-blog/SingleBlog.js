import React from "react";
import "./singleblog.css";
import blogimg from "./p1.jpg";

const SingleBlog = () => {
  return (
    <div className="single-blog">
      <div className="single-blog-section">
        <div className="single-post-head">
          <div className="single-post-title">Lorem ipsum dolor sit.</div>
          <div className="single-post-info">
            <div className="author-time">
              <div className="author">
                by - <span>Siya</span>
              </div>
              <div className="date-time">1 hour ago</div>
            </div>

            <div className="single-post-edit-icons">
              <i className="edit-icons  far fa-edit"></i>
              <i className="edit-icons  far fa-trash-alt"></i>
            </div>
          </div>
        </div>

        <img src={blogimg} alt="bloging" />

        <div className="single-post-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, non
          dolorum omnis natus quis doloribus autem eligendi assumenda, ad rerum
          iusto facere, voluptate temporibus consequatur magni ducimus alias
          laudantium repudiandae id animi. Amet reprehenderit commodi illo vitae
          rem fuga expedita! Molestias corporis officia libero ducimus deserunt
          exercitationem, est ex at suscipit sapiente ipsam officiis labore
          iusto aut culpa tempora nam delectus, voluptate perferendis omnis?
          Aperiam mollitia deserunt perferendis, voluptatem maxime libero error
          pariatur quidem quo porro illo, magni dolore consequatur, corrupti
          adipisci quae nobis nisi perspiciatis ex laboriosam eos nam! Quasi
          nisi tempore cumque aut illum vero voluptatem sequi recusandae. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Quas, non dolorum
          omnis natus quis doloribus autem eligendi assumenda, ad rerum iusto
          facere, voluptate temporibus consequatur magni ducimus alias
          laudantium repudiandae id animi. Amet reprehenderit commodi illo vitae
          rem fuga expedita! Molestias corporis officia libero ducimus deserunt
          exercitationem, est ex at suscipit sapiente ipsam officiis labore
          iusto aut culpa tempora nam delectus, voluptate perferendis omnis?
          Aperiam mollitia deserunt perferendis, voluptatem maxime libero error
          pariatur quidem quo porro illo, magni dolore consequatur, corrupti
          adipisci quae nobis nisi perspiciatis ex laboriosam eos nam! Quasi
          nisi tempore cumque aut illum vero voluptatem sequi recusandae. Lorem
          <br />
          <br />
          ipsum dolor sit, amet consectetur adipisicing elit. Quas, non dolorum
          omnis natus quis doloribus autem eligendi assumenda, ad rerum iusto
          facere, voluptate temporibus consequatur magni ducimus alias
          laudantium repudiandae id animi. Amet reprehenderit commodi illo vitae
          rem fuga expedita! Molestias corporis officia libero ducimus deserunt
          exercitationem, est ex at suscipit sapiente ipsam officiis labore
          iusto aut culpa tempora nam delectus, voluptate perferendis omnis?
          Aperiam mollitia deserunt perferendis, voluptatem maxime libero error
          pariatur quidem quo porro illo, magni dolore consequatur, corrupti
          adipisci quae nobis nisi perspiciatis ex laboriosam eos nam! Quasi
          nisi tempore cumque aut illum vero voluptatem sequi recusandae. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Quas, non dolorum
          omnis natus quis doloribus autem eligendi assumenda, ad rerum iusto
          facere, voluptate temporibus consequatur magni ducimus alias
          laudantium repudiandae id animi. Amet reprehenderit commodi illo vitae
          rem fuga expedita! Molestias corporis officia libero ducimus deserunt
          exercitationem, est ex at suscipit sapiente ipsam officiis labore
          iusto aut culpa tempora nam delectus, voluptate perferendis omnis?
          Aperiam mollitia deserunt perferendis, voluptatem maxime libero error
          pariatur quidem quo porro illo, magni dolore consequatur, corrupti
          adipisci quae nobis nisi perspiciatis ex laboriosam eos nam! Quasi
          nisi tempore cumque aut illum vero voluptatem sequi recusandae.
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
