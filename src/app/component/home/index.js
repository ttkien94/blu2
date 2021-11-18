import React, { useEffect, useState } from "react";
import Loading from "../loading";
import Education from "./education";
import Experience from "./experience";
import "./styles/styles.scss";

function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoading = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      clearTimeout(handleLoading);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="home">
            <div className="banner row">
              <img
                src="./img/home/banner1.png"
                className="img-responsive"
                alt="Image"
              />
              <div className="content">
                <h2 className="hello">
                  HELLO!<span> STRANGER!</span>
                </h2>
                <h1>I'm BLU</h1>
                <div className="multiltext">
                  <span>Freelance </span>
                  <ul>
                    <li>FrontEnd & WebDesigner & Developer</li>
                    <li>Multimedia Designer</li>
                    <li>A & RManager</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="about area-pt ">
              <div className="container area-pb">
                <div className="row">
                  <div className="  col-md-6 aboutleft">
                    <img
                      src="./img/home/banner2.png"
                      className="img-responsive aboutimg aboutimg-1"
                      alt="Image"
                    />
                    <img
                      src="./img/home/banner8.jpg"
                      className="img-responsive aboutimg aboutimg-2"
                      alt="Image"
                    />
                    {/* aboutimg-3 là hình hiển thị sau khi hover */}
                    <img
                      src="./img/home/banner8.jpg"
                      className="img-responsive aboutimg aboutimg-3"
                      alt="Image"
                    />
                    {/* hình nhỏ */}
                    <img
                      src="./img/home/banner8.jpg"
                      className="img-responsive aboutimg aboutimg-4"
                      alt="Image"
                    />
                  </div>
                  <div className=" aboutright col-md-6">
                    <span>
                      <b>Giới Thiệu</b>
                    </span>
                    <h2>Xin Chào Mình Là Blu Ngáo Ngơ hea hae</h2>

                    <p>
                      Mình có hơn 6 năm kinh nghiệm trong lĩnh vực MC Hyper đã
                      từng tham gia hơn 50 chương trình âm nhạc kết hợp cùng với
                      các DJ nổi tiếng như: HoaProx | TyTy | MinhTri |
                      Louis8ight | Mie, ..v..v.. ,cùng với đó là hơn 5 năm trong
                      ngành thiết kế đa phương tiện (thiết kế đồ hoạ, thiết kế
                      website, thiết kế nhân vật, vẽ tranh kỹ thuật số) và hiện
                      tại mình đang làm quản lý cho các Nghệ Sĩ trẻ như Blacka,
                      Phaos cùng tổ chức Crow On Hyenas, G-Family.
                    </p>
                    <p>
                      Bản thân mình rất may mắn khi có cơ hội cộng tác với nhiều
                      công ty hàng đầu trong lĩnh vực như: M-TP Entertainment,
                      Jupiter Entertainment, SAMSUNG electronic, BestPlatform
                      Creative Agency, DuyTan Plastic, Hi-Kool, PhoInAn
                      Printing, MinhTriDp Printing & Design...v..v..
                    </p>
                    <p>
                      Bản thân mình rất may mắn khi có cơ hội cộng tác với nhiều
                      công ty hàng đầu trong lĩnh vực như: M-TP Entertainment,
                      Jupiter Entertainment, SAMSUNG electronic, BestPlatform
                      Creative Agency, DuyTan Plastic, Hi-Kool, PhoInAn
                      Printing, MinhTriDp Printing & Design...v..v..
                    </p>
                    <div className="row">
                      <div className="col-md-4">
                        <button
                          type="button"
                          className="btn btn-large btn-block btn-default aboutbutton"
                        >
                          <span>Contact Me</span>
                          <span>Contact Me</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Education />

            <Experience />
          </div>
        </>
      )}
    </>
  );
}

export default Home;
