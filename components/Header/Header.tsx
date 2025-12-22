import Link from "next/link";

import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";

const Header = async () => {
  return (
    <header>
      <h2>NoteHub</h2>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul>
          {/* <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/notes/filter/all">Notes</Link>
          </li> */}
          <li>
            <CategoriesMenu />
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          {/* Нові посилання */}
          <li>
            <Link href="/sign-in">Login</Link>
          </li>
          <li>
            <Link href="/sign-up">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
