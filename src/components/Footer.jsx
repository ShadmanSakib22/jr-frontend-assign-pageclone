import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#002045]">
        <div className="container flex items-center justify-between py-11">
          <Link href="/" className="relative w-[217px] h-[34px]">
            <Image
              src="/icons/logo-white.svg"
              alt="Logo"
              fill
              className="object-contain"
            />
          </Link>

          <div className="hidden lg:flex items-center text-[#00E9EA]">
            <p className="border-r border-blueDark px-6 py-4 font-semibold text-body-2">
              Our Solutions
            </p>
            <ul className="flex items-center">
              <li>
                <Link
                  className="px-6 py-4 text-body-2 transition-colors duration-300 last:pr-0 hover:text-blueMain"
                  href="/en/solutions/anycaas"
                >
                  AnyCaaS
                </Link>
              </li>
              <li>
                <Link
                  className="px-6 py-4 text-body-2 transition-colors duration-300 last:pr-0 hover:text-blueMain"
                  href="/en/solutions/anybaas"
                >
                  AnyBaaS
                </Link>
              </li>
              <li>
                <Link
                  className="px-6 py-4 text-body-2 transition-colors duration-300 last:pr-0 hover:text-blueMain"
                  href="/en/solutions/anypaas"
                >
                  AnyPaaS
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex lg:hidden gap-5 lg:gap-10">
            <Link
              href="/"
              className="flex items-center text-blueMain font-semibold text-body-2 transition-opacity duration-300 hover:opacity-70 "
            >
              <Image
                src="/icons/LinkedIn-14x15.svg"
                alt="Logo"
                width={14}
                height={15}
                className="min-w-[24px] h-auto"
              />
            </Link>
            <Link
              href="/"
              className="flex items-center text-blueMain font-semibold text-body-2 transition-opacity duration-300 hover:opacity-70 "
            >
              <Image
                src="/icons/call-17x18.svg"
                alt="Logo"
                width={17}
                height={18}
                className="min-w-[24px] h-auto"
              />
            </Link>
            <Link
              href="/"
              className="flex items-center text-blueMain font-semibold text-body-2 transition-opacity duration-300 hover:opacity-70 "
            >
              <Image
                src="/icons/mail-16x12.svg"
                alt="Logo"
                width={16}
                height={12}
                className="min-w-[24px] h-auto"
              />
            </Link>
          </div>
        </div>

        <div className="border-b border-blueDark"></div>
        <div className="bg-[#00152D]">
          <div className="container flex flex-col lg:flex-row items-center justify-between py-6 text-blueMain text-xs font-semibold">
            <p>
              <strong>©2025 All rights reserved</strong>. Any Technology Pte
              Ltd.
            </p>
            <div className="flex items-center gap-[14px] max-lg:mt-4">
              <Link
                href="/"
                className="transition-colors duration-300 hover:text-blueHighlight"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
