import { Solar } from "../svg/Sun";

function Section2() {
  return (
    <div className="md:h-[1080px] bg-secondary relative pb-10">
      <div className="md:h-full">
        <p className="text-primary text-2xl md:text-[64px] font-bold p-10 md:px-36">
          How it works?
        </p>
        <div className="hidden md:grid grid-cols-3 md:grid-cols-6 gap-5 px-5 md:px-0 w-[80%] mx-auto">
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
        <div className="flex md:hidden gap-4 px-4 mx-auto">
          <div className="flex items-center flex-col w-3/6">
            <img
              src="/assets/pictures/1.png"
              className="h-[360px] md:h-[699px] w-full object-cover rounded-[30px]"
            />
            
            <PictureBase text="1. Scan the QR" />
          </div>

          <div className="flex items-center flex-col w-2/6">
            <img
              src="/assets/pictures/2.png"
              className="h-[360px] md:h-[699px] w-full object-cover rounded-[30px]"
            />
          </div>

          <div className="flex items-center flex-col w-1/6">
            <img
              src="/assets/pictures/1.png"
              className="h-[360px] md:h-[699px] w-full object-cover rounded-[30px]"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute right-0 top-0">
        <Solar className="w-10 md:w-fit"/>
      </div>
    </div>
  );
}

export { Section2 };

function PictureBase({ text }: { text: string }) {
  return (
    <div className="h-[41px] md:h-[114px] w-full mt-[-41px] md:mt-[-114px] rounded-b-[30px] md:rounded-b-[100px] bg-primary md:opacity-20 overflow-hidden group-hover:opacity-100 md:flex items-center justify-between md:p-10">
      <p className="text-secondary text-sm md:text-[32px] select-none line-clamp-1 pl-3 py-2">
        {text}
      </p>
    </div>
  );
}
