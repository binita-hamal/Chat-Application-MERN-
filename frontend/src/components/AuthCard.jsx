import { Link } from "react-router-dom";

export default function AuthCard({
  title,
  fields,
  buttonText,
  footerText,
  footerLink,
  footerLinkText,
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-emerald-100 px-4">
      
      {/* Card */}
      <div className="w-[400px] bg-white/90 backdrop-blur-md border border-gray-200 shadow-2xl rounded-3xl p-8 transition-all duration-300 hover:shadow-green-200 hover:scale-[1.01]">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-green-800 mb-8 tracking-tight">
          {title}
        </h2>

        {/* Form */}
        <form className="flex flex-col gap-5">
          
          {/* Dynamic Fields */}
          {fields.map((field, index) => (
            <div key={index} className="flex flex-col gap-2">
              
              {/* Label */}
              <label className="text-sm font-semibold text-gray-700">
                {field.label}
              </label>

              {/* Input */}
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="
                  border border-gray-300
                  bg-gray-50
                  p-3.5
                  rounded-xl
                  outline-none
                  transition-all duration-300
                  focus:border-green-500
                  focus:ring-4
                  focus:ring-green-200
                  focus:bg-white
                  hover:border-green-400
                  placeholder:text-gray-400
                "
              />
            </div>
          ))}

          {/* Button */}
          <button
            className="
              bg-green-500
              hover:bg-green-600
              text-white
              font-semibold
              py-3.5
              rounded-xl
              mt-3
              transition-all duration-300
              shadow-md
              hover:shadow-xl
              hover:-translate-y-1
              active:scale-95
            "
          >
            {buttonText}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-600 mt-8 text-sm">
          {footerText}{" "}
          
          <Link
            to={footerLink}
            className="
              text-green-600
              font-bold
              hover:text-green-700
              hover:underline
              transition duration-200
            "
          >
            {footerLinkText}
          </Link>
        </p>
      </div>
    </div>
  );
}