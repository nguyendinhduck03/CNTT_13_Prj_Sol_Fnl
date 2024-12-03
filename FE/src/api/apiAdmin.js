import axios from "axios";

const apiAdmin = axios.create({
  baseURL: "http://localhost:8000/api", // URL gốc cho API Admin
});

apiAdmin.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Lỗi từ phía server
      console.error("API Error Response:", error.response.data);
      alert(`Error ${error.response.status}: ${error.response.data.message}`);
    } else if (error.request) {
      // Không nhận được phản hồi từ server
      console.error("API Error Request:", error.request);
      alert("Không thể kết nối đến server. Vui lòng thử lại.");
    } else {
      // Lỗi khác
      console.error("API Error Message:", error.message);
      alert(`Lỗi không xác định: ${error.message}`);
    }
    return Promise.reject(error);
  }
);

export default apiAdmin;
