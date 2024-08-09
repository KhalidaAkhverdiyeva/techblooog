import { FaRegEnvelope } from "react-icons/fa";



const Subscribe = ({ 
  bgColor = 'black', 
  textColor = '#ECECEC',
  inputBgColor = '#1A1A1A', 
  inputBorderColor = '#333', 
  buttonBgColor = '#3C3FDE',
  radius = "none",
  borderColor = "black 1px solid",
  showEnvelope = false
  
}) => {
  return (
    <div 
      className={`bg-${bgColor} border-[1px] p-[35px] relative`}
      style={{ backgroundColor: bgColor, borderRadius:radius, border: borderColor }}
    >
      <h2 
        className={`text-center font-[700] text-[24px] mb-[8px]`} 
        style={{ color: textColor }}
      >
        Subscribe to Updates
      </h2>
      <p 
        className={`text-[#FFFFFFCC] text-[14px] text-center mb-[22px]`} 
        style={{ color: textColor }}
      >
        Get the latest creative news from FooBar about art, design and business.
      </p>
      <input 
        type="text" 
        className={`w-full h-[44px] border-[1px] placeholder:text-center mb-[13px]`} 
        placeholder='Your email address..' 
        style={{ backgroundColor: inputBgColor, borderColor: inputBorderColor }}
      />
      <button 
        className={`bg-${buttonBgColor} w-full border-transparent text-[12px] px-[20px] py-[10px] text-white font-[700] mb-[13px]`} 
        style={{ backgroundColor: buttonBgColor }}
      >
        SUBSCRIBE
      </button>
      <div className='flex items-start mt-[20px]'>
        <input className='mt-1' type="checkbox" />
        <div 
          className='text-[#888888] text-[13px] text-center'
          style={{ color: textColor }}
        >
          By signing up, you agree to our terms and our Privacy Policy agreement.
        </div>
      </div>

      {showEnvelope && (
        <div className="absolute top-[-40px] left-[130px] bg-white px-4">
          <div className="bg-[#0000FF] p-[14px] rounded-full">
            <FaRegEnvelope className="text-white text-[40px]" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Subscribe;
