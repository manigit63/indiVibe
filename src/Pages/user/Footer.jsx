import React from "react";

const Footer = () => {
  return (
    <footer className="pt-10 px-6 text-sm">
      {/* TOP SECTIONS */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pb-10 border-b border-gray-300">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold uppercase  mb-3 text-sm">Online Shopping</h3>
          <ul className="space-y-1">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home</li>
            <li>Beauty</li>
            <li>Genz</li>
            <li>Gift Cards</li>
            <li>Myntra Insider</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold uppercase  mb-3 text-sm">Useful Links</h3>
          <ul className="space-y-1">
            <li>Blog</li>
            <li>Careers</li>
            <li>Site Map</li>
            <li>Corporate Information</li>
            <li>Whitehat</li>
            <li>Cleartrip</li>
            <li>Myntra Global</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold uppercase  mb-3 text-sm">
            Customer Policies
          </h3>
          <ul className="space-y-1">
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>T&C</li>
            <li>Terms Of Use</li>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
            <li>Grievance Redressal</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold uppercase  mb-3 text-sm">
            Experience Our App On Mobile
          </h3>
          <div className="flex gap-2 mt-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
              alt="Play Store"
              className="w-28"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="w-24"
            />
          </div>
        </div>

        {/* Column 5 */}
        <div>
          <h3 className="font-bold uppercase text-black mb-3 text-sm">
            Keep in Touch
          </h3>
          <div className="flex gap-3 text-xl mt-2">
            <a href="#">
              <i className="ri-facebook-fill  hover:text-black"></i>
            </a>
            <a href="#">
              <i className="ri-twitter-fill  hover:text-black"></i>
            </a>
            <a href="#">
              <i className="ri-instagram-line  hover:text-black"></i>
            </a>
            <a href="#">
              <i className="ri-youtube-fill  hover:text-black"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Texts */}
      <div className="max-w-7xl mx-auto mt-6 pb-8 text-xs 0 space-y-2">
        <p>
          ✅ <strong>100% ORIGINAL</strong> guarantee for all products at
          ElitéCArt .com
        </p>
        <p>🔁 Return within 14 days of receiving your order</p>
        <p className="mt-4 text-center ">
          &copy; {new Date().getFullYear()} ElitéCArt . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
