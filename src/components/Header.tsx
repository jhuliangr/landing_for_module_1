import Logo from "./svg/Logo";

function Header() {
  return (
    <div className="max-w-full w-full bg-[#092754] h-[120px] px-2 md:px-28 py-3 flex items-center justify-between fixed z-10">
      <div className="flex items-center gap-5">
        <Logo className="max-w-[25vw]" />
        <p className="text-[#FFE5AF] font-bold text-md md:text-[64px]">SafeBox</p>
      </div>
      <div className="hidden  text-white font-normal text-3xl md:flex justify-between gap-[100px]">
        <p>How it works?</p>
        <p>Home</p>
        <p>Features</p>
        <p>About Us</p>
      </div>
    </div>
  );
}

export default Header;
