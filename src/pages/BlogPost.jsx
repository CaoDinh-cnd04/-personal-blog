import { useParams, Link } from 'react-router-dom'
import { FiArrowLeft, FiClock, FiCalendar } from 'react-icons/fi'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'

// Blog post content
const blogPostsContent = {
  'hoc-it-nhu-the-nao': {
    title: 'Học IT Như Thế Nào? Kinh Nghiệm Từ Sinh Viên IT',
    date: '2024-01-28',
    readTime: '12 phút đọc',
    tags: ['Học Tập', 'IT', 'Kinh Nghiệm', 'Sinh Viên'],
    source: 'Kinh nghiệm cá nhân từ hành trình học IT',
    content: `
# Học IT Như Thế Nào? Kinh Nghiệm Từ Sinh Viên IT

Là một sinh viên IT đang trên hành trình học tập và phát triển, tôi muốn chia sẻ những kinh nghiệm thực tế về cách học IT hiệu quả. Đây là những điều tôi đã học được từ chính hành trình của mình.

## Bắt Đầu Từ Đâu?

Khi mới bắt đầu học IT, nhiều bạn sẽ cảm thấy choáng ngợp với vô số công nghệ, ngôn ngữ lập trình, và framework. Câu hỏi "Bắt đầu từ đâu?" là điều hoàn toàn bình thường.

### 1. Xây Dựng Nền Tảng Vững Chắc

Trước khi nhảy vào các framework hay công nghệ mới, hãy đảm bảo bạn có nền tảng tốt:

- **HTML & CSS**: Hiểu cách web hoạt động
- **JavaScript**: Ngôn ngữ cơ bản cho web development
- **Git & GitHub**: Quản lý code và làm việc nhóm
- **Cấu trúc dữ liệu & Giải thuật**: Nền tảng cho tư duy lập trình

\`\`\`javascript
// Ví dụ: Hiểu JavaScript cơ bản trước khi học React
function greet(name) {
  return \`Xin chào, \${name}!\`
}

console.log(greet('Sinh viên IT'))
\`\`\`

### 2. Học Bằng Cách Làm (Learning by Doing)

Đừng chỉ đọc lý thuyết. Hãy code ngay:

- **Build projects nhỏ**: Todo app, Calculator, Weather app
- **Clone các website**: Facebook, Instagram (chỉ UI)
- **Tham gia hackathon**: Áp lực giúp bạn học nhanh hơn
- **Contribute open source**: Học từ code của người khác

### 3. Sai Lầm Thường Gặp

#### ❌ Học quá nhiều thứ cùng lúc
- Đừng cố học React, Node.js, Python, Flutter cùng một lúc
- Tập trung vào một công nghệ, master nó trước

#### ❌ Chỉ xem tutorial, không code
- Tutorial chỉ giúp bạn hiểu, không giúp bạn làm được
- Code ngay sau khi xem

#### ❌ So sánh bản thân với người khác
- Mỗi người có tốc độ học khác nhau
- Tập trung vào hành trình của chính mình

## Lộ Trình Học IT Cho Sinh Viên

### Năm 1-2: Nền Tảng

**Mục tiêu**: Hiểu cơ bản về lập trình

- Ngôn ngữ lập trình cơ bản (C/C++, Java, hoặc Python)
- Cấu trúc dữ liệu và giải thuật
- Database cơ bản (SQL)
- Git & GitHub

**Dự án đề xuất**:
- Console applications
- Simple CRUD apps
- Basic web pages

### Năm 2-3: Chuyên Sâu

**Mục tiêu**: Chọn một hướng và đi sâu

**Frontend Developer**:
- HTML, CSS, JavaScript nâng cao
- React hoặc Vue.js
- Responsive Design
- State Management

**Backend Developer**:
- Node.js hoặc Python (Django/Flask)
- RESTful API
- Database (MongoDB, PostgreSQL)
- Authentication & Authorization

**Mobile Developer**:
- Flutter hoặc React Native
- State Management
- API Integration
- App Deployment

**Dự án đề xuất**:
- Full-stack applications
- Mobile apps
- E-commerce websites

### Năm 3-4: Thực Tế

**Mục tiêu**: Áp dụng vào dự án thực tế

- Thực tập tại công ty
- Freelance projects
- Open source contributions
- Build portfolio

## Cách Học Hiệu Quả

### 1. Pomodoro Technique

Chia thời gian học thành các khoảng 25 phút:

\`\`\`
25 phút học → 5 phút nghỉ → Lặp lại
\`\`\`

### 2. Feynman Technique

Giải thích lại những gì bạn học cho người khác:
- Viết blog
- Dạy bạn bè
- Record video giải thích

### 3. Active Recall

Thay vì đọc lại, hãy tự test bản thân:
- Làm coding challenges
- Build projects từ đầu
- Giải thích code cho chính mình

### 4. Spaced Repetition

Ôn lại kiến thức định kỳ:
- Review code cũ mỗi tuần
- Refactor projects cũ
- Viết lại từ đầu

## Tài Nguyên Học Tập

### Khóa Học Online

- **FreeCodeCamp**: Miễn phí, chất lượng cao
- **The Odin Project**: Full-stack curriculum
- **Coursera**: Khóa học từ đại học
- **Udemy**: Nhiều khóa học thực tế

### Thực Hành

- **LeetCode**: Coding challenges
- **HackerRank**: Practice problems
- **Codewars**: Gamified learning
- **Frontend Mentor**: Real-world projects

### Cộng Đồng

- **GitHub**: Xem code của người khác
- **Stack Overflow**: Hỏi đáp
- **Reddit (r/learnprogramming)**: Cộng đồng học tập
- **Discord communities**: Chat với developers

## Kinh Nghiệm Cá Nhân

### Những Điều Đã Giúp Tôi

1. **Build Projects Thực Tế**
   - Trip Hotel Full-Stack với Flutter
   - Hotel Web với React
   - Personal Blog với React

2. **Tham Gia Cộng Đồng**
   - Share code trên GitHub
   - Viết blog về những gì học được
   - Giúp đỡ người khác

3. **Không Ngừng Học Hỏi**
   - Đọc documentation
   - Xem code của senior developers
   - Thử các công nghệ mới

### Những Sai Lầm Đã Mắc

1. **Học quá nhiều cùng lúc**: Dẫn đến không nắm vững gì cả
2. **Chỉ xem, không code**: Lãng phí thời gian
3. **So sánh với người khác**: Tạo áp lực không cần thiết

## Lời Khuyên Cuối Cùng

### Đừng Bỏ Cuộc

Học IT không dễ, nhưng cũng không quá khó. Quan trọng là kiên trì:

- Mỗi ngày code một chút
- Build projects nhỏ
- Celebrate small wins

### Tập Trung Vào Process, Không Phải Kết Quả

- Đừng lo lắng về việc chưa tìm được việc
- Tập trung vào việc học và cải thiện mỗi ngày
- Kết quả sẽ đến tự nhiên

### Học Từ Sai Lầm

- Bug là bạn, không phải kẻ thù
- Mỗi lỗi là cơ hội học hỏi
- Fail fast, learn faster

## Kết Luận

Hành trình học IT là một marathon, không phải sprint. Đừng vội vàng, hãy tận hưởng quá trình học tập. Mỗi dòng code bạn viết, mỗi bug bạn fix, mỗi project bạn build đều là một bước tiến.

**Nhớ rằng**: Mọi developer giỏi đều từng là beginner. Quan trọng là bạn bắt đầu và không bỏ cuộc.

Chúc các bạn thành công trên hành trình học IT! 🚀

---

**Nguồn**: Kinh nghiệm cá nhân từ hành trình học IT
    `,
  },
  'react-fundamentals-2024': {
    title: 'React Fundamentals: Từ Cơ Bản Đến Thực Hành',
    date: '2024-01-18',
    readTime: '10 phút đọc',
    tags: ['React', 'JavaScript', 'Frontend', 'Tutorial'],
    source: 'Dựa trên dự án: https://github.com/CaoDinh-cnd04/hotel_web',
    content: `
# React Fundamentals: Từ Cơ Bản Đến Thực Hành

React đã trở thành thư viện JavaScript phổ biến nhất để xây dựng giao diện người dùng. Trong bài viết này, chúng ta sẽ cùng tìm hiểu React từ cơ bản đến thực hành, áp dụng vào các dự án thực tế.

## React Là Gì?

React là một thư viện JavaScript mã nguồn mở được phát triển bởi Facebook (Meta) để xây dựng giao diện người dùng, đặc biệt là các ứng dụng web. React cho phép bạn tạo các UI components có thể tái sử dụng và quản lý state một cách hiệu quả.

### Tại Sao Nên Học React?

- **Phổ biến**: Được sử dụng bởi Facebook, Netflix, Airbnb, và nhiều công ty lớn
- **Cộng đồng lớn**: Nhiều tài nguyên, thư viện, và hỗ trợ
- **Cơ hội việc làm**: Nhu cầu cao trên thị trường
- **Học một lần, viết mọi nơi**: React Native cho mobile

## Setup React Project

### Sử Dụng Vite (Khuyến Nghị 2024)

Vite nhanh hơn Create React App rất nhiều:

\`\`\`bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
\`\`\`

### Cấu Trúc Project

\`\`\`
src/
├── components/     # Reusable components
├── pages/          # Page components
├── hooks/          # Custom hooks
├── utils/          # Utility functions
├── App.jsx         # Main app component
└── main.jsx        # Entry point
\`\`\`

## Components - Khối Xây Dựng Của React

### Function Component

Components là các function trả về JSX:

\`\`\`jsx
function Welcome({ name }) {
  return <h1>Xin chào, {name}!</h1>
}

export default Welcome
\`\`\`

### Sử Dụng Component

\`\`\`jsx
import Welcome from './Welcome'

function App() {
  return (
    <div>
      <Welcome name="Sinh viên IT" />
      <Welcome name="Developer" />
    </div>
  )
}
\`\`\`

## Props - Truyền Dữ Liệu

Props (properties) là cách truyền dữ liệu từ component cha xuống component con:

\`\`\`jsx
function UserCard({ name, email, avatar }) {
  return (
    <div className="user-card">
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  )
}

// Sử dụng
<UserCard 
  name="Cao Nhất Đỉnh"
  email="caodinh@example.com"
  avatar="/avatar.jpg"
/>
\`\`\`

## State - Quản Lý Dữ Liệu Nội Bộ

### useState Hook

\`\`\`jsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Số đếm: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Tăng
      </button>
      <button onClick={() => setCount(count - 1)}>
        Giảm
      </button>
    </div>
  )
}
\`\`\`

### State với Object

\`\`\`jsx
function UserForm() {
  const [user, setUser] = useState({
    name: '',
    email: ''
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form>
      <input
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Tên"
      />
      <input
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      />
    </form>
  )
}
\`\`\`

## useEffect - Side Effects

useEffect cho phép bạn thực hiện side effects (API calls, subscriptions, DOM manipulation):

\`\`\`jsx
import { useState, useEffect } from 'react'

function UserProfile({ userId }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch user data
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data)
        setLoading(false)
      })
  }, [userId]) // Chạy lại khi userId thay đổi

  if (loading) return <div>Đang tải...</div>
  if (!user) return <div>Không tìm thấy user</div>

  return <div>{user.name}</div>
}
\`\`\`

### Cleanup Function

\`\`\`jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick')
  }, 1000)

  // Cleanup: chạy khi component unmount
  return () => {
    clearInterval(timer)
  }
}, [])
\`\`\`

## Conditional Rendering

### If/Else

\`\`\`jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Chào mừng trở lại!</h1>
  }
  return <h1>Vui lòng đăng nhập</h1>
}
\`\`\`

### Ternary Operator

\`\`\`jsx
function Button({ isDisabled }) {
  return (
    <button disabled={isDisabled}>
      {isDisabled ? 'Đang xử lý...' : 'Gửi'}
    </button>
  )
}
\`\`\`

### Logical &&

\`\`\`jsx
function Notification({ message }) {
  return (
    <>
      {message && (
        <div className="notification">
          {message}
        </div>
      )}
    </>
  )
}
\`\`\`

## Lists và Keys

\`\`\`jsx
function BlogList({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
        </li>
      ))}
    </ul>
  )
}
\`\`\`

**Lưu ý**: Luôn sử dụng \`key\` khi render lists. Key phải unique và stable.

## Event Handling

\`\`\`jsx
function Button() {
  const handleClick = (e) => {
    e.preventDefault()
    console.log('Button clicked!')
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  )
}
\`\`\`

### Passing Arguments

\`\`\`jsx
function TodoList({ todos, onDelete }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => onDelete(todo.id)}>
            Xóa
          </button>
        </li>
      ))}
    </ul>
  )
}
\`\`\`

## Custom Hooks

Tạo custom hooks để tái sử dụng logic:

\`\`\`jsx
// hooks/useFetch.js
import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [url])

  return { data, loading, error }
}

// Sử dụng
function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(\`/api/users/\${userId}\`)

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return <div>{data.name}</div>
}
\`\`\`

## Áp Dụng Vào Dự Án Thực Tế

### Hotel Web Project

Trong dự án Hotel Web, tôi đã sử dụng React để:

1. **Component Structure**:
   - Header, Footer (reusable)
   - RoomCard, BookingForm (feature components)
   - Home, About, Contact (page components)

2. **State Management**:
   - useState cho form data
   - useEffect cho API calls
   - Context API cho global state

3. **Routing**:
   - React Router DOM cho navigation
   - Protected routes cho admin

### Best Practices

1. **Component Naming**: PascalCase
2. **File Structure**: Một component một file
3. **Props Validation**: Sử dụng PropTypes hoặc TypeScript
4. **Code Splitting**: Lazy load components
5. **Performance**: useMemo, useCallback khi cần

## Kết Luận

React là công cụ mạnh mẽ để xây dựng ứng dụng web hiện đại. Bắt đầu với những khái niệm cơ bản, thực hành với projects nhỏ, và dần dần nâng cao kỹ năng.

**Tips**:
- Build projects thực tế
- Đọc documentation chính thức
- Xem code của người khác trên GitHub
- Tham gia cộng đồng React

Happy coding! ⚛️

---

**Nguồn**: Dựa trên dự án: https://github.com/CaoDinh-cnd04/hotel_web
    `,
  },
  'trip-hotel-fullstack-flutter': {
    title: 'Xây Dựng Trip Hotel Full-Stack với Flutter: Hành Trình Từ Ý Tưởng Đến Sản Phẩm',
    date: '2024-01-25',
    readTime: '15 phút đọc',
    tags: ['Flutter', 'Dart', 'Mobile', 'Full-Stack', 'Project'],
    source: 'Dựa trên dự án thực tế: https://github.com/CaoDinh-cnd04/trip-hotel-fullstack',
    content: `
# Xây Dựng Trip Hotel Full-Stack với Flutter: Hành Trình Từ Ý Tưởng Đến Sản Phẩm

Trong bài viết này, tôi sẽ chia sẻ hành trình xây dựng ứng dụng đặt phòng khách sạn full-stack với Flutter, từ ý tưởng ban đầu đến khi deploy sản phẩm hoàn chỉnh.

## Ý Tưởng Dự Án

Trip Hotel là ứng dụng mobile cho phép người dùng:
- Tìm kiếm và đặt phòng khách sạn
- Xem chi tiết phòng, giá cả, đánh giá
- Quản lý đặt phòng của mình
- Đánh giá và review khách sạn

### Tại Sao Chọn Flutter?

- **Cross-platform**: Một codebase cho cả iOS và Android
- **Performance**: Native performance với hot reload
- **UI/UX**: Material Design và Cupertino widgets
- **Growing ecosystem**: Nhiều packages và cộng đồng lớn

## Tech Stack

### Frontend (Mobile)
- **Flutter**: UI framework
- **Dart**: Programming language
- **Provider**: State management
- **HTTP**: API calls
- **Shared Preferences**: Local storage

### Backend
- **Node.js + Express**: RESTful API
- **MongoDB**: Database
- **JWT**: Authentication
- **Firebase**: File storage (images)

## Cấu Trúc Dự Án

\`\`\`
lib/
├── models/          # Data models
├── services/        # API services
├── providers/       # State management
├── screens/         # UI screens
├── widgets/          # Reusable widgets
├── utils/           # Utilities
└── main.dart        # Entry point
\`\`\`

## Models - Định Nghĩa Dữ Liệu

### Hotel Model

\`\`\`dart
class Hotel {
  final String id;
  final String name;
  final String location;
  final double rating;
  final String imageUrl;
  final double price;
  final List<String> amenities;

  Hotel({
    required this.id,
    required this.name,
    required this.location,
    required this.rating,
    required this.imageUrl,
    required this.price,
    required this.amenities,
  });

  factory Hotel.fromJson(Map<String, dynamic> json) {
    return Hotel(
      id: json['_id'],
      name: json['name'],
      location: json['location'],
      rating: json['rating'].toDouble(),
      imageUrl: json['imageUrl'],
      price: json['price'].toDouble(),
      amenities: List<String>.from(json['amenities']),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      '_id': id,
      'name': name,
      'location': location,
      'rating': rating,
      'imageUrl': imageUrl,
      'price': price,
      'amenities': amenities,
    };
  }
}
\`\`\`

### Booking Model

\`\`\`dart
class Booking {
  final String id;
  final String hotelId;
  final String userId;
  final DateTime checkIn;
  final DateTime checkOut;
  final int guests;
  final double totalPrice;
  final String status;

  Booking({
    required this.id,
    required this.hotelId,
    required this.userId,
    required this.checkIn,
    required this.checkOut,
    required this.guests,
    required this.totalPrice,
    required this.status,
  });

  factory Booking.fromJson(Map<String, dynamic> json) {
    return Booking(
      id: json['_id'],
      hotelId: json['hotelId'],
      userId: json['userId'],
      checkIn: DateTime.parse(json['checkIn']),
      checkOut: DateTime.parse(json['checkOut']),
      guests: json['guests'],
      totalPrice: json['totalPrice'].toDouble(),
      status: json['status'],
    );
  }
}
\`\`\`

## Services - API Integration

### Hotel Service

\`\`\`dart
import 'package:http/http.dart' as http;
import 'dart:convert';
import '../models/hotel.dart';

class HotelService {
  final String baseUrl = 'https://api.triphotel.com';

  Future<List<Hotel>> getHotels() async {
    try {
      final response = await http.get(
        Uri.parse('\$baseUrl/api/hotels'),
        headers: {'Content-Type': 'application/json'},
      );

      if (response.statusCode == 200) {
        final List<dynamic> data = json.decode(response.body);
        return data.map((json) => Hotel.fromJson(json)).toList();
      } else {
        throw Exception('Failed to load hotels');
      }
    } catch (e) {
      throw Exception('Error: \$e');
    }
  }

  Future<Hotel> getHotelById(String id) async {
    try {
      final response = await http.get(
        Uri.parse('\$baseUrl/api/hotels/\$id'),
        headers: {'Content-Type': 'application/json'},
      );

      if (response.statusCode == 200) {
        return Hotel.fromJson(json.decode(response.body));
      } else {
        throw Exception('Failed to load hotel');
      }
    } catch (e) {
      throw Exception('Error: \$e');
    }
  }

  Future<List<Hotel>> searchHotels(String query) async {
    try {
      final response = await http.get(
        Uri.parse('\$baseUrl/api/hotels/search?q=\$query'),
        headers: {'Content-Type': 'application/json'},
      );

      if (response.statusCode == 200) {
        final List<dynamic> data = json.decode(response.body);
        return data.map((json) => Hotel.fromJson(json)).toList();
      } else {
        throw Exception('Failed to search hotels');
      }
    } catch (e) {
      throw Exception('Error: \$e');
    }
  }
}
\`\`\`

### Booking Service

\`\`\`dart
class BookingService {
  final String baseUrl = 'https://api.triphotel.com';

  Future<Booking> createBooking({
    required String hotelId,
    required DateTime checkIn,
    required DateTime checkOut,
    required int guests,
    required String token,
  }) async {
    try {
      final response = await http.post(
        Uri.parse('\$baseUrl/api/bookings'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer \$token',
        },
        body: json.encode({
          'hotelId': hotelId,
          'checkIn': checkIn.toIso8601String(),
          'checkOut': checkOut.toIso8601String(),
          'guests': guests,
        }),
      );

      if (response.statusCode == 201) {
        return Booking.fromJson(json.decode(response.body));
      } else {
        throw Exception('Failed to create booking');
      }
    } catch (e) {
      throw Exception('Error: \$e');
    }
  }

  Future<List<Booking>> getUserBookings(String userId, String token) async {
    try {
      final response = await http.get(
        Uri.parse('\$baseUrl/api/bookings/user/\$userId'),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer \$token',
        },
      );

      if (response.statusCode == 200) {
        final List<dynamic> data = json.decode(response.body);
        return data.map((json) => Booking.fromJson(json)).toList();
      } else {
        throw Exception('Failed to load bookings');
      }
    } catch (e) {
      throw Exception('Error: \$e');
    }
  }
}
\`\`\`

## State Management với Provider

### Hotel Provider

\`\`\`dart
import 'package:flutter/foundation.dart';
import '../models/hotel.dart';
import '../services/hotel_service.dart';

class HotelProvider with ChangeNotifier {
  final HotelService _hotelService = HotelService();
  
  List<Hotel> _hotels = [];
  bool _loading = false;
  String? _error;

  List<Hotel> get hotels => _hotels;
  bool get loading => _loading;
  String? get error => _error;

  Future<void> loadHotels() async {
    _loading = true;
    _error = null;
    notifyListeners();

    try {
      _hotels = await _hotelService.getHotels();
      _error = null;
    } catch (e) {
      _error = e.toString();
    } finally {
      _loading = false;
      notifyListeners();
    }
  }

  Future<void> searchHotels(String query) async {
    _loading = true;
    _error = null;
    notifyListeners();

    try {
      _hotels = await _hotelService.searchHotels(query);
      _error = null;
    } catch (e) {
      _error = e.toString();
    } finally {
      _loading = false;
      notifyListeners();
    }
  }
}
\`\`\`

## UI Screens

### Home Screen

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../providers/hotel_provider.dart';
import '../widgets/hotel_card.dart';

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Trip Hotel'),
        actions: [
          IconButton(
            icon: Icon(Icons.search),
            onPressed: () {
              // Navigate to search
            },
          ),
        ],
      ),
      body: Consumer<HotelProvider>(
        builder: (context, hotelProvider, child) {
          if (hotelProvider.loading) {
            return Center(child: CircularProgressIndicator());
          }

          if (hotelProvider.error != null) {
            return Center(
              child: Text('Error: \${hotelProvider.error}'),
            );
          }

          return ListView.builder(
            itemCount: hotelProvider.hotels.length,
            itemBuilder: (context, index) {
              final hotel = hotelProvider.hotels[index];
              return HotelCard(hotel: hotel);
            },
          );
        },
      ),
    );
  }
}
\`\`\`

### Hotel Detail Screen

\`\`\`dart
class HotelDetailScreen extends StatelessWidget {
  final Hotel hotel;

  HotelDetailScreen({required this.hotel});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(hotel.name),
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Hotel Image
            Image.network(
              hotel.imageUrl,
              height: 250,
              width: double.infinity,
              fit: BoxFit.cover,
            ),
            
            // Hotel Info
            Padding(
              padding: EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    hotel.name,
                    style: TextStyle(
                      fontSize: 24,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  SizedBox(height: 8),
                  Row(
                    children: [
                      Icon(Icons.location_on, size: 16),
                      Text(hotel.location),
                    ],
                  ),
                  SizedBox(height: 8),
                  Row(
                    children: [
                      Icon(Icons.star, color: Colors.amber),
                      Text('\${hotel.rating}'),
                    ],
                  ),
                  SizedBox(height: 16),
                  Text(
                    'Giá: \${hotel.price.toStringAsFixed(0)} VNĐ/đêm',
                    style: TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                      color: Colors.green,
                    ),
                  ),
                  SizedBox(height: 16),
                  Text(
                    'Tiện ích:',
                    style: TextStyle(fontWeight: FontWeight.bold),
                  ),
                  Wrap(
                    spacing: 8,
                    children: hotel.amenities.map((amenity) {
                      return Chip(label: Text(amenity));
                    }).toList(),
                  ),
                ],
              ),
            ),
            
            // Book Button
            Padding(
              padding: EdgeInsets.all(16),
              child: SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: () {
                    // Navigate to booking screen
                  },
                  child: Text('Đặt Phòng'),
                  style: ElevatedButton.styleFrom(
                    padding: EdgeInsets.symmetric(vertical: 16),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
\`\`\`

## Widgets - Reusable Components

### Hotel Card

\`\`\`dart
class HotelCard extends StatelessWidget {
  final Hotel hotel;

  HotelCard({required this.hotel});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      child: InkWell(
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => HotelDetailScreen(hotel: hotel),
            ),
          );
        },
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Image.network(
              hotel.imageUrl,
              height: 200,
              width: double.infinity,
              fit: BoxFit.cover,
            ),
            Padding(
              padding: EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    hotel.name,
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  SizedBox(height: 4),
                  Row(
                    children: [
                      Icon(Icons.location_on, size: 16),
                      Text(hotel.location),
                    ],
                  ),
                  SizedBox(height: 8),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Row(
                        children: [
                          Icon(Icons.star, color: Colors.amber, size: 16),
                          Text('\${hotel.rating}'),
                        ],
                      ),
                      Text(
                        '\${hotel.price.toStringAsFixed(0)} VNĐ/đêm',
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          color: Colors.green,
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
\`\`\`

## Authentication

### Auth Service

\`\`\`dart
class AuthService {
  final String baseUrl = 'https://api.triphotel.com';

  Future<String> login(String email, String password) async {
    try {
      final response = await http.post(
        Uri.parse('\$baseUrl/api/auth/login'),
        headers: {'Content-Type': 'application/json'},
        body: json.encode({
          'email': email,
          'password': password,
        }),
      );

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        final token = data['token'];
        
        // Save token to local storage
        final prefs = await SharedPreferences.getInstance();
        await prefs.setString('token', token);
        
        return token;
      } else {
        throw Exception('Login failed');
      }
    } catch (e) {
      throw Exception('Error: \$e');
    }
  }

  Future<void> logout() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove('token');
  }

  Future<String?> getToken() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getString('token');
  }
}
\`\`\`

## Những Thách Thức và Giải Pháp

### 1. State Management

**Vấn đề**: Quản lý state phức tạp khi app lớn

**Giải pháp**: Sử dụng Provider pattern, chia nhỏ providers theo feature

### 2. API Integration

**Vấn đề**: Xử lý loading, error states

**Giải pháp**: Tạo base service class, error handling tập trung

### 3. Image Loading

**Vấn đề**: Images load chậm, ảnh hưởng UX

**Giải pháp**: Sử dụng cached_network_image, placeholder images

### 4. Navigation

**Vấn đề**: Navigation phức tạp giữa nhiều screens

**Giải pháp**: Sử dụng named routes, navigation service

## Kết Quả

Sau 3 tháng phát triển, ứng dụng Trip Hotel đã có:

- ✅ 10+ screens hoàn chỉnh
- ✅ Authentication & Authorization
- ✅ Search & Filter hotels
- ✅ Booking system
- ✅ User profile management
- ✅ Reviews & Ratings

## Bài Học Rút Ra

1. **Plan trước khi code**: Thiết kế database, API structure trước
2. **Start small**: Build features cơ bản trước, nâng cao sau
3. **Test thường xuyên**: Test trên cả iOS và Android
4. **Code organization**: Chia code thành modules, dễ maintain
5. **Documentation**: Viết comments, README cho dự án

## Kết Luận

Xây dựng Trip Hotel là một hành trình học hỏi tuyệt vời. Từ việc học Flutter/Dart, thiết kế UI/UX, tích hợp API, đến quản lý state và deploy. Mỗi bước đều là một bài học quý giá.

**Tips cho người mới**:
- Bắt đầu với Flutter basics
- Build projects nhỏ trước
- Tham gia cộng đồng Flutter
- Đọc documentation chính thức
- Practice, practice, practice!

Happy coding! 🚀

---

**Nguồn**: Dựa trên dự án thực tế: https://github.com/CaoDinh-cnd04/trip-hotel-fullstack
    `,
  },
  '10-cong-cu-developer-nen-biet-2024': {
    title: '10 Công Cụ Developer Nên Biết Năm 2024: Tăng Năng Suất Làm Việc',
    date: '2024-01-30',
    readTime: '14 phút đọc',
    tags: ['Tools', 'Developer', 'Productivity', '2024', 'Tips'],
    source: 'Tổng hợp từ các nguồn công nghệ uy tín và kinh nghiệm cộng đồng developer',
    content: `
# 10 Công Cụ Developer Nên Biết Năm 2024: Tăng Năng Suất Làm Việc

Là một developer, việc sử dụng đúng công cụ có thể giúp bạn tăng năng suất làm việc lên gấp đôi, thậm chí gấp ba. Trong bài viết này, tôi sẽ giới thiệu 10 công cụ developer hàng đầu năm 2024 mà mọi developer nên biết.

## Tại Sao Công Cụ Quan Trọng?

Công cụ tốt không chỉ giúp bạn code nhanh hơn, mà còn:
- **Giảm lỗi**: Tự động phát hiện bugs
- **Tiết kiệm thời gian**: Automation các tác vụ lặp lại
- **Cải thiện chất lượng code**: Code formatting, linting tự động
- **Tăng hiệu quả làm việc nhóm**: Collaboration tools

## 1. Visual Studio Code (VS Code)

**VS Code** vẫn là code editor phổ biến nhất năm 2024, và có lý do chính đáng.

### Tại Sao Nên Dùng?

- **Miễn phí và mã nguồn mở**
- **Extensions phong phú**: Hàng nghìn extensions
- **Integrated Terminal**: Terminal ngay trong editor
- **Git Integration**: Quản lý Git trực tiếp
- **IntelliSense**: Auto-complete thông minh
- **Debugging**: Debug code dễ dàng

### Extensions Quan Trọng

\`\`\`json
{
  "recommendations": [
    "esbenp.prettier-vscode",      // Code formatter
    "dbaeumer.vscode-eslint",       // JavaScript linter
    "ms-python.python",             // Python support
    "bradlc.vscode-tailwindcss",   // Tailwind CSS IntelliSense
    "github.copilot",               // AI coding assistant
    "ms-vscode.vscode-typescript-next" // TypeScript support
  ]
}
\`\`\`

### Tips Sử Dụng

- **Keyboard Shortcuts**: Học các shortcuts để code nhanh hơn
- **Command Palette**: \`Ctrl+Shift+P\` (Windows) hoặc \`Cmd+Shift+P\` (Mac)
- **Multi-cursor**: \`Alt+Click\` để chọn nhiều dòng cùng lúc
- **Zen Mode**: \`Ctrl+K Z\` để tập trung code

## 2. GitHub Copilot

**GitHub Copilot** là AI coding assistant được phát triển bởi GitHub và OpenAI.

### Tính Năng

- **Code Suggestions**: Gợi ý code tự động
- **Auto-complete**: Hoàn thiện code dựa trên context
- **Code Generation**: Tạo code từ comments
- **Multi-language Support**: Hỗ trợ nhiều ngôn ngữ

### Ví Dụ Sử Dụng

\`\`\`javascript
// Chỉ cần viết comment, Copilot sẽ suggest code
// Function to calculate factorial of a number
function factorial(n) {
  // Copilot sẽ tự động suggest implementation
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
\`\`\`

### Lưu Ý

- **Không phải lúc nào cũng đúng**: Luôn review code được suggest
- **Privacy**: Code của bạn được gửi đến GitHub servers
- **Cost**: Có phí cho personal use ($10/tháng), miễn phí cho students

## 3. Postman

**Postman** là công cụ không thể thiếu cho backend developer.

### Tại Sao Cần Postman?

- **API Testing**: Test API endpoints dễ dàng
- **Collections**: Tổ chức API requests
- **Environment Variables**: Quản lý variables cho dev/staging/prod
- **Automation**: Chạy tests tự động
- **Documentation**: Tự động generate API docs

### Workflow Cơ Bản

1. **Tạo Request**: GET, POST, PUT, DELETE
2. **Set Headers**: Authorization, Content-Type
3. **Test Response**: Assertions, status codes
4. **Save to Collection**: Tổ chức theo project
5. **Share với Team**: Export/Import collections

### Ví Dụ Collection

\`\`\`json
{
  "info": {
    "name": "User API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Get Users",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "{{base_url}}/api/users",
          "host": ["{{base_url}}"],
          "path": ["api", "users"]
        }
      }
    }
  ]
}
\`\`\`

## 4. Git & GitHub

**Git** và **GitHub** là nền tảng của version control hiện đại.

### Git Commands Quan Trọng

\`\`\`bash
# Basic workflow
git clone <repository-url>
git checkout -b feature/new-feature
git add .
git commit -m "Add new feature"
git push origin feature/new-feature

# Advanced
git rebase -i HEAD~3        # Interactive rebase
git stash                    # Save changes temporarily
git cherry-pick <commit-id>  # Apply specific commit
\`\`\`

### GitHub Features

- **Pull Requests**: Code review và collaboration
- **Actions**: CI/CD automation
- **Issues**: Bug tracking và project management
- **Discussions**: Community engagement
- **GitHub Pages**: Host static websites miễn phí

### Best Practices

- **Commit Messages**: Viết rõ ràng, descriptive
- **Branch Strategy**: Git Flow hoặc GitHub Flow
- **Code Review**: Luôn review code trước khi merge
- **.gitignore**: Ignore files không cần thiết

## 5. Docker

**Docker** giúp containerize applications, đảm bảo consistency giữa các environments.

### Lợi Ích

- **Consistency**: Code chạy giống nhau ở mọi nơi
- **Isolation**: Mỗi app chạy trong container riêng
- **Scalability**: Dễ dàng scale up/down
- **Portability**: Chạy trên bất kỳ platform nào

### Dockerfile Example

\`\`\`dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
\`\`\`

### Docker Commands

\`\`\`bash
# Build image
docker build -t my-app .

# Run container
docker run -p 3000:3000 my-app

# Docker Compose
docker-compose up -d
\`\`\`

## 6. Tailwind CSS

**Tailwind CSS** là utility-first CSS framework, giúp style nhanh chóng.

### Tại Sao Tailwind?

- **Rapid Development**: Style nhanh với utility classes
- **Consistency**: Design system tự động
- **Customizable**: Dễ dàng customize
- **Performance**: Purge unused CSS

### Ví Dụ

\`\`\`html
<!-- Thay vì viết CSS riêng -->
<div class="flex items-center justify-between p-4 bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition-colors">
  <h2 class="text-2xl font-bold text-white">Hello World</h2>
  <button class="px-4 py-2 bg-white text-blue-500 rounded hover:bg-gray-100">
    Click me
  </button>
</div>
\`\`\`

### Tips

- **IntelliSense**: Cài extension cho VS Code
- **@apply**: Tạo custom components
- **JIT Mode**: Just-in-time compilation
- **Dark Mode**: Built-in dark mode support

## 7. Chrome DevTools

**Chrome DevTools** là công cụ debugging mạnh mẽ cho web developers.

### Tính Năng Quan Trọng

- **Elements Tab**: Inspect và edit HTML/CSS
- **Console**: Debug JavaScript, log messages
- **Network Tab**: Monitor API calls, performance
- **Performance Tab**: Analyze performance bottlenecks
- **Application Tab**: View storage, cookies, cache

### Tips Debugging

\`\`\`javascript
// Console tricks
console.table(data)           // Display data as table
console.time('label')         // Measure execution time
console.group('Group')        // Group logs
debugger                      // Breakpoint in code
\`\`\`

### Shortcuts

- **F12**: Open DevTools
- **Ctrl+Shift+C**: Inspect element
- **Ctrl+Shift+J**: Open Console
- **Ctrl+Shift+I**: Toggle DevTools

## 8. Figma

**Figma** là design tool cho UI/UX, quan trọng cho frontend developers.

### Tại Sao Cần Figma?

- **Design Handoff**: Lấy specs, colors, spacing từ designers
- **Prototyping**: Xem design flow
- **Collaboration**: Làm việc với designers
- **Component Library**: Xem design system

### Developer Workflow

1. **Inspect Design**: Lấy exact measurements
2. **Export Assets**: Download images, icons
3. **Copy CSS**: Copy styles trực tiếp
4. **Check Responsive**: Xem breakpoints

## 9. Notion / Obsidian

**Notion** hoặc **Obsidian** để quản lý kiến thức và documentation.

### Notion Features

- **Documentation**: Viết docs cho projects
- **Task Management**: Quản lý tasks
- **Knowledge Base**: Lưu trữ kiến thức
- **Templates**: Project templates

### Obsidian Features

- **Markdown**: Pure markdown editor
- **Graph View**: Visualize connections
- **Plugins**: Extend functionality
- **Local First**: Data lưu local

## 10. Vercel / Netlify

**Vercel** và **Netlify** là platforms để deploy frontend applications.

### Vercel

- **Zero Config**: Deploy ngay, không cần config
- **Serverless Functions**: Backend functions
- **Edge Network**: CDN toàn cầu
- **Preview Deployments**: Preview cho mỗi PR

### Netlify

- **Continuous Deployment**: Auto deploy từ Git
- **Forms**: Handle form submissions
- **Functions**: Serverless functions
- **Split Testing**: A/B testing

### Deploy Workflow

\`\`\`bash
# Vercel
npm i -g vercel
vercel

# Netlify
npm i -g netlify-cli
netlify deploy
\`\`\`

## Bonus: Các Công Cụ Khác Đáng Chú Ý

### 11. Raycast (Mac) / PowerToys (Windows)

**Productivity tools** để tăng tốc workflow:
- **Quick Actions**: Launch apps, search files
- **Clipboard History**: Lưu clipboard history
- **Window Management**: Quản lý windows

### 12. Warp Terminal

**Modern terminal** với nhiều tính năng:
- **AI Command Suggestions**: Gợi ý commands
- **Split Panes**: Multiple panes
- **Workflows**: Automate tasks

### 13. Linear / Jira

**Project Management** tools:
- **Issue Tracking**: Track bugs, features
- **Sprints**: Agile development
- **Roadmaps**: Plan releases

## Cách Chọn Công Cụ Phù Hợp

### Tiêu Chí Đánh Giá

1. **Learning Curve**: Dễ học không?
2. **Cost**: Miễn phí hay có phí?
3. **Community**: Có cộng đồng lớn không?
4. **Documentation**: Docs có tốt không?
5. **Integration**: Tích hợp với tools khác?

### Workflow Gợi Ý

1. **Setup**: Cài đặt tools cơ bản (VS Code, Git)
2. **Learn**: Học từng tool một, đừng học tất cả cùng lúc
3. **Practice**: Sử dụng trong projects thực tế
4. **Optimize**: Tùy chỉnh theo nhu cầu

## Kết Luận

Công cụ tốt là người bạn đồng hành của developer. Đừng cố học tất cả cùng lúc, hãy bắt đầu với những công cụ cơ bản nhất:

1. **VS Code** - Code editor
2. **Git & GitHub** - Version control
3. **Postman** - API testing
4. **Chrome DevTools** - Debugging
5. **Docker** - Containerization

Sau đó, dần dần thêm các công cụ khác vào workflow của bạn. Quan trọng nhất là **sử dụng đúng tool cho đúng việc**, không phải tool nào mới nhất cũng tốt nhất.

**Tips cuối cùng**:
- Đầu tư thời gian học tools, nó sẽ tiết kiệm thời gian sau này
- Tham gia cộng đồng của mỗi tool để học hỏi
- Tùy chỉnh tools theo nhu cầu của bạn
- Đừng ngại thử tools mới, nhưng đừng đổi liên tục

Happy coding! 🚀

---

**Nguồn**: Tổng hợp từ các nguồn công nghệ uy tín và kinh nghiệm cộng đồng developer
    `,
  },
}

