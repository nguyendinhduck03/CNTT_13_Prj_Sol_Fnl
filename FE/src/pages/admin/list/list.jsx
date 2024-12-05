import { useEffect, useState } from "react";
import api from "../../../api/api";
import style from "./list.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function List() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/nx/items?forSale=true");
        console.log("Lấy thành công tất cả các mặt hàng!", response.data);
        console.log(response.data.data);
        setData(response.data.data);
      } catch (error) {
        console.error("Có lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={cx("listPage")}>
      <div className={cx("tableContainer")}>
        <div className={cx("headerTable")}>
          <h1 className={cx("title")}>Danh sách voucher</h1>
        </div>
        <table className={cx("voucherTable")}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Voucher Code</th>
              <th>Giảm giá</th>
              <th>Đơn hàng tối thiểu</th>
              <th>Mô tả</th>
              <th>HSD</th>
            </tr>
          </thead>
          <tbody>
            {data.map((voucher, index) => (
              <tr key={voucher.id}>
                <td>{index + 1}</td>
                <td>{voucher.item.attributes[0].value}</td>
                <td>{voucher.item.attributes[1].value}</td>
                <td>{voucher.item.attributes[2].value}.000đ</td>
                <td>{voucher.item.description}</td>
                <td>{voucher.item.attributes[3].value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
