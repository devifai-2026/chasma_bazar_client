import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Accessories from "./Components/Home/Accessories";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Signup from "./Components/Home/Profile/Signup";
import Login from "./Components/Home/Profile/Login";
import PasswordRecovery from "./Components/Home/Profile/PasswordRecovery";
import VerifyOTP from "./Components/Home/Profile/VerifyOTP";
import ResetPassword from "./Components/Home/Profile/ResetPassword";
import SuccessResetPassword from "./Components/Home/Profile/SuccessResetPassword";
import Wishlist from "./Components/Pages/Wishlist";
import AddToCart from "./Components/Pages/AddToCart";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpgradeYourVision from "./Components/Pages/UpgradeYourVision";
import Testimonials from "./Components/Pages/Testimonials";
import AOS from 'aos';


function App() {
 
  return (
    <>
    <ToastContainer />
      <Routes>
        <Route>
          <Route path="/" element={<Layout></Layout>}>
            <Route index element={<Home></Home>}></Route>
            <Route path="accessories" element={<Accessories></Accessories>}></Route>
            <Route path="productDetails/:id" element={<ProductDetails></ProductDetails>}></Route>

            {/* profile */}
            <Route path="signup" element={<Signup></Signup>}></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="passwordRecovery" element={<PasswordRecovery></PasswordRecovery>}></Route>
            <Route path="verifyOTP" element={<VerifyOTP></VerifyOTP>}></Route>
            <Route path="resetPassword" element={<ResetPassword></ResetPassword>}></Route>
            <Route path="successReset" element={<SuccessResetPassword></SuccessResetPassword>}></Route>
             

              <Route path="wishlist" element={<Wishlist />} />
            <Route path="cart" element={<AddToCart />} />
            <Route path="UpgradeYourVision" element ={<UpgradeYourVision/>}/>
            <Route path="Testimonials" element ={<Testimonials/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
