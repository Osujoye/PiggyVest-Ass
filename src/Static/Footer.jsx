import React from "react";

const Footer = () => {
  return (
    <div
      style={{ backgroundColor: "#fafcfb" }}
      className="max-w-[1280px] h-full px-16 mx-auto grid grid-cols-5 list-none mt-5 m-2.5 gap-5 font-serif max-tablet:flex flex-col"
    >
      <section className="flex flex-col max-w-40 m-2.5">
        <img src="public/logo.svg" alt="" />
        <img
          src="public/compliance-378fe121550ceac55d0eeb8c5edac2e7.avif"
          alt=""
        />
      </section>
      <section className="">
        <li>Products</li>
        <a href="" className="hover:text-blue-400">
          <li>Piggybank</li>
        </a>
        <a href="" className="hover:text-blue-400">
          <li>Invest</li>
        </a>
        <a href="" className="hover:text-blue-400">
          <li>Safelock</li>
        </a>
        <a href="" className="hover:text-blue-400">
          <li>Target Savings</li>
        </a>
        <a href="" className="hover:text-blue-400">
          <li>Flex Naira</li>
        </a>
        <a href="" className="hover:text-blue-400">
          <li>Flex Dollar</li>
        </a>
      </section>
      <section>
        <li>Company</li>
        <a href="">
          <li className="hover:text-blue-400">About</li>
        </a>
        <a href="" className="hover:text-blue-400">
          <li>FAQs</li>
        </a>
        <a href="" className="hover:text-blue-400">
          <li>Blog</li>
        </a>
      </section>
      <section>
        <li>Legal</li>
        <a href="" className="hover:text-blue-400">
          <li>Terms</li>
        </a>
        <a href="" className="hover:text-blue-400">
          <li>Privacy</li>
        </a>
        <a href="" className="hover:text-blue-400">
          <li>Security</li>
        </a>
      </section>
      <section>
        <div className="grid grid-cols-4">
          <img src="public/facebook.svg" alt="" />
          <img src="public/tiktok.svg" alt="" />
          <img src="public/twitter.svg" alt="" />
          <img src="public/youtube.svg" alt="" />
        </div>
        <address>
          Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos,
          Nigeria.
        </address>
        <br />
        <a href="mailto:" className="hover:text-blue-400">
          contact@piggyvest.com
        </a>
        <br />
        <br />
        <a href="tel:+" className="hover:text-blue-400">
          +234 700 933 9339
        </a>
      </section>
    </div>
  );
};

export default Footer;
