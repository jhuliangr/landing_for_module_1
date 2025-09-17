import Logo from "./svg/Logo";

const sitemap = [
  { url: "/", text: "Home" },
  { url: "steps", text: "How it works?" },
  { url: "/features", text: "Features" },
  { url: "/about-us", text: "About us" },
];

function Header() {
  return (
    <div className="max-w-full w-full bg-primary h-30 px-4 md:px-28 py-3 flex items-center justify-between fixed z-20">
      <a href="#" className="flex items-center gap-5">
        <Logo width={64} height={64} />
        <h1 className="text-secondary font-bold text-5xl pt-2">SafeBox</h1>
      </a>
      <nav className="max-md:hidden">
        <ul className="flex justify-between gap-10">
          {sitemap.map((link) => (
            <li key={link.url}>
              <a href={`${link.url}`} className="text-white hover:text-secondary font-normal text-3xl">{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
