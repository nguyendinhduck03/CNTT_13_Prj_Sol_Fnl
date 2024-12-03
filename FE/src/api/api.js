import axios from "axios";

// const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiI0OTc2Y2U1Zi04YjFmLTRhYmQtOTUwMy1jMmFlNjYzZWY2Y2YiLCJzdWIiOiI1MDFkOWI0MC0zNWRmLTQzNTYtYTliMy02ZDhiMThmNmVlMTciLCJpYXQiOjE3MzIxOTYwNTZ9._GQeDCJb3KdRzhYZDT4JgBTH_cYEeu7dGx4bjZkLXF8";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiIwNDBjMWM5YS00YmQwLTRjNzEtODNlYS0wNjdhZmZmMjVhNWIiLCJzdWIiOiJlZjZkNDAwZi04YWMzLTRkMmMtYjE2Yi00MzEwYTA1MmU5MmUiLCJpYXQiOjE3MzMxMjkyMTl9.TeerPNG-VK2pF58_ryIJ9T04W1nf7v9LAUoFZ_TXfE0";

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
