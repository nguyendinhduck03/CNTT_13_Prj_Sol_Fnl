import apiAdmin from "../../api/apiAdmin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


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
        console.log(response.data);
        
      if (response.data.status === "success") {
        localStorage.setItem("reference_id", response.data.reference_id);
        setMessage("Đăng nhập thành công!");
        if(response.data.user.role === 'admin') {
          navigate("/admin");
        } else {
          window.location.href = '/';
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
    <div>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} disabled={isLoading}>
        {isLoading ? "Đang xử lý..." : "Login"}
      </button>
      {message && (
        <p style={{ color: message.includes("thành công") ? "green" : "red" }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default Login;
