import { useState } from "react";
import api from "../../../api/api";
import style from "./add.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

const CreateVoucher = () => {
  const [consentUrl, setConsentUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Trạng thái loading
  const [voucherCode, setVoucherCode] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [discountValue, setDiscountValue] = useState("");
  const [minOrderValue, setMinOrderValue] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [endDate, setEndDate] = useState("");
  const userReferenceId = localStorage.getItem("reference_id");
  const collectionId = "0eb0162d-daf6-43b0-965e-bd238dde7476";
  const voucherName = "VOUCHER";

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleCreateVoucher = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Bắt đầu loading

    const payload = {
      details: {
        collectionId: collectionId,
        description: description,
        imageUrl: imageUrl,
        name: voucherName,
        attributes: [
          { traitType: "voucher-code", value: voucherCode },
          { traitType: "discount-value", value: discountValue },
          { traitType: "min-order-value", value: minOrderValue },
          { traitType: "end-date", value: endDate },
        ],
      },
      destinationUserReferenceId: userReferenceId,
    };

    const price = {
      price: { currencyId: "USDC", naturalAmount: priceValue },
    };

    try {
      const response = await api.post("/nx/unique-assets", payload);
      const AssetId = response.data.id;

      await delay(30000); // Đợi 30 giây

      const responsePrice = await api.post(
        `/nx/unique-assets/${AssetId}/list-for-sale`,
        price
      );
      const consentUrl = responsePrice.data.consentUrl;
      setConsentUrl(consentUrl);

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
    } finally {
      setIsLoading(false); // Kết thúc loading
    }
  };

  return (
    <div className={cx("form")}>
      {isLoading ? (
        <div className={cx("loading")}>
          <div className={cx("spinner")}></div>
          <p>Đang xử lý, vui lòng đợi một tí...</p>
        </div>
      ) : (
        <form className={cx("addForm")} onSubmit={handleCreateVoucher}>
          <h1 className={cx("title")}>Thêm mới voucher</h1>
          <div className={cx("formControll")}>
            <label>Mã Voucher:</label>
            <input
              type="text"
              placeholder="Voucher Code"
              value={voucherCode}
              onChange={(e) => setVoucherCode(e.target.value)}
            />
          </div>
          <div className={cx("formControll")}>
            <label>Giá bán:</label>
            <input
              type="text"
              placeholder="Price"
              value={priceValue}
              onChange={(e) => setPriceValue(e.target.value)}
            />
          </div>
          <div className={cx("formControll")}>
            <label>Giảm giá:</label>
            <input
              type="text"
              placeholder="Discount Value"
              value={discountValue}
              onChange={(e) => setDiscountValue(e.target.value)}
            />
          </div>
          <div className={cx("formControll")}>
            <label>Đơn hàng tối thiểu:</label>
            <input
              type="text"
              placeholder="Min Order Value"
              value={minOrderValue}
              onChange={(e) => setMinOrderValue(e.target.value)}
            />
          </div>
          <div className={cx("formControll")}>
            <label>Mô tả:</label>
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className={cx("formControll")}>
            <label>Nguồn ảnh:</label>
            <input
              type="text"
              placeholder="Voucher Image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div className={cx("formControll")}>
            <label>Hạn sử dụng:</label>
            <input
              type="text"
              placeholder="End Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className={cx("formControll")}>
            <button type="submit">Thêm voucher</button>
          </div>
        </form>
      )}
      {consentUrl && (
        <div className={cx("consentMessage")}>
          <p>Voucher đã được niêm yết thành công!</p>
          <p>
            Bạn có thể duyệt qua{" "}
            <a href={consentUrl} target="_blank" rel="noopener noreferrer">
              link này
            </a>{" "}
            để hoàn tất quá trình.
          </p>
        </div>
      )}
    </div>
  );
};

export default CreateVoucher;
