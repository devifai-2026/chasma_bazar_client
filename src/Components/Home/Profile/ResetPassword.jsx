import signup from "../../../assets/Signup/smiley-friends-hugging-Photoroom 1.svg";
import arrow from "../../../assets/Signup/Frame (4).svg";
import { Link, useNavigate } from "react-router-dom";

const ResetPassword = () => {

        const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };


  return (
    <div className="border-t mb-10 mt-10 max-w-[90%] mx-auto">
      <div className="mt-12">
        <div className="flex flex-col-reverse md:flex-row gap-0 md:gap-8 lg:gap-12 lg:min-h-[80vh]">
          {/* form */}
          <div className="flex-1 shadow-md rounded-md p-4 flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="flex items-center p-4 mb-8">
                <img
                  src={arrow}
                  alt="Back"
                  className="w-6 h-6 cursor-pointer"
                   onClick={handleBackClick}
                />
                <h2 className="text-3xl font-amiri text-center flex-1">
                  Reset Password
                </h2>
              </div>

              <form className="space-y-6">
                {/* Password Field */}
                <div>
                  <input
                    type="password"
                    name="password"
                    className="w-full p-3 border border-[#E5E5E5] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:border-transparent font-inter"
                    placeholder="New password"
                    required
                  />
                </div>
                {/*Confirm Password Field */}
                <div>
                  <input
                    type="password"
                    name="Confirm password"
                    className="w-full p-3 border border-[#E5E5E5] rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#FD7D68] focus:border-transparent font-inter"
                    placeholder="Confirm password"
                    required
                  />
                </div>

                {/* Create Account Button */}
               <Link to='/successReset'>
                   <button
                  type="submit"
                  className="w-full py-3 rounded-3xl font-inter font-semibold text-white transition-all duration-300 bg-[#FD7D68] hover:bg-[#e56b56] transform hover:scale-105 shadow-lg mt-8"
                >
                  Reset Password
                </button>
               </Link>
              </form>
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

export default ResetPassword;
