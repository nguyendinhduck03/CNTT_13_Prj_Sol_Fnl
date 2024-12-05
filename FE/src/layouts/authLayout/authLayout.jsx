import { useState, useEffect } from 'react';
import style from "./authLayout.module.scss";
import classNames from 'classnames/bind';
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import apiAdmin from "../../api/apiAdmin";

import ConnectWallet from "../../components/connectWallet";
import { ToastContainer } from 'react-toastify';
import WalletInfo from '../../components/WalletInfo';


const cx = classNames.bind(style);

// eslint-disable-next-line react/prop-types
function AuthLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const referenceId = localStorage.getItem("reference_id");
    setIsLoggedIn(!!referenceId);
  }, []);

  const handleLogout = async () => {
    try {
      const response = await apiAdmin.post("/logout");
      console.log(response.data);
      localStorage.removeItem("reference_id");
      setIsLoggedIn(false);
    } catch (error) {
      console.error("Error logout:", error);
      alert("Đã xảy ra lỗi.");
    }
  };

  return (
    <div className={cx('home-layout')}>
      {/* Header */}
      <header className={cx('header')}>
        <div className={cx('header-jr')}>
          <div className={cx('logo')}>
            <Link to="/">
              <img src={logo} alt="Logo trang web" />
            </Link>
          </div>
          <div className={cx('menu')}>
            <ul>
              <li><Link to="/" className={cx('active')}>Trang chủ</Link></li>
              <li><Link to="/ma-giam-gia">Mã giảm giá</Link></li>
              <li><Link to="#">Tin khuyến mãi</Link></li>
              <li><Link to="#">Tích điểm đổi quà</Link></li>
              <li className={cx('dropdown')}>
                <span>Tài khoản</span>
                <div className={cx('dropdown-menu')}>
                  <ul>
                    <li className={cx('connect-wallet')} ><ConnectWallet /></li>
                    {!isLoggedIn ? (
                      <li className={cx('login')}><Link to="/login">Đăng nhập</Link></li>
                    ) : (
                      <li className={cx('logout')}><button onClick={handleLogout}>Đăng xuất</button></li>
                    )}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* WalletInfo */}
      <WalletInfo />

      {/* Toast Container */}
      <ToastContainer />

      {/* Main content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      {/* <footer>
          <img src={footer} alt="Placeholder Image" />
      </footer> */}
    </div>
  );
}

export default AuthLayout;
