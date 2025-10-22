const TopNavbar = () => {
  return (
    <div className="bg-[rgb(253,125,104)] p-3">
      <div className="  max-w-[90%] mx-auto">
        <div className="flex justify-between flex-col md:flex-row text-white">
          <h2 className="font-inter text-xs  md:text-sm">
            Free Shipping on Orders Above ₹999 | 14-Day Easy Returns
          </h2>
          <p className="font-inter text-sm">
            Call Us: +91 98765 43210 | Track Order
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
