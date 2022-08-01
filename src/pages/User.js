import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import AddressUser from "../components/user/AddressUser";
import CurrentUser from "../components/user/CurrentUser";

const User = () => {
  let navigate = useNavigate();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigate(`/`);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="layout-info-account mb-5">
      <div className="container">
        <div className="title-info-account text-center py-5 mt-5">
          <h1 className="m-0">Tài Khoản của bạn</h1>
        </div>
        <div className="content-infor-account">
          <div className="row">
            <div className="col-12 col-md-3">
              <div className="sidebar-account-inner mb-4">
                <div className="account-sidebar">
                  <h2 className="account-title title-sidebar mb-3 text-uppercase">
                    Tài khoản
                  </h2>
                  <div className="account-content">
                    <div className="account-list">
                      <ul className="list-unstyled">
                        <li>
                          <Link
                            to="/user/"
                            className="d-block position-relative"
                          >
                            Thông tin tài khoản
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/user/addressUser"
                            className="d-block position-relative"
                          >
                            Danh sách địa chỉ
                          </Link>
                        </li>
                        <li>
                          <a
                            className="d-block position-relative"
                            onClick={handleSignOut}
                          >
                            Dăng xuất
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-9">
              <Routes>
                <Route path="/" element={<CurrentUser />}></Route>
                <Route path="addressUser" element={<AddressUser />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
