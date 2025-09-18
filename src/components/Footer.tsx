import { SITEMAP, SOCIALS, UTILS } from "../constants";
import Logo from "./svg/Logo";

function Footer() {
  return (
    <div className="bg-primary md:h-[606px] grid md:grid-cols-4 gap-[100px] py-[100px] px-4 md:px-[120px]">
      <div className="col-span-2 flex flex-col gap-[60px]">
        <div className="flex items-center gap-5">
          <Logo />
          <h1 className="text-secondary font-bold text-5xl pt-2">SafeBox</h1>
        </div>
        <p className="text-white text-center md:text-left text-3xl">
          Discover the freedom of enjoying the beach without worries. With
          SafeBox, safety, innovation, and sustainability come together to give
          you an unforgettable experience under the sun.
        </p>
        <div className="flex flex-wrap gap-10 justify-center">
          {SOCIALS.map((social, i) => (
            <div key={i}>
              <social.icon className="text-secondary"/>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center md:text-left">
        <p className="text-secondary text-3xl pb-10">Menu</p>
        <ul className="flex flex-col justify-between gap-10">
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
      </div>
      <div className="text-center md:text-left">
        <p className="text-secondary text-3xl pb-10">Util</p>
        <ul className="flex flex-col justify-between gap-10">
          {UTILS.map((link) => (
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
      </div>
    </div>
  );
}

export default Footer;
