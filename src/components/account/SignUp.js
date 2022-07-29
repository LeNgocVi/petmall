import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../../firebase-config";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  let navigate = useNavigate();
  const [data, setData] = useState("");
  console.log("data:", data);
  const handleSignUp = () => {
    if (data.firstName === "" || data.lastName === "") {
      alert("Please fill firstName and lastName!");
    } else {
      auth
        .createUserWithEmailAndPassword(data.email, data.password)
        .then((userCredentials) => {
          console.log(userCredentials);
          const user = userCredentials.user;
          console.log(user.uid);

          const dataUser = {
            fisrtName: data.fisrtName,
            lastName: data.lastName,
            gender: data.gender,
            birthday: data.birthday,
            email: data.email,
            password: data.password,
            userID: user.uid,
          };
          console.log(dataUser.fisrtName);

          const myDoc = db
            .collection("user")
            .doc(user.uid)
            .set(dataUser)
            .then(() => {
              console.log("Document successfully written!");
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
        })
        .catch((error) => alert(error.message));
    }
  };
  useEffect(() => {
    const userCurrent = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate(`/`);
      }
    });

    return userCurrent;
  }, []);
  return (
    <div className="customers-register">
      <div className="account-type text-center">
        <h1>Tạo tài khoản</h1>
      </div>
      <form id="create_customer">
        <div className="form-group mb-4 clearfix">
          <label
            htmlFor="last_name"
            className="text-field d-block font-weight-normal text-uppercase mb-2"
          >
            Họ
          </label>
          <input
            id="last_name"
            type="text"
            placeholder="Họ"
            className="form-control"
            onChange={(event) =>
              setData({ ...data, lastName: event.target.value })
            }
          ></input>
        </div>
        <div className="form-group mb-4 clearfix">
          <label
            htmlFor="first_name"
            className="text-field d-block font-weight-normal text-uppercase mb-2"
          >
            Tên
          </label>
          <input
            id="first_name"
            type="text"
            placeholder="Tên"
            className="form-control"
            onChange={(event) =>
              setData({ ...data, firsrName: event.target.value })
            }
          ></input>
        </div>
        <div id="grender-group" className="form-group mb-4 clearfix">
          <label
            htmlFor="grender"
            className="text-field d-block font-weight-normal text-uppercase mb-2"
          >
            Giới tính
          </label>
          <input
            id="radio1"
            type="radio"
            value="Nam"
            onChange={(event) =>
              setData({ ...data, gender: event.target.value })
            }
          ></input>
          <label htmlFor="radio1">Nam</label>
          <input
            id="radio2"
            type="radio"
            value="Nữ"
            onChange={(event) =>
              setData({ ...data, gender: event.target.value })
            }
          ></input>
          <label htmlFor="radio2">Nữ</label>
        </div>
        <div className="form-group mb-4 clearfix">
          <label
            htmlFor="birthday"
            className="text-field d-block font-weight-normal text-uppercase mb-2"
          >
            Ngày tháng năm sinh (mm/dd/yyyy)
          </label>
          <input
            id="birthday"
            type="text"
            placeholder="mm/dd/yyyy"
            className="form-control"
            onChange={(event) =>
              setData({ ...data, birthday: event.target.value })
            }
          ></input>
        </div>
        <div className="form-group mb-4 clearfix">
          <label
            htmlFor="email"
            className="text-field d-block font-weight-normal text-uppercase mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="form-control"
            onChange={(event) =>
              setData({ ...data, email: event.target.value })
            }
          ></input>
        </div>
        <div className="form-group mb-4 clearfix">
          <label
            htmlFor="password"
            className="text-field d-block font-weight-normal text-uppercase mb-2"
          >
            Mật khẩu
          </label>
          <input
            id="password"
            type="password"
            placeholder="Mật khẩu"
            className="form-control"
            onChange={(event) =>
              setData({ ...data, password: event.target.value })
            }
          ></input>
        </div>
        <div className="sitebox-recaptcha mb-4">
          This site is protected by reCAPTCHA and the Google
          <a> Privacy Policy</a> and <a> Terms of Service</a> apply.
        </div>
        <div className="customers-action-account clearfix">
          <div className="action-button">
            <button
              type="buttton"
              className="btn btn-box dark"
              onClick={handleSignUp}
            >
              Đăng ký
            </button>
          </div>
        </div>
        <div className="clearfix req_pass mt-5">
          <Link to="/signin" className="come-back d-block font-weight-bold">
            <i class="fa-solid fa-arrow-left mr-4"></i>
            Quay lại đăng nhập
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
