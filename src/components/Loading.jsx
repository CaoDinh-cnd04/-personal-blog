const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-primary-light dark:border-primary-dark border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-primary-light dark:bg-primary-dark rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default Loading

