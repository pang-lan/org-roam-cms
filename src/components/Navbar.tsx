import { LogIn, UserPlus } from "lucide-react";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl" href="/">
          <span className="loading loading-spinner"></span>
          loading
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <button className="btn btn-ghost ">
          <LogIn />
          Log In
        </button>
        <button className="btn btn-ghost">
          <UserPlus />
          Sign Up
        </button>
      </div>
    </div>
  );
}
