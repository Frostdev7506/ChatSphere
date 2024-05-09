import Link from "next/link";
import React from "react";

interface NavLinkProps {
  path: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ path, label }) => {
  return (
    <>
      <Link href={path}>
        <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 cursor-pointer">
          {label}
        </div>
      </Link>
    </>
  );
};

export default NavLink;
