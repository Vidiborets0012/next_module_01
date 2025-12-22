import Link from "next/link";
import css from "./Header.module.css";
import CategoriesMenu from "../CategoriesMenu/CategoriesMenu";
import AuthNavigation from "../AuthNavigation/AuthNavigation";

const Header = async () => {
  return (
    <header className={css.header}>
      {/* <h2>NoteHub</h2> */}
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
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
          {/* <li>
            <Link href="/sign-in">Login</Link>
          </li>
          <li>
            <Link href="/sign-up">Register</Link>
          </li> */}
          <AuthNavigation />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
