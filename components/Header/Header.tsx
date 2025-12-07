import Link from "next/link";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      {/* <h2>NoteHub</h2> */}
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          {/* <li>Home</li> */}
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            {/* <Link href="/notes">Notes</Link> */}
            <Link href="/notes/filter/all">Notes</Link>
            {/* <Link href={`/notes/filter/${category.id}`}>Notes</Link> */}
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
