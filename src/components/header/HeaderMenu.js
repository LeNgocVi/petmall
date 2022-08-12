import React from "react";
import dropdown from "../../assets/image/drop-down.svg";
import { Link } from "react-router-dom";
const HeaderMenu = () => {
  return (
    <div className="header-menu-desktop">
      <div className="container-fluid">
        <div className="header-nav-sticky">
          <div className="menu-desktop">
            <nav id="main-nav-linklist" className="main-nav text-center">
              <ul className="nav-linklist">
                <li className="nav-bar-item">
                  <Link to={`/collection/all`}>
                    <a href="" className="nav-bar-link">
                      SHOP BY BRAND
                    </a>
                  </Link>
                </li>
                <li className="nav-bar-item">
                  <Link to="/collection/cat">
                    <a href="" className="nav-bar-link">
                      CỦA MÈO | CAT
                      {/* <!-- <i
                          className="icon--arrow-bottom fa-solid fa-angle-down"
                        ></i> --> */}
                      <img
                        className="icon--arrow-bottom"
                        src={dropdown}
                        alt=""
                      ></img>
                    </a>
                  </Link>
                  <ul className="dropdown-desktop-menu">
                    <li className="nav-bar-item nav-dropdown-item dropdown-item-lv2">
                      <Link to="/collection/cat/">
                        <a href="" className="nav-dropdown-link">
                          Thức ăn, dưỡng chất | Food, nutrition
                          <i className="icon--arrow-right fa-solid fa-angle-right"></i>
                        </a>
                      </Link>
                      <ul className="dropdown-desktop-menu">
                        <li className="nav-bar-item nav-dropdown-item">
                          <a href="" className="nav-dropdown-link">
                            Thức ăn hạt | Dry food
                          </a>
                        </li>
                        <li className="nav-bar-item nav-dropdown-item">
                          <a href="" className="nav-dropdown-link">
                            Thức ăn ướt | Wet food
                          </a>
                        </li>
                        <li className="nav-bar-item nav-dropdown-item">
                          <a href="" className="nav-dropdown-link">
                            Thực phẩm hỗ trợ | Functional foods
                          </a>
                        </li>
                        <li className="nav-bar-item nav-dropdown-item">
                          <a href="" className="nav-dropdown-link">
                            Sữa, thực phẩm bổ sung | Milk, supplements
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-bar-item nav-dropdown-item">
                      <a href="" className="nav-dropdown-link">
                        Treats - Catnip & cỏ mèo
                      </a>
                    </li>
                    <li className="nav-bar-item nav-dropdown-item">
                      <a href="" className="nav-dropdown-link">
                        Cát vệ sinh | Cat Litter
                      </a>
                    </li>
                    <li className="nav-bar-item nav-dropdown-item dropdown-item-lv2">
                      <a href="" className="nav-dropdown-link">
                        Vệ sinh, chăm sóc | Hygiene, care
                        <i className=" icon--arrow-right fa-solid fa-angle-right"></i>
                      </a>
                    </li>
                    <li className="nav-bar-item nav-dropdown-item dropdown-item-lv2">
                      <a href="" className="nav-dropdown-link">
                        Phụ kiện, đồ chơi | Accessories & toys
                        <i className=" icon--arrow-right fa-solid fa-angle-right"></i>
                      </a>
                    </li>
                    <li className="nav-bar-item nav-dropdown-item">
                      <a href="" className="nav-dropdown-link">
                        Quần áo | Clothing
                      </a>
                    </li>
                    <li className="nav-bar-item nav-dropdown-item">
                      <a href="" className="nav-dropdown-link">
                        Dành cho bạn | For pet owners & gift
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-bar-item">
                  <Link to="/collection/dog/">
                    <a href="" className="nav-bar-link">
                      CỦA CHÓ | DOG
                      <img
                        className="icon--arrow-bottom"
                        src={dropdown}
                        alt=""
                      ></img>
                    </a>
                  </Link>
                </li>
                <li className="nav-bar-item">
                  <Link to="/collection/small pet/">
                    <a href="" className="nav-bar-link">
                      THÚ NHỎ | Small Pet
                      <img
                        className="icon--arrow-bottom"
                        src={dropdown}
                        alt=""
                      ></img>
                    </a>
                  </Link>
                </li>

                <li className="nav-bar-item">
                  <Link to="/collection/Today's deals/">
                    <a href="" className="nav-bar-link">
                      {" "}
                      Today's deals{" "}
                    </a>
                  </Link>
                </li>
                <li className="nav-bar-item">
                  <Link to="/collection/Pet Parent/">
                    <a href="" className="nav-bar-link">
                      Pet Parent
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
