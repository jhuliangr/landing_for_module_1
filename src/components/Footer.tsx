import { SITEMAP, SOCIALS, UTILS } from "../constants";
import Logo from "./svg/Logo";

function Footer() {
  return (
    <div className="bg-primary grid md:grid-cols-4 px-3 md:px-10 lg:px-30 py-16 md:py-30 gap-40 max-md:gap-16">
      <div className="col-span-2 flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <Logo />
          <h1 className="text-secondary font-bold text-5xl pt-2">SafeBox</h1>
        </div>
        <p className="text-white text-left text-base">
          Discover the freedom of enjoying the beach without worries. With
          SafeBox, safety, innovation, and sustainability come together to give
          you an unforgettable experience under the sun.
        </p>
        <ul className="flex flex-wrap gap-10 justify-start items-center mt-10">
          {SOCIALS.map((social, i) => (
            <li key={i}>
              <social.icon className="text-secondary w-10 h-10 max-md:w-8 max-md:h-8"/>
            </li>
          ))}
        </ul>
      </div>
      <nav className="">
        <p className="text-secondary text-xl pb-10">Menu</p>
        <ul className="flex flex-col justify-between gap-10">
          {SITEMAP.map((link) => (
            <li key={link.url}>
              <a
                href={`${link.url}`}
                className="text-white hover:text-secondary font-normal text-base"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="">
        <p className="text-secondary text-xl pb-10">Util</p>
        <ul className="flex flex-col justify-between gap-10">
          {UTILS.map((link) => (
            <li key={link.url}>
              <a
                href={`${link.url}`}
                className="text-white hover:text-secondary font-normal text-base"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
