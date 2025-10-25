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
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import MensEyeGlasses from "./Components/Pages/EyeGlasses/MensEyeGlasses";
import WomensEyeGlasses from "./Components/Pages/EyeGlasses/WomensEyeGlasses";
import KidsEyeGlasses from "./Components/Pages/EyeGlasses/KidsEyeGlasses";
import Affiliate from "./Components/Pages/Affiliate";
import Checkout from "./Components/Pages/Checkout";
import Payment from "./Components/Pages/Payment";


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


            {/* Aboutus */}
            <Route path="aboutUs" element={<About></About>}></Route>

            {/* Contact Us */}
             <Route path="contactUs" element={<Contact></Contact>}></Route>

             {/* Affiliate */}
              <Route path="affiliate" element={<Affiliate></Affiliate>}></Route>


             {/* EyeGlasses */}
             <Route path="mensEyeGlasses" element={<MensEyeGlasses></MensEyeGlasses>}></Route>
             <Route path="WomensEyeGlasses" element={<WomensEyeGlasses></WomensEyeGlasses>}></Route>
             <Route path="KidsEyeGlasses" element={<KidsEyeGlasses></KidsEyeGlasses>}></Route>

              <Route path="wishlist" element={<Wishlist />} />
            <Route path="cart" element={<AddToCart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="payment" element={<Payment />} />
            <Route path="UpgradeYourVision" element ={<UpgradeYourVision/>}/>
            <Route path="Testimonials" element ={<Testimonials/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
