/**
 * Navigation Link component
 */

"use client";

// Import hook 
import { usePathname } from "next/navigation";

// Import component
import { Button } from "./shadcn-ui/button";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
}

/**
 * Display a navigation link and highlight the active link in bold.
 * 
 * @param props - NavLinkProps.
 * @param props.href - The URL to navigate to.
 * @param props.title - The text to display for the link.
 * @returns The rendered navigation link component.
 */
export default function NavLink({ href, title }: NavLinkProps) {
  const currentRoute = usePathname();
  return (
    <Button variant='link' asChild>
      <Link href={href} className={currentRoute === href ? "font-bold" : ""}>
        {title}
      </Link>
    </Button>
  );
}
