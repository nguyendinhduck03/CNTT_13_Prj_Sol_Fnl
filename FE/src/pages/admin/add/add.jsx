
import { useState } from "react";
import api from "../../../api/api";
import style from "./add.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const CreateVoucher = () => {
  const [consentUrl, setConsentUrl] = useState("");

  const [voucherCode, setVoucherCode] = useState(""); // Mã voucher người dùng nhập
  const [priceValue, setPriceValue] = useState("");
  const [discountValue, setDiscountValue] = useState("");
  const [minOrderValue, setMinOrderValue] = useState("");
  const [description, setDescription] = useState(""); // Mô tả voucher
  const [imageUrl, setImageUrl] = useState(""); // URL ảnh của voucher
  const [endDate, setEndDate] = useState(""); // URL ảnh của voucher
  const userReferenceId = localStorage.getItem('reference_id'); //chưa làm BE nên fix cứng
  const collectionId = "fe8734c3-ba12-4dcd-bf22-b03f401755ac"; //chưa làm BE nên fix cứng
  const voucherName = "VOUCHER"; //chưa làm BE nên fix cứng

  console.log(userReferenceId);

  // Định nghĩa hàm delay
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const handleCreateVoucher = async (event) => {
    event.preventDefault();
    const payload = {
      details: {
        collectionId: collectionId,
        description: description,
        imageUrl: imageUrl,
        name: voucherName,
        attributes: [
          {
            traitType: "voucher-code",
            value: voucherCode,
          },
          {
            traitType: "discount-value",
            value: discountValue,
          },
          {
            traitType: "min-order-value",
            value: minOrderValue,
          },
          {
            traitType: "end-date",
            value: endDate,
          },
        ],
      },
      destinationUserReferenceId: userReferenceId, // ID người nhận
    };

    const price = {
      price: {
        currencyId: "USDC",
        naturalAmount: priceValue,
      }
    }

    try {
      const response = await api.post("/nx/unique-assets", payload);
      console.log("Voucher created successfully:", response.data);

      const AssetId = response.data.id;
      console.log(`/nx/unique-assets/${AssetId}/list-for-sale`);

      await delay(60000);
      
      const responsePrice = await api.post(`/nx/unique-assets/${AssetId}/list-for-sale`, price);
      console.log("Voucher hit the shelves successfully:", responsePrice.data); 

      // Lưu trữ consentUrl vào trạng thái
      const consentUrl = responsePrice.data.consentUrl;
      setConsentUrl(consentUrl); // Cập nhật consentUrl vào state

      alert("Voucher đã được tạo thành công!");

      setVoucherCode("");
      setPriceValue("");
      setDiscountValue("");
      setMinOrderValue("");
      setDescription("");
      setImageUrl("");
      setEndDate("");

      
    } catch (error) {
      console.error("Error creating voucher:", error);
      alert("Đã xảy ra lỗi.");
    }
  };

  return (
    <div>
      <div className={cx("form")}>
        <form className={cx("addForm")} onSubmit={handleCreateVoucher}>
          <h1 className={cx("title")}>Thêm mới voucher</h1>
          <div className={cx("formControll")}>
            <label htmlFor="discount_value">Mã Voucher:</label>
            <input
              type="text"
              placeholder="Voucher Name"
              value={voucherCode}
              onChange={(e) => setVoucherCode(e.target.value)}
            />
          </div>

          <div className={cx("formControll")}>
            <label htmlFor="discount_value">Giá bán:</label>
            <input
              type="text"
              placeholder="Price"
              value={priceValue}
              onChange={(e) => setPriceValue(e.target.value)}
            />
          </div>

          <div className={cx("formControll")}>
            <label htmlFor="discount_value">Giảm giá:</label>
            <input
              type="text"
              placeholder="Discount Value"
              value={discountValue}
              onChange={(e) => setDiscountValue(e.target.value)}
            />
          </div>

          <div className={cx("formControll")}>
            <label htmlFor="discount_value">Đơn hàng tối thiểu:</label>
            <input
              type="text"
              placeholder="Min Order Value"
              value={minOrderValue}
              onChange={(e) => setMinOrderValue(e.target.value)}
            />
          </div>

          <div className={cx("formControll")}>
            <label htmlFor="discount_value">Mô tả:</label>
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className={cx("formControll")}>
            <label htmlFor="discount_value">Nguồn ảnh:</label>
            <input
              type="text"
              placeholder="Voucher Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>

          {/* <div className={cx("formControll")}>
            <label htmlFor="discount_value">Hạn sử dụng:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div> */}
          <div className={cx("formControll")}>
            <label htmlFor="discount_value">Hạn sử dụng:</label>
            <input
              type="text"
              placeholder="End Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          {/* Nút submit */}
          <div className={cx("formControll")}>
            <button
              type="submit"
              className={cx("submitButton")}
            >
              Thêm voucher
            </button>
          </div>
        </form>
        {/* Hiển thị consentUrl nếu có */}
      {consentUrl && (
        <div>
          <p>Voucher đã được niêm yết thành công!</p>
          <p>
            Bạn có thể duyệt qua <a href={consentUrl} target="_blank" rel="noopener noreferrer">link này</a> để hoàn tất quá trình.
          </p>
        </div>
      )}
      </div>
    </div>
  );
};

export default CreateVoucher;
