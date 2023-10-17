import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-custom-blue text-white py-6">
      <div className="">
        <div className="hidden md:flex justify-center p-5">
          {/*<Link href="#howitworks">
            <a className="text-link">How it Works</a>
          </Link>*/}
          <Link href="https://go.lokamining.com/about">
            <a
              className="block text-link "
              target="_blank"
              rel="noopener noreferrer"
            >
              About
            </a>
          </Link>
        </div>
        <div className="flex justify-center mb-4">
          <a
            href="https://twitter.com/lokamining"
            className="mx-2 text-custom-green hover:text-blue-400"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a
            href="https://discord.gg/yDytXMMDs9"
            className="mx-2  text-custom-green hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faDiscord} size="lg" />
          </a>
        </div>
        <p className="text-center text-sm">
          &copy; 2023 Loka Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
