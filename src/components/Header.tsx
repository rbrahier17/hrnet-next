/**
 * Header component
 */

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
      <h1 className='text-xl font-bold tracking-tight'>HRnet</h1>
      <nav>
        {navLinks.map((link) => (
          <NavLink key={link.title} href={link.href} title={link.title} />
        ))}
      </nav>
    </header>
  );
}
