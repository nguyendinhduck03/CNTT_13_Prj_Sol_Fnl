import { useState } from "react";
import style from "./adminLayout.module.scss";
import classNames from "classnames/bind";
import apiAdmin from "../../api/apiAdmin";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function Sidebar({ isOpen }) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await apiAdmin.post("/logout");
            console.log(response.data);
            localStorage.removeItem("reference_id");
            navigate("/");
        } catch (error) {
            console.error("Error logout:", error);
            alert("Đã xảy ra lỗi.");
        }
    };

    return (
        <div className={cx("sidebar", { open: isOpen })}>
            <ul>
                <li>
                    <Link to="/admin" >Dashboard</Link>
                </li>
                <li>
                    <Link to="/admin/list" >Quản lý mã giảm giá</Link>
                </li>
                <li>
                    <Link to="/admin/add" >Thêm mã giảm giá</Link>
                </li>
                <li>
                    <button onClick={handleLogout} className={cx("logoutButton")}>
                        Đăng xuất
                    </button>
                </li>
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
        <div className={cx("adminLayout", { sidebarClosed: !isSidebarOpen })}>
            <header className={cx("header")}>
                <button onClick={toggleSidebar} className={cx("toggleButton")}>
                    {isSidebarOpen ? "Ẩn Menu" : "Hiện Menu"}
                </button>
                <h1 className={cx("title")}>Admin Dashboard</h1>
            </header>
            <Sidebar isOpen={isSidebarOpen} />
            <main className={cx("main")}>{children}</main>
            <footer className={cx("footer")}>
                © All rights reserved by thanhdx
            </footer>
        </div>
    );
}

export default AdminLayout;

