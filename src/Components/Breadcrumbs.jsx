import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  
  // Get the current path and split into segments
  const pathSegments = location.pathname.split("/").filter(segment => segment !== "");
  
  // Build breadcrumbs
  const breadcrumbs = pathSegments.map((segment, index) => {
    // Create the path for this segment
    const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
    
    // Format the segment name for display
    const displayName = segment
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return {
      name: displayName,
      path: path,
      isLast: index === pathSegments.length - 1
    };
  });

  return (
    <nav className="flex items-center space-x-2 text-sm font-inter py-4">
      {/* Home link - always present */}
      <Link 
        to="/" 
        className="text-[#666666] hover:text-[#FD7D68] transition-colors duration-300"
      >
        Home
      </Link>
      
      {/* Separator */}
      {breadcrumbs.length > 0 && (
        <span className="text-[#666666]">›</span>
      )}
      
      {/* Dynamic breadcrumbs */}
      {breadcrumbs.map((crumb, index) => (
        <div key={index} className="flex items-center space-x-2">
          {crumb.isLast ? (
            <span className="text-[#222222] font-medium">{crumb.name}</span>
          ) : (
            <>
              <Link 
                to={crumb.path}
                className="text-[#666666] hover:text-[#FD7D68] transition-colors duration-300"
              >
                {crumb.name}
              </Link>
              <span className="text-[#666666]">›</span>
            </>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;