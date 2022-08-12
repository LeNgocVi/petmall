import React from "react";
import footer from "../../assets/image/footer.jpg";
const Contact = () => {
  return (
    <footer className="main-footer footer mainfooter-toolbar">
      <div id="show-content-ft" className="main-footer-inner collapse">
        <div className="container-fluid">
          <div className="footer-wrapper">
            <div className="row footer-block_list">
              <div className="col-12 col-md-6 col-lg-3 footer-block_item footer-block_item--text">
                <h4 className="footer-block_title js-footer-block-title">
                  Giới thiệu
                </h4>
                <div className="footer-block_content mb-3">
                  <p>
                    Công ty TNHH Petmall Việt Nam
                    <br></br>
                    Giấy chứng nhận Đăng ký Kinh doanh số 0315530794 do Sở Kế
                    hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 27/02/2019.
                    <br></br>
                    Đại diện: Thạch Minh Tâm
                  </p>
                </div>
                <div className="logo-footer">
                  <a href="" className="aspect-ratio">
                    <img
                      className=" ls-is-cached lazyloaded"
                      src="https://theme.hstatic.net/1000356051/1000797474/14/logo_bct.jpg?v=37"
                      alt=""
                    />
                  </a>
                </div>
                <div className="footer-item_social">
                  <ul className="social-media list-unstyled">
                    <li className="social-media_item social-media_item--facebook">
                      <a href="">
                        <i className="fa-brands fa-facebook-f"></i>
                        <div className="tooltip">Facebook</div>
                      </a>
                    </li>
                    <li className="social-media_item social-media_item--youtube">
                      <a href="">
                        <i className="fa-brands fa-youtube"></i>
                        <div className="tooltip">Youtube</div>
                      </a>
                    </li>
                    <li className="social-media_item social-media_item--pinterest">
                      <a href="">
                        <i className="fa-brands fa-pinterest"></i>
                        <div className="tooltip">Pinterest</div>
                      </a>
                    </li>
                    <li className="social-media_item social-media_item--twitter">
                      <a href="">
                        <i className="fa-brands fa-twitter"></i>
                        <div className="tooltip">Twitter</div>
                      </a>
                    </li>
                    <li className="social-media_item social-media_item--instagram">
                      <a href="">
                        <i className="fa-brands fa-instagram"></i>
                        <div className="tooltip">Instagram</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 footer-block_item footer-block_item--links">
                <h4 className="footer-block_title js-footer-block-title">
                  Liên kết
                </h4>
                <div className="footer-block_content mb-3">
                  <ul className="footer-linklist list-unstyled">
                    <li className="footer-link_item link">
                      <i className="fa fa-angle-double-right"></i>
                      Liên lạc
                    </li>
                    <li className="footer-link_item link">
                      <i className="fa fa-angle-double-right"></i>
                      Điều khoản sử dụng
                    </li>
                    <li className="footer-link_item link">
                      <i className="fa fa-angle-double-right"></i>
                      Chính sách giải quyết khiếu nại
                    </li>
                    <li className="footer-link_item link">
                      <i className="fa fa-angle-double-right"></i>
                      Chính sách bảo mật thông tin cá nhân
                    </li>
                    <li className="footer-link_item link">
                      <i className="fa fa-angle-double-right"></i>
                      Điều khoản dịch vụ
                    </li>
                    <li className="footer-link_item link">
                      <i className="fa fa-angle-double-right"></i>
                      Giới thiệu
                    </li>
                    <li className="footer-link_item link">
                      <i className="fa fa-angle-double-right"></i>
                      Chính sách đổi trả
                    </li>
                    <li className="footer-link_item link">
                      <i className="fa fa-angle-double-right"></i>
                      Chính sách vận chuyển
                    </li>
                    <li className="footer-link_item link">
                      <i className="fa fa-angle-double-right"></i>
                      Phương thwusc thanh toán
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 footer-block_item footer-block_item--contacts">
                <h4 className="footer-block_title js-footer-block-title">
                  Thông tin liên hệ
                </h4>
                <div className="footer-block_content mb-3">
                  <ul className="footer-list-contact list-unstyled">
                    <li className="contact-1">
                      <span>
                        PETMALL 10 TRẦN NÃO
                        <br></br>
                        10 Trần Não, P.An Khánh, Quận 2, Tp.Hồ Chí Minh
                        <br></br>
                        <br></br>
                        PETMALL 103 THẢO ĐIỀN
                        <br></br>
                        103 Thảo Điền, P.Thảo Điền, Quận 2, Tp.Hồ Chí Minh
                        <br></br>
                        <br></br>
                        OFFICE
                        <br></br>
                        10C2 Nguyễn Thị Minh Khai, P.Đakao, Quận 1, Hồ Chí Minh.
                      </span>
                    </li>
                    <li className="contact-2">
                      <span> 0902.848.949</span>
                    </li>
                    <li className="contact-4">
                      <span>tamthach@petmall.vn</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 footer-block_item footer-block_item--fanpage">
                <h4 className="footer-block_title js-footer-block-title">
                  Fanpage
                </h4>
                <div className="footer-block_content footer-block_content-fanpage mb-3">
                  <div className="footer-static-content">
                    <img src={footer} alt="" />
                  </div>
                  <div className="footer-static-content trapckik">
                    <img src={footer} alt="" />
                  </div>
                  <div className="footer-static-content trapckik">
                    <img src={footer} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-block_bottom text-center">
        <div className="container-fluid">
          <p>
            Copyright © 2022 <a href=""> PETMALL.VN</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
