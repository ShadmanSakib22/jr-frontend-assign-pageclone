"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LanguageDropdown from "@/components/LanguageDropdown";

const Navbar = () => {
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);

  //   const toggleMobileMenu = () => {
  //     setIsMobileMenuOpen(!isMobileMenuOpen);
  //   };

  return (
    <header className="w-full z-[9999] top-0 lg:absolute bg-transparent max-lg:bg-blueMain max-lg:py-8 lg:pt-[17px] lg:pb-[25px] text-body-2 text-white">
      <div className="relative z-[9999]">
        <div className="container flex items-center flex-wrap justify-between">
          <Link
            href="/"
            className="relative w-[134px] h-[21.5px] lg:w-[170px] lg:h-[27.5px] object-contain"
          >
            <Image
              src="/icons/logo-white.svg"
              alt="Logo"
              fill
              className="object-contain"
              aria-label="Go to home page"
            />
          </Link>
          <div className="flex items-center">
            <nav className="max-lg:hidden" aria-label="Main navigation desktop">
              <ul className="flex text-center">
                <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 transition-all duration-500 cursor-pointer relative">
                  <div
                    className="flex items-center"
                    onClick={() =>
                      setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen)
                    }
                  >
                    <span>Solutions</span>
                    <Image
                      src="/icons/ChevronDown.svg"
                      alt="Chevron Down Icon"
                      width={16}
                      height={16}
                      className="ml-2 mt-1"
                    />
                  </div>

                  {isSolutionsDropdownOpen && (
                    <div className="absolute top-full left-[12x] mt-2 w-[240px] bg-white rounded-[3px] shadow-lg text-left">
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-3 text-blueText hover:bg-gray-50"
                        >
                          AnyCaaS
                        </a>
                        <div className="border-b border-[#e9f3ff]"></div>
                        <a
                          href="#"
                          className="block px-4 py-3 text-blueText hover:bg-gray-50"
                        >
                          AnyBaaS
                        </a>
                        <div className="border-b border-[#e9f3ff]"></div>
                        <a
                          href="#"
                          className="block px-4 py-3 text-blueText hover:bg-gray-50"
                        >
                          AnyPass
                        </a>
                      </div>
                    </div>
                  )}
                </li>
                <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer">
                  Services
                </li>
                <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer">
                  About Us
                </li>

                <div className="ml-6 my-auto">
                  <LanguageDropdown />
                </div>
              </ul>
            </nav>
          </div>
          <Link
            href="https://www.linkedin.com/in/shadman-sakib-3b8bb3298/"
            className="group border border-white bg-transparent hover:bg-white hover:text-blueMain hidden lg:flex items-center max-lg:w-full max-lg:justify-center max-lg:mt-16 pl-6 pr-10 py-[13px] text-link transition-all rounded-[3px] hover:shadow-button-primary"
          >
            Contact Us
            <svg
              className="fill-white translate-x-3.5 transition-transform group-hover:translate-x-5 group-hover:fill-blueMain"
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.67969 5.89844L2.13281 10.4688C1.89844 10.6797 1.54688 10.6797 1.33594 10.4688L0.796875 9.92969C0.585938 9.71875 0.585938 9.36719 0.796875 9.13281L4.40625 5.5L0.796875 1.89062C0.585938 1.65625 0.585938 1.30469 0.796875 1.09375L1.33594 0.554688C1.54688 0.34375 1.89844 0.34375 2.13281 0.554688L6.67969 5.125C6.89062 5.33594 6.89062 5.6875 6.67969 5.89844Z"></path>
            </svg>
          </Link>

          <button
            className="cursor-pointer lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Image
              src={
                isMobileMenuOpen ? "/icons/Cross.svg" : "/icons/Hamburger.svg"
              }
              alt={isMobileMenuOpen ? "close" : "open"}
              width={18}
              height={16}
              className="object-contain"
              aria-label={isMobileMenuOpen ? "close menu" : "open menu"}
            />
          </button>

          <nav
            className={`absolute top-[calc(95%_+_2rem)] bg-[#1B76E9] lg:hidden transition-transform w-full inset-x-0 py-8 px-[1.938rem] ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <ul className="flex flex-col space-y-8">
              <li className="cursor-pointer ">
                <div
                  className="flex items-center justify-between"
                  onClick={() =>
                    setIsMobileSolutionsOpen(!isMobileSolutionsOpen)
                  }
                >
                  <span>Solutions</span>
                  <Image
                    src="/icons/ChevronDown.svg"
                    alt="Chevron Down Icon"
                    width={16}
                    height={16}
                    className={`transition-transform duration-300 ${
                      isMobileSolutionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {isMobileSolutionsOpen && (
                  <div className="mt-4 pl-4 flex flex-col space-y-4">
                    <a href="#" className="text-white hover:opacity-80">
                      AnyCaaS
                    </a>
                    <a href="#" className="text-white hover:opacity-80">
                      AnyBaaS
                    </a>
                    <a href="#" className="text-white hover:opacity-80">
                      AnyPass
                    </a>
                  </div>
                )}
              </li>
              <li className="cursor-pointer">
                <Link href="/">Services</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/">About Us</Link>
              </li>
              <li className="pt-6">
                <LanguageDropdown />
              </li>
            </ul>
            <Link
              href="https://www.linkedin.com/in/shadman-sakib-3b8bb3298/"
              className="mt-8 text-link text-center border border-white bg-transparent py-3 px-6 rounded-[3px] flex items-center justify-center w-full group"
            >
              Contact Us
              <svg
                className="fill-white translate-x-3.5 transition-transform group-hover:translate-x-5"
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.67969 5.89844L2.13281 10.4688C1.89844 10.6797 1.54688 10.6797 1.33594 10.4688L0.796875 9.92969C0.585938 9.71875 0.585938 9.36719 0.796875 9.13281L4.40625 5.5L0.796875 1.89062C0.585938 1.65625 0.585938 1.30469 0.796875 1.09375L1.33594 0.554688C1.54688 0.34375 1.89844 0.34375 2.13281 0.554688L6.67969 5.125C6.89062 5.33594 6.89062 5.6875 6.67969 5.89844Z"></path>
              </svg>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
