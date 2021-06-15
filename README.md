# VMO-BLOG-GRAPHQL

WHAT: 
- Ngôn ngữ để thiết kế API, tạo query
- Nhận nhiều dữ liệu hơn chỉ với 1 request
- Nhanh hơn với nhiều công cụ hỗ trợ dev
-WHY:
- Vì kiến trúc REST có nhiều hạn chế vì dụ như là:
  + Cần nhiều truy quét nếu ta chọc sâu vào dữ liệu. Có thể hiểu nôm na là nếu như cần tìm kiếm bài post của từng người. Thì ta cần những API sau:
    - GET users/:id
    - GET users/:id/:idPost
  Nếu có 10 người dùng mà mỗi người dùng có 100 bài viết thì client phải gửi rất nhiều request và ... khá mệt. 
- Còn nếu sử dụng GRAPHQL thì Client chỉ cần gửi 1 request và kết quả thu đuợc rất đầy đủ dữ liệu:
   
  - Với graphql thì Không cần phải gửi quá nhiều request lên server
  - Phù hợp với những hệ thống lớn và có nhiều bảng dữ liệu lồng vào nhau. Các truy vấn cần hiển thị hoặc xử lý với các bảng con ấy.
HOW:
- Schema: Nơi lưu trữ những điều kiện query, mutation. Ta phải cấu hình các kiểu dữ liệu và kết quả trả về ở trong đấy. Khi thực hiện truy vấn, nếu sai điều kiện đầu vào, ra thì nó sẽ thông báo lỗi
- Resolver: Nơi lưu trữ các query cụ thể. Đây là nơi lấy dữ liệu từ database,thực hiện các logic, nhận input và trả về respose cho client
- Trong GRAPHQL thì không có CRUD nhưng được chia làm 2 loại là QUERY và MUTATION, trong đó:
  + QUERY (GET) dữ liệu ra
  + MUTATION (UPDATE,CREATE, DELETE) các tác vụ mà ảnh hưởng tới Database
  + SUBSCRIPTION (Tác vụ realtime)
