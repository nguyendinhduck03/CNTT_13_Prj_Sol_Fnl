import { useState } from "react";
import style from "./adminLayout.module.scss";
import classNames from "classnames/bind";
import apiAdmin from "../../api/apiAdmin";
import { useNavigate } from 'react-router-dom';


const cx = classNames.bind(style);



function Sidebar({ isOpen }) {
    const navigate = useNavigate();
    const handleLogout = async () => {
        
        try {
        const response = await apiAdmin.post("/logout");
        console.log(response.data);
        localStorage.removeItem("reference_id");
        navigate('/');
        } catch (error) {
        console.error("Error logout:", error);
        alert("Đã xảy ra lỗi.");
        }
    };
    return (
        <div className={cx("sidebar", { open: isOpen, closed: !isOpen })}>
            <ul className={!isOpen ? cx("closed") : ""}>
                <li>Trang chủ</li>
                <li><a href="/admin/list">Quản lý Voucher</a></li>
                <li><button onClick={handleLogout}>Đăng xuất</button></li>
            </ul>
        </div>
    );
}


function AdminLayout({ children }) {

    
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={cx('adminLayout', { sidebarClosed: !isSidebarOpen })}>
            <header className={cx('header')}>
                <button onClick={toggleSidebar} className={cx('toggleButton')}>
                    {isSidebarOpen ? '<(")' : '(")>'}
                </button>
            </header>
            <Sidebar isOpen={isSidebarOpen} />
            <main className={cx('main')}>
                {children}
            </main>
            <footer className={cx('footer')}>
            © All rights reserved by thanhdx
            </footer>
        </div>
    );
    
}

export default AdminLayout;
