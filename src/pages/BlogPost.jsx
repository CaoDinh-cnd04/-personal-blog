import { useParams, Link } from 'react-router-dom'
import { FiArrowLeft, FiClock, FiCalendar } from 'react-icons/fi'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import SEO from '../components/SEO'
import AnimatedSection from '../components/AnimatedSection'

// Sample blog post content - in a real app, this would be fetched from files or CMS
const blogPostsContent = {
  'getting-started-with-react': {
    title: 'Getting Started with React in 2024',
    date: '2024-01-15',
    readTime: '5 phút đọc',
    tags: ['React', 'JavaScript', 'Tutorial'],
    content: `
# Getting Started with React in 2024

React đã trở thành một trong những thư viện JavaScript phổ biến nhất để xây dựng giao diện người dùng. Trong bài viết này, chúng ta sẽ cùng tìm hiểu cơ bản về React và xây dựng ứng dụng đầu tiên.

## React là gì?

React là thư viện JavaScript để xây dựng giao diện người dùng, được phát triển và duy trì bởi Facebook (Meta). React cho phép bạn tạo các UI components có thể tái sử dụng và quản lý state một cách hiệu quả.

## Yêu cầu trước khi bắt đầu

Trước khi học React, bạn nên có:

- Kiến thức cơ bản về HTML, CSS và JavaScript
- Node.js và npm đã được cài đặt
- Code editor (khuyến nghị VS Code)
- Hiểu về ES6+ (arrow functions, destructuring, modules)

## Tạo React App đầu tiên

Cách dễ nhất để bắt đầu dự án React là sử dụng Vite:

\`\`\`bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
\`\`\`

Vite nhanh hơn Create React App rất nhiều và là lựa chọn được khuyên dùng trong 2024.

## Hiểu về Components

React applications được xây dựng từ các components. Đây là một component đơn giản:

\`\`\`jsx
function Welcome({ name }) {
  return <h1>Xin chào, {name}!</h1>
}

export default Welcome
\`\`\`

Components có thể là function hoặc class, nhưng function components với hooks là cách tiếp cận hiện đại nhất.

## State và Props

React components có **state** (dữ liệu nội bộ) và **props** (dữ liệu từ parent truyền xuống):

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
    </div>
  )
}
\`\`\`

## React Hooks quan trọng

### useState
Quản lý state trong functional components:

\`\`\`jsx
const [value, setValue] = useState(initialValue)
\`\`\`

### useEffect
Xử lý side effects (API calls, subscriptions):

\`\`\`jsx
useEffect(() => {
  // Code chạy sau khi component render
  return () => {
    // Cleanup function
  }
}, [dependencies])
\`\`\`

## Bước tiếp theo

Sau khi hiểu cơ bản, bạn có thể:

- Học sâu về React Hooks (useState, useEffect, useContext, useReducer)
- Tìm hiểu React Router cho navigation
- Học về state management với Context API hoặc Zustand
- Xây dựng một dự án thực tế!

## Kết luận

React là công cụ mạnh mẽ để xây dựng ứng dụng web hiện đại. Với thời gian và thực hành, bạn sẽ tạo ra những ứng dụng tuyệt vời!

**Tips:** Đừng cố học tất cả một lúc. Hãy build projects nhỏ và dần dần nâng cao kỹ năng của bạn. Happy coding! 🚀
    `,
  },
  'xay-dung-blog-ca-nhan-voi-react': {
    title: 'Xây Dựng Blog Cá Nhân Với React và Tailwind CSS',
    date: '2024-01-20',
    readTime: '10 phút đọc',
    tags: ['React', 'Tailwind CSS', 'Blog', 'Tutorial'],
    content: `
# Xây Dựng Blog Cá Nhân Với React và Tailwind CSS

Trong bài viết này, tôi sẽ hướng dẫn các bạn xây dựng một blog cá nhân hoàn chỉnh với React và Tailwind CSS.

## Tại sao nên có blog cá nhân?

- **Personal Branding**: Xây dựng thương hiệu cá nhân
- **Portfolio**: Showcase các dự án và kỹ năng
- **Chia sẻ kiến thức**: Học được nhiều hơn khi dạy người khác
- **Networking**: Kết nối với cộng đồng developer

## Tech Stack

Chúng ta sẽ sử dụng:

- **React 18+**: UI library
- **Vite**: Build tool cực nhanh
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Framer Motion**: Smooth animations
- **React Markdown**: Render Markdown content

## Setup Project

\`\`\`bash
npm create vite@latest my-blog -- --template react
cd my-blog
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

## Cấu trúc thư mục

\`\`\`
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── BlogCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── Blog.jsx
│   └── BlogPost.jsx
├── App.jsx
└── main.jsx
\`\`\`

## Tạo Layout Component

\`\`\`jsx
function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}
\`\`\`

## Styling với Tailwind CSS

Tailwind CSS giúp bạn style nhanh chóng với utility classes:

\`\`\`jsx
<div className="max-w-4xl mx-auto px-4 py-8">
  <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
    Blog của tôi
  </h1>
</div>
\`\`\`

## Dark Mode

Implement dark mode với Tailwind:

\`\`\`jsx
import { useState, useEffect } from 'react'

function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
  )
}
\`\`\`

## Markdown Support

Sử dụng React Markdown để render nội dung:

\`\`\`bash
npm install react-markdown remark-gfm
\`\`\`

\`\`\`jsx
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function BlogPost({ content }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
      {content}
    </ReactMarkdown>
  )
}
\`\`\`

## SEO Optimization

Sử dụng React Helmet cho SEO:

\`\`\`jsx
import { Helmet } from 'react-helmet-async'

function BlogPost({ title, description }) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      {/* Content */}
    </>
  )
}
\`\`\`

## Deploy lên Netlify/Vercel

Build và deploy:

\`\`\`bash
npm run build
\`\`\`

Drag & drop thư mục \`dist\` vào Netlify hoặc connect GitHub repo với Vercel.

## Kết luận

Bạn đã có một blog cá nhân hoàn chỉnh! Tiếp tục cải thiện bằng cách thêm:

- Comments system (Disqus, Utterances)
- Analytics (Google Analytics)
- Newsletter subscription
- Search functionality
- RSS feed

Chúc bạn thành công! 🎉
    `,
  },
  'ai-va-web-development': {
    title: 'AI và Web Development: Tương Lai Đã Đến',
    date: '2024-01-18',
    readTime: '8 phút đọc',
    tags: ['AI', 'Machine Learning', 'Web Development'],
    content: `
# AI và Web Development: Tương Lai Đã Đến

AI không còn là khái niệm xa vời. Hôm nay, chúng ta có thể tích hợp AI vào web applications một cách dễ dàng.

## AI trong Web Development

### 1. Chatbots & Virtual Assistants

Sử dụng OpenAI API hoặc các LLM khác:

\`\`\`javascript
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

async function chat(message) {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: message }]
  })
  
  return response.choices[0].message.content
}
\`\`\`

### 2. Image Generation

Tạo hình ảnh với DALL-E hoặc Stable Diffusion:

\`\`\`javascript
const image = await openai.images.generate({
  prompt: "A beautiful landscape",
  n: 1,
  size: "1024x1024"
})
\`\`\`

### 3. Recommendation Systems

Build recommendation engine đơn giản:

\`\`\`python
from sklearn.neighbors import NearestNeighbors
import numpy as np

# Training data
user_preferences = np.array([...])

# Model
model = NearestNeighbors(n_neighbors=5)
model.fit(user_preferences)

# Get recommendations
distances, indices = model.kneighbors([user_input])
\`\`\`

## Langchain cho Web Apps

Langchain giúp xây dựng AI applications dễ dàng:

\`\`\`javascript
import { ChatOpenAI } from "langchain/chat_models/openai"
import { PromptTemplate } from "langchain/prompts"

const model = new ChatOpenAI()
const prompt = PromptTemplate.fromTemplate(
  "Explain {topic} in simple terms"
)

const chain = prompt.pipe(model)
const result = await chain.invoke({ topic: "React Hooks" })
\`\`\`

## Vector Databases

Sử dụng Pinecone hoặc ChromaDB cho semantic search:

\`\`\`javascript
import { PineconeClient } from "@pinecone-database/pinecone"

const pinecone = new PineconeClient()
await pinecone.init({
  apiKey: process.env.PINECONE_API_KEY,
  environment: "us-west1-gcp"
})

// Query similar documents
const results = await index.query({
  vector: embedding,
  topK: 5
})
\`\`\`

## AI Code Assistants

### GitHub Copilot
- Autocomplete code
- Generate functions
- Write tests

### ChatGPT/Claude
- Debug code
- Explain concepts
- Refactor code

## Thực hành tốt nhất

1. **API Keys Security**: Không hardcode API keys
2. **Rate Limiting**: Implement rate limits
3. **Error Handling**: Handle API failures gracefully
4. **Caching**: Cache AI responses để tiết kiệm chi phí
5. **User Privacy**: Respect user data

## Kết luận

AI đang thay đổi cách chúng ta develop web applications. Hãy học và áp dụng để không bị tụt hậu!

**Resources:**
- OpenAI Documentation
- Langchain Docs
- HuggingFace Models
- Google AI Platform
    `,
  },
  'mastering-tailwind-css': {
    title: 'Mastering Tailwind CSS: Tips và Tricks',
    date: '2024-01-10',
    readTime: '7 phút đọc',
    tags: ['CSS', 'Tailwind', 'Design'],
    content: `
# Mastering Tailwind CSS: Tips và Tricks

Tailwind CSS đã trở thành một trong những CSS framework được yêu thích nhất. Hãy cùng khám phá các tips và tricks để sử dụng Tailwind hiệu quả!

## Tại Sao Chọn Tailwind CSS?

### Ưu điểm
- ⚡ **Faster Development**: Không cần đặt tên class
- 🎨 **Consistent Design**: Design system built-in
- 📦 **Smaller CSS**: PurgeCSS loại bỏ unused styles
- 🔧 **Highly Customizable**: Config dễ dàng

## Setup Tailwind với Vite

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

**tailwind.config.js:**
\`\`\`javascript
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#8b5cf6',
      }
    },
  },
  plugins: [],
}
\`\`\`

## Tips & Tricks

### 1. Arbitrary Values

Sử dụng giá trị tùy ý khi cần:

\`\`\`jsx
<div className="w-[137px] h-[50px] bg-[#1da1f2]">
  Custom sizes!
</div>
\`\`\`

### 2. Group Hover & Focus

\`\`\`jsx
<div className="group">
  <img className="group-hover:scale-110 transition" />
  <h3 className="group-hover:text-blue-500">Title</h3>
</div>
\`\`\`

### 3. Responsive Design

\`\`\`jsx
<div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
  Responsive!
</div>
\`\`\`

### 4. Dark Mode

\`\`\`jsx
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  Dark mode ready!
</div>
\`\`\`

### 5. Custom Components

Tạo component classes trong CSS:

\`\`\`css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600;
  }
}
\`\`\`

### 6. Container Query

\`\`\`jsx
<div className="@container">
  <div className="@lg:text-xl @2xl:text-2xl">
    Responsive to container!
  </div>
</div>
\`\`\`

## Best Practices

### 1. Sử Dụng @apply Có Chọn Lọc

❌ **Tránh:**
\`\`\`css
.card {
  @apply p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all;
}
\`\`\`

✅ **Nên:**
\`\`\`jsx
<div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
\`\`\`

### 2. Organize Classes

Sử dụng clsx hoặc classnames:

\`\`\`javascript
import clsx from 'clsx'

function Button({ variant, size }) {
  return (
    <button className={clsx(
      'px-4 py-2 rounded font-medium',
      variant === 'primary' && 'bg-blue-500 text-white',
      variant === 'secondary' && 'bg-gray-200 text-gray-900',
      size === 'sm' && 'text-sm',
      size === 'lg' && 'text-lg'
    )}>
      Click me
    </button>
  )
}
\`\`\`

### 3. Purge Unused CSS

Đảm bảo content paths đúng trong config để PurgeCSS hoạt động.

## Plugins Hữu Ích

### 1. Typography
\`\`\`bash
npm install @tailwindcss/typography
\`\`\`

\`\`\`jsx
<article className="prose lg:prose-xl">
  {/* Beautiful typography */}
</article>
\`\`\`

### 2. Forms
\`\`\`bash
npm install @tailwindcss/forms
\`\`\`

### 3. Aspect Ratio
\`\`\`bash
npm install @tailwindcss/aspect-ratio
\`\`\`

## Performance Tips

1. **JIT Mode**: Enabled by default in v3
2. **PurgeCSS**: Automatically removes unused styles
3. **CDN**: Chỉ dùng cho development
4. **Production Build**: Always build for production

## Kết Luận

Tailwind CSS là công cụ mạnh mẽ khi biết cách sử dụng đúng. Practice makes perfect!

**Resources:**
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind UI](https://tailwindui.com)
- [Headless UI](https://headlessui.com)
    `,
  },
  'nodejs-best-practices-2024': {
    title: 'Node.js Best Practices 2024',
    date: '2024-01-12',
    readTime: '9 phút đọc',
    tags: ['Node.js', 'Backend', 'Best Practices'],
    content: `
# Node.js Best Practices 2024

Node.js là nền tảng backend phổ biến nhất. Hãy cùng tìm hiểu các best practices để viết Node.js code chất lượng cao!

## 1. Project Structure

### Folder Structure Chuẩn

\`\`\`
project/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── app.js
├── tests/
├── .env.example
└── server.js
\`\`\`

### Tách Concerns

\`\`\`javascript
// ❌ Bad: Everything in one file
app.post('/users', async (req, res) => {
  // validation, business logic, database...
})

// ✅ Good: Separated concerns
// routes/users.js
router.post('/', validateUser, createUser)

// controllers/users.js
export const createUser = async (req, res) => {
  await userService.create(req.body)
}

// services/users.js
export const create = async (data) => {
  return await User.create(data)
}
\`\`\`

## 2. Environment Variables

### Sử Dụng dotenv

\`\`\`javascript
import 'dotenv/config'

const config = {
  port: process.env.PORT || 3000,
  dbUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET
}
\`\`\`

### Validate Environment

\`\`\`javascript
const requiredEnvVars = ['DATABASE_URL', 'JWT_SECRET']

requiredEnvVars.forEach(envVar => {
  if (!process.env[envVar]) {
    throw new Error(\`Missing \${envVar} environment variable\`)
  }
})
\`\`\`

## 3. Error Handling

### Global Error Handler

\`\`\`javascript
// middleware/errorHandler.js
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack)

  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message })
  }

  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  res.status(500).json({ error: 'Internal Server Error' })
}

// app.js
app.use(errorHandler)
\`\`\`

### Try-Catch với Async/Await

\`\`\`javascript
// utils/catchAsync.js
export const catchAsync = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }
}

// Usage
export const getUser = catchAsync(async (req, res) => {
  const user = await User.findById(req.params.id)
  res.json(user)
})
\`\`\`

## 4. Security

### Helmet.js

\`\`\`javascript
import helmet from 'helmet'

app.use(helmet())
\`\`\`

### Rate Limiting

\`\`\`javascript
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
})

app.use('/api/', limiter)
\`\`\`

### Input Validation

\`\`\`javascript
import Joi from 'joi'

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required()
})

export const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body)
  if (error) {
    return res.status(400).json({ error: error.details[0].message })
  }
  next()
}
\`\`\`

## 5. Database

### Connection Pooling

\`\`\`javascript
import mongoose from 'mongoose'

mongoose.connect(process.env.DATABASE_URL, {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
})
\`\`\`

### Indexes

\`\`\`javascript
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    index: true // Add index for faster queries
  }
})
\`\`\`

## 6. Performance

### Clustering

\`\`\`javascript
import cluster from 'cluster'
import os from 'os'

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }
} else {
  startServer()
}
\`\`\`

### Caching với Redis

\`\`\`javascript
import Redis from 'ioredis'

const redis = new Redis()

export const getUser = async (id) => {
  // Try cache first
  const cached = await redis.get(\`user:\${id}\`)
  if (cached) return JSON.parse(cached)

  // Fetch from DB
  const user = await User.findById(id)
  
  // Cache for 1 hour
  await redis.setex(\`user:\${id}\`, 3600, JSON.stringify(user))
  
  return user
}
\`\`\`

## 7. Logging

### Winston Logger

\`\`\`javascript
import winston from 'winston'

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }))
}
\`\`\`

## 8. Testing

### Jest + Supertest

\`\`\`javascript
import request from 'supertest'
import app from '../src/app'

describe('POST /api/users', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        email: 'test@example.com',
        password: 'password123'
      })
    
    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty('id')
  })
})
\`\`\`

## Kết Luận

Follow các best practices này để build Node.js applications scalable và maintainable!

**Resources:**
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
    `,
  },
  'deploying-react-apps': {
    title: 'Deploy React Apps: Vercel vs Netlify',
    date: '2024-01-05',
    readTime: '6 phút đọc',
    tags: ['Deployment', 'DevOps', 'React'],
    content: `
# Deploy React Apps: Vercel vs Netlify

So sánh chi tiết hai platform deploy phổ biến nhất cho React applications.

## Tổng Quan

### Vercel
- Được tạo bởi team Next.js
- Tối ưu cho Next.js và React
- Edge Network toàn cầu
- Serverless Functions

### Netlify  
- Platform all-in-one
- Powerful build system
- Edge Functions
- Forms & Identity

## So Sánh Chi Tiết

### 1. Performance

**Vercel:**
- ⚡ Edge Network: 100+ locations
- 🚀 Automatic optimization
- 📦 Smart CDN caching

**Netlify:**
- 🌐 Global CDN
- ⚡ Instant cache invalidation
- 📊 Prerendering

### 2. Build & Deploy

**Vercel:**
\`\`\`bash
# Vercel auto-detects framework
vercel --prod
\`\`\`

**Netlify:**
\`\`\`bash
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"
\`\`\`

### 3. Pricing

**Vercel Free Tier:**
- ✅ Unlimited projects
- ✅ 100GB bandwidth/month
- ✅ Serverless Functions

**Netlify Free Tier:**
- ✅ Unlimited projects
- ✅ 100GB bandwidth/month
- ✅ 300 build minutes/month

## Deploy Vite React App

### Vercel

**1. Via CLI:**
\`\`\`bash
npm i -g vercel
vercel
\`\`\`

**2. Via GitHub:**
- Connect repo
- Auto-deploy on push
- Preview deployments

**vercel.json:**
\`\`\`json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
\`\`\`

### Netlify

**1. Drag & Drop:**
- Build: \`npm run build\`
- Drop \`dist\` folder to Netlify

**2. Via Git:**
- Connect GitHub
- Auto-deploy

**netlify.toml:**
\`\`\`toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
\`\`\`

## Environment Variables

### Vercel
\`\`\`bash
vercel env add VITE_API_URL
\`\`\`

### Netlify
- Site settings → Environment variables
- Or use Netlify CLI

## Serverless Functions

### Vercel API Routes

\`\`\`javascript
// api/hello.js
export default function handler(req, res) {
  res.json({ message: 'Hello from Vercel!' })
}
\`\`\`

### Netlify Functions

\`\`\`javascript
// netlify/functions/hello.js
exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from Netlify!' })
  }
}
\`\`\`

## Khi Nào Chọn Cái Gì?

### Chọn Vercel Khi:
- ✅ Dùng Next.js
- ✅ Cần performance tối đa
- ✅ Nhiều serverless functions
- ✅ Enterprise features

### Chọn Netlify Khi:
- ✅ Cần forms & identity
- ✅ Static site generator
- ✅ Split testing
- ✅ Large builds

## Tips

### 1. Custom Domain
Cả hai đều support custom domain miễn phí với SSL.

### 2. Preview Deployments
Cả hai tự động tạo preview cho pull requests.

### 3. Analytics
- Vercel: Analytics addon
- Netlify: Built-in analytics

### 4. Build Time
Optimize build time:
\`\`\`javascript
// vite.config.js
export default {
  build: {
    minify: 'terser',
    sourcemap: false
  }
}
\`\`\`

## Kết Luận

**Cả hai đều tuyệt vời!** Chọn dựa trên:
- Framework bạn dùng
- Features cần thiết  
- Team size
- Budget

**Cá nhân tôi:**
- Next.js → Vercel
- Vite/React → Netlify
- Static → Cả hai ok!

**Resources:**
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
    `,
  },
  'docker-cho-developer': {
    title: 'Docker Cho Beginner: Từ Zero Đến Hero',
    date: '2024-01-08',
    readTime: '12 phút đọc',
    tags: ['Docker', 'DevOps', 'Tutorial'],
    content: `
# Docker Cho Beginner: Từ Zero Đến Hero

Docker đã thay đổi cách chúng ta develop và deploy applications. Hãy cùng học Docker từ cơ bản!

## Docker Là Gì?

Docker là platform để develop, ship và run applications trong containers. Container là lightweight, standalone packages có tất cả những gì cần để chạy app.

### Tại Sao Dùng Docker?

- ✅ **Consistency**: "Works on my machine" → "Works everywhere"
- ✅ **Isolation**: Mỗi app có environment riêng
- ✅ **Portability**: Chạy được ở mọi nơi
- ✅ **Efficiency**: Lightweight hơn VMs

## Cài Đặt Docker

### Windows/Mac
- Download Docker Desktop từ [docker.com](https://docker.com)
- Install và restart

### Linux
\`\`\`bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
\`\`\`

Verify:
\`\`\`bash
docker --version
docker run hello-world
\`\`\`

## Docker Basics

### 1. Images vs Containers

**Image**: Blueprint (class trong OOP)
**Container**: Running instance (object)

### 2. Run Your First Container

\`\`\`bash
docker run -p 80:80 nginx
\`\`\`

Visit: http://localhost

### 3. Common Commands

\`\`\`bash
# List containers
docker ps
docker ps -a

# Stop container
docker stop <container-id>

# Remove container
docker rm <container-id>

# List images
docker images

# Remove image
docker rmi <image-id>
\`\`\`

## Dockerfile

### Tạo Dockerfile Cho Node.js App

\`\`\`dockerfile
# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy app files
COPY . .

# Expose port
EXPOSE 3000

# Start command
CMD ["node", "server.js"]
\`\`\`

### Build và Run

\`\`\`bash
# Build image
docker build -t my-app .

# Run container
docker run -p 3000:3000 my-app
\`\`\`

## Docker Compose

### docker-compose.yml

\`\`\`yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=mongodb://db:27017/myapp
    depends_on:
      - db
  
  db:
    image: mongo:6
    volumes:
      - mongodb_data:/data/db
    ports:
      - "27017:27017"

volumes:
  mongodb_data:
\`\`\`

### Run với Docker Compose

\`\`\`bash
# Start all services
docker-compose up

# Start in background
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f
\`\`\`

## Best Practices

### 1. Multi-Stage Builds

\`\`\`dockerfile
# Build stage
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm ci --only=production
CMD ["node", "dist/server.js"]
\`\`\`

### 2. .dockerignore

\`\`\`
node_modules
npm-debug.log
.git
.env
dist
coverage
\`\`\`

### 3. Small Images

- Dùng Alpine variants
- Multi-stage builds
- Minimize layers

### 4. Security

\`\`\`dockerfile
# Don't run as root
FROM node:18-alpine
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001
USER nodejs
\`\`\`

## Development Workflow

### Hot Reload với Volumes

\`\`\`yaml
services:
  app:
    build: .
    volumes:
      - ./src:/app/src
      - /app/node_modules
    environment:
      - NODE_ENV=development
\`\`\`

### Debug trong Container

\`\`\`bash
# Execute bash in running container
docker exec -it <container-id> sh

# View logs
docker logs -f <container-id>
\`\`\`

## React App với Docker

### Dockerfile

\`\`\`dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
\`\`\`

### nginx.conf

\`\`\`nginx
server {
    listen 80;
    location / {
        root /usr/share/nginx/html;
        try_files $uri /index.html;
    }
}
\`\`\`

## Docker Networking

### Types of Networks

1. **Bridge**: Default network
2. **Host**: Use host network
3. **None**: No network

\`\`\`bash
# Create network
docker network create my-network

# Run container in network
docker run --network my-network my-app
\`\`\`

## Volumes & Data Persistence

### Named Volumes

\`\`\`bash
# Create volume
docker volume create my-data

# Use volume
docker run -v my-data:/app/data my-app
\`\`\`

### Bind Mounts

\`\`\`bash
docker run -v /host/path:/container/path my-app
\`\`\`

## Production Deployment

### 1. Docker Swarm

\`\`\`bash
docker swarm init
docker stack deploy -c docker-compose.yml myapp
\`\`\`

### 2. Kubernetes

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        ports:
        - containerPort: 3000
\`\`\`

## Troubleshooting

### Container Exits Immediately

\`\`\`bash
# Check logs
docker logs <container-id>

# Run in interactive mode
docker run -it my-app sh
\`\`\`

### Build Fails

- Check Dockerfile syntax
- Verify base image exists
- Check file paths

### Slow Build

- Use .dockerignore
- Leverage build cache
- Multi-stage builds

## Kết Luận

Docker là skill thiết yếu cho developers hiện đại. Practice thường xuyên để thành thạo!

**Next Steps:**
- Learn Docker Compose
- Explore Kubernetes
- CI/CD với Docker

**Resources:**
- [Docker Docs](https://docs.docker.com)
- [Docker Hub](https://hub.docker.com)
    `,
  },
  'state-management-in-react': {
    title: 'State Management trong React: Chọn Gì Cho Dự Án?',
    date: '2023-12-28',
    readTime: '8 phút đọc',
    tags: ['React', 'State Management', 'Architecture'],
    content: `
# State Management trong React: Chọn Gì Cho Dự Án?

State management là một trong những challenges lớn nhất trong React apps. Hãy cùng so sánh các solutions!

## Tại Sao Cần State Management?

Khi app phức tạp:
- Props drilling hell
- Shared state giữa nhiều components
- Global state (user, theme, etc.)
- Performance optimization

## Các Solutions Phổ Biến

### 1. React Context API

**Built-in solution từ React**

\`\`\`jsx
import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

// Usage
function App() {
  return (
    <ThemeProvider>
      <MyComponent />
    </ThemeProvider>
  )
}

function MyComponent() {
  const { theme, setTheme } = useTheme()
  return <button onClick={() => setTheme('dark')}>{theme}</button>
}
\`\`\`

**Pros:**
- ✅ Built-in, no extra package
- ✅ Simple API
- ✅ Good for theming, auth

**Cons:**
- ❌ Performance issues với large apps
- ❌ Re-renders tất cả consumers
- ❌ Không có DevTools

**Khi nào dùng:**
- Small to medium apps
- Theme, auth, locale
- Không update thường xuyên

### 2. Redux Toolkit

**Industry standard cho large apps**

\`\`\`javascript
// store/counterSlice.js
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    }
  }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer

// store/index.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

// Usage
import { useSelector, useDispatch } from 'react-redux'

function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  
  return (
    <>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  )
}
\`\`\`

**Pros:**
- ✅ Scalable
- ✅ Excellent DevTools
- ✅ Middleware support
- ✅ Time-travel debugging

**Cons:**
- ❌ Boilerplate code
- ❌ Learning curve
- ❌ Overkill cho small apps

**Khi nào dùng:**
- Large, complex apps
- Team collaboration
- Need debugging tools
- Complex async logic

### 3. Zustand

**Minimal & modern**

\`\`\`javascript
import create from 'zustand'

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 }))
}))

// Usage
function Counter() {
  const { count, increment, decrement } = useStore()
  
  return (
    <>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}
\`\`\`

**Pros:**
- ✅ Simple API
- ✅ No boilerplate
- ✅ Small bundle size
- ✅ Good performance

**Cons:**
- ❌ Smaller ecosystem
- ❌ Less mature

**Khi nào dùng:**
- Modern apps
- Want simplicity
- Good performance

### 4. Recoil

**Facebook's solution**

\`\`\`javascript
import { atom, useRecoilState } from 'recoil'

const countState = atom({
  key: 'count',
  default: 0
})

function Counter() {
  const [count, setCount] = useRecoilState(countState)
  
  return (
    <>
      <span>{count}</span>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </>
  )
}
\`\`\`

**Pros:**
- ✅ React-like API
- ✅ Atomic state
- ✅ Built-in async

**Cons:**
- ❌ Experimental
- ❌ Small community

### 5. Jotai

**Primitive & flexible**

\`\`\`javascript
import { atom, useAtom } from 'jotai'

const countAtom = atom(0)

function Counter() {
  const [count, setCount] = useAtom(countAtom)
  
  return (
    <>
      <span>{count}</span>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </>
  )
}
\`\`\`

**Pros:**
- ✅ Minimal API
- ✅ No Provider hell
- ✅ TypeScript support

## So Sánh Nhanh

| Solution | Bundle Size | Learning Curve | DevTools | Performance |
|----------|-------------|----------------|----------|-------------|
| Context API | 0kb | Easy | ❌ | Medium |
| Redux Toolkit | ~10kb | Medium | ✅ | Good |
| Zustand | ~1kb | Easy | ⚠️ | Excellent |
| Recoil | ~15kb | Medium | ✅ | Good |
| Jotai | ~3kb | Easy | ⚠️ | Good |

## Decision Tree

\`\`\`
App nhỏ, simple state?
  → Context API

App lớn, complex logic?
  → Redux Toolkit

Cần performance tốt?
  → Zustand

Team quen React patterns?
  → Recoil / Jotai

Need middleware?
  → Redux Toolkit
\`\`\`

## Tips Performance

### 1. Tách Small Contexts

\`\`\`jsx
// ❌ Bad: One big context
<AppContext.Provider value={{user, theme, settings}}>

// ✅ Good: Multiple contexts
<UserContext.Provider>
  <ThemeContext.Provider>
    <SettingsContext.Provider>
\`\`\`

### 2. Memoization

\`\`\`jsx
const value = useMemo(() => ({ count, increment }), [count])
\`\`\`

### 3. Selector Pattern

\`\`\`javascript
// Redux
const count = useSelector(state => state.counter.value)

// Zustand
const count = useStore(state => state.count)
\`\`\`

## Kết Luận

**Recommendations:**
- **Small apps**: Context API
- **Medium apps**: Zustand
- **Large apps**: Redux Toolkit
- **Experimental**: Recoil/Jotai

Không có "best" solution - chỉ có suitable solution cho project của bạn!

**Resources:**
- [Redux Toolkit](https://redux-toolkit.js.org)
- [Zustand](https://github.com/pmndrs/zustand)
- [Recoil](https://recoiljs.org)
    `,
  },
  'typescript-cho-javascript-developer': {
    title: 'TypeScript Cho JavaScript Developer',
    date: '2023-12-25',
    readTime: '7 phút đọc',
    tags: ['TypeScript', 'JavaScript', 'Tutorial'],
    content: `
# TypeScript Cho JavaScript Developer

TypeScript đang ngày càng phổ biến. Hãy cùng tìm hiểu tại sao và cách chuyển đổi từ JavaScript!

## Tại Sao Nên Học TypeScript?

### Lợi Ích

1. **Type Safety**: Catch errors at compile time
2. **Better IDE Support**: Autocomplete, refactoring
3. **Self-Documenting Code**: Types là documentation
4. **Easier Refactoring**: Change with confidence
5. **Better Team Collaboration**: Clear interfaces

## Setup TypeScript

### Với Vite

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
\`\`\`

### Manual Setup

\`\`\`bash
npm install -D typescript @types/react @types/react-dom
npx tsc --init
\`\`\`

## Basic Types

### Primitive Types

\`\`\`typescript
// String
let name: string = "John"

// Number
let age: number = 25

// Boolean
let isActive: boolean = true

// Array
let numbers: number[] = [1, 2, 3]
let names: Array<string> = ["John", "Jane"]

// Tuple
let user: [string, number] = ["John", 25]

// Enum
enum Role {
  Admin,
  User,
  Guest
}
let userRole: Role = Role.Admin

// Any (avoid!)
let something: any = "hello"

// Unknown (safer than any)
let value: unknown = "hello"

// Void
function log(): void {
  console.log("Hello")
}

// Never
function error(): never {
  throw new Error("Error!")
}
\`\`\`

### Object Types

\`\`\`typescript
// Interface
interface User {
  name: string
  age: number
  email?: string // optional
  readonly id: number // readonly
}

const user: User = {
  id: 1,
  name: "John",
  age: 25
}

// Type Alias
type Product = {
  name: string
  price: number
}

// Union Types
type Status = "pending" | "success" | "error"
let status: Status = "pending"

// Intersection Types
type Admin = User & {
  permissions: string[]
}
\`\`\`

## Functions

\`\`\`typescript
// Function declaration
function add(a: number, b: number): number {
  return a + b
}

// Arrow function
const multiply = (a: number, b: number): number => a * b

// Optional parameters
function greet(name: string, greeting?: string): string {
  return \`\${greeting || "Hello"}, \${name}!\`
}

// Default parameters
function createUser(name: string, role: string = "user") {
  return { name, role }
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, n) => acc + n, 0)
}

// Function type
type MathOperation = (a: number, b: number) => number
const divide: MathOperation = (a, b) => a / b
\`\`\`

## React với TypeScript

### Component Props

\`\`\`typescript
// Interface for props
interface ButtonProps {
  text: string
  onClick: () => void
  disabled?: boolean
  variant?: "primary" | "secondary"
}

function Button({ text, onClick, disabled, variant = "primary" }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  )
}

// Usage
<Button text="Click me" onClick={() => console.log("Clicked")} />
\`\`\`

### useState

\`\`\`typescript
// Inferred type
const [count, setCount] = useState(0) // number

// Explicit type
const [user, setUser] = useState<User | null>(null)

// Generic type
interface FormData {
  email: string
  password: string
}

const [formData, setFormData] = useState<FormData>({
  email: "",
  password: ""
})
\`\`\`

### useRef

\`\`\`typescript
// DOM element ref
const inputRef = useRef<HTMLInputElement>(null)

// Mutable ref
const countRef = useRef<number>(0)

// Usage
<input ref={inputRef} />
\`\`\`

### Custom Hooks

\`\`\`typescript
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : initialValue
  })

  const setStoredValue = (newValue: T) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return [value, setStoredValue] as const
}

// Usage
const [user, setUser] = useLocalStorage<User>("user", { name: "", age: 0 })
\`\`\`

## Generics

\`\`\`typescript
// Generic function
function identity<T>(value: T): T {
  return value
}

identity<string>("hello") // string
identity<number>(123)     // number

// Generic interface
interface Response<T> {
  data: T
  status: number
  message: string
}

type UserResponse = Response<User>
type ProductsResponse = Response<Product[]>

// Generic constraints
interface HasId {
  id: number
}

function findById<T extends HasId>(items: T[], id: number): T | undefined {
  return items.find(item => item.id === id)
}
\`\`\`

## Utility Types

\`\`\`typescript
interface User {
  id: number
  name: string
  email: string
  age: number
}

// Partial - makes all properties optional
type PartialUser = Partial<User>

// Required - makes all properties required
type RequiredUser = Required<PartialUser>

// Pick - picks specific properties
type UserPreview = Pick<User, "id" | "name">

// Omit - omits specific properties
type UserWithoutEmail = Omit<User, "email">

// Record
type UserRoles = Record<string, string>

// Readonly
type ReadonlyUser = Readonly<User>

// ReturnType
function createUser() {
  return { id: 1, name: "John" }
}
type User = ReturnType<typeof createUser>
\`\`\`

## Best Practices

### 1. Prefer Interface over Type

\`\`\`typescript
// ✅ Good
interface User {
  name: string
}

// ✅ Also good (for unions, primitives)
type Status = "active" | "inactive"
\`\`\`

### 2. Use Const Assertions

\`\`\`typescript
const colors = ["red", "blue", "green"] as const
type Color = typeof colors[number] // "red" | "blue" | "green"
\`\`\`

### 3. Avoid Any

\`\`\`typescript
// ❌ Bad
function process(data: any) { }

// ✅ Good
function process<T>(data: T) { }
// Or
function process(data: unknown) { }
\`\`\`

### 4. Use Type Guards

\`\`\`typescript
function isUser(obj: any): obj is User {
  return obj && typeof obj.name === "string" && typeof obj.age === "number"
}

if (isUser(data)) {
  console.log(data.name) // TypeScript knows it's User
}
\`\`\`

## Migrating từ JavaScript

### Step-by-Step

1. **Rename .js to .ts/.tsx**
2. **Add tsconfig.json**
3. **Install types**: \`@types/react\`, \`@types/node\`
4. **Fix type errors gradually**
5. **Enable strict mode**

### Tips

- Bắt đầu với \`strict: false\`
- Dùng \`any\` tạm thời, fix sau
- Migrate từng module một
- Add types cho external libraries

## Common Errors

### 1. Property does not exist

\`\`\`typescript
// ❌ Error
const user = {}
user.name = "John" // Error!

// ✅ Fix
const user: User = {
  name: "John",
  age: 25
}
\`\`\`

### 2. Type 'null' is not assignable

\`\`\`typescript
// ❌ Error
const user: User = null

// ✅ Fix
const user: User | null = null
\`\`\`

### 3. Cannot find name

\`\`\`typescript
// Install types
npm install -D @types/node
npm install -D @types/react
\`\`\`

## Kết Luận

TypeScript ban đầu có vẻ phức tạp, nhưng:
- Giúp code reliable hơn
- Tăng productivity
- Dễ maintain và scale

**Start small, improve gradually!**

**Resources:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app)
    `,
  },
  'mongodb-tips-and-tricks': {
    title: 'MongoDB Tips & Tricks: Tối Ưu Query và Schema',
    date: '2023-12-20',
    readTime: '10 phút đọc',
    tags: ['MongoDB', 'Database', 'Performance'],
    content: `
# MongoDB Tips & Tricks: Tối Ưu Query và Schema

MongoDB là NoSQL database phổ biến nhất. Hãy học cách optimize để có performance tốt nhất!

## Schema Design Patterns

### 1. Embedding vs Referencing

**Embedding (Denormalization):**

\`\`\`javascript
// User với addresses embedded
{
  _id: ObjectId("..."),
  name: "John Doe",
  addresses: [
    { street: "123 Main St", city: "NYC" },
    { street: "456 Park Ave", city: "LA" }
  ]
}
\`\`\`

**Pros:**
- ✅ One query to get all data
- ✅ Better performance
- ✅ Atomic updates

**Use when:**
- Data không thường xuyên thay đổi
- Data size nhỏ
- Read > Write

**Referencing (Normalization):**

\`\`\`javascript
// User
{ _id: ObjectId("..."), name: "John Doe" }

// Addresses
{ _id: ObjectId("..."), userId: ObjectId("..."), street: "..." }
\`\`\`

**Use when:**
- Data lớn (> 16MB)
- Data thường update
- Need to query separately

### 2. One-to-Many Relationships

**Child Referencing:**

\`\`\`javascript
// Product
{
  _id: ObjectId("..."),
  name: "Laptop",
  reviews: [
    ObjectId("review1"),
    ObjectId("review2")
  ]
}
\`\`\`

**Parent Referencing:**

\`\`\`javascript
// Review
{
  _id: ObjectId("review1"),
  productId: ObjectId("..."),
  text: "Great product!"
}
\`\`\`

### 3. Two-Way Referencing

\`\`\`javascript
// User
{
  _id: ObjectId("user1"),
  name: "John",
  orderIds: [ObjectId("order1"), ObjectId("order2")]
}

// Order
{
  _id: ObjectId("order1"),
  userId: ObjectId("user1"),
  total: 100
}
\`\`\`

## Indexing

### Types of Indexes

**1. Single Field Index:**

\`\`\`javascript
db.users.createIndex({ email: 1 })
\`\`\`

**2. Compound Index:**

\`\`\`javascript
db.products.createIndex({ category: 1, price: -1 })
\`\`\`

**3. Multikey Index (Arrays):**

\`\`\`javascript
db.posts.createIndex({ tags: 1 })
\`\`\`

**4. Text Index:**

\`\`\`javascript
db.articles.createIndex({ title: "text", content: "text" })
\`\`\`

**5. Geospatial Index:**

\`\`\`javascript
db.places.createIndex({ location: "2dsphere" })
\`\`\`

### Index Best Practices

\`\`\`javascript
// ❌ Bad: Index everything
db.users.createIndex({ name: 1 })
db.users.createIndex({ email: 1 })
db.users.createIndex({ age: 1 })
db.users.createIndex({ city: 1 })

// ✅ Good: Index based on queries
db.users.createIndex({ email: 1 }) // For login
db.users.createIndex({ age: 1, city: 1 }) // For search
\`\`\`

### Analyze Query Performance

\`\`\`javascript
// Explain query
db.users.find({ email: "john@example.com" }).explain("executionStats")

// Check if index is used
db.users.find({ email: "john@example.com" }).explain().queryPlanner.winningPlan
\`\`\`

## Query Optimization

### 1. Projection

\`\`\`javascript
// ❌ Bad: Fetch all fields
db.users.find({ age: { $gt: 18 } })

// ✅ Good: Project only needed fields
db.users.find(
  { age: { $gt: 18 } },
  { name: 1, email: 1, _id: 0 }
)
\`\`\`

### 2. Limit Results

\`\`\`javascript
// Always use limit for large collections
db.products.find({ category: "electronics" }).limit(10)
\`\`\`

### 3. Use Covered Queries

\`\`\`javascript
// Index
db.users.createIndex({ email: 1, name: 1 })

// Query - covered by index (very fast!)
db.users.find(
  { email: "john@example.com" },
  { name: 1, email: 1, _id: 0 }
)
\`\`\`

### 4. Avoid $where and JavaScript

\`\`\`javascript
// ❌ Bad: $where operator
db.users.find({
  $where: function() {
    return this.age > 18
  }
})

// ✅ Good: Use query operators
db.users.find({ age: { $gt: 18 } })
\`\`\`

## Aggregation Pipeline

### Basic Pipeline

\`\`\`javascript
db.orders.aggregate([
  // Stage 1: Match
  { $match: { status: "completed" } },
  
  // Stage 2: Group
  {
    $group: {
      _id: "$userId",
      totalSpent: { $sum: "$total" },
      orderCount: { $sum: 1 }
    }
  },
  
  // Stage 3: Sort
  { $sort: { totalSpent: -1 } },
  
  // Stage 4: Limit
  { $limit: 10 }
])
\`\`\`

### Advanced Operators

\`\`\`javascript
// $lookup (JOIN)
db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "user"
    }
  },
  { $unwind: "$user" }
])

// $facet (Multiple pipelines)
db.products.aggregate([
  {
    $facet: {
      "byCategory": [
        { $group: { _id: "$category", count: { $sum: 1 } } }
      ],
      "priceRanges": [
        {
          $bucket: {
            groupBy: "$price",
            boundaries: [0, 100, 500, 1000],
            default: "Other"
          }
        }
      ]
    }
  }
])
\`\`\`

## Performance Tips

### 1. Batch Operations

\`\`\`javascript
// ❌ Bad: Multiple single inserts
for (let doc of documents) {
  await db.collection.insertOne(doc)
}

// ✅ Good: Bulk insert
await db.collection.insertMany(documents)
\`\`\`

### 2. Update Operators

\`\`\`javascript
// ✅ Use $inc instead of reading & updating
db.products.updateOne(
  { _id: productId },
  { $inc: { views: 1 } }
)

// ✅ Use $push for arrays
db.users.updateOne(
  { _id: userId },
  { $push: { notifications: newNotification } }
)

// ✅ Use $set for partial updates
db.users.updateOne(
  { _id: userId },
  { $set: { "profile.bio": newBio } }
)
\`\`\`

### 3. Connection Pooling

\`\`\`javascript
const { MongoClient } = require('mongodb')

const client = new MongoClient(uri, {
  maxPoolSize: 10,
  minPoolSize: 5,
  maxIdleTimeMS: 30000
})
\`\`\`

### 4. Capping Collections

\`\`\`javascript
// Create capped collection (for logs, etc.)
db.createCollection("logs", {
  capped: true,
  size: 10000000, // 10MB
  max: 5000 // Max documents
})
\`\`\`

## Mongoose Tips

### Schema Optimization

\`\`\`javascript
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    min: 0,
    max: 120
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: true
  }
}, {
  timestamps: true, // Auto createdAt, updatedAt
  toJSON: { virtuals: true }, // Include virtuals in JSON
  toObject: { virtuals: true }
})

// Indexes
UserSchema.index({ email: 1 })
UserSchema.index({ age: 1, city: 1 })
\`\`\`

### Virtuals & Methods

\`\`\`javascript
// Virtual
UserSchema.virtual('fullName').get(function() {
  return \`\${this.firstName} \${this.lastName}\`
})

// Instance method
UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password)
}

// Static method
UserSchema.statics.findByEmail = function(email) {
  return this.findOne({ email })
}
\`\`\`

### Lean Queries

\`\`\`javascript
// ❌ Regular query (returns Mongoose document)
const users = await User.find({ age: { $gt: 18 } })

// ✅ Lean query (returns plain JavaScript object)
const users = await User.find({ age: { $gt: 18 } }).lean()
\`\`\`

## Monitoring & Debugging

### Database Stats

\`\`\`javascript
db.stats()
db.collection.stats()
\`\`\`

### Current Operations

\`\`\`javascript
db.currentOp()
\`\`\`

### Profiler

\`\`\`javascript
// Enable profiler
db.setProfilingLevel(2) // Log all operations

// View slow queries
db.system.profile.find().sort({ ts: -1 }).limit(10)
\`\`\`

## Kết Luận

MongoDB performance phụ thuộc vào:
- Schema design hợp lý
- Indexing đúng cách
- Query optimization
- Proper hardware

**Key takeaways:**
- Index based on queries
- Avoid unnecessary data
- Use aggregation wisely
- Monitor performance

**Resources:**
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [MongoDB University](https://university.mongodb.com/)
    `,
  },
  'git-workflow-cho-team': {
    title: 'Git Workflow Cho Team: Từ Lý Thuyết Đến Thực Hành',
    date: '2023-12-15',
    readTime: '8 phút đọc',
    tags: ['Git', 'Team Work', 'DevOps'],
    content: `
# Git Workflow Cho Team: Từ Lý Thuyết Đến Thực Hành

Git workflows giúp team collaborate hiệu quả. Hãy tìm hiểu các workflows phổ biến!

## Git Flow

### Overview

Workflow phù hợp cho projects có release cycles rõ ràng.

### Branches

1. **main/master**: Production code
2. **develop**: Integration branch
3. **feature/***: New features
4. **release/***: Prepare for release
5. **hotfix/***: Emergency fixes

### Workflow

\`\`\`bash
# 1. Create feature branch from develop
git checkout develop
git checkout -b feature/user-auth

# 2. Work on feature
git add .
git commit -m "feat: add user authentication"

# 3. Push feature branch
git push origin feature/user-auth

# 4. Create Pull Request to develop

# 5. After merge, create release branch
git checkout develop
git checkout -b release/1.0.0

# 6. Bug fixes on release branch
git commit -m "fix: validation error"

# 7. Merge to main and develop
git checkout main
git merge release/1.0.0
git tag -a v1.0.0 -m "Release version 1.0.0"

git checkout develop
git merge release/1.0.0

# 8. Hotfix if needed
git checkout main
git checkout -b hotfix/critical-bug
git commit -m "fix: critical security issue"
git checkout main
git merge hotfix/critical-bug
git checkout develop
git merge hotfix/critical-bug
\`\`\`

### Pros & Cons

**Pros:**
- ✅ Rõ ràng, có cấu trúc
- ✅ Phù hợp large teams
- ✅ Support multiple versions

**Cons:**
- ❌ Phức tạp
- ❌ Nhiều branches
- ❌ Overkill cho small projects

## GitHub Flow

### Overview

Simple workflow cho continuous deployment.

### Workflow

\`\`\`bash
# 1. Create feature branch from main
git checkout main
git pull
git checkout -b add-payment-feature

# 2. Make commits
git add .
git commit -m "feat: add payment integration"
git push origin add-payment-feature

# 3. Open Pull Request

# 4. Code review & discussion

# 5. Deploy to staging for testing

# 6. Merge to main (auto-deploy to production)
\`\`\`

### Rules

1. **main branch** always deployable
2. **Branch names** descriptive
3. **Pull Requests** for everything
4. **Deploy** immediately after merge

### Pros & Cons

**Pros:**
- ✅ Simple
- ✅ Fast iterations
- ✅ Good for CI/CD

**Cons:**
- ❌ Không support multiple versions
- ❌ Khó rollback

## GitLab Flow

### Overview

Compromise giữa Git Flow và GitHub Flow.

### Environment Branches

\`\`\`
main (development)
  ↓
pre-production
  ↓
production
\`\`\`

### Workflow

\`\`\`bash
# 1. Feature branch từ main
git checkout main
git checkout -b feature/new-feature

# 2. Merge to main via MR
git push origin feature/new-feature
# Create Merge Request

# 3. Cherry-pick to pre-production
git checkout pre-production
git cherry-pick <commit-hash>

# 4. After testing, merge to production
git checkout production
git merge pre-production
\`\`\`

## Commit Messages

### Conventional Commits

\`\`\`
<type>(<scope>): <subject>

<body>

<footer>
\`\`\`

### Types

- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation
- **style**: Formatting
- **refactor**: Code refactoring
- **test**: Adding tests
- **chore**: Maintenance

### Examples

\`\`\`bash
feat(auth): add OAuth2 login

Implement OAuth2 authentication flow with Google and GitHub providers.

Closes #123

fix: resolve memory leak in useEffect

The cleanup function was not being called properly,
causing memory leaks when component unmounts.

docs(readme): update installation instructions

chore(deps): upgrade React to v18.2.0
\`\`\`

## Pull Request Best Practices

### 1. Small PRs

\`\`\`
❌ 2000 lines changed, 50 files
✅ 200 lines changed, 5 files
\`\`\`

### 2. Good Description

\`\`\`markdown
## What
Add user authentication feature

## Why
Users need to login to access protected routes

## How
- Implement JWT authentication
- Add login/register pages
- Protect routes with auth middleware

## Testing
- [x] Unit tests
- [x] Integration tests
- [x] Manual testing

## Screenshots
![Login page](screenshot.png)
\`\`\`

### 3. Self Review

Review your own PR trước khi request review.

### 4. Request Right Reviewers

Tag people familiar với code area.

## Code Review Tips

### For Reviewers

\`\`\`markdown
✅ Good: "Consider using async/await here for better readability"
❌ Bad: "This code is bad"

✅ Good: "What happens if user is null here?"
❌ Bad: "This will crash"

✅ Good: "Nice refactoring! One suggestion..."
❌ Bad: "Just change this"
\`\`\`

### For Authors

- Don't take feedback personally
- Explain your decisions
- Be open to suggestions
- Thank reviewers

## Merge Strategies

### 1. Merge Commit

\`\`\`bash
git merge feature-branch
\`\`\`

**Pros:** Preserve history
**Cons:** Cluttered history

### 2. Squash and Merge

\`\`\`bash
git merge --squash feature-branch
git commit
\`\`\`

**Pros:** Clean history
**Cons:** Lose individual commits

### 3. Rebase and Merge

\`\`\`bash
git rebase main
git checkout main
git merge feature-branch
\`\`\`

**Pros:** Linear history
**Cons:** Rewrite history (don't use on shared branches)

## Handling Conflicts

### Prevent Conflicts

\`\`\`bash
# Keep branch updated
git checkout feature-branch
git pull origin main
git rebase main
\`\`\`

### Resolve Conflicts

\`\`\`bash
# When conflict occurs
git status

# Edit conflicted files
# Look for:
<<<<<<< HEAD
current changes
=======
incoming changes
>>>>>>> branch-name

# After resolving
git add .
git rebase --continue
# or
git merge --continue
\`\`\`

## Git Hooks

### Pre-commit Hook

\`\`\`bash
#!/bin/sh
# .git/hooks/pre-commit

# Run linter
npm run lint

# Run tests
npm test

# If any fail, prevent commit
\`\`\`

### Commit-msg Hook

\`\`\`bash
#!/bin/sh
# .git/hooks/commit-msg

# Check commit message format
if ! grep -qE "^(feat|fix|docs|style|refactor|test|chore):" "$1"; then
    echo "Invalid commit message format"
    exit 1
fi
\`\`\`

### Using Husky

\`\`\`bash
npm install -D husky

# package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm run lint",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
\`\`\`

## Tips & Tricks

### 1. Git Aliases

\`\`\`bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
\`\`\`

### 2. Interactive Rebase

\`\`\`bash
git rebase -i HEAD~3

# Pick, squash, or edit commits
pick abc123 feat: add feature
squash def456 fix: typo
squash ghi789 fix: another typo
\`\`\`

### 3. Git Bisect

\`\`\`bash
# Find bug-introducing commit
git bisect start
git bisect bad # Current commit is bad
git bisect good abc123 # This commit was good

# Git will checkout commits for you to test
git bisect good/bad

# When found
git bisect reset
\`\`\`

## Kết Luận

**Choose workflow based on:**
- Team size
- Release cycle
- Project complexity
- CI/CD setup

**Key principles:**
- Keep main stable
- Small, frequent commits
- Good commit messages
- Code review everything

**Resources:**
- [Git Book](https://git-scm.com/book)
- [Conventional Commits](https://www.conventionalcommits.org)
    `,
  },
  'nextjs-vs-react': {
    title: 'Next.js vs Create React App: Nên Chọn Gì?',
    date: '2023-12-10',
    readTime: '6 phút đọc',
    tags: ['Next.js', 'React', 'Comparison'],
    content: `
# Next.js vs Create React App: Nên Chọn Gì?

Phân tích chi tiết để chọn đúng tool cho project của bạn!

## Create React App (CRA)

### Overview

Library để build single-page applications (SPA).

### Pros

✅ **Simple setup**: \`npx create-react-app my-app\`
✅ **Flexible**: Không opinionated
✅ **Client-side routing**: React Router
✅ **Community**: Huge ecosystem
✅ **Learning**: Good for beginners

### Cons

❌ **No SSR**: Client-side rendering only
❌ **SEO**: Poor without SSR
❌ **Performance**: Slower initial load
❌ **Configuration**: Eject needed for custom config
❌ **No built-in routing**

### Use Cases

- Internal admin panels
- Tools & dashboards
- Apps không cần SEO
- Learning React

## Next.js

### Overview

React framework với nhiều features built-in.

### Pros

✅ **SSR/SSG**: Server-side rendering & static generation
✅ **SEO-friendly**: Better for search engines
✅ **Performance**: Fast initial load
✅ **File-based routing**: No React Router needed
✅ **API routes**: Backend endpoints
✅ **Image optimization**: Built-in
✅ **TypeScript support**: Out of the box

### Cons

❌ **Opinionated**: Less flexible
❌ **Learning curve**: More concepts
❌ **Complexity**: Overkill for simple apps
❌ **Vendor lock-in**: Harder to migrate

### Use Cases

- E-commerce sites
- Blogs & content sites
- Marketing websites
- Apps cần SEO
- Enterprise applications

## Feature Comparison

| Feature | CRA | Next.js |
|---------|-----|---------|
| Setup | ⭐⭐⭐ Easy | ⭐⭐ Medium |
| Routing | Manual (React Router) | Built-in (file-based) |
| Rendering | CSR only | CSR, SSR, SSG, ISR |
| SEO | ⭐⭐ Fair | ⭐⭐⭐ Excellent |
| Performance | ⭐⭐ Good | ⭐⭐⭐ Excellent |
| API Routes | ❌ No | ✅ Yes |
| Image Optimization | Manual | Built-in |
| Code Splitting | Manual | Automatic |
| TypeScript | Setup needed | Built-in |
| Learning Curve | ⭐⭐⭐ Easy | ⭐⭐ Medium |

## Rendering Methods

### CRA: Client-Side Rendering (CSR)

\`\`\`jsx
// Fetches data on client
function Users() {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(setUsers)
  }, [])
  
  return <div>{/* Render users */}</div>
}
\`\`\`

### Next.js: Multiple Options

**1. SSR (Server-Side Rendering):**

\`\`\`jsx
// Fetches on every request
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/users')
  const users = await res.json()
  
  return { props: { users } }
}

function Users({ users }) {
  return <div>{/* Render users */}</div>
}
\`\`\`

**2. SSG (Static Site Generation):**

\`\`\`jsx
// Builds at build time
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/users')
  const users = await res.json()
  
  return {
    props: { users },
    revalidate: 60 // ISR: revalidate every 60s
  }
}
\`\`\`

**3. CSR (Client-Side):**

\`\`\`jsx
// Same as CRA
function Users() {
  const { data, error } = useSWR('/api/users', fetcher)
  return <div>{/* Render users */}</div>
}
\`\`\`

## Routing

### CRA + React Router

\`\`\`jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}
\`\`\`

### Next.js File-based Routing

\`\`\`
pages/
  index.js         → /
  about.js         → /about
  users/
    [id].js        → /users/:id
\`\`\`

\`\`\`jsx
// pages/users/[id].js
import { useRouter } from 'next/router'

function User() {
  const router = useRouter()
  const { id } = router.query
  
  return <div>User {id}</div>
}
\`\`\`

## API Routes (Next.js)

\`\`\`javascript
// pages/api/users.js
export default function handler(req, res) {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ]
  
  res.status(200).json(users)
}
\`\`\`

Access: \`/api/users\`

## Performance

### Initial Load Time

**CRA:**
1. Download HTML (small, empty)
2. Download JS bundle (large)
3. Parse & execute JS
4. Fetch data (API calls)
5. Render content

**Next.js (SSR):**
1. Server renders HTML (with data)
2. Download HTML (larger, with content)
3. Download JS (hydration)
4. Hydrate (make interactive)

**Result:** Next.js shows content faster!

### Code Splitting

**CRA:** Manual

\`\`\`jsx
const About = lazy(() => import('./About'))

<Suspense fallback={<Loading />}>
  <About />
</Suspense>
\`\`\`

**Next.js:** Automatic per page

## SEO Comparison

### CRA

\`\`\`html
<!-- Initial HTML (empty) -->
<div id="root"></div>

<!-- Google sees this briefly -->
<!-- Then waits for JS to render -->
\`\`\`

### Next.js (SSR/SSG)

\`\`\`html
<!-- Initial HTML (with content) -->
<div id="__next">
  <h1>Welcome to my site</h1>
  <p>Content here...</p>
</div>

<!-- Google sees full content immediately -->
\`\`\`

## Migration Path

### CRA → Next.js

1. Install Next.js
2. Move pages to \`pages/\` folder
3. Remove React Router
4. Update imports
5. Add \`getServerSideProps\` or \`getStaticProps\`

### Next.js → CRA

Harder! Need to:
- Remove SSR code
- Add React Router
- Handle API routes differently
- Reimplement features

## Decision Tree

\`\`\`
Cần SEO tốt?
  → Yes: Next.js
  → No: Continue

Public-facing site?
  → Yes: Next.js
  → No: Continue

Need SSR?
  → Yes: Next.js
  → No: Continue

Simple SPA?
  → Yes: CRA (or Vite!)
  → No: Next.js

Learning React?
  → Yes: Start with CRA
  → No: Use Next.js
\`\`\`

## Modern Alternative: Vite

### Why Vite?

- ⚡ Faster than CRA
- 🔥 Hot Module Replacement
- 📦 Better build times
- 🎯 Modern tooling

\`\`\`bash
npm create vite@latest my-app -- --template react
\`\`\`

**Use Vite instead of CRA for:**
- New projects
- Better DX
- Faster development

## Kết Luận

**Choose Next.js if:**
- SEO quan trọng
- E-commerce, blog, marketing site
- Need SSR/SSG
- Performance critical
- Want all-in-one solution

**Choose CRA/Vite if:**
- Internal tools, admin panels
- SPA là đủ
- Maximum flexibility
- Simpler requirements
- Learning React

**Personal recommendation:**
- **Learning:** Vite (CRA replacement)
- **Production SPA:** Vite
- **Production public site:** Next.js

**Resources:**
- [Next.js Docs](https://nextjs.org/docs)
- [Vite Guide](https://vitejs.dev/guide/)
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
      
      <div className="pt-24 pb-20">
        <div className="container-custom">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 mb-8 hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >
                <FiArrowLeft />
                Back to Blog
              </Link>

              {/* Post Header */}
              <article className="card">
                <header className="mb-8">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    {post.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm opacity-70 mb-4">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiClock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </header>

                {/* Post Content */}
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                          <SyntaxHighlighter
                            style={vscDarkPlus}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                          >
                            {String(children).replace(/\n$/, '')}
                          </SyntaxHighlighter>
                        ) : (
                          <code className={className} {...props}>
                            {children}
                          </code>
                        )
                      }
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>
              </article>

              {/* Share / Navigate */}
              <div className="mt-8 flex justify-between items-center">
                <Link 
                  to="/blog" 
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <FiArrowLeft />
                  More Posts
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

