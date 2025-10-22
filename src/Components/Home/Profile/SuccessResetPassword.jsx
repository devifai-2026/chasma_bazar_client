import signup from "../../../assets/Signup/smiley-friends-hugging-Photoroom 1.svg";
import arrow from "../../../assets/Signup/Frame (4).svg";
import tick from "../../../assets/Signup/tick.svg"
import { useNavigate } from "react-router-dom";

const SuccessResetPassword = () => {

     const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="border-t mt-10 max-w-[90%] mx-auto">
      <div className="mt-12">
        <div className="flex flex-col md:flex-row gap-0 md:gap-8 lg:gap-12 lg:min-h-[80vh]">
          {/* form */}
          <div className="flex-1 rounded-md p-4 flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="flex  p-4 mb-8">
                <img
                  src={arrow}
                  alt="Back"
                  className="w-6 h-6 cursor-pointer"
                  onClick={handleBackClick}
                />
               
              </div>

               <div className="space-y-2">
              <div className="flex justify-center md:justify-start">
                  <img src={tick} alt="" />
              </div>
                <h2 className="font-amiri text-2xl md:text-4xl uppercase">Your Password Has Been Reset</h2>
               </div>
            </div>
          </div>

          {/* img */}
          <div className="flex-1 flex items-center justify-center rounded-md">
            <img
              src={signup}
              alt="Signup illustration"
              className="w-full h-full object-cover max-h-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessResetPassword;
