import { Link } from "react-router-dom";

const navbarLinks = [
  { name: "RRP Video", path: "/" },
  { name: "RRP Map", path: "/map" },
  // { name: "Props Help Center", path: "/help-center" },
  { name: "Props User Table", path: "/user-table" },
];

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-center gap-4 bg-gray-800 p-4 text-white">
        {navbarLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="rounded px-3 py-2 text-sm font-medium hover:bg-gray-700"
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
