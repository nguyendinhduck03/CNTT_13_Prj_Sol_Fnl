// src/components/WalletInfo.jsx
import { useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Đảm bảo import CSS



const WalletInfo = () => {
  const { publicKey, connected } = useWallet();

  useEffect(() => {
    // Hiển thị thông báo khi kết nối ví
    if (connected) {
      toast.success(`Đã kết nối ví, địa chỉ của bạn: ${publicKey?.toString()}`, {
        autoClose: 2000,  // Đóng sau 3 giây
      });
    } else {
      toast.info("Chưa kết nối ví", {
        autoClose: 2000,  // Đóng sau 3 giây
      });
    }
  }, [connected, publicKey]);
};

export default WalletInfo;
