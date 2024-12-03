import { useState, useEffect } from "react";
import api from "../../api/api";
import apiAdmin from "../../api/apiAdmin";
import { useWallet } from '@solana/wallet-adapter-react'; // Import hook
import { useNavigate } from "react-router-dom";


const RegisterUser = () => {
  const navigate = useNavigate();

  const { publicKey, connected } = useWallet();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [externalWalletAddress, setExternalWalletAddress] = useState('');
  
  useEffect(() => {
    if (connected && publicKey) {
      setExternalWalletAddress(publicKey.toString());
    }
  }, [connected, publicKey]);

  const handleRegister = async () => {
    try {
      
      const response = await api.post("/nx/users", {
        referenceId,
        email,
        externalWalletAddress,
      });

      const responseAdmin = await apiAdmin.post("/register", { email, password, reference_id:referenceId });
      console.log(responseAdmin.data);

      localStorage.setItem("reference_id", referenceId);

      console.log("User created successfully:", response.data);
      alert("Người dùng đã được tạo thành công!");
      navigate("/");
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Đã xảy ra lỗi khi tạo người dùng.");
    }
  };
  return (
    <div>
      <h1>Register User</h1>

      <input
        type="text"
        placeholder="Name"
        value={referenceId}
        onChange={(e) => setReferenceId(e.target.value)}
      /><br/>
      
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/>

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/>
      <p>Wallet Address: {externalWalletAddress}</p>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterUser;
