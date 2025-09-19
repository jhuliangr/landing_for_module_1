import { useState } from "react";
import { Solar } from "../svg/Sun";

function Section2() {
  const [active] = useState(0);

  return (
    <div className="md:min-h-screen bg-secondary py-26 pt-56 px-3 lg:px-30 md:px-10 relative">
      <Solar className="w-10 md:w-fit hidden md:block absolute right-0 top-0" />
      <div className="md:h-full">
        <h2 className="text-primary mb-10 text-4xl md:text-6xl font-bold">
          How it works?
        </h2>
        <div className="hidden md:grid grid-cols-3 md:grid-cols-6 gap-5 px-5 md:px-0">
          <div className="group md:col-span-3 hover:col-span-3 flex items-center flex-col max-w-[100%] relative">
            <img
              src="/assets/pictures/1.png"
              className=" md:h-[699px] w-full object-cover rounded-[100px]"
            />
            <PictureBase text="1. Scan the QR" active={active === 0} />
          </div>

          <div className="group md:col-span-2 flex items-center flex-col max-w-[100%] relative">
            <img
              src="/assets/pictures/2.png"
              className="md:h-[699px] w-full object-cover rounded-[100px]"
            />
            <PictureBase text="2. Create your PIN" active={active === 1} />
          </div>

          <div className="group md:col-span-1 flex items-center flex-col max-w-[100%] z-10 relative">
            <img
              src="/assets/pictures/1.png"
              className="md:h-[699px] w-full object-cover rounded-[100px]"
            />
            <PictureBase text="3. Save your belongings" active={active === 2} />
          </div>
        </div>
        <div className="flex md:hidden gap-4 px-4 mx-auto">
          <div className="flex items-center flex-col w-3/6 relative">
            <img
              src="/assets/pictures/1.png"
              className="h-[360px] md:h-[699px] w-full object-cover rounded-[30px]"
            />

            <PictureBase text="1. Scan the QR" active={active === 0} />
          </div>

          <div className="flex items-center flex-col w-2/6 relative">
            <img
              src="/assets/pictures/2.png"
              className="h-[360px] md:h-[699px] w-full object-cover rounded-[30px]"
            />
          </div>

          <div className="flex items-center flex-col w-1/6 relative">
            <img
              src="/assets/pictures/1.png"
              className="h-[360px] md:h-[699px] w-full object-cover rounded-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Section2 };

function PictureBase({
  text,
  active,
}: {
  text: string;
  active: boolean;
}) {
  return (
    <div
      className={`w-full rounded-b-[30px] md:rounded-b-[100px] bg-primary items-center justify-between absolute bottom-0 px-10 py-10 overflow-hidden ${
        !active ? "opacity-20" : ""
      }`}
    >
      <p className="text-secondary text-xl overflow-hidden whitespace-nowrap">
        {text}
      </p>
    </div>
  );
}
