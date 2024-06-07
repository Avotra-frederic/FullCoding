import Link from "next/link";
import React from "react";
import {} from "react-icons"
import { LiaDribbble, LiaFacebook, LiaFacebookF, LiaGithub, LiaTwitter } from "react-icons/lia";
function Footer() {
  return (
    <footer className="relative bg-gray-100 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left ">
          <div className="w-full  px-4 flex flex-col items-center justify-center">
            <h4 className="text-2xl fonat-semibold text-blueGray-700">
            Restons en contact !
            </h4>
            <h5 className=" mt-0 mb-2 text-blueGray-600">
            Retrouvez-nous sur ces plateformes, nous répondons dans un délai de 1 à 2 jours ouvrables.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex gap-2">
              <Link href={"https://www.facebook.com/profil.php?id=61558733121210"}
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
                target="_blank"
              >
                <LiaFacebookF size={20} />
              </Link>
              <Link href={""}
                className="bg-white text-lightBlue-600 flex shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <LiaTwitter size={20} />
              </Link>
              <Link href={""}
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <LiaDribbble size={20} />
              </Link>
              <Link href={""}
                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <LiaGithub size={20} />
              </Link>
            </div>
          </div>
          
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">{new Date().getFullYear()} </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
