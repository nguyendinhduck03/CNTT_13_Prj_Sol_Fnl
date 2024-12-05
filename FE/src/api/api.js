import axios from "axios";

const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJlMmU4MTQ5Ni0zZjg1LTQxMDEtODllMS1mNzFjYjllMmJkNjEiLCJzdWIiOiI4ZDk2ZmY3Mi1kOTc3LTRhMmEtODcwMi00ZjA2OTQ0MWY5NGIiLCJpYXQiOjE3MzMzNDMwNjZ9.LtVHi3bMG0H9TRqKrfAB1jRr5ff4NrrY57sMjzrmW4s";

// Tạo instance của axios với cấu hình sẵn
const api = axios.create({
  baseURL: "https://api.gameshift.dev", // URL gốc cho API
  headers: {
    "accept": "application/json",
    "content-type": "application/json",
    "x-api-key": apiKey,
  },
});

api.interceptors.response.use(
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


export default api;
