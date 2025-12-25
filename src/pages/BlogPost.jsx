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

