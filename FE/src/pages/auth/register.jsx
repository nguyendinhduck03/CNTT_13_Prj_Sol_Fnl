import { useState, useEffect } from "react";
import api from "../../api/api";
import apiAdmin from "../../api/apiAdmin";
import { useWallet } from "@solana/wallet-adapter-react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logoBloggiamgia.jpg";

import style from "./auth.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

const RegisterUser = () => {
  const navigate = useNavigate();

  const { publicKey, connected } = useWallet();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [externalWalletAddress, setExternalWalletAddress] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (connected && publicKey) {
      setExternalWalletAddress(publicKey.toString());
    }
  }, [connected, publicKey]);

  const handleRegister = async () => {
    if (!email || !password || !referenceId) {
      setMessage("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    setIsLoading(true);
    try {
      const response = await api.post("/nx/users", {
        referenceId,
        email,
        externalWalletAddress,
      });
      console.log(response.data);
      

      const responseAdmin = await apiAdmin.post("/register", {
        email,
        password,
        reference_id: referenceId,
      });
      console.log(responseAdmin.data);

      localStorage.setItem("reference_id", referenceId);

      setMessage("Đăng ký thành công!");
      navigate("/");
    } catch (error) {
      console.error("Error creating user:", error);
      setMessage("Đã xảy ra lỗi khi tạo người dùng.");
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
          <h1>Bloggiamgia</h1>
          <p>
            Vui lòng hãy kết nối với ví Phantom hoặc các loại ví khác trước khi đăng ký. 
            Bạn có thể sử dụng chúng để giao dịch tại của hàng.
          </p>
        </div>

        {/* Right Section */}
        <div className={cx("right-section")}>
          <h2>Đăng ký thôi!</h2>
          <p>
            Tạo một tài khoản và mua sắm tại <b>Bloggiamgia</b> 
          </p>
          <div className={cx("input-group")}>
            <label>Tên người dùng:</label>
            <input
              type="text"
              placeholder="Tên của bạn"
              value={referenceId}
              onChange={(e) => setReferenceId(e.target.value)}
            />
          </div>
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
          <div className={cx("input-group")}>
            <label>Địa chỉ ví:</label>
            <input
              type="text"
              value={externalWalletAddress || "Chưa kết nối ví"}
              readOnly
            />
          </div>
          <div className={cx("buttons")}>
            <button onClick={handleRegister} disabled={isLoading}>
              {isLoading ? "Đang xử lý..." : "Đăng ký"}
            </button>
            <div>Đã có tài khoản? <span onClick={() => navigate("/login")} style={{ cursor: "pointer", color: "#bb13b3" }}>Đăng nhập</span></div>
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

export default RegisterUser;

