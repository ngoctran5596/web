import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

const NavbarDashboard = () => {
  return (
    <nav className="fixed left-4 top-4 rounded-full bg-white shadow-lg">
      <ul className="flex flex-col items-center p-2">
        <li>
          <Link
            href="/"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
          >
            <AiOutlineHome className="h-5 w-5" />
          </Link>
          <Link
            href="/"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
          >
            <AiOutlineHome className="h-5 w-5" />
          </Link>
          <Link
            href="/"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
          >
            <AiOutlineHome className="h-5 w-5" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarDashboard;
