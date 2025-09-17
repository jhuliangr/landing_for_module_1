import { Solar } from "../svg/Sun";

function Section2() {
  return (
    <div className="md:h-[1080px] bg-[#FFE5AF] relative pb-10">
      <div className="md:h-full">
        <p className="text-[#092754] text-2xl md:text-[64px] font-bold p-10 md:px-36">
          How it works?
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-5 px-5 md:px-0 w-[80%] mx-auto">
          <div className="group md:col-span-3 hover:col-span-3 flex items-center flex-col max-w-[100%]">
            <img
              src="/assets/pictures/1.png"
              className=" md:h-[699px] w-full object-cover rounded-[100px]"
            />
            <PictureBase text="1. Scan the QR" />
          </div>

          <div className="group md:col-span-2 flex items-center flex-col max-w-[100%]">
            <img
              src="/assets/pictures/2.png"
              className="md:h-[699px] w-full object-cover rounded-[100px]"
            />
            <PictureBase text="2. Create your PIN" />
          </div>

          <div className="group md:col-span-1 flex items-center flex-col max-w-[100%] z-10">
            <img
              src="/assets/pictures/1.png"
              className="md:h-[699px] w-full object-cover rounded-[100px]"
            />
            <PictureBase text="3. Save your belongings" />
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-0 w-10 md:w-fit">
        <Solar />
      </div>
    </div>
  );
}

export { Section2 };

function PictureBase({ text }: { text: string }) {
  return (
    <div className="hidden h-[114px] w-full mt-[-114px] rounded-b-[100px] bg-[#092754] opacity-20 overflow-hidden group-hover:opacity-100 md:flex items-center justify-between p-10">
      <p className="text-[#FFE5AF] text-[32px] select-none line-clamp-1">
        {text}
      </p>
    </div>
  );
}
