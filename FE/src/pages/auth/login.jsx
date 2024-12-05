import apiAdmin from "../../api/apiAdmin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/logoBloggiamgia.jpg";

import style from "./auth.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage("Vui lòng nhập email và mật khẩu!");
      return;
    }

    setIsLoading(true);
    try {
      const response = await apiAdmin.post("/login", { email, password });

      if (response.data.status === "success") {
        localStorage.setItem("reference_id", response.data.reference_id);
        setMessage("Đăng nhập thành công!");
        if (response.data.user.role === "admin") {
          navigate("/admin");
        } else {
          window.location.href = "/";
        }
      } else {
        setMessage("Thông tin đăng nhập không chính xác!");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.message || "Đăng nhập thất bại!");
      } else {
        setMessage("Không thể kết nối đến server.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cx("login-container")}>
      <div className={cx("login-box")}>
        {/* Left Section */}
        <div className={cx("left-section")}>
          <img
            src={logo}
            alt="And Shop Logo"
          />
          <h1>Blog giảm giá</h1>
          <p>
            Hãy đăng nhập để đồng hành cùng gia đình Bloggiamgia nhé. Đừng quên tham gia nhóm ONlyFans ở FaceBook
          </p>
        </div>

        {/* Right Section */}
        <div className={cx("right-section")}>
          <h2>Chào mừng bạn đến với chúng tôi!</h2>
          <p>Đăng nhập để tiếp tục cùng <b>Bloggiamgia</b></p>
          <div className={cx("input-group")}>
            <label>Email:</label>
            <input
              type="email"
              placeholder="Email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={cx("input-group")}>
            <label>Mật khẩu:</label>
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={cx("actions")}>
            <a href="#">Quên mật khẩu?</a>
          </div>
          <div className={cx("buttons")}>
            <button onClick={handleLogin} disabled={isLoading}>
              {isLoading ? "Đang xử lý..." : "Đăng nhập"}
            </button>
            <div>Trở thành người đồng hành của <span>Bloggiamgia</span></div>
            <button onClick={() => navigate("/register")}>Đăng ký</button>
          </div>
          {message && (
            <p style={{ color: message.includes("thành công") ? "green" : "red" }}>
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

