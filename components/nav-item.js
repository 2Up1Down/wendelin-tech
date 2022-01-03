import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const isActive = (router, url) => {
  return router.pathname === url;
};

const NavItem = ({ item }) => {
  const { linkLabel, link } = item;
  const router = useRouter();
  const active = isActive(router, link.url);

  return (
    <li className="">
      <Link href={link.url}>
        <a
          className={`py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 
          ${active ? 'text-green-500 border-green-500 border-b-4' : ''}`}
        >
          {linkLabel}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
