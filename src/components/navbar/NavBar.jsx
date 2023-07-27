import Link from "next/link";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 1,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 1,
    title: "About",
    url: "/about",
  },
  {
    id: 1,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 1,
    title: "Dashboard",
    url: "/dashboard",
  },
];
function NavBar() {
  return (
    <div>
      <Link href="/">meg</Link>
    </div>
  );
}

export default NavBar;
