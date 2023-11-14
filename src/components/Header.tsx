/**
 * Header component
 */

import { NetworkIcon } from "lucide-react";
import Link from "next/link";
import NavLink from "./NavLink";


/**
 * Header of the app with the name of the app on the left and navigation links on the right.
 */
export default function Header() {
  const navLinks = [
    {
      href: "/",
      title: "Create Employee",
    },
    {
      href: "/employee-list",
      title: "Employee List",
    },
  ];

  return (
    <header className='flex justify-between items-center h-14 border-b'>
      <Link href="/" className='flex items-center gap-1'>
        <NetworkIcon className='w-4' color='#5fc9f3' />
        <h1 className='text-xl font-bold tracking-tight'>HRnet</h1>
      </Link>
      <nav>
        {navLinks.map((link) => (
          <NavLink key={link.title} href={link.href} title={link.title} />
        ))}
      </nav>
    </header>
  );
}
