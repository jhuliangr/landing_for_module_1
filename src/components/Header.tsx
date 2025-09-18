import { SITEMAP } from "../constants";
import Logo from "./svg/Logo";

function Header() {
  return (
    <div className="max-w-full w-full bg-primary h-30 px-4 md:px-28 py-3 flex items-center justify-between fixed z-20">
      <a href="#" className="flex items-center gap-5">
        <Logo width={64} height={64} />
        <h1 className="text-secondary font-bold text-5xl pt-2">SafeBox</h1>
      </a>
      <nav className="max-md:hidden">
        <ul className="flex justify-between gap-10">
          {SITEMAP.map((link) => (
            <li key={link.url}>
              <a
                href={`${link.url}`}
                className="text-white hover:text-secondary font-normal text-3xl"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="md:hidden flex flex-col gap-1">
        <div className="w-6 h-1 bg-white" />

        <div className="w-6 h-1 bg-white" />

        <div className="w-6 h-1 bg-white" />
      </div>
    </div>
  );
}

export default Header;
