import Button from "../Button";
import { WavesGroup } from "../WavesGroup";

function Section1() {
  return (
    <div className="md:h-[1080px] grid md:grid-cols-2">
      <div className="relative h-[100vh] md:h-full">
        <div className="h-full flex justify-center items-center max-w-[100vw]">
          <div className="flex flex-col justify-center items-center w-[80%] md:w-[654px] gap-10">
            <p className="text-primary text-2xl md:text-[64px] font-bold">
              Shocking and Emotional
            </p>
            <p className="font-normal text-sm md:text-[32px] text-black">
              With SafeBox, the smart solar-powered sand lockers, you can store
              your valuables and enjoy the beach without worries.
            </p>
            <div className="flex flex-wrap gap-10 justify-start w-full">
              <Button type="button" text="Book your locker" />
              <Button
                type="button"
                variant="secondary"
                text="Find out how it works"
              />
            </div>
          </div>
        </div>
        <WavesGroup position="absolute bottom-10 left-5" />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-8 gap-5 px-5 md:px-0 pb-20">
        <div className="md:col-span-3 flex items-center">
          <img
            src="/assets/pictures/1.png"
            className="h-48 md:h-[699px] object-cover rounded-[100px]"
          />
        </div>
        <div className="md:col-span-2 flex items-center">
          <img
            src="/assets/pictures/2.png"
            className="h-48 md:h-[699px] object-cover rounded-[100px]"
          />
        </div>
        <div className="flex items-center">
          <img
            src="/assets/pictures/1.png"
            className="h-48 md:h-[699px] object-cover rounded-[100px]"
          />
        </div>
        <div className="hidden md:block col-span-2"></div>
      </div>
    </div>
  );
}

export { Section1 };
