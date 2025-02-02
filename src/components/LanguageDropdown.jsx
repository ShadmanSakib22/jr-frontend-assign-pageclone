"use client";
import React, { useState } from "react";
import Image from "next/image";

const LanguageDropdown = () => {
  const [selectedLang, setSelectedLang] = useState("EN");
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const languages = [
    { code: "EN", label: "(EN) English", mlabel: "English" },
    { code: "TH", label: "(TH) Thai", mlabel: "Thai" },
    { code: "ID", label: "(ID) Bahasa Indonesia", mlabel: "Bahasa Indonesia" },
    {
      code: "TW",
      label: "(TW) Traditional Chinese",
      mlabel: "Traditional Chinese",
    },
  ];

  return (
    <>
      <div className="relative hidden lg:block">
        <button
          className="flex items-center justify-center w-[90px] space-x-[8px] py-[8px] rounded-[132px] border px-[14px] border-white text-body-2"
          onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
        >
          <Image
            src="/icons/lang-globe.svg"
            alt="Language Globe Icon"
            width={16}
            height={16}
            className="ml-2 mt-1"
          />
          <span className="uppercase">{selectedLang}</span>
          <Image
            src="/icons/ChevronDown.svg"
            alt="Chevron Down Icon"
            width={16}
            height={16}
            className="ml-2 mt-1"
          />
        </button>

        {isLangDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-[220px] bg-white rounded-[3px] shadow-lg">
            <div className="py-1">
              {languages.map((lang, index) => (
                <React.Fragment key={lang.code}>
                  <button
                    className="w-full text-left px-2 py-2 text-blueText hover:bg-gray-50"
                    onClick={() => {
                      setSelectedLang(lang.code);
                      setIsLangDropdownOpen(false);
                    }}
                  >
                    {lang.label}
                  </button>
                  {index < languages.length - 1 && (
                    <div className="border-b border-[#e9f3ff]"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile view */}
      <div className="lg:hidden">
        <button
          className={`w-full border px-[14px] py-[8px] text-body-2 border-blueMain 
    transition-all duration-300 ease-in-out rounded-[20px] ${
      isLangDropdownOpen ? "h-auto w-[180px]" : "h-[40px] w-[90px]"
    }`}
          onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
        >
          <div className="flex justify-center items-center space-x-[8px] w-full">
            <Image
              src="/icons/lang-globe.svg"
              alt="Language Globe Icon"
              width={16}
              height={16}
            />
            <span className="uppercase">{selectedLang}</span>
            <Image
              src="/icons/ChevronDown.svg"
              alt="Chevron Down Icon"
              width={16}
              height={16}
              className={`transition-transform duration-300 ease-in-out ${
                isLangDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isLangDropdownOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="mt-4 space-y-2">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className="text-left cursor-pointer py-2 hover:text-blueHighlight transition-colors duration-200"
                  onClick={() => {
                    setSelectedLang(lang.code);
                    setIsLangDropdownOpen(false);
                  }}
                >
                  {lang.mlabel}
                </div>
              ))}
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default LanguageDropdown;
