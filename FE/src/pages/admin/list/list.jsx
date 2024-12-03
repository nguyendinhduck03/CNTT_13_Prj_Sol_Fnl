import { useEffect, useState } from "react";
import axios from "axios";
import style from "./list.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function List() {
  const [vouchers, setVouchers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/home")
      .then(response => {
        if (response.data.success) {
          setVouchers(response.data.data); 
        }
      })
      .catch(error => {
        console.error("Error fetching vouchers:", error);
      });
  }, []);

  return (
    <div className={cx("listPage")}>
      <div className={cx("tableContainer")}>
        <div className={cx("headerTable")}>
          <h1 className={cx("title")}>Danh sách voucher</h1>
          <button><a href="/admin/add">Thêm mới</a></button>
        </div>
        <table className={cx("voucherTable")}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Mã Voucher</th>
              <th>Giá trị</th>
              <th>Mô tả</th>
              <th>Giá trị đơn hàng tối thiểu</th>
              <th>Số lượng</th>
              <th>Ngày bắt đầu</th>
              <th>Ngày kết thúc</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {vouchers.map(voucher => (
              <tr key={voucher.id}>
                <td>{voucher.id}</td>
                <td>{voucher.code}</td>
                <td>{voucher.discount_type === "percent" ? `${voucher.discount_value}%` : `${voucher.discount_value}₫`}</td>
                <td>{voucher.description}</td>
                <td>{voucher.min_order_value}₫</td>
                <td>{voucher.quantity}</td>
                <td>{voucher.start_date}</td>
                <td>{voucher.end_date}</td>
                <td>
                  <button>Sửa</button>
                  <button>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
