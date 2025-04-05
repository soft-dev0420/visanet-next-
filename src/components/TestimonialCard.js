const TestimonialCard = ({ text, author, role, image }) => {
  return (
    <div className="flex-shrink-0 w-full px-4">
      <div className="bg-[#111111] rounded-2xl p-8 max-w-2xl mx-auto border border-gray-800">
        <p className="text-gray-300 text-lg mb-6 leading-relaxed">{text}</p>
        <div className="flex items-center">
          <img 
            src={image} 
            alt={author} 
            className="w-8 h-8 rounded-full mr-3"
          />
          <div className="flex flex-col items-start">
            <span className="text-white text-sm font-medium">{author}</span>
            <span className="text-gray-500 text-sm">{role}</span>
          </div>
          <div className="ml-auto">
            <img src="/apple-icon.png" alt="Apple" className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard