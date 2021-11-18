import React from "react";
import "./styles/styles.scss";
import Card from "../card-bootstrap/index";
function Blog() {
  return (
    <div className="blog container ">
      <div className="row blog-header ">
        <div className="col-md-3 ">
          <Card />
        </div>
        <div className="col-md-3 ">
          <Card />
        </div>
        <div className="col-md-3 ">
          <Card />
        </div>
        <div className="col-md-3 ">
          <Card />
        </div>
      </div>
      <div className="blog-content area-pt">
        <div className="row">
          <div className="col-md-9">
            <div className="blog-content-header">
              Don't Miss! <span>Video</span>
              <p className="view-all">View ALL</p>
            </div>
            <div className="row blog-content-video">
              <div className="video-left">
                <Card />
              </div>
              <div className="video-right">
                <Card />
                <Card />
              </div>
            </div>
            <div className="blog-content-header area-mt ">
              Don't Miss! <span> Read More</span>
              <p className="view-all">View ALL</p>
            </div>
            <div className="blog-content-read-more">
              <div className="row area-mb20">
                <div className="col-md-6 left-content">
                  <Card />
                </div>
                <div className="col-md-6 right-content ">
                  <Card />
                </div>
              </div>
              <div className="row area-mb20">
                <div className="col-md-6 left-content">
                  <Card />
                </div>
                <div className="col-md-6 right-content">
                  <Card />
                </div>
              </div>
              <div className="row area-mb20">
                <div className="col-md-6 left-content">
                  <Card />
                </div>
                <div className="col-md-6 right-content">
                  <Card />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 ">
            <div className="row popular-post">
              <div className="title">Popular Posts</div>
              <div className="content col-md-12">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>

            <div className="row lastest-recipes">
              <div className="title">Lastest Recipes</div>
              <div className="lastest-recipes-content col-md-12">
                <div className="row">
                  <div className="col-md-6">
                    <Card />
                  </div>
                  <div className="col-md-6">
                    <Card />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Card />
                  </div>
                  <div className="col-md-6">
                    <Card />
                  </div>
                </div>
              </div>
            </div>

            <div className="row comments">
              <div className="comments-title">Comment</div>
              <div className=" col-md-12">
                <div className="row comments-content">
                  <div className="comments-content-avatar">
                    <img
                      src="img/logo.png"
                      className="img-responsive "
                      alt="Image"
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="comments-content-title">
                      Blu Blogger Tips
                    </div>
                    <div className="comments-content-text">
                      This is First Testing Reply
                    </div>
                  </div>
                </div>

                <div className="row comments-content">
                  <div className="comments-content-avatar">
                    <img
                      src="img/logo.png"
                      className="img-responsive "
                      alt="Image"
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="comments-content-title">
                      Blu Blogger Tips
                    </div>
                    <div className="comments-content-text">
                      This is First Testing Reply
                    </div>
                  </div>
                </div>

                <div className="row comments-content">
                  <div className="comments-content-avatar">
                    <img
                      src="img/logo.png"
                      className="img-responsive "
                      alt="Image"
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="comments-content-title">
                      Blu Blogger Tips
                    </div>
                    <div className="comments-content-text">
                      This is First Testing Reply
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row blog-footer">
          <div className="blog-content-header area-mt ">
            Don't Miss! <span> Read More</span>
            <p className="view-all">View ALL</p>
          </div>
          <div className="col-md-3 ">
            <Card />
          </div>
          <div className="col-md-3 ">
            <Card />
          </div>
          <div className="col-md-3 ">
            <Card />
          </div>
          <div className="col-md-3 ">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