const BlogPost = () => {
  const { slug } = useParams()
  const post = blogPostsContent[slug]

  if (!post) {
    return (
      <div className="pt-24 pb-20">
        <div className="container-custom">
          <div className="card text-center py-12">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="mb-6">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="btn-primary inline-flex items-center gap-2">
              <FiArrowLeft />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEO 
        title={post.title}
        description={post.content.substring(0, 160)}
        type="article"
      />
      
      <div className="pt-24 pb-20 min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto">
              {/* Back Button */}
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 mb-8 text-gray-600 dark:text-gray-400 hover:text-primary-light dark:hover:text-primary-dark transition-colors font-medium"
              >
                <FiArrowLeft className="w-5 h-5" />
                <span>Quay lại Blog</span>
              </Link>

              {/* Post Header */}
              <article className="bg-white dark:bg-surface-dark rounded-2xl shadow-2xl p-8 md:p-12 lg:p-16 border border-gray-200/50 dark:border-gray-700/50">
                <header className="mb-12 pb-10 border-b-2 border-gray-200 dark:border-gray-700">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-gray-900 dark:text-gray-100">
                    {post.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-6 text-base mb-6 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="w-5 h-5 text-primary-light dark:text-primary-dark" />
                      <span className="font-medium">{new Date(post.date).toLocaleDateString('vi-VN', { 
                        day: 'numeric',
                        month: 'long', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiClock className="w-5 h-5 text-primary-light dark:text-primary-dark" />
                      <span className="font-medium">{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-gradient-to-r from-primary-light/10 to-cyan-500/10 dark:from-primary-dark/10 dark:to-cyan-500/10 text-primary-light dark:text-primary-dark rounded-full text-sm font-semibold border border-primary-light/20 dark:border-primary-dark/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {post.source && (
                    <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border-l-4 border-primary-light dark:border-primary-dark">
                      <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                        <span className="text-2xl mr-2">📚</span>
                        <strong className="text-primary-light dark:text-primary-dark">Nguồn tham khảo:</strong> {post.source}
                      </p>
                    </div>
                  )}
                </header>

                {/* Post Content */}
                <div className="blog-content max-w-none mt-10">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                          <div className="my-6">
                            <SyntaxHighlighter
                              style={vscDarkPlus}
                              language={match[1]}
                              PreTag="div"
                              className="rounded-lg"
                              customStyle={{
                                padding: '1.5rem',
                                borderRadius: '0.5rem',
                                fontSize: '0.95rem',
                                lineHeight: '1.6',
                              }}
                              {...props}
                            >
                              {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                          </div>
                        ) : (
                          <code className="px-2 py-1 rounded text-sm font-mono bg-gray-100 dark:bg-gray-800 text-red-600 dark:text-orange-400" {...props}>
                            {children}
                          </code>
                        )
                      },
                      h1: ({node, ...props}) => <h1 className="text-4xl md:text-5xl font-bold mt-12 mb-6 text-gray-900 dark:text-gray-100" {...props} />,
                      h2: ({node, ...props}) => <h2 className="text-3xl md:text-4xl font-bold mt-10 mb-5 text-gray-800 dark:text-gray-200" {...props} />,
                      h3: ({node, ...props}) => <h3 className="text-2xl md:text-3xl font-semibold mt-8 mb-4 text-gray-700 dark:text-gray-300" {...props} />,
                      h4: ({node, ...props}) => <h4 className="text-xl md:text-2xl font-semibold mt-6 mb-3 text-gray-600 dark:text-gray-400" {...props} />,
                      p: ({node, ...props}) => <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300" {...props} />,
                      ul: ({node, ...props}) => <ul className="mb-6 ml-6 list-disc space-y-2 text-lg leading-relaxed text-gray-700 dark:text-gray-300" {...props} />,
                      ol: ({node, ...props}) => <ol className="mb-6 ml-6 list-decimal space-y-2 text-lg leading-relaxed text-gray-700 dark:text-gray-300" {...props} />,
                      li: ({node, ...props}) => <li className="mb-2 text-lg leading-relaxed" {...props} />,
                      strong: ({node, ...props}) => <strong className="font-bold text-gray-900 dark:text-gray-100" {...props} />,
                      blockquote: ({node, ...props}) => (
                        <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-6 italic bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-200" {...props} />
                      ),
                      a: ({node, ...props}) => <a className="text-primary-light dark:text-primary-dark underline hover:no-underline transition-all" {...props} />,
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>
                
                {/* Source Footer */}
                {post.source && (
                  <div className="mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-700">
                    <div className="p-5 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl">
                      <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                        <span className="text-2xl mr-2">📚</span>
                        <strong className="text-primary-light dark:text-primary-dark">Nguồn:</strong> {post.source}
                      </p>
                    </div>
                  </div>
                )}
              </article>

              {/* Share / Navigate */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <Link 
                  to="/blog" 
                  className="btn-secondary inline-flex items-center gap-2 px-6 py-3"
                >
                  <FiArrowLeft className="w-5 h-5" />
                  <span>Xem thêm bài viết</span>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  )
}

export default BlogPost

